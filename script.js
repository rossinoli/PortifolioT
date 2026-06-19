// MENU MOBILE
function openMobNav(){
  document.getElementById('mobNav').classList.add('open');
  document.getElementById('mobNav').setAttribute('aria-hidden','false');
  document.getElementById('mobBtn').setAttribute('aria-expanded','true');
  document.getElementById('mobNav').querySelector('a,button').focus();
}
function closeMobNav(){
  document.getElementById('mobNav').classList.remove('open');
  document.getElementById('mobNav').setAttribute('aria-hidden','true');
  document.getElementById('mobBtn').setAttribute('aria-expanded','false');
  document.getElementById('mobBtn').focus();
}

// ABAS DA SEÇÃO STACK
const tabs=Array.from(document.querySelectorAll('.ss-cat'));

function switchPanel(el){

  tabs.forEach(c=>{c.classList.remove('active');c.setAttribute('aria-selected','false');c.setAttribute('tabindex','-1');});

  document.querySelectorAll('.ss-panel-inner').forEach(p=>{p.classList.remove('active');p.setAttribute('hidden','');});

  el.classList.add('active');
  el.setAttribute('aria-selected','true');
  el.setAttribute('tabindex','0');

  const panel=document.getElementById('panel-'+el.dataset.panel);
  panel.classList.add('active');
  panel.removeAttribute('hidden');
}


tabs.forEach((tab,i)=>{
  tab.addEventListener('keydown',e=>{
    let idx=i;
    if(e.key==='ArrowDown'||e.key==='ArrowRight'){idx=(i+1)%tabs.length;e.preventDefault();}
    else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){idx=(i-1+tabs.length)%tabs.length;e.preventDefault();}
    else if(e.key==='Home'){idx=0;e.preventDefault();}
    else if(e.key==='End'){idx=tabs.length-1;e.preventDefault();}
    else return;
    tabs[idx].focus();
    switchPanel(tabs[idx]);
  });
});


// CARROSSEL DE CITAÇÕES
const quotes=[
  {text:"Se você não está disposto a desistir, você já venceu metade da batalha.",char:"Rock Lee",source:"— Naruto",type:"anime"},
  {text:"Não importa quantas vezes você caia. O que importa é quantas vezes você se levanta.",char:"Midoriya Izuku",source:"— My Hero Academia",type:"anime"},
  {text:"O limite existe apenas na mente. <em>Quebre-o.</em>",char:"Guts",source:"— Berserk",type:"anime"},
  {text:"Pessoas que não sabem lutar nunca percebem o quanto estão sendo protegidas.",char:"Levi Ackerman",source:"— Attack on Titan",type:"anime"},
  {text:"Não existe atalho para chegar a um lugar que vale a pena.",char:"Monkey D. Luffy",source:"— One Piece",type:"anime"},
  {text:"Ser forte não é nunca cair. É continuar andando mesmo depois de cair.",char:"Edward Elric",source:"— Fullmetal Alchemist",type:"anime"},
  {text:"A dor que você sente hoje é a força que você vai ter amanhã.",char:"Kratos",source:"— God of War",type:"game"},
  {text:"O passado nunca muda. Mas o futuro... <em>o futuro ainda pode ser reescrito.</em>",char:"Lightning",source:"— Final Fantasy XIII",type:"game"},
  {text:"A vida é uma série de escolhas. <em>Escolha com sabedoria.</em>",char:"Geralt de Rívia",source:"— The Witcher",type:"game"},
  {text:"Sonhos não precisam de permissão para existir. Apenas de coragem para serem perseguidos.",char:"Yuno",source:"— Black Clover",type:"anime"}
];
let qCur=0;
const dText=document.getElementById('dText'),dChar=document.getElementById('dChar'),
  dSource=document.getElementById('dSource'),dType=document.getElementById('dType'),
  dDots=document.getElementById('dDots');

function buildDots(){
  dDots.innerHTML='';
  quotes.forEach((_,i)=>{
    const d=document.createElement('button');
    d.className='d-dot'+(i===0?' active':'');
    d.setAttribute('role','tab');
    d.setAttribute('aria-selected',i===0?'true':'false');
    d.setAttribute('aria-label','Frase '+(i+1)+' de '+quotes.length);
    d.onclick=()=>goQ(i);
    dDots.appendChild(d);
  });
}

