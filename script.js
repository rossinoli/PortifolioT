const T_BLOG=`<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="760" height="220" fill="#0d0a1a"/><rect x="80" y="22" width="600" height="176" rx="8" fill="none" stroke="rgba(184,124,255,0.2)" stroke-width="1.5"/><rect x="80" y="22" width="600" height="26" fill="rgba(184,124,255,0.07)"/><text x="380" y="39" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(184,124,255,0.55)">rossinoli-anime.blogspot.com</text><rect x="92" y="56" width="576" height="34" rx="4" fill="rgba(184,124,255,0.1)"/><text x="380" y="78" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="rgba(212,168,255,0.8)" font-weight="700">ANIME WORLD — BLOG</text><rect x="92" y="99" width="178" height="84" rx="4" fill="rgba(184,124,255,0.06)" stroke="rgba(184,124,255,0.13)" stroke-width="1"/><rect x="96" y="103" width="170" height="42" rx="3" fill="rgba(184,124,255,0.1)"/><rect x="282" y="99" width="178" height="84" rx="4" fill="rgba(184,124,255,0.06)" stroke="rgba(184,124,255,0.13)" stroke-width="1"/><rect x="286" y="103" width="170" height="42" rx="3" fill="rgba(184,124,255,0.1)"/><rect x="472" y="99" width="196" height="84" rx="4" fill="rgba(184,124,255,0.06)" stroke="rgba(184,124,255,0.13)" stroke-width="1"/><rect x="476" y="103" width="188" height="42" rx="3" fill="rgba(184,124,255,0.1)"/></svg>`;

