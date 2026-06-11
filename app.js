'use strict';

/* ===================== DADOS ===================== */

const FOODS = [
  { id: 'maca',      nome: 'Maçã',      emoji: '🍎', cor: 'vermelho', grupo: 'fruta',    fato: 'A maçã faz "croc" quando a gente morde!' },
  { id: 'morango',   nome: 'Morango',   emoji: '🍓', cor: 'vermelho', grupo: 'fruta',    fato: 'O morango usa as sementinhas do lado de fora!' },
  { id: 'melancia',  nome: 'Melancia',  emoji: '🍉', cor: 'vermelho', grupo: 'fruta',    fato: 'A melancia é quase toda feita de aguinha fresquinha.' },
  { id: 'tomate',    nome: 'Tomate',    emoji: '🍅', cor: 'vermelho', grupo: 'legume',   fato: 'O tomate é macio por fora e suculento por dentro.' },
  { id: 'banana',    nome: 'Banana',    emoji: '🍌', cor: 'amarelo',  grupo: 'fruta',    fato: 'A banana tem uma capinha que a gente abre como presente!' },
  { id: 'abacaxi',   nome: 'Abacaxi',   emoji: '🍍', cor: 'amarelo',  grupo: 'fruta',    fato: 'O abacaxi usa uma coroa, como um rei!' },
  { id: 'milho',     nome: 'Milho',     emoji: '🌽', cor: 'amarelo',  grupo: 'legume',   fato: 'O milho é cheio de bolinhas amarelas enfileiradas.' },
  { id: 'queijo',    nome: 'Queijo',    emoji: '🧀', cor: 'amarelo',  grupo: 'proteina', fato: 'O queijo é feito do leite, eles são da mesma família!' },
  { id: 'laranja',   nome: 'Laranja',   emoji: '🍊', cor: 'laranja',  grupo: 'fruta',    fato: 'A laranja tem gominhos que se separam como amigos de mãos dadas.' },
  { id: 'cenoura',   nome: 'Cenoura',   emoji: '🥕', cor: 'laranja',  grupo: 'legume',   fato: 'A cenoura cresce escondida debaixo da terra!' },
  { id: 'manga',     nome: 'Manga',     emoji: '🥭', cor: 'laranja',  grupo: 'fruta',    fato: 'A manga tem um cheirinho doce que dá para sentir de longe.' },
  { id: 'brocolis',  nome: 'Brócolis',  emoji: '🥦', cor: 'verde',    grupo: 'legume',   fato: 'O brócolis parece uma arvorezinha pequenininha!' },
  { id: 'pepino',    nome: 'Pepino',    emoji: '🥒', cor: 'verde',    grupo: 'legume',   fato: 'O pepino é fresquinho e faz "croc" bem alto.' },
  { id: 'abacate',   nome: 'Abacate',   emoji: '🥑', cor: 'verde',    grupo: 'fruta',    fato: 'O abacate guarda uma bola gigante dentro dele!' },
  { id: 'kiwi',      nome: 'Kiwi',      emoji: '🥝', cor: 'verde',    grupo: 'fruta',    fato: 'O kiwi é peludinho por fora e verde brilhante por dentro.' },
  { id: 'pera',      nome: 'Pera',      emoji: '🍐', cor: 'verde',    grupo: 'fruta',    fato: 'A pera é docinha e macia como um abraço.' },
  { id: 'uva',       nome: 'Uva',       emoji: '🍇', cor: 'roxo',     grupo: 'fruta',    fato: 'As uvas adoram ficar juntinhas no cacho.' },
  { id: 'berinjela', nome: 'Berinjela', emoji: '🍆', cor: 'roxo',     grupo: 'legume',   fato: 'A berinjela é brilhante como uma capa de super-herói.' },
  { id: 'arroz',     nome: 'Arroz',     emoji: '🍚', cor: 'branco',   grupo: 'energia',  fato: 'Cada colher de arroz tem um montão de grãozinhos amigos.' },
  { id: 'leite',     nome: 'Leite',     emoji: '🥛', cor: 'branco',   grupo: 'proteina', fato: 'O leite deixa os ossos fortes para pular bem alto!' },
  { id: 'ovo',       nome: 'Ovo',       emoji: '🥚', cor: 'branco',   grupo: 'proteina', fato: 'O ovo pode virar mexido, cozido ou omelete. Que mágica!' },
  { id: 'macarrao',  nome: 'Macarrão',  emoji: '🍝', cor: 'amarelo',  grupo: 'energia',  fato: 'O macarrão pode ser comprido, curtinho ou de lacinho!' },
  { id: 'pao',       nome: 'Pão',       emoji: '🍞', cor: 'marrom',   grupo: 'energia',  fato: 'O pão é fofinho como uma nuvem quentinha.' },
  { id: 'batata',    nome: 'Batata',    emoji: '🥔', cor: 'marrom',   grupo: 'legume',   fato: 'A batata pode virar purê amassadinho!' },
  { id: 'feijao',    nome: 'Feijão',    emoji: '🫘', cor: 'marrom',   grupo: 'proteina', fato: 'O feijão dá força e energia para brincar o dia todo.' },
  { id: 'frango',    nome: 'Frango',    emoji: '🍗', cor: 'marrom',   grupo: 'proteina', fato: 'O frango deixa os músculos fortes!' },
  { id: 'peixe',     nome: 'Peixe',     emoji: '🐟', cor: 'branco',   grupo: 'proteina', fato: 'O peixe nada no mar e ajuda o cérebro a pensar.' },
];