function renderQ(i){
  const q=quotes[i];
  dText.innerHTML=q.text;
  dChar.textContent=q.char;
  dSource.textContent=q.source;
  dType.textContent=q.type;

  document.querySelectorAll('.d-dot').forEach((d,idx)=>{
    d.classList.toggle('active',idx===i);
    d.setAttribute('aria-selected',idx===i?'true':'false');
  });
}

function goQ(next){if(next===qCur)return;qCur=next;renderQ(qCur);}
document.getElementById('dPrev').onclick=()=>goQ((qCur-1+quotes.length)%quotes.length);
document.getElementById('dNext').onclick=()=>goQ((qCur+1)%quotes.length);
buildDots();renderQ(0);


// DADOS DO MODAL DE PROJETOS
const T={
  blog:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><rect x="60" y="16" width="580" height="168" fill="none" stroke="rgba(119,81,98,0.2)" stroke-width="1.5"/><rect x="60" y="16" width="580" height="24" fill="rgba(119,81,98,0.07)"/><text x="350" y="32" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(119,81,98,0.55)">rossinoli-anime.blogspot.com</text><rect x="60" y="40" width="580" height="36" fill="rgba(119,81,98,0.09)"/><text x="350" y="63" text-anchor="middle" font-family="DM Serif Display,serif" font-size="16" fill="rgba(252,244,253,0.85)" font-style="italic">✦ Anime World ✦</text><rect x="68" y="84" width="178" height="92" fill="rgba(119,81,98,0.06)" stroke="rgba(119,81,98,0.14)" stroke-width="1"/><rect x="72" y="88" width="170" height="44" fill="rgba(119,81,98,0.09)"/><rect x="262" y="84" width="178" height="92" fill="rgba(119,81,98,0.06)" stroke="rgba(119,81,98,0.14)" stroke-width="1"/><rect x="266" y="88" width="170" height="44" fill="rgba(119,81,98,0.09)"/><rect x="452" y="84" width="180" height="92" fill="rgba(119,81,98,0.06)" stroke="rgba(119,81,98,0.14)" stroke-width="1"/><rect x="456" y="88" width="172" height="44" fill="rgba(119,81,98,0.09)"/></svg>`,
  librando:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><circle cx="350" cy="100" r="120" fill="none" stroke="rgba(119,81,98,0.09)" stroke-width="40"/><circle cx="350" cy="100" r="42" fill="rgba(119,81,98,0.18)"/><rect x="330" y="68" width="10" height="44" fill="#775162"/><rect x="345" y="60" width="10" height="52" fill="#9a6a7e"/><rect x="360" y="64" width="10" height="48" fill="#775162"/><rect x="375" y="72" width="10" height="40" fill="#9a6a7e" opacity="0.7"/></svg>`,
  portfolio:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><g opacity="0.9"><rect x="308" y="52" width="14" height="14" fill="#775162"/><rect x="322" y="52" width="14" height="14" fill="#9a6a7e"/><rect x="336" y="52" width="14" height="14" fill="#775162"/><rect x="350" y="52" width="14" height="14" fill="#5a4050"/><rect x="294" y="66" width="14" height="14" fill="#5a4050"/><rect x="308" y="66" width="14" height="14" fill="#9a6a7e"/><rect x="322" y="66" width="14" height="14" fill="#84a5b2"/><rect x="336" y="66" width="14" height="14" fill="#fcf4fd" opacity="0.4"/><rect x="350" y="66" width="14" height="14" fill="#84a5b2"/><rect x="364" y="66" width="14" height="14" fill="#5a4050"/><rect x="294" y="80" width="14" height="14" fill="#775162"/><rect x="308" y="80" width="14" height="14" fill="#84a5b2"/><rect x="322" y="80" width="14" height="14" fill="#9a6a7e"/><rect x="336" y="80" width="14" height="14" fill="#84a5b2"/><rect x="350" y="80" width="14" height="14" fill="#775162"/><rect x="308" y="94" width="14" height="14" fill="#9a6a7e"/><rect x="322" y="94" width="14" height="14" fill="#775162"/><rect x="336" y="94" width="14" height="14" fill="#9a6a7e"/><rect x="322" y="108" width="14" height="14" fill="#5a4050"/></g></svg>`,
  cassino:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><rect x="140" y="44" width="140" height="70" fill="none" stroke="rgba(119,81,98,0.45)" stroke-width="1.5"/><rect x="140" y="44" width="140" height="20" fill="rgba(119,81,98,0.08)"/><text x="210" y="58" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(154,106,126,0.85)">usuarios</text><rect x="420" y="28" width="140" height="70" fill="none" stroke="rgba(132,165,178,0.4)" stroke-width="1.5"/><rect x="420" y="28" width="140" height="20" fill="rgba(132,165,178,0.06)"/><text x="490" y="42" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(132,165,178,0.85)">apostas</text><rect x="280" y="130" width="140" height="58" fill="none" stroke="rgba(119,81,98,0.45)" stroke-width="1.5"/><rect x="280" y="130" width="140" height="20" fill="rgba(119,81,98,0.08)"/><text x="350" y="144" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(154,106,126,0.85)">jogos</text><line x1="280" y1="116" x2="310" y2="130" stroke="rgba(119,81,98,0.25)" stroke-width="1" stroke-dasharray="4,3"/><line x1="420" y1="98" x2="390" y2="130" stroke="rgba(132,165,178,0.2)" stroke-width="1" stroke-dasharray="4,3"/></svg>`,
  figma:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><rect x="80" y="20" width="540" height="160" fill="none" stroke="rgba(119,81,98,0.2)" stroke-width="1.5"/><rect x="80" y="20" width="540" height="24" fill="rgba(119,81,98,0.07)"/><rect x="80" y="44" width="90" height="136" fill="rgba(119,81,98,0.04)" stroke="rgba(119,81,98,0.1)" stroke-width="1"/><rect x="90" y="54" width="70" height="8" fill="rgba(119,81,98,0.18)"/><rect x="90" y="68" width="70" height="8" fill="rgba(119,81,98,0.1)"/><rect x="90" y="82" width="70" height="8" fill="rgba(119,81,98,0.1)"/><rect x="185" y="54" width="160" height="85" fill="rgba(119,81,98,0.06)" stroke="rgba(119,81,98,0.18)" stroke-width="1"/><rect x="195" y="68" width="90" height="9" fill="rgba(119,81,98,0.28)"/><rect x="195" y="110" width="70" height="14" fill="rgba(119,81,98,0.38)"/><circle cx="530" cy="100" r="36" fill="rgba(132,165,178,0.07)" stroke="rgba(132,165,178,0.2)" stroke-width="1"/></svg>`,
  mobile:`<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%"><rect width="700" height="200" fill="#1e1519"/><rect x="308" y="10" width="84" height="180" fill="none" stroke="rgba(119,81,98,0.45)" stroke-width="2"/><rect x="314" y="24" width="72" height="154" fill="rgba(119,81,98,0.04)"/><rect x="332" y="14" width="36" height="7" fill="rgba(119,81,98,0.2)"/><rect x="318" y="30" width="68" height="44" fill="rgba(119,81,98,0.1)"/><rect x="320" y="82" width="30" height="26" fill="rgba(119,81,98,0.14)" stroke="rgba(119,81,98,0.28)" stroke-width="1"/><rect x="354" y="82" width="30" height="26" fill="rgba(119,81,98,0.14)" stroke="rgba(119,81,98,0.28)" stroke-width="1"/><rect x="320" y="112" width="30" height="26" fill="rgba(119,81,98,0.14)" stroke="rgba(119,81,98,0.28)" stroke-width="1"/><rect x="354" y="112" width="30" height="26" fill="rgba(132,165,178,0.18)" stroke="rgba(132,165,178,0.32)" stroke-width="1"/><text x="220" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="22" fill="rgba(119,81,98,0.1)" font-weight="700">java</text></svg>`
};