const projects = {
blog:{badge:'projeto destaque · 001',title:'Blog de Anime',desc:'Blog editorial no <em>Google Blogger</em> com resenhas, listas e artigos sobre animes. O primeiro projeto web da Thaina — antes mesmo da programação.',tags:['Google Blogger','Conteúdo Web','Editorial','Curadoria','Anime'],details:[['tipo','Blog de Conteúdo'],['plataforma','Google Blogger'],['área','Conteúdo & Web'],['objetivo','Editorial']],thumb:T_BLOG},
librando: {
    badge: 'projeto destaque · 001',
    title: 'Librando e Aprendendo',
    desc: 'Jogo educativo interativo criado para ensinar <em>Libras — Língua Brasileira de Sinais</em> de forma acessível e engajante. O projeto nasce de uma necessidade real: tornar o aprendizado de Libras disponível para qualquer pessoa com acesso a um navegador, sem barreiras. A mecânica de jogo foi pensada para manter o usuário motivado através de desafios progressivos, feedback imediato e uma interface intuitiva que não exige conhecimento prévio da língua de sinais.',
    tags: ['HTML','CSS','JavaScript','Game Design','Educação','Acessibilidade','Inclusão Social'],
    details: [
    ['tipo','Jogo Educativo Web'],['plataforma','Navegador (Web)'],['área','Inclusão & Acessibilidade'],['status','Concluído'],
    ],
    github: 'https://github.com/rossinoli/Librando-e-aprendendo',
    thumb: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="760" height="280" fill="#0d0a1a"/><circle cx="380" cy="140" r="200" fill="none" stroke="rgba(168,85,247,0.08)" stroke-width="60"/><circle cx="380" cy="140" r="120" fill="none" stroke="rgba(168,85,247,0.12)" stroke-width="40"/><circle cx="380" cy="140" r="55" fill="rgba(168,85,247,0.15)"/><rect x="350" y="100" width="12" height="50" rx="6" fill="#a855f7" opacity="0.9"/><rect x="367" y="90" width="12" height="60" rx="6" fill="#c084fc" opacity="0.9"/><rect x="384" y="95" width="12" height="55" rx="6" fill="#a855f7" opacity="0.9"/><rect x="401" y="105" width="12" height="45" rx="6" fill="#c084fc" opacity="0.7"/><rect x="345" y="152" width="75" height="14" rx="7" fill="#7c3aed" opacity="0.8"/><text x="380" y="240" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="rgba(168,85,247,0.4)" letter-spacing="4">LIBRAS · INCLUSÃO · EDUCAÇÃO</text></svg>`
},
portfolio: {
    badge: 'projeto · 002',
    title: 'Portfólio Digital',
    desc: 'Portfólio pessoal desenvolvido com <em>HTML, CSS e Bootstrap</em> — com um diferencial artístico marcante: <em>pixel art criada à mão</em> como identidade visual. O projeto demonstra domínio de estruturação semântica, responsividade e a capacidade de unir técnica com expressão artística. A pixel art não é apenas decorativa — ela comunica personalidade e diferencia o portfólio de qualquer template genérico.',
    tags: ['HTML5','CSS3','Bootstrap','Pixel Art','Responsivo','Design'],
    details: [
    ['tipo','Portfólio Pessoal'],['plataforma','Web'],['área','Frontend & Design'],['status','Concluído'],
    ],
    github: 'https://github.com/rossinoli/portfolio',
    thumb: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="760" height="280" fill="#0d0a1a"/><g opacity="0.7"><rect x="300" y="60" width="16" height="16" fill="#a855f7"/><rect x="316" y="60" width="16" height="16" fill="#c084fc"/><rect x="332" y="60" width="16" height="16" fill="#a855f7"/><rect x="284" y="76" width="16" height="16" fill="#7c3aed"/><rect x="300" y="76" width="16" height="16" fill="#c084fc"/><rect x="316" y="76" width="16" height="16" fill="#e879f9"/><rect x="332" y="76" width="16" height="16" fill="#c084fc"/><rect x="348" y="76" width="16" height="16" fill="#7c3aed"/><rect x="284" y="92" width="16" height="16" fill="#a855f7"/><rect x="300" y="92" width="16" height="16" fill="#e879f9"/><rect x="316" y="92" width="16" height="16" fill="#f0abfc"/><rect x="332" y="92" width="16" height="16" fill="#e879f9"/><rect x="348" y="92" width="16" height="16" fill="#a855f7"/><rect x="300" y="108" width="16" height="16" fill="#c084fc"/><rect x="316" y="108" width="16" height="16" fill="#a855f7"/><rect x="332" y="108" width="16" height="16" fill="#c084fc"/><rect x="316" y="124" width="16" height="16" fill="#7c3aed"/><rect x="400" y="80" width="10" height="10" fill="#a855f7" opacity="0.4"/><rect x="414" y="72" width="10" height="10" fill="#c084fc" opacity="0.35"/><rect x="428" y="86" width="10" height="10" fill="#7c3aed" opacity="0.4"/><rect x="400" y="96" width="10" height="10" fill="#c084fc" opacity="0.3"/><rect x="414" y="90" width="10" height="10" fill="#a855f7" opacity="0.35"/></g><text x="380" y="220" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="rgba(168,85,247,0.35)" letter-spacing="4">HTML · CSS · BOOTSTRAP · PIXEL ART</text></svg>`
 },
cassino: {
    badge: 'projeto · 003',
    title: 'Cassino com Banco de Dados',
    desc: 'Projeto focado em <em>modelagem e implementação de banco de dados relacional</em> para um sistema de cassino. Abrange todo o ciclo de design de dados: levantamento de entidades e relacionamentos, criação do diagrama ER, implementação dos scripts SQL e realização de consultas complexas. O projeto demonstra maturidade na área de <em>banco de dados</em> — desde a modelagem conceitual até a execução no MySQL Workbench.',
    tags: ['MySQL','SQL Script','Workbench','Modelagem ER','Banco Relacional','Consultas SQL'],
    details: [
    ['tipo','Banco de Dados'],['ferramenta','MySQL Workbench'],['área','Backend & Dados'],['status','Concluído'],
    ],
    thumb: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="760" height="280" fill="#0d0a1a"/><rect x="120" y="80" width="130" height="80" rx="4" fill="none" stroke="rgba(168,85,247,0.4)" stroke-width="1.5"/><line x1="120" y1="100" x2="250" y2="100" stroke="rgba(168,85,247,0.3)" stroke-width="1"/><text x="185" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(168,85,247,0.7)">usuarios</text><rect x="128" y="107" width="60" height="7" rx="2" fill="rgba(168,85,247,0.15)"/><rect x="128" y="120" width="90" height="7" rx="2" fill="rgba(168,85,247,0.1)"/><rect x="128" y="133" width="75" height="7" rx="2" fill="rgba(168,85,247,0.1)"/><rect x="510" y="60" width="130" height="80" rx="4" fill="none" stroke="rgba(192,132,252,0.4)" stroke-width="1.5"/><line x1="510" y1="80" x2="640" y2="80" stroke="rgba(192,132,252,0.3)" stroke-width="1"/><text x="575" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(192,132,252,0.7)">apostas</text><rect x="518" y="87" width="65" height="7" rx="2" fill="rgba(192,132,252,0.15)"/><rect x="518" y="100" width="90" height="7" rx="2" fill="rgba(192,132,252,0.1)"/><rect x="518" y="113" width="80" height="7" rx="2" fill="rgba(192,132,252,0.1)"/><rect x="315" y="150" width="130" height="70" rx="4" fill="none" stroke="rgba(124,58,237,0.4)" stroke-width="1.5"/><line x1="315" y1="168" x2="445" y2="168" stroke="rgba(124,58,237,0.3)" stroke-width="1"/><text x="380" y="163" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(124,58,237,0.8)">jogos</text><rect x="323" y="175" width="70" height="7" rx="2" fill="rgba(124,58,237,0.15)"/><rect x="323" y="188" width="95" height="7" rx="2" fill="rgba(124,58,237,0.1)"/><line x1="250" y1="110" x2="315" y2="165" stroke="rgba(168,85,247,0.2)" stroke-width="1" stroke-dasharray="5,4"/><line x1="510" y1="110" x2="445" y2="165" stroke="rgba(192,132,252,0.2)" stroke-width="1" stroke-dasharray="5,4"/><text x="380" y="255" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(168,85,247,0.3)" letter-spacing="3">MYSQL · WORKBENCH · SQL</text></svg>`
},
figma: {
    badge: 'projeto · 004',
    title: 'Prototipagem UX/UI — Ciranda',
    desc: 'Protótipo de alta fidelidade desenvolvido no <em>Figma</em> para o projeto Ciranda. O trabalho envolveu todo o processo de UX: pesquisa, arquitetura de informação, wireframes de baixa fidelidade e evolução até o protótipo navegável final. Foco em <em>usabilidade</em>, hierarquia visual e fluxos de navegação que guiam o usuário naturalmente até suas metas.',
    tags: ['Figma','Prototipagem','UX/UI','Wireframe','Usabilidade','Arquitetura da Informação'],
    details: [
    ['tipo','Protótipo UX/UI'],['ferramenta','Figma'],['área','Design & UX'],['status','Em andamento'],
    ],
    thumb: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="760" height="280" fill="#0d0a1a"/><rect x="120" y="40" width="520" height="200" rx="8" fill="none" stroke="rgba(168,85,247,0.2)" stroke-width="1.5"/><rect x="120" y="40" width="520" height="30" fill="rgba(168,85,247,0.06)"/><rect x="130" y="51" width="40" height="10" rx="4" fill="rgba(168,85,247,0.3)"/><rect x="450" y="51" width="28" height="10" rx="4" fill="rgba(168,85,247,0.12)"/><rect x="484" y="51" width="28" height="10" rx="4" fill="rgba(168,85,247,0.12)"/><rect x="518" y="51" width="28" height="10" rx="4" fill="rgba(168,85,247,0.12)"/><rect x="140" y="90" width="160" height="70" rx="4" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.12)" stroke-width="1"/><rect x="150" y="103" width="90" height="10" rx="4" fill="rgba(168,85,247,0.25)"/><rect x="150" y="118" width="130" height="7" rx="3" fill="rgba(168,85,247,0.1)"/><rect x="150" y="130" width="60" height="14" rx="4" fill="rgba(168,85,247,0.3)"/><rect x="320" y="85" width="140" height="80" rx="4" fill="rgba(168,85,247,0.04)" stroke="rgba(168,85,247,0.1)" stroke-width="1"/><circle cx="390" cy="120" r="25" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.2)" stroke-width="1"/><rect x="330" y="150" width="120" height="7" rx="3" fill="rgba(168,85,247,0.08)"/><rect x="136" y="180" width="115" height="45" rx="4" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.1)" stroke-width="1"/><rect x="258" y="180" width="115" height="45" rx="4" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.1)" stroke-width="1"/><rect x="380" y="180" width="115" height="45" rx="4" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.1)" stroke-width="1"/><rect x="502" y="180" width="115" height="45" rx="4" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.1)" stroke-width="1"/><text x="380" y="262" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(168,85,247,0.3)" letter-spacing="3">FIGMA · UX/UI · PROTÓTIPO</text></svg>`
},
mobile: {
    badge: 'projeto · 005',
    title: 'Jogo Educativo Mobile',
    desc: 'Jogo educativo desenvolvido em <em>Java nativo com Android Studio</em> para dispositivos Android. O projeto explora conceitos de desenvolvimento mobile real — sem frameworks intermediários — trabalhando diretamente com as APIs do Android. As mecânicas de <em>transição e animação</em> foram usadas intencionalmente como ferramentas pedagógicas, tornando o processo de aprendizado mais dinâmico e memorável.',
    tags: ['Java','Android Studio','Java Nativo','Mobile','Android SDK','Gamificação','Animação'],
    details: [
    ['tipo','Jogo Educativo Mobile'],['plataforma','Android'],['linguagem','Java Nativo'],['status','Concluído'],
    ],
    thumb: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="760" height="280" fill="#0d0a1a"/><rect x="310" y="20" width="140" height="240" rx="16" fill="none" stroke="rgba(168,85,247,0.35)" stroke-width="2"/><rect x="318" y="35" width="124" height="210" rx="8" fill="rgba(168,85,247,0.04)"/><rect x="345" y="24" width="70" height="10" rx="5" fill="rgba(168,85,247,0.2)"/><rect x="325" y="50" width="108" height="55" rx="6" fill="rgba(168,85,247,0.1)"/><rect x="333" y="60" width="60" height="10" rx="4" fill="rgba(168,85,247,0.4)"/><rect x="333" y="75" width="85" height="7" rx="3" fill="rgba(168,85,247,0.2)"/><rect x="325" y="118" width="50" height="50" rx="6" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.22)" stroke-width="1"/><rect x="382" y="118" width="50" height="50" rx="6" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.22)" stroke-width="1"/><rect x="325" y="175" width="50" height="50" rx="6" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.22)" stroke-width="1"/><rect x="382" y="175" width="50" height="50" rx="6" fill="rgba(192,132,252,0.22)" stroke="rgba(192,132,252,0.4)" stroke-width="1"/><text x="180" y="140" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="32" fill="rgba(168,85,247,0.1)" font-weight="700">java</text><text x="580" y="140" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="22" fill="rgba(168,85,247,0.1)" font-weight="700">.apk</text><text x="380" y="262" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(168,85,247,0.3)" letter-spacing="3">JAVA · ANDROID STUDIO · MOBILE</text></svg>`
}
};

// =============================================
// PIXEL CANVAS ANIMATION
// =============================================
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

const PIXEL_SIZE = 6;   // tamanho de cada pixel
const GAP = 18;         // espaço entre pixels
const COLORS = [
  'rgba(184,124,255,',  // roxo principal
  'rgba(212,168,255,',  // roxo claro
  'rgba(124,58,237,',   // roxo escuro
  'rgba(232,121,249,',  // pink roxo
];

let pixels = [];
let W, H;

function resize() {
  const hero = document.getElementById('inicio');
  W = canvas.width = hero.offsetWidth;
  H = canvas.height = hero.offsetHeight;
  initPixels();
}

function initPixels() {
  pixels = [];
  const cols = Math.ceil(W / (PIXEL_SIZE + GAP)) + 1;
  const rows = Math.ceil(H / (PIXEL_SIZE + GAP)) + 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // só cria pixel com ~30% de chance — espaçado e sutil
      if (Math.random() > 0.30) continue;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      pixels.push({
        x: c * (PIXEL_SIZE + GAP),
        y: r * (PIXEL_SIZE + GAP),
        color,
        // opacidade oscila suavemente
        alpha: Math.random() * 0.18 + 0.04,
        targetAlpha: Math.random() * 0.18 + 0.04,
        alphaSpeed: Math.random() * 0.004 + 0.001,
        // drift lento
        dx: (Math.random() - 0.5) * 0.12,
        dy: (Math.random() - 0.5) * 0.12,
        ox: c * (PIXEL_SIZE + GAP),  // origem x
        oy: r * (PIXEL_SIZE + GAP),  // origem y
        driftRange: Math.random() * 6 + 2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.003,
      });
    }
  }
}

let frame = 0;
function animate() {
  ctx.clearRect(0, 0, W, H);
  frame++;

  for (const p of pixels) {
    // oscilação suave de opacidade
    if (Math.abs(p.alpha - p.targetAlpha) < 0.005) {
      p.targetAlpha = Math.random() * 0.18 + 0.03;
    }
    p.alpha += (p.targetAlpha - p.alpha) * p.alphaSpeed * 3;

    // drift sinusoidal lento
    p.phase += p.speed;
    p.x = p.ox + Math.sin(p.phase) * p.driftRange;
    p.y = p.oy + Math.cos(p.phase * 0.7) * (p.driftRange * 0.5);

    // desenha o pixel (quadrado)
    ctx.fillStyle = p.color + p.alpha.toFixed(3) + ')';
    ctx.fillRect(Math.round(p.x), Math.round(p.y), PIXEL_SIZE, PIXEL_SIZE);
  }

  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();


const quotes = [
  {
    text: "Se você não está disposto a desistir, você já venceu metade da batalha.",
    char: "Rock Lee",
    source: "Naruto",
    type: "anime"
  },
  {
    text: "Não posso garantir que você vai encontrar o que procura, mas a chance é apenas 0% assim que você desiste.",
    char: "Daiki Aomine",
    source: "Kuroko's Basketball ",
    type: "anime"
  },
  {
    text: "Respire, você consegue.",
    char: "Madeline",
    source: "Celeste",
    type: "game"
  },
  {
    text: "O que é melhor - nascer bom, ou superar sua natureza maligna através de grande esforço?",
    char: "Paarthurnax",
    source: "Skyrim",
    type: "game"
  },
  {
    text: "O passado nunca muda. Mas o futuro... o futuro ainda pode ser reescrito.",
    char: "Lightning",
    source: "Final Fantasy XIII",
    type: "game"
  },
  {
    text: "A dor que você sente hoje é a força que você vai ter amanhã.",
    char: "Kratos",
    source: "God of War",
    type: "game"
  },
  {
    text: "Não existe atalho para chegar a um lugar que vale a pena.",
    char: "Monkey D. Luffy",
    source: "One Piece",
    type: "anime"
  },
  {
    text: "Há tantas coisas pelas quais vale a pena viver!",
    char: "Shane",
    source: "Stardew Valley",
    type: "game"
  },
  {
    text: "Mais uma volta. Só preciso de mais uma volta para lembrar.",
    char: "Herói",
    source: "Loop Hero",
    type: "game"
  },
  {
    text: "Sonhos não precisam de permissão para existir. Apenas de coragem para serem perseguidos.",
    char: "Yuno",
    source: "Black Clover",
    type: "anime"
  }
];

let current = 0;
let animating = false;

const track = document.getElementById('quotesTrack');
const dotsEl = document.getElementById('quotesDots');
const currentEl = document.getElementById('qCurrent');
const totalEl = document.getElementById('qTotal');

function buildSlides() {
  track.innerHTML = '';
  dotsEl.innerHTML = '';
  totalEl.textContent = quotes.length;

  quotes.forEach((q, i) => {
    const slide = document.createElement('div');
    slide.className = 'quote-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <p class="quote-text">${q.text}</p>
      <div class="quote-meta">
        <span class="quote-char">${q.char}</span>
        <span class="quote-source">— ${q.source}</span>
        <span class="quote-type">${q.type}</span>
      </div>`;
    track.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'q-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });
}

