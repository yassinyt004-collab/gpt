const $ = (q)=>document.querySelector(q);const $$=(q)=>document.querySelectorAll(q);
const tabs=$('#tabs'), grid=$('#menuGrid'), featured=$('#featured'), search=$('#search');
let active='Tous';
const allItems=()=>MENU.flatMap(c=>c.items.map(i=>({...i,cat:c.cat})));
function card(item){return `<article class="product reveal"><span class="price">${item.price||'★'}</span><div class="pic"><img src="assets/${item.img}" alt="${item.name}" loading="lazy"></div><div class="info"><small class="eyebrow">${item.cat||''}</small><h3>${item.name}</h3><p>${item.desc}</p><a class="btn ghost" href="#contact">Commander</a></div></article>`}
function renderTabs(){tabs.innerHTML=['Tous',...MENU.map(c=>c.cat)].map(c=>`<button class="tab ${c===active?'active':''}" data-cat="${c}">${c}</button>`).join('')}
function render(){let q=(search.value||'').toLowerCase();let items=allItems().filter(i=>(active==='Tous'||i.cat===active)&&(`${i.name} ${i.desc} ${i.cat}`.toLowerCase().includes(q)));grid.innerHTML=items.map(card).join('');observe()}
function renderFeatured(){let items=allItems().filter(i=>FEATURED.includes(i.name));featured.innerHTML=items.map(card).join('')}
renderTabs();renderFeatured();render();tabs.addEventListener('click',e=>{if(e.target.matches('.tab')){active=e.target.dataset.cat;renderTabs();render()}});search.addEventListener('input',render);
$('#burger').onclick=()=>$('#links').classList.toggle('open');$$('.links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
window.addEventListener('scroll',()=>$('#nav').classList.toggle('scrolled',scrollY>40));
function observe(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el))}observe();
