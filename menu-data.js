const IMG = {
  tacosM: 'https://firebasestorage.googleapis.com/v0/b/unified-order.appspot.com/o/public-pool%2Ffrom-script%2Fa800c295-2097-4e4b-b169-8d40e51a46b8.jpg?alt=media&token=a800c295-2097-4e4b-b169-8d40e51a46b8',
  tacosL: 'https://firebasestorage.googleapis.com/v0/b/unified-order.appspot.com/o/public-pool%2Ffrom-script%2F61f793f1-90a3-4364-8fee-df92f5b05f20.jpg?alt=media&token=61f793f1-90a3-4364-8fee-df92f5b05f20',
  chevre: 'https://firebasestorage.googleapis.com/v0/b/unified-order.appspot.com/o/public-pool%2Ffrom-script%2Ff3528f33-45d7-4897-9aa2-8d50af44a109.jpg?alt=media&token=f3528f33-45d7-4897-9aa2-8d50af44a109',
  kebab: 'https://firebasestorage.googleapis.com/v0/b/unified-order.appspot.com/o/public-pool%2Ffrom-script%2F457cb154-3f15-4121-acb4-5dd69bf201d1.jpg?alt=media&token=457cb154-3f15-4121-acb4-5dd69bf201d1',
  tacos: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85',
  texmex: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  bowl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  dessert: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85'
};

