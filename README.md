# Amigos da Comida 🍎

Jogo Web terapêutico para trabalhar **seletividade alimentar** com crianças brasileiras de até 6 anos, pensado como ferramenta de apoio para fonoaudiólogas em abordagem integrativa/responsiva (exposição gradual, sem pressão).

Funciona em qualquer navegador moderno — otimizado para **Android** (touch, telas pequenas, instalável como app via PWA, funciona offline).

## Atividades

| Atividade | Objetivo terapêutico |
| --- | --- |
| 🪜 **Passos da Coragem** | Escada sensorial (olhar → tocar → cheirar → beijinho → lamber → provar), inspirada em food chaining / abordagem sequencial oral-sensorial. Para usar **junto com o alimento real** na sessão: a criança realiza o passo e toca em "Consegui!". O botão "Hoje não 💛" valida a recusa sem punição. O progresso fica salvo por alimento entre sessões. |
| 🔍 **Amigos da Comida** | Exposição visual e familiarização: nome falado em voz alta + curiosidade lúdica sobre cada alimento. |
| 🌈 **Prato Arco-Íris** | Montar um prato com 5 cores diferentes — variedade alimentar de forma lúdica. |
| 🃏 **Jogo da Memória** | Familiarização visual repetida com os alimentos-alvo. |
| 🕵️ **Detetive dos Alimentos** | Reconhecimento por cor e grupo alimentar (frutas, legumes, proteínas, energia). |

## Área da terapeuta 🔒

Acessível pelo botão no início (com "portãozinho" de conta simples para impedir acesso da criança):

- **Alimentos-alvo**: selecione quais alimentos aparecem nos jogos (se nenhum for marcado, todos aparecem).
- **Progresso nos Passos da Coragem**: barra de progresso por alimento.
- **Registro das sessões**: cada ação relevante fica registrada com data/hora; botão para copiar o relatório (cole no prontuário) e para apagar.
- **Opções**: ligar/desligar a voz; zerar todo o progresso (útil ao trocar de paciente no mesmo aparelho).

> ⚠️ Os dados ficam salvos **no aparelho** (localStorage). Para usar com mais de um paciente, zere o progresso entre atendimentos ou use um aparelho/perfil por criança.

## Como rodar

É um site estático — não precisa de build:

```bash
# qualquer servidor estático serve, por exemplo:
python3 -m http.server 8000
# e abra http://localhost:8000
```

Para usar no consultório, o mais prático é publicar (GitHub Pages, Netlify, Vercel...) e, no Android, abrir no Chrome e usar **"Adicionar à tela inicial"** — vira um app em tela cheia que funciona offline.

## Notas técnicas

- Sem dependências, sem build: HTML + CSS + JS puro.
- Arte em emoji (leve, carrega instantaneamente em qualquer aparelho).
- Voz via Web Speech API (`speechSynthesis`, pt-BR) e sons via Web Audio.
- PWA: `manifest.webmanifest` + `sw.js` (cache offline).

## Aviso

Este app é uma ferramenta lúdica de **apoio** à terapia, não substitui avaliação ou conduta profissional.