const CORES = {
  vermelho: { nome: 'vermelho', hex: '#e53935' },
  amarelo:  { nome: 'amarelo',  hex: '#fdd835' },
  laranja:  { nome: 'laranja',  hex: '#fb8c00' },
  verde:    { nome: 'verde',    hex: '#43a047' },
  roxo:     { nome: 'roxo',     hex: '#8e24aa' },
  branco:   { nome: 'branco',   hex: '#fafafa' },
  marrom:   { nome: 'marrom',   hex: '#8d6e63' },
};

const GRUPOS = {
  fruta:    { nome: 'frutas',    artigo: 'nas', emoji: '🍓' },
  legume:   { nome: 'legumes',   artigo: 'nos', emoji: '🥕' },
  proteina: { nome: 'proteínas', artigo: 'nas', emoji: '🍗' },
  energia:  { nome: 'comidinhas de energia', artigo: 'nas', emoji: '🍞' },
};

/* Escada sensorial — hierarquia de aproximação sem pressão (inspirada em
   food chaining / abordagem sequencial oral-sensorial). */
const PASSOS = [
  { id: 'olhar',   emoji: '👀', nome: 'Olhar',       frase: 'Olhe bem para o alimento. Que cor ele tem? Que formato?' },
  { id: 'tocar',   emoji: '✋', nome: 'Tocar',       frase: 'Toque com o dedinho. Ele é macio, durinho, geladinho?' },
  { id: 'cheirar', emoji: '👃', nome: 'Cheirar',     frase: 'Chegue pertinho e sinta o cheirinho dele.' },
  { id: 'beijar',  emoji: '😘', nome: 'Dar beijinho', frase: 'Que tal dar um beijinho no alimento?' },
  { id: 'lamber',  emoji: '👅', nome: 'Lamber',      frase: 'Agora uma lambidinha rapidinha, só para sentir.' },
  { id: 'provar',  emoji: '😋', nome: 'Provar',      frase: 'Experimente um pedacinho bem pequenininho!' },
];

const ELOGIOS = [
  'Muito bem!',
  'Você é corajosa demais!',
  'Uau, que incrível!',
  'Parabéns, você conseguiu!',
  'Que orgulho de você!',
];

/* ===================== ESTADO ===================== */

const STORE_KEY = 'amigos-da-comida-v1';

const state = {
  stars: 0,
  passos: {},   // foodId -> índice do próximo passo (0..6; 6 = completou)
  targets: [],  // ids de alimentos-alvo escolhidos pela terapeuta
  log: [],      // { t: ISO, texto }
  voz: true,
};

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* sem storage */ }
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) Object.assign(state, JSON.parse(raw));
  } catch (e) { /* dados corrompidos: segue com padrão */ }
}

function registrar(texto) {
  state.log.push({ t: new Date().toISOString(), texto });
  if (state.log.length > 500) state.log.shift();
  save();
}

