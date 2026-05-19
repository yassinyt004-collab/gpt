const UNSPLASH = {
  burger1: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  burger2: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',
  burger3: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85',
  burger4: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85',
  tacos1: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85',
  tacos2: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85',
  tacos3: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85',
  bowl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  texmex: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85',
  dessert: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
  panini: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=85',
  salad: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85'
};

const menuData = [
  { category: 'Nos Croustiz', items: [
    ['L’Original','Croustiz généreux, croustillant et sauce maison.','9.00€', UNSPLASH.texmex],
    ['Le Spicy','Version relevée avec notes épicées.','9.00€', UNSPLASH.tacos2],
    ['Le Curry','Saveur curry, croustillant et fondant.','9.00€', UNSPLASH.fries]
  ]},
  { category: 'Tacos à composer', items: [
    ['Simple Taille M','1 galette, 1 viande, sauce fromagère.','8.00€', UNSPLASH.tacos1],
    ['Maxi Taille L','2 galettes, 2 viandes, sauce fromagère.','12.00€', UNSPLASH.tacos2],
    ['Mega Taille XL','3 galettes, 3 viandes, sauce fromagère.','15.00€', UNSPLASH.tacos3],
    ['Giga Taille XXL','4 galettes, 4 viandes, sauce fromagère.','18.00€', UNSPLASH.tacos1]
  ]},
  { category: 'Tacos Signatures', items: [
    ['O’Majestik','Signature généreuse maison.','10.00€', UNSPLASH.tacos1],
    ['O’Thentik','Goût intense et recette gourmande.','12.00€', UNSPLASH.tacos2],
    ['O’Chèvre Miel','Chèvre, miel, fondant et gourmand.','10.00€', UNSPLASH.tacos3],
    ['O’Spicy','Recette relevée et généreuse.','12.00€', UNSPLASH.tacos2],
    ['O’Xford','Signature premium façon maison.','10.00€', UNSPLASH.tacos1],
    ['O’Rientale','Saveurs orientales et viande grillée.','12.00€', UNSPLASH.tacos3],
    ['Montagnard','Fromage, gourmandise et caractère.','10.00€', UNSPLASH.tacos1],
    ['O’Vergnat','Recette riche et généreuse.','12.00€', UNSPLASH.tacos2],
    ['O’Riginal','La signature classique L’Étoile.','12.00€', UNSPLASH.tacos3],
    ['Végétarien','Option veggie gourmande.','8.00€', UNSPLASH.bowl]
  ]},
  { category: 'Tacos Sucrés', items: [
    ['Tacos Nutella','Dessert chaud et fondant.','4.00€', UNSPLASH.dessert],
    ['Tacos Kinder Bueno','Version Kinder Bueno.','5.50€', UNSPLASH.dessert],
    ['Tacos Kit Kat','Croquant chocolaté.','5.50€', UNSPLASH.dessert],
    ['Tacos MM’s Nutella','Nutella + MM’s.','5.50€', UNSPLASH.dessert]
  ]},
  { category: 'Burgers', items: [
    ['Veggie','Rostie, cheddar, salade, tomate, oignon.','5.00€', UNSPLASH.burger1],
    ['Chick’n','Chicken pané, cheddar, salade, tomate, oignon.','5.00€', UNSPLASH.burger2],
    ['Cheese','Steak, cheddar, salade, tomate, oignon.','5.00€', UNSPLASH.burger3],
    ['Double Cheese','2 steaks, 2 cheddars, salade, tomate, oignon.','6.50€', UNSPLASH.burger4],
    ['Chèvre Miel','Chèvre, miel, steak et crudités.','7.00€', UNSPLASH.burger1],
    ['Baps','Burger généreux maison.','7.00€', UNSPLASH.burger2],
    ['Supreme','Burger premium et sauce signature.','7.00€', UNSPLASH.burger3],
    ['Mac','Double étage, sauce gourmande.','7.50€', UNSPLASH.burger4],
    ['Triple Cheese','3 steaks, cheddar fondant.','8.00€', UNSPLASH.burger3],
    ['King','Burger généreux premium.','8.00€', UNSPLASH.burger2],
    ['PSG','Burger signature maison.','8.00€', UNSPLASH.burger1],
    ['Royal Bacon','Bacon, steak, cheddar.','7.00€', UNSPLASH.burger4],
    ['Double Cheese Bacon','Double steak, cheddar, bacon.','8.00€', UNSPLASH.burger3]
  ]},
  { category: 'Sandwichs Classiques', items: [
    ['Nugget’s','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich],
    ['Kebab','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich],
    ['Viande hachée','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich],
    ['Chicken','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich],
    ['Tenders','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich],
    ['Cordon Bleu','Pain maison ou galette, crudités, 2 sauces.','7.00€', UNSPLASH.sandwich]
  ]},
  { category: 'Sandwichs Signatures', items: [
    ['O’Bama','Signature généreuse.','9.00€', UNSPLASH.sandwich], ['Panam','Signature maison.','9.00€', UNSPLASH.sandwich], ['Cowboy','Recette caractère.','9.00€', UNSPLASH.sandwich], ['Veggie Lover','Signature végétarienne.','9.00€', UNSPLASH.bowl], ['Ideal','Recette équilibrée.','9.00€', UNSPLASH.sandwich], ['Zlatan','Sandwich premium.','9.00€', UNSPLASH.sandwich], ['Turbo','Intense et généreux.','9.00€', UNSPLASH.sandwich], ['Radical','Format gourmand.','11.00€', UNSPLASH.sandwich], ['Magistral','Maxi signature.','11.00€', UNSPLASH.sandwich]
  ]},
  { category: 'Bowls', items: [
    ['Compose ton Bowl 1 viande','Frites, sauce fromagère, gratiné mozza.','8.00€', UNSPLASH.bowl],
    ['Compose ton Bowl 2 viandes','Frites, sauce fromagère, gratiné mozza.','10.00€', UNSPLASH.bowl],
    ['Indy Bowl','Bowl signature.','11.00€', UNSPLASH.bowl],
    ['Spicy Bowl','Bowl relevé.','11.00€', UNSPLASH.bowl],
    ['Super Bowl','Version ultra généreuse.','15.00€', UNSPLASH.bowl],
    ['Cheese Bowl','Cheese lover.','12.00€', UNSPLASH.bowl],
    ['Big Bowl','Maxi bowl.','15.00€', UNSPLASH.bowl],
    ['Box Bowl','Format pratique.','8.00€', UNSPLASH.bowl]
  ]},
  { category: 'Menus & Box', items: [
    ['Menu Duo','Menu pour deux.','13.90€', UNSPLASH.burger2], ['Menu Gourmand','Menu généreux.','13.90€', UNSPLASH.tacos2], ['Menu Enfants','Menu enfant.','6.90€', UNSPLASH.fries], ['Menu Tenders','Tenders + accompagnement.','8.90€', UNSPLASH.texmex], ['Menu Wings','Wings + accompagnement.','8.90€', UNSPLASH.texmex], ['Menu Étudiant','Petit prix.','6.90€', UNSPLASH.burger1], ['Box 1','Box à partager.','23.00€', UNSPLASH.texmex], ['Box 2','Box généreuse.','27.00€', UNSPLASH.texmex], ['Box 3','Box premium.','27.00€', UNSPLASH.texmex], ['Box 4','Grande box.','30.00€', UNSPLASH.texmex]
  ]},
  { category: 'Assiettes & Texmex', items: [
    ['Assiette 1 viande','Kebab, merguez, tenders, steak ou chicken.','12.00€', UNSPLASH.texmex], ['Assiette 2 viandes','Assiette double viandes.','14.00€', UNSPLASH.texmex], ['Assiette 3 viandes','Assiette triple viandes.','16.00€', UNSPLASH.texmex], ['Tenders x6','Tenders croustillants.','5.50€', UNSPLASH.texmex], ['Onion rings x8','Onion rings dorés.','6.90€', UNSPLASH.fries], ['Sticks Mozza x6','Mozzarella fondante.','5.50€', UNSPLASH.texmex], ['Nugget’s x10','Nuggets croustillants.','7.90€', UNSPLASH.texmex], ['Wings x6','Wings croustillantes.','5.50€', UNSPLASH.texmex]
  ]},
  { category: 'Paninis / Salades / Frites', items: [
    ['Panini 3 Fromages','Panini chaud.','7.00€', UNSPLASH.panini], ['Panini Chicken','Panini chicken.','7.00€', UNSPLASH.panini], ['Panini Kebab','Panini kebab.','7.00€', UNSPLASH.panini], ['Salade O’Chèvre Miel','Salade fraîche.','7.50€', UNSPLASH.salad], ['Salade O’Rings','Salade croustillante.','7.50€', UNSPLASH.salad], ['Frites Cheddar Bacon','Frites gourmandes.','4.00€', UNSPLASH.fries], ['Frites Fromagère','Frites + sauce fromagère.','3.50€', UNSPLASH.fries], ['Frites Petite/Moyenne/Grande','2.50€ / 3.00€ / 3.50€','', UNSPLASH.fries]
  ]},
  { category: 'Desserts & Boissons', items: [
    ['Burger O’ Nutella','Mini dessert gourmand.','2.00€', UNSPLASH.dessert], ['Cheesecake Cookie','Cheesecake cookie.','3.50€', UNSPLASH.dessert], ['Cheesecake Citron','Cheesecake citron.','3.50€', UNSPLASH.dessert], ['Tarte Daim','Dessert Daim.','3.50€', UNSPLASH.dessert], ['Tiramisu Chocolat Noisette','Tiramisu gourmand.','3.50€', UNSPLASH.dessert], ['Canette 33cl','Coca, Fanta, Sprite, Oasis, etc.','1.80€', UNSPLASH.drink], ['Cristalline 50cl','Eau minérale.','1.50€', UNSPLASH.drink], ['Monster 50cl','Boisson énergisante.','3.00€', UNSPLASH.drink], ['Coca 1.25L','Grand format.','3.50€', UNSPLASH.drink]
  ]}
];
