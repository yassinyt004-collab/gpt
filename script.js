const grid=document.querySelector('#menuGrid'),tabs=document.querySelector('#tabs');let active='Tous';
function cats(){return ['Tous',...MENU.map(c=>c.cat)]}
function renderTabs(){tabs.innerHTML=cats().map(c=>`<button class="${c===active?'active':''}" onclick="active='${c}';render()">${c}</button>`).join('')}
function render(){renderTabs();let data=active==='Tous'?MENU:MENU.filter(c=>c.cat===active);grid.innerHTML=data.flatMap(cat=>cat.items.map((it,i)=>`<article class="card"><div class="pic"><img src="assets/${cat.img}" alt="${it[0]}"><span>${cat.cat}</span></div><div class="body"><h3>${it[0]}</h3><p>${it[1]}</p><div><strong>${it[2]}</strong><a href="tel:0473905738">Commander</a></div></div></article>`)).join('')}
render();
document.querySelector('.hamb').onclick=()=>document.querySelector('.nav nav').classList.toggle('open');