function alimentosAtivos() {
  if (!state.targets.length) return FOODS;
  const ativos = FOODS.filter(f => state.targets.includes(f.id));
  return ativos.length ? ativos : FOODS;
}

function foodById(id) { return FOODS.find(f => f.id === id); }

/* ===================== ÁUDIO ===================== */

let audioCtx = null;

function ctx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function tom(freq, inicio, dur, ganho = 0.18) {
  const ac = ctx();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, ac.currentTime + inicio);
  g.gain.linearRampToValueAtTime(ganho, ac.currentTime + inicio + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + inicio + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(ac.currentTime + inicio);
  osc.stop(ac.currentTime + inicio + dur + 0.05);
}

const somTap     = () => tom(660, 0, 0.12);
const somAcerto  = () => { tom(523, 0, 0.15); tom(659, 0.1, 0.15); tom(784, 0.2, 0.25); };
const somErro    = () => tom(220, 0, 0.2, 0.1);
const somVitoria = () => { [523, 659, 784, 1047].forEach((f, i) => tom(f, i * 0.13, 0.3)); };

let vozPt = null;

function escolherVoz() {
  const vozes = speechSynthesis.getVoices();
  vozPt = vozes.find(v => v.lang === 'pt-BR') || vozes.find(v => v.lang.startsWith('pt')) || null;
}