function goTo(next, dir) {
  if (animating || next === current) return;
  animating = true;
  const slides = track.querySelectorAll('.quote-slide');
  const dots = dotsEl.querySelectorAll('.q-dot');
  const exitClass = dir === 'prev' ? 'exit-right' : 'exit-left';

  slides[current].classList.remove('active');
  slides[current].classList.add(exitClass);

  setTimeout(() => {
    slides[current].classList.remove(exitClass);
    current = next;
    slides[current].style.transform = dir === 'prev' ? 'translateX(-40px)' : 'translateX(40px)';
    slides[current].style.opacity = '0';
    slides[current].classList.add('active');
    requestAnimationFrame(() => {
      slides[current].style.transform = '';
      slides[current].style.opacity = '';
    });
    dots.forEach((d,i) => d.classList.toggle('active', i === current));
    currentEl.textContent = current + 1;
    setTimeout(() => { animating = false; }, 450);
  }, 300);
}

document.getElementById('qPrev').addEventListener('click', () => {
  const prev = (current - 1 + quotes.length) % quotes.length;
  goTo(prev, 'prev');
});
document.getElementById('qNext').addEventListener('click', () => {
  const next = (current + 1) % quotes.length;
  goTo(next, 'next');
});

// keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { const p=(current-1+quotes.length)%quotes.length; goTo(p,'prev'); }
  if (e.key === 'ArrowRight') { const n=(current+1)%quotes.length; goTo(n,'next'); }
});

buildSlides();




function openModal(id) {
const p = projects[id];
if (!p) return;
document.getElementById('modal-badge').textContent = p.badge;
document.getElementById('modal-title').textContent = p.title;
document.getElementById('modal-desc').innerHTML = p.desc;
document.getElementById('modal-thumb').innerHTML = p.thumb;
document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
document.getElementById('modal-details').innerHTML = p.details.map(([l,v]) =>
    `<div class="modal-detail"><div class="modal-detail-label">${l}</div><div class="modal-detail-val">${v}</div></div>`
).join('');
let actions = '';
if (p.github) actions += `<a href="${p.github}" target="_blank" class="btn-p" style="font-family:var(--ff);font-size:11px;">ver no GitHub →</a>`;
document.getElementById('modal-actions').innerHTML = actions;
document.getElementById('modal-backdrop').classList.add('open');
document.body.style.overflow = 'hidden';
}

function closeModal(e) {
if (e && e.target !== document.getElementById('modal-backdrop') && !e.target.classList.contains('modal-close')) return;
document.getElementById('modal-backdrop').classList.remove('open');
document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.getElementById('modal-backdrop').classList.remove('open'); document.body.style.overflow = ''; }});