const menuData = [
  { category: 'TACOS À COMPOSER', items: [
    ['Tacos Simple M', '1 tortilla, 1 viande au choix, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '8,00 €', IMG.tacosM],
    ['Maxi Tacos Simple L', 'Double tortillas, 1 viande au choix double dose, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '12,00 €', IMG.tacosL],
    ['Méga Tacos Simple XL', 'Triple galettes, 1 viande au choix triple dose, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '15,00 €', IMG.tacos],
    ['Maxi Tacos Premium L', 'Double tortillas, 2 viandes au choix, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '13,00 €', IMG.tacosL],
    ['Méga Tacos Premium XL', 'Triple galettes, 3 viandes au choix, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '17,00 €', IMG.tacos],
    ['Giga Tacos XXL', '4 galettes, 4 viandes, garniture au choix, sauce fromagère maison et jusqu’à 2 sauces au choix.', '18,00 €', IMG.tacos]
  ]},

  { category: 'TACOS SIGNATURES ✨', items: [
    ['Tacos O’chèvre miel', 'Viande de kebab fraîchement tranchée, garniture au choix, chèvre, miel et sauce fromagère maison.', '10,00 €', IMG.chevre],
    ['Tacos O’riginal', 'Cordon bleu, poulet pané, oignons frits, raclette et sauce fromagère maison.', '12,00 €', IMG.tacos],
    ['Tacos O’rientale', 'Merguez, kefta, olives, poivrons, mozzarella et sauce fromagère maison.', '12,00 €', IMG.tacos],
    ['Tacos O’vergnat', 'Tenders, nuggets, galette de pomme de terre, frites, fromage bleu et sauce fromagère maison.', '12,00 €', IMG.tacos],
    ['Tacos O’spicy', 'Merguez, onion rings, oignons frits, reblochon, frites et sauce fromagère maison.', '12,00 €', IMG.tacos],
    ['Tacos O’majestik', 'Chicken, chakchouka, boursin et poivrons grillés.', '12,00 €', IMG.tacos],
    ['Tacos Végétarien', 'Galette de pomme de terre, œuf, falafel et cheddar.', '7,00 €', IMG.bowl]
  ]},

  { category: 'TACOS VÉGÉTARIENS', items: [
    ['Tacos Végé M', '1 tortilla, galette de pomme de terre, œuf, garniture au choix, sauce fromagère maison et sauces au choix.', '8,00 €', IMG.bowl],
    ['Maxi Tacos Végé L', 'Double tortillas, 2 galettes de pomme de terre, œuf, garniture au choix et sauce fromagère maison.', '11,00 €', IMG.bowl],
    ['Méga Tacos Végé XL', '3 tortillas, 3 galettes de pomme de terre, œuf, garniture au choix et sauce fromagère maison.', '14,00 €', IMG.bowl]
  ]},

  { category: 'SANDWICHS CLASSIQUES', items: [
    ['Sandwich Kebab', 'Viande de kebab grillée à la broche, salade, tomate, oignons et jusqu’à 2 sauces au choix.', '7,00 €', IMG.kebab],
    ['Sandwich Américain', 'Steak haché, cheddar, salade, tomate, oignons et sauce au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Merguez', '2 merguez, salade, tomate, oignons et jusqu’à 2 sauces au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Kefta', 'Kefta, salade, tomate, oignon et sauce au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Chicken', 'Poulet mariné au curry, salade, tomate, oignon et jusqu’à 2 sauces au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Poulet pané', 'Poulet pané, salade, tomate, oignons et jusqu’à 2 sauces au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Tenders', 'Tenders de poulet, salade, tomate, oignons et jusqu’à 2 sauces au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Nuggets', 'Nuggets de poulet, salade, tomate, oignons et sauces au choix.', '7,00 €', IMG.sandwich],
    ['Sandwich Cordon', 'Cordon bleu, salade, tomate, oignons et jusqu’à 2 sauces au choix.', '7,00 €', IMG.sandwich]
  ]},

  { category: 'SANDWICHS SIGNATURES ✨', items: [
    ['O’bama Sandwich', 'Kebab grillé à la broche, chèvre, miel, salade, tomate, oignons et sauces au choix.', '9,00 €', IMG.sandwich],
    ['Turbo Sandwich', 'Kebab grillé à la broche, merguez, salade, tomate, oignons, cheddar et sauces au choix.', '9,00 €', IMG.sandwich],
    ['Cowboy Sandwich', 'Steak haché, œuf, salade, tomate, oignons, cheddar et sauce au choix.', '9,00 €', IMG.sandwich],
    ['Idéal Sandwich', 'Kebab grillé à la broche, steak haché, salade, tomate, oignons, cheddar et sauces au choix.', '9,00 €', IMG.sandwich],
    ['O’rientale Sandwich', 'Kefta, merguez, cheddar, salade, tomate, oignons et sauces au choix.', '9,00 €', IMG.sandwich],
    ['Panam Sandwich', 'Kebab grillé, poulet curry, cheddar, salade, tomate, oignons et sauces au choix.', '9,00 €', IMG.sandwich],
    ['Costo Sandwich', 'Cordon bleu, steak haché, cheddar, salade, tomate, oignons et sauces au choix.', '9,00 €', IMG.sandwich],
    ['Zlatan Sandwich', 'Steak haché, galette de pomme de terre, bacon, cheddar, salade, tomate, oignons et sauces.', '9,00 €', IMG.sandwich]
  ]},

  { category: 'BURGERS', items: [
    ['Cheese', 'Steak, cheddar, salade, tomate et oignon.', '5,00 €', IMG.burger],
    ['Double Cheese', '2 steaks, 2 cheddars, salade, tomate et oignon.', '6,50 €', IMG.burger],
    ['Chick’n', 'Chicken pané, cheddar, salade, tomate et oignon.', '5,00 €', IMG.burger],
    ['Veggie', 'Rostie, cheddar, salade, tomate et oignon.', '5,00 €', IMG.burger],
    ['Chèvre Miel', 'Steak, chèvre, miel, cheddar et crudités.', '7,00 €', IMG.burger]
  ]},

  { category: 'BOWLS', items: [
    ['Bowl Poulet', 'Poulet mariné, riz, légumes frais et sauce maison.', '9,50 €', IMG.bowl],
    ['Bowl Kebab', 'Kebab, riz, crudités et sauce maison.', '9,50 €', IMG.bowl],
    ['Bowl Veggie', 'Légumes, falafel, riz et sauce maison.', '8,90 €', IMG.bowl]
  ]},

  { category: 'TEX MEX', items: [
    ['Tenders', 'Tenders croustillants.', '5,50 €', IMG.texmex],
    ['Nuggets', 'Nuggets de poulet.', '4,50 €', IMG.texmex],
    ['Onion Rings', 'Onion rings croustillants.', '4,00 €', IMG.texmex],
    ['Frites Cheddar', 'Frites gourmandes avec cheddar fondant.', '3,50 €', IMG.texmex],
    ['Frites Cheddar Bacon', 'Frites, cheddar et bacon.', '4,50 €', IMG.texmex]
  ]},

  { category: 'DESSERTS & BOISSONS', items: [
    ['Tiramisu', 'Dessert gourmand selon disponibilité.', '3,50 €', IMG.dessert],
    ['Tacos Nutella', 'Tacos sucré chaud et fondant.', '4,00 €', IMG.dessert],
    ['Coca-Cola 33cl', 'Boisson fraîche.', '1,80 €', IMG.drink],
    ['Oasis 33cl', 'Boisson fraîche.', '1,80 €', IMG.drink],
    ['Eau 50cl', 'Bouteille d’eau.', '1,50 €', IMG.drink]
  ]}
];