function falar(texto) {
  if (!state.voz || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = 'pt-BR';
  u.rate = 0.95;
  u.pitch = 1.1;
  if (vozPt) u.voice = vozPt;
  speechSynthesis.speak(u);
}

if ('speechSynthesis' in window) {
  escolherVoz();
  speechSynthesis.onvoiceschanged = escolherVoz;
}

/* ===================== UI BÁSICA ===================== */

const $ = sel => document.querySelector(sel);

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function atualizarEstrelas() {
  $('#stars-count').textContent = state.stars;
}

function ganharEstrela(n = 1) {
  state.stars += n;
  save();
  atualizarEstrelas();
}

function confete(qtd = 36) {
  const layer = $('#confetti-layer');
  const cores = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#1e88e5', '#8e24aa'];
  for (let i = 0; i < qtd; i++) {
    const c = el('div', 'confete');
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = cores[i % cores.length];
    c.style.animationDuration = 1.6 + Math.random() * 1.6 + 's';
    c.style.animationDelay = Math.random() * 0.4 + 's';
    layer.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

function celebrar(texto, fala) {
  $('#celebra-texto').textContent = texto;
  $('#celebra').classList.remove('hidden');
  confete(60);
  somVitoria();
  falar(fala || texto);
  setTimeout(() => $('#celebra').classList.add('hidden'), 2600);
}

function abrirModal(html) {
  $('#modal-card').innerHTML = html;
  $('#modal').classList.remove('hidden');
}

function fecharModal() {
  $('#modal').classList.add('hidden');
  speechSynthesis && speechSynthesis.cancel();
}

$('#modal').addEventListener('click', e => {
  if (e.target.id === 'modal') fecharModal();
});

function cardAlimento(food, extraHtml = '') {
  const card = el('button', 'food-card');
  card.innerHTML =
    `<span class="food-emoji">${food.emoji}</span>` +
    `<span class="food-nome">${food.nome}</span>` + extraHtml;
  return card;
}

function elogio() { return ELOGIOS[Math.floor(Math.random() * ELOGIOS.length)]; }

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ===================== PASSOS DA CORAGEM ===================== */

function montarPassosSelecao() {
  const grid = $('#passos-food-grid');
  grid.innerHTML = '';
  alimentosAtivos().forEach(food => {
    const feitos = state.passos[food.id] || 0;
    const prog = feitos > 0 ? `<span class="food-prog">${'⭐'.repeat(Math.min(feitos, 6))}</span>` : '';
    const card = cardAlimento(food, prog);
    card.addEventListener('click', () => {
      somTap();
      abrirEscada(food.id);
    });
    grid.appendChild(card);
  });
}

let escadaFoodId = null;

function abrirEscada(foodId) {
  escadaFoodId = foodId;
  montarEscada();
  showScreen('screen-escada');
  const food = foodById(foodId);
  const feitos = state.passos[foodId] || 0;
  if (feitos >= PASSOS.length) {
    falar(`Você já conheceu o alimento ${food.nome} inteirinho! Pode brincar de novo.`);
  } else {
    falar(`Vamos conhecer: ${food.nome}! O próximo passo é ${PASSOS[feitos].nome}.`);
  }
}

function montarEscada() {
  const food = foodById(escadaFoodId);
  const feitos = state.passos[escadaFoodId] || 0;

  $('#escada-food').innerHTML =
    `<div class="grande">${food.emoji}</div>` +
    `<div class="nome">${food.nome}</div>` +
    `<div class="feito">${feitos >= PASSOS.length ? '🏆 Amizade completa!' : `${feitos} de ${PASSOS.length} passinhos`}</div>`;

  const steps = $('#escada-steps');
  steps.innerHTML = '';

  PASSOS.forEach((passo, i) => {
    const card = el('button', 'step-card');
    let status;
    if (i < feitos) { card.classList.add('done'); status = '⭐'; }
    else if (i === feitos) { status = '👉'; }
    else { card.classList.add('locked'); status = '🔒'; }

    card.innerHTML =
      `<span class="step-emoji">${passo.emoji}</span>` +
      `<span>${i + 1}. ${passo.nome}</span>` +
      `<span class="step-status">${status}</span>`;

    card.addEventListener('click', () => {
      if (i > feitos) { somErro(); falar('Primeiro o passinho anterior!'); return; }
      somTap();
      abrirPasso(passo, i, i < feitos);
    });
    steps.appendChild(card);
  });
}

function abrirPasso(passo, indice, jaFeito) {
  const food = foodById(escadaFoodId);
  abrirModal(
    `<div class="modal-emoji">${passo.emoji}</div>` +
    `<h3>${passo.nome} ${food.emoji}</h3>` +
    `<p>${passo.frase}</p>` +
    `<div class="modal-btns">` +
    `<button class="btn-primario" id="btn-consegui">Consegui! ⭐</button>` +
    `<button class="btn-suave" id="btn-hoje-nao">Hoje não 💛</button>` +
    `</div>`
  );
  falar(passo.frase);

  $('#btn-consegui').addEventListener('click', () => {
    fecharModal();
    if (!jaFeito) {
      state.passos[escadaFoodId] = indice + 1;
      ganharEstrela();
      registrar(`Passos da Coragem — ${food.nome}: conseguiu "${passo.nome}" (passo ${indice + 1}/${PASSOS.length}).`);
    } else {
      registrar(`Passos da Coragem — ${food.nome}: repetiu "${passo.nome}".`);
    }
    save();
    montarEscada();
    if (!jaFeito && indice + 1 >= PASSOS.length) {
      celebrar(`🏆 ${food.nome} agora é seu amigo!`, `Parabéns! Você conheceu o alimento ${food.nome} inteirinho!`);
    } else {
      confete(24);
      somAcerto();
      falar(elogio());
    }
  });

  $('#btn-hoje-nao').addEventListener('click', () => {
    fecharModal();
    registrar(`Passos da Coragem — ${food.nome}: ainda não quis "${passo.nome}" (sem pressão).`);
    falar('Tudo bem! Cada um no seu tempo. Você é muito corajosa só de tentar.');
  });
}

/* ===================== EXPLORAR ===================== */

function montarExplorar() {
  const grid = $('#explorar-grid');
  grid.innerHTML = '';
  alimentosAtivos().forEach(food => {
    const card = cardAlimento(food);
    card.addEventListener('click', () => {
      somTap();
      abrirModal(
        `<div class="modal-emoji">${food.emoji}</div>` +
        `<h3>${food.nome}</h3>` +
        `<p>${food.fato}</p>` +
        `<div class="modal-btns">` +
        `<button class="btn-suave" id="btn-ouvir">🔊 Ouvir de novo</button>` +
        `<button class="btn-primario" id="btn-fechar">Legal! 👍</button>` +
        `</div>`
      );
      falar(`${food.nome}. ${food.fato}`);
      $('#btn-ouvir').addEventListener('click', () => falar(`${food.nome}. ${food.fato}`));
      $('#btn-fechar').addEventListener('click', fecharModal);
    });
    grid.appendChild(card);
  });
}

/* ===================== PRATO ARCO-ÍRIS ===================== */

const PRATO_META = 5; // cores diferentes para completar
let pratoItens = [];

function montarPrato() {
  pratoItens = [];
  desenharPrato();
  const palette = $('#prato-palette');
  palette.innerHTML = '';
  alimentosAtivos().forEach(food => {
    const card = cardAlimento(food);
    card.addEventListener('click', () => adicionarAoPrato(food));
    palette.appendChild(card);
  });
  falar(`Monte um prato com ${PRATO_META} cores diferentes!`);
}

function adicionarAoPrato(food) {
  if (pratoItens.length >= 8) { falar('O prato já está cheinho!'); return; }
  pratoItens.push(food);
  somTap();
  falar(food.nome);
  desenharPrato();

  const cores = new Set(pratoItens.map(f => f.cor));
  if (cores.size >= PRATO_META) {
    ganharEstrela(2);
    registrar(`Prato Arco-Íris: montou um prato com ${cores.size} cores (${pratoItens.map(f => f.nome).join(', ')}).`);
    celebrar('🌈 Que prato lindo e colorido!', 'Uau! Que prato lindo e colorido você montou!');
    setTimeout(() => { pratoItens = []; desenharPrato(); }, 2800);
  }
}

function desenharPrato() {
  const prato = $('#prato');
  prato.innerHTML = '';
  pratoItens.forEach(f => prato.appendChild(el('span', 'item', f.emoji)));

  const coresNoPrato = new Set(pratoItens.map(f => f.cor));
  const linha = $('#prato-cores');
  linha.innerHTML = '';
  Object.entries(CORES).forEach(([key, cor]) => {
    const b = el('div', 'cor-bolinha' + (coresNoPrato.has(key) ? ' ok' : ''));
    b.style.background = coresNoPrato.has(key) ? cor.hex : '#f3f3f3';
    b.textContent = coresNoPrato.has(key) ? '✓' : '';
    linha.appendChild(b);
  });
}

/* ===================== MEMÓRIA ===================== */

let memTravado = false;
let memVirada = null;
let memParesRestantes = 0;

function montarMemoria() {
  const grid = $('#memoria-grid');
  grid.innerHTML = '';
  memTravado = false;
  memVirada = null;

  const escolhidos = embaralhar(alimentosAtivos()).slice(0, 6);
  memParesRestantes = escolhidos.length;
  const cartas = embaralhar([...escolhidos, ...escolhidos]);

  cartas.forEach(food => {
    const card = el('button', 'mem-card');
    card.dataset.food = food.id;
    card.innerHTML =
      `<div class="mem-inner">` +
      `<div class="mem-face verso">❓</div>` +
      `<div class="mem-face frente">${food.emoji}</div>` +
      `</div>`;
    card.addEventListener('click', () => virarCarta(card, food));
    grid.appendChild(card);
  });
}

function virarCarta(card, food) {
  if (memTravado || card.classList.contains('flipped')) return;
  somTap();
  card.classList.add('flipped');

  if (!memVirada) {
    memVirada = card;
    return;
  }

  const primeira = memVirada;
  memVirada = null;

  if (primeira.dataset.food === card.dataset.food) {
    primeira.classList.add('matched');
    card.classList.add('matched');
    somAcerto();
    falar(food.nome + '! ' + elogio());
    memParesRestantes--;
    if (memParesRestantes === 0) {
      ganharEstrela(2);
      registrar('Jogo da Memória: completou todos os pares.');
      setTimeout(() => celebrar('🎉 Você encontrou todos os pares!'), 600);
    }
  } else {
    memTravado = true;
    somErro();
    setTimeout(() => {
      primeira.classList.remove('flipped');
      card.classList.remove('flipped');
      memTravado = false;
    }, 900);
  }
}

/* ===================== DETETIVE ===================== */

const DETETIVE_RODADAS = 5;
let detetiveRodada = 0;
let detetiveRestantes = 0;

function montarDetetive() {
  detetiveRodada = 0;
  proximaRodadaDetetive();
}

function desafiosPossiveis() {
  const desafios = [];
  Object.entries(CORES).forEach(([key, cor]) => {
    const matches = FOODS.filter(f => f.cor === key);
    if (matches.length >= 3) {
      desafios.push({
        pergunta: `Toque nos alimentos da cor ${cor.nome.toUpperCase()}!`,
        fala: `Encontre os alimentos da cor ${cor.nome}!`,
        testa: f => f.cor === key,
      });
    }
  });
  Object.entries(GRUPOS).forEach(([key, grupo]) => {
    const matches = FOODS.filter(f => f.grupo === key);
    if (matches.length >= 3) {
      desafios.push({
        pergunta: `Toque ${grupo.artigo} ${grupo.nome.toUpperCase()} ${grupo.emoji}!`,
        fala: `Agora encontre ${grupo.artigo === 'nos' ? 'os' : 'as'} ${grupo.nome}!`,
        testa: f => f.grupo === key,
      });
    }
  });
  return desafios;
}

function proximaRodadaDetetive() {
  detetiveRodada++;
  if (detetiveRodada > DETETIVE_RODADAS) {
    ganharEstrela(2);
    registrar('Detetive dos Alimentos: completou as 5 rodadas.');
    celebrar('🕵️ Você é um super detetive!');
    detetiveRodada = 0;
    setTimeout(montarDetetive, 2800);
    return;
  }

  const desafio = desafiosPossiveis()[Math.floor(Math.random() * desafiosPossiveis().length)];
  const certos = embaralhar(FOODS.filter(desafio.testa)).slice(0, 3);
  const errados = embaralhar(FOODS.filter(f => !desafio.testa(f))).slice(0, 6);
  const cartas = embaralhar([...certos, ...errados]);
  detetiveRestantes = certos.length;

  $('#detetive-pergunta').textContent = desafio.pergunta;
  $('#detetive-progresso').textContent = '🔎'.repeat(detetiveRodada) + '⚪'.repeat(DETETIVE_RODADAS - detetiveRodada);
  falar(desafio.fala);

  const grid = $('#detetive-grid');
  grid.innerHTML = '';
  cartas.forEach(food => {
    const card = cardAlimento(food);
    card.addEventListener('click', () => {
      if (desafio.testa(food)) {
        card.classList.add('acertou');
        setTimeout(() => card.classList.add('sumiu'), 450);
        somAcerto();
        falar(`${food.nome}! ${elogio()}`);
        detetiveRestantes--;
        if (detetiveRestantes === 0) {
          ganharEstrela();
          setTimeout(proximaRodadaDetetive, 1100);
        }
      } else {
        card.classList.remove('errou');
        void card.offsetWidth; // reinicia a animação
        card.classList.add('errou');
        somErro();
        falar('Quase! Tente outro.');
      }
    });
    grid.appendChild(card);
  });
}

/* ===================== PORTÃO (acesso adulto) ===================== */

function abrirPortao() {
  const a = 2 + Math.floor(Math.random() * 5);
  const b = 2 + Math.floor(Math.random() * 5);
  const certa = a + b;
  $('#portao-pergunta').textContent = `Quanto é ${a} + ${b}?`;

  const opcoes = embaralhar([certa, certa + 1, certa - 1]);
  const box = $('#portao-opcoes');
  box.innerHTML = '';
  opcoes.forEach(n => {
    const btn = el('button', '', String(n));
    btn.addEventListener('click', () => {
      if (n === certa) {
        montarTerapeuta();
        showScreen('screen-terapeuta');
      } else {
        somErro();
        showScreen('screen-home');
      }
    });
    box.appendChild(btn);
  });
  showScreen('screen-portao');
}

/* ===================== ÁREA DA TERAPEUTA ===================== */

function montarTerapeuta() {
  // Alimentos-alvo
  const alvoGrid = $('#alvo-grid');
  alvoGrid.innerHTML = '';
  FOODS.forEach(food => {
    const lbl = el('label', 'alvo-item');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = state.targets.includes(food.id);
    input.addEventListener('change', () => {
      if (input.checked) state.targets.push(food.id);
      else state.targets = state.targets.filter(id => id !== food.id);
      save();
    });
    lbl.appendChild(input);
    lbl.appendChild(document.createTextNode(` ${food.emoji} ${food.nome}`));
    alvoGrid.appendChild(lbl);
  });

  // Progresso por alimento
  const prog = $('#progresso-passos');
  prog.innerHTML = '';
  const comProgresso = FOODS.filter(f => (state.passos[f.id] || 0) > 0);
  if (!comProgresso.length) {
    prog.innerHTML = '<p class="painel-hint">Nenhum passo registrado ainda.</p>';
  } else {
    comProgresso.forEach(food => {
      const feitos = state.passos[food.id];
      const linha = el('div', 'prog-linha');
      const ultimo = feitos >= PASSOS.length ? 'completo 🏆' : `até "${PASSOS[feitos - 1].nome}"`;
      linha.innerHTML =
        `<span>${food.emoji} ${food.nome}</span>` +
        `<div class="prog-barra"><div class="prog-fill" style="width:${(feitos / PASSOS.length) * 100}%"></div></div>` +
        `<span>${ultimo}</span>`;
      prog.appendChild(linha);
    });
  }

  // Registro
  const lista = $('#log-lista');
  lista.innerHTML = '';
  if (!state.log.length) {
    lista.innerHTML = '<p class="painel-hint">Nenhum registro ainda.</p>';
  } else {
    state.log.slice().reverse().forEach(item => {
      const data = new Date(item.t).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      const div = el('div', 'log-item', `<div class="log-data">${data}</div>${item.texto}`);
      lista.appendChild(div);
    });
  }

  $('#opt-voz').checked = state.voz;
}

function textoRelatorio() {
  const linhas = ['Relatório — Amigos da Comida', ''];
  const comProgresso = FOODS.filter(f => (state.passos[f.id] || 0) > 0);
  if (comProgresso.length) {
    linhas.push('Passos da Coragem:');
    comProgresso.forEach(f => {
      linhas.push(`- ${f.nome}: ${state.passos[f.id]}/${PASSOS.length} passos`);
    });
    linhas.push('');
  }
  linhas.push('Registro das sessões:');
  state.log.forEach(item => {
    const data = new Date(item.t).toLocaleString('pt-BR');
    linhas.push(`[${data}] ${item.texto}`);
  });
  return linhas.join('\n');
}

/* ===================== NAVEGAÇÃO / BOOT ===================== */

const MONTADORES = {
  'screen-passos': montarPassosSelecao,
  'screen-explorar': montarExplorar,
  'screen-prato': montarPrato,
  'screen-memoria': montarMemoria,
  'screen-detetive': montarDetetive,
};

document.querySelectorAll('[data-go]').forEach(btn => {
  btn.addEventListener('click', () => {
    somTap();
    const destino = btn.dataset.go;
    if (MONTADORES[destino]) MONTADORES[destino]();
    showScreen(destino);
  });
});

$('#btn-home').addEventListener('click', () => {
  somTap();
  fecharModal();
  showScreen('screen-home');
});

$('#btn-terapeuta').addEventListener('click', abrirPortao);
$('#btn-memoria-novo').addEventListener('click', () => { somTap(); montarMemoria(); });
$('#btn-prato-limpar').addEventListener('click', () => { somTap(); pratoItens = []; desenharPrato(); });

$('#btn-copiar-log').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textoRelatorio());
    $('#btn-copiar-log').textContent = '✅ Copiado!';
  } catch (e) {
    $('#btn-copiar-log').textContent = '❌ Não foi possível copiar';
  }
  setTimeout(() => { $('#btn-copiar-log').textContent = '📋 Copiar relatório'; }, 2000);
});

$('#btn-limpar-log').addEventListener('click', () => {
  if (confirm('Apagar todos os registros de sessão?')) {
    state.log = [];
    save();
    montarTerapeuta();
  }
});

$('#btn-zerar').addEventListener('click', () => {
  if (confirm('Zerar TODO o progresso (estrelas, passos e registros)?')) {
    state.stars = 0;
    state.passos = {};
    state.log = [];
    save();
    atualizarEstrelas();
    montarTerapeuta();
  }
});

$('#opt-voz').addEventListener('change', e => {
  state.voz = e.target.checked;
  save();
});

// Desbloqueia o áudio no primeiro toque (exigência dos navegadores móveis)
document.addEventListener('pointerdown', () => ctx(), { once: true });

// Service worker para funcionar offline
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => { /* offline opcional */ });
}

load();
atualizarEstrelas();
