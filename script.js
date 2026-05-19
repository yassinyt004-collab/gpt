const grid = document.getElementById('menuGrid');
const filters = document.getElementById('filters');
let current = 'All';

function renderFilters(){
  const cats = ['All', ...menuData.map(c=>c.category)];
  filters.innerHTML = cats.map(c => `<button class="${c===current?'active':''}" data-cat="${c}">${c}</button>`).join('');
  filters.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{current=btn.dataset.cat;renderFilters();renderMenu();}));
}
function renderMenu(){
  const groups = current==='All'? menuData : menuData.filter(g=>g.category===current);
  grid.innerHTML = groups.flatMap(g => g.items.map(item => card(g.category,item))).join('');
}
function card(cat,item){
  const [name,desc,price,img] = item;
  return `<article class="menu-card reveal show">
    <span class="cat">${cat}</span>
    <img src="${img}" alt="${name}" loading="lazy" onerror="this.src='assets/hero-banner.png'">
    <div class="body"><h3>${name}</h3><p>${desc}</p><div class="price"><span>${price}</span><button class="mini-order" onclick="location.href='tel:0473905738'">Commander</button></div></div>
  </article>`;
}
renderFilters();renderMenu();

document.querySelector('.burger').addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
const obs = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