// projects
const projects={
  blog:{badge:'destaque · projeto 001',title:'Blog de Anime',desc:'Blog editorial no <em>Google Blogger</em> com resenhas, listas e artigos sobre animes. O primeiro projeto web da Thaina — antes mesmo da programação.',tags:['Google Blogger','Conteúdo Web','Editorial','Anime'],details:[['tipo','Blog de Conteúdo'],['plataforma','Google Blogger'],['área','Conteúdo & Web'],['objetivo','Editorial']],thumb:'blog'},
  librando:{badge:'projeto 002',title:'Librando e Aprendendo',desc:'Jogo educativo interativo para ensinar <em>Libras — Língua Brasileira de Sinais</em>. Desafios progressivos e inclusão acessível.',tags:['HTML','CSS','JavaScript','Educação','Inclusão'],details:[['tipo','Jogo Web'],['plataforma','Navegador'],['área','Inclusão'],['status','Concluído']],github:'https://github.com/rossinoli/Librando-e-aprendendo',thumb:'librando'},
  portfolio:{badge:'projeto 003',title:'Portfólio Digital',desc:'<em>HTML, CSS e Bootstrap</em> com <em>pixel art criada à mão no Aseprite</em>. Une domínio técnico e expressão artística própria.',tags:['HTML5','CSS3','Bootstrap','Pixel Art','Aseprite'],details:[['tipo','Portfólio'],['plataforma','Web'],['área','Frontend'],['status','Concluído']],github:'https://github.com/rossinoli/portfolio',thumb:'portfolio'},
  cassino:{badge:'projeto 004',title:'apostadorFalido — Banco de Dados',desc:'Modelagem de <em>banco de dados relacional</em> completo — diagrama ER e scripts SQL no <em>MySQL Workbench</em>.',tags:['MySQL','SQL Script','Modelagem ER'],details:[['tipo','Banco de Dados'],['ferramenta','MySQL Workbench'],['área','Backend'],['status','Concluído']],thumb:'cassino'},
  figma:{badge:'projeto 005',title:'Prototipagem UX/UI — Ciranda',desc:'Protótipo de alta fidelidade no <em>Figma</em> com foco em <em>usabilidade</em> e arquitetura de informação para o app Ciranda.',tags:['Figma','Prototipagem','UX/UI','Wireframe'],details:[['tipo','Protótipo UX/UI'],['ferramenta','Figma'],['área','Design & UX'],['status','Em andamento']],thumb:'figma'},
  mobile:{badge:'projeto 006',title:'Jogo Educativo Mobile',desc:'<em>Java nativo com Android Studio</em> — mecânicas de transição e animação como ferramentas pedagógicas reais.',tags:['Java','Android Studio','Mobile','Gamificação'],details:[['tipo','Jogo Mobile'],['plataforma','Android'],['linguagem','Java Nativo'],['status','Concluído']],thumb:'mobile'}
};


