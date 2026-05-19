const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

const filters = document.getElementById('filters');
const grid = document.getElementById('menuGrid');

function renderMenu(category = 'Tout') {
  if (!grid || !filters || typeof menuData === 'undefined') return;
  grid.innerHTML = '';
  const groups = category === 'Tout' ? menuData : menuData.filter(group => group.category === category);
  groups.forEach(group => {
    group.items.forEach(item => {
      const [name, desc, price, image] = item;
      const card = document.createElement('article');
      card.className = 'menu-card reveal show';
      card.innerHTML = `
        <span class="cat">${group.category}</span>
        <img src="${image}" alt="${name}" loading="lazy">
        <div class="body">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price"><span>${price}</span><button class="mini-order" type="button">Commander</button></div>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

function initFilters() {
  if (!filters || typeof menuData === 'undefined') return;
  const categories = ['Tout', ...menuData.map(group => group.category)];
  filters.innerHTML = '';
  categories.forEach((cat, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = cat;
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => {
      document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderMenu(cat);
    });
    filters.appendChild(button);
  });
  renderMenu('Tout');
}

initFilters();
