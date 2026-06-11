# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Amigos da Comida" — a therapeutic web game for food selectivity (seletividade alimentar) in Brazilian children up to age 6, used by speech therapists (fonoaudiólogas) during sessions with the real food present. The approach is gradual exposure without pressure: refusing is always a valid, rewarded-with-kindness option (the "Hoje não 💛" button). All user-facing text, speech, and code identifiers are in Brazilian Portuguese — keep it that way.

## Running

Static site, no build, no dependencies, no tests, no lint:

```bash
python3 -m http.server 8000   # any static server works
```

The service worker (`sw.js`) caches aggressively with a cache-first strategy under the key `amigos-da-comida-v1`. When changing any file, bump that cache name or a previously-loaded client will keep serving stale assets. The SW does not register on `file:` protocol, so opening `index.html` directly also works for quick checks (without offline/PWA behavior).

## Architecture

Three files: `index.html` (all screens as static markup), `styles.css`, `app.js` (all logic, ~750 lines). No framework, no modules — one global script.

`app.js` is organized in commented sections, in dependency order:

- **DADOS** — `FOODS` is the single source of truth for the 27 foods; every activity derives from it (each food has `id`, `nome`, `emoji`, `cor`, `grupo`, `fato`). `PASSOS` defines the 6-step sensory ladder (olhar → tocar → cheirar → beijar → lamber → provar) — its order and length are therapeutic design, not arbitrary.
- **ESTADO** — a single `state` object persisted as one JSON blob in `localStorage` under `STORE_KEY` (`amigos-da-comida-v1`). `state.passos[foodId]` is the index of the *next* step (6 = completed). `registrar()` appends to a capped session log (500 entries) that the therapist copies into patient records — log every therapeutically relevant action through it.
- **Navigation** — screens are `<section class="screen">` elements in `index.html`, toggled by `showScreen(id)`. Menu buttons carry `data-go="screen-x"`; the `MONTADORES` map at the bottom of `app.js` wires each screen id to its mount function, which rebuilds the screen's DOM from scratch (`grid.innerHTML = ''` then re-append). A new activity needs: a `<section>` in HTML, a mount function, an entry in `MONTADORES`, and a menu button.
- **Therapist area** — gated by a small math question (`abrirPortao`) to keep children out. `state.targets` holds the therapist-selected target foods; activities must use `alimentosAtivos()` (falls back to all `FOODS` when empty), never `FOODS` directly — except the Detetive game, which intentionally uses the full list for variety.

Audio is Web Audio oscillator tones (`somTap`/`somAcerto`/`somErro`/`somVitoria`) plus pt-BR speech via `falar()`, which respects the `state.voz` toggle and never throws when speech is unavailable. The audio context is unlocked on first `pointerdown` (mobile autoplay policy).

## Constraints to preserve

- Mobile/touch-first: large tap targets, optimized for small Android screens.
- Zero dependencies and no build step are deliberate — keep it that way.
- Emoji-only art (no image assets).
- Tone with the child is always positive: errors get gentle feedback (`somErro` + "Quase! Tente outro."), never punishment, and refusal is logged as "sem pressão".
- Data is device-local only (localStorage); there is no backend and no per-patient profiles — the README documents resetting between patients as the workflow.