let lastFocusedEl=null;

// ABRIR MODAL
function openModal(id){
  const p=projects[id];if(!p)return;
  document.getElementById('mBadge').textContent=p.badge;
  document.getElementById('mTitle').textContent=p.title;
  document.getElementById('mDesc').innerHTML=p.desc;
  document.getElementById('mPreview').innerHTML=T[p.thumb];
  document.getElementById('mTags').innerHTML=p.tags.map(t=>`<span class="m-tag">${t}</span>`).join('');
  document.getElementById('mDetails').innerHTML=p.details.map(([l,v])=>`<div class="m-detail"><div class="m-detail-label">${l}</div><div class="m-detail-val">${v}</div></div>`).join('');

  document.getElementById('mActions').innerHTML=p.github?`<a href="${p.github}" target="_blank" class="btn-p" style="font-size:12px;">ver no GitHub →</a>`:'';
  lastFocusedEl=document.activeElement;
  document.getElementById('modalBg').classList.add('open');
  document.body.style.overflow='hidden';

  setTimeout(()=>{document.querySelector('.modal-close').focus();},10);
}

// FECHAR MODAL

function closeModal(e){
  if(e&&e.target!==document.getElementById('modalBg')&&!e.target.classList.contains('modal-close'))return;
  document.getElementById('modalBg').classList.remove('open');
  document.body.style.overflow='';
  if(lastFocusedEl)lastFocusedEl.focus();
}

// ATALHOS DE TECLADO GLOBAIS
// - Esc fecha o modal
// - Tab dentro do modal fica "preso" nele, não deixando
// - ← → navegam entre as citações
document.addEventListener('keydown',e=>{
  const modalOpen=document.getElementById('modalBg').classList.contains('open');

  if(e.key==='Escape'&&modalOpen){
    document.getElementById('modalBg').classList.remove('open');
    document.body.style.overflow='';
    if(lastFocusedEl)lastFocusedEl.focus();
  }

  if(modalOpen&&e.key==='Tab'){
    const focusable=document.querySelectorAll('#modalBg.open .modal-box a,#modalBg.open .modal-box button');
    if(focusable.length===0)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }

  if(!modalOpen&&e.key==='ArrowLeft')goQ((qCur-1+quotes.length)%quotes.length);
  if(!modalOpen&&e.key==='ArrowRight')goQ((qCur+1)%quotes.length);
});