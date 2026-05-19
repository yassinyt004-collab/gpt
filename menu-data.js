const MENU_ITEMS = [
  {
    "category": "Nos Croustiz",
    "name": "L’Original",
    "price": "9.00€",
    "description": "Croustiz généreux, croustillant et sauce maison.",
    "image": "assets/products/001-nos-croustiz-loriginal.svg"
  },
  {
    "category": "Nos Croustiz",
    "name": "Le Spicy",
    "price": "9.00€",
    "description": "Version relevée avec notes épicées.",
    "image": "assets/products/002-nos-croustiz-le-spicy.svg"
  },
  {
    "category": "Nos Croustiz",
    "name": "Le Curry",
    "price": "9.00€",
    "description": "Saveur curry, croustillant et fondant.",
    "image": "assets/products/003-nos-croustiz-le-curry.svg"
  },
  {
    "category": "Tacos à composer",
    "name": "Simple Taille M",
    "price": "8.00€",
    "description": "1 galette, 1 viande, sauce fromagère.",
    "image": "assets/products/004-tacos-composer-simple-taille-m.svg"
  },
  {
    "category": "Tacos à composer",
    "name": "Maxi Taille L",
    "price": "12.00€",
    "description": "2 galettes, 2 viandes, sauce fromagère.",
    "image": "assets/products/005-tacos-composer-maxi-taille-l.svg"
  },
  {
    "category": "Tacos à composer",
    "name": "Mega Taille XL",
    "price": "15.00€",
    "description": "3 galettes, 3 viandes, sauce fromagère.",
    "image": "assets/products/006-tacos-composer-mega-taille-xl.svg"
  },
  {
    "category": "Tacos à composer",
    "name": "Giga Taille XXL",
    "price": "18.00€",
    "description": "4 galettes, 4 viandes, sauce fromagère.",
    "image": "assets/products/007-tacos-composer-giga-taille-xxl.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Majestik",
    "price": "10.00€",
    "description": "Signature généreuse maison.",
    "image": "assets/products/008-tacos-signatures-omajestik.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Thentik",
    "price": "12.00€",
    "description": "Recette premium gourmande.",
    "image": "assets/products/009-tacos-signatures-othentik.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Chèvre Miel",
    "price": "10.00€",
    "description": "Chèvre, miel et garniture fondante.",
    "image": "assets/products/010-tacos-signatures-och-vre-miel.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Spicy",
    "price": "12.00€",
    "description": "Version épicée et intense.",
    "image": "assets/products/011-tacos-signatures-ospicy.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Xford",
    "price": "10.00€",
    "description": "Tacos signature gourmand.",
    "image": "assets/products/012-tacos-signatures-oxford.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Rientale",
    "price": "12.00€",
    "description": "Saveurs orientales.",
    "image": "assets/products/013-tacos-signatures-orientale.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "Montagnard",
    "price": "10.00€",
    "description": "Recette fromagère généreuse.",
    "image": "assets/products/014-tacos-signatures-montagnard.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Vergnat",
    "price": "12.00€",
    "description": "Signature locale premium.",
    "image": "assets/products/015-tacos-signatures-overgnat.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "O’Riginal",
    "price": "12.00€",
    "description": "Recette originale L’Étoile.",
    "image": "assets/products/016-tacos-signatures-original.svg"
  },
  {
    "category": "Tacos signatures",
    "name": "Végétarien",
    "price": "8.00€",
    "description": "Version veggie savoureuse.",
    "image": "assets/products/017-tacos-signatures-v-g-tarien.svg"
  },
  {
    "category": "Tacos sucrés",
    "name": "Tacos Nutella",
    "price": "4.00€",
    "description": "Tacos sucré au Nutella.",
    "image": "assets/products/018-tacos-sucr-s-tacos-nutella.svg"
  },
  {
    "category": "Tacos sucrés",
    "name": "Tacos Kinder Bueno",
    "price": "5.50€",
    "description": "Gourmandise Kinder Bueno.",
    "image": "assets/products/019-tacos-sucr-s-tacos-kinder-bueno.svg"
  },
  {
    "category": "Tacos sucrés",
    "name": "Tacos Kit Kat",
    "price": "5.50€",
    "description": "Crunch Kit Kat chocolat.",
    "image": "assets/products/020-tacos-sucr-s-tacos-kit-kat.svg"
  },
  {
    "category": "Tacos sucrés",
    "name": "Tacos MM’s Nutella",
    "price": "5.50€",
    "description": "Nutella et MM’s.",
    "image": "assets/products/021-tacos-sucr-s-tacos-mms-nutella.svg"
  },
  {
    "category": "Burgers",
    "name": "Veggie",
    "price": "5.00€",
    "description": "Rostie, cheddar, salade, tomate, oignon.",
    "image": "assets/products/022-burgers-veggie.svg"
  },
  {
    "category": "Burgers",
    "name": "Chick’n",
    "price": "5.00€",
    "description": "Chicken pané, cheddar, salade, tomate, oignon.",
    "image": "assets/products/023-burgers-chickn.svg"
  },
  {
    "category": "Burgers",
    "name": "Cheese",
    "price": "5.00€",
    "description": "Steak, cheddar, salade, tomate, oignon.",
    "image": "assets/products/024-burgers-cheese.svg"
  },
  {
    "category": "Burgers",
    "name": "Double Cheese",
    "price": "6.50€",
    "description": "2 steaks, 2 cheddars, salade, tomate, oignon.",
    "image": "assets/products/025-burgers-double-cheese.svg"
  },
  {
    "category": "Burgers",
    "name": "Chèvre Miel",
    "price": "7.00€",
    "description": "Steak, chèvre, miel, salade, tomate.",
    "image": "assets/products/026-burgers-ch-vre-miel.svg"
  },
  {
    "category": "Burgers",
    "name": "Baps",
    "price": "7.00€",
    "description": "Burger généreux sauce maison.",
    "image": "assets/products/027-burgers-baps.svg"
  },
  {
    "category": "Burgers",
    "name": "Supreme",
    "price": "7.00€",
    "description": "Burger premium et sauce signature.",
    "image": "assets/products/028-burgers-supreme.svg"
  },
  {
    "category": "Burgers",
    "name": "Mac",
    "price": "7.50€",
    "description": "Double étage façon premium.",
    "image": "assets/products/029-burgers-mac.svg"
  },
  {
    "category": "Burgers",
    "name": "Triple Cheese",
    "price": "8.00€",
    "description": "3 steaks, cheddar fondant.",
    "image": "assets/products/030-burgers-triple-cheese.svg"
  },
  {
    "category": "Burgers",
    "name": "King",
    "price": "8.00€",
    "description": "Burger royal généreux.",
    "image": "assets/products/031-burgers-king.svg"
  },
  {
    "category": "Burgers",
    "name": "PSG",
    "price": "8.00€",
    "description": "Burger signature.",
    "image": "assets/products/032-burgers-psg.svg"
  },
  {
    "category": "Burgers",
    "name": "Royal Bacon",
    "price": "7.00€",
    "description": "Bacon, cheddar, steak.",
    "image": "assets/products/033-burgers-royal-bacon.svg"
  },
  {
    "category": "Burgers",
    "name": "Double Cheese Bacon",
    "price": "8.00€",
    "description": "Double steak, bacon, double cheddar.",
    "image": "assets/products/034-burgers-double-cheese-bacon.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Nugget’s",
    "price": "7.00€",
    "description": "Pain maison/galette, crudités, sauces.",
    "image": "assets/products/035-sandwichs-classiques-nuggets.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Kebab",
    "price": "7.00€",
    "description": "Pain maison/galette, kebab, crudités.",
    "image": "assets/products/036-sandwichs-classiques-kebab.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Viande hachée",
    "price": "7.00€",
    "description": "Pain maison/galette, viande hachée.",
    "image": "assets/products/037-sandwichs-classiques-viande-hach-e.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Chicken",
    "price": "7.00€",
    "description": "Chicken, crudités, sauces.",
    "image": "assets/products/038-sandwichs-classiques-chicken.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Tenders",
    "price": "7.00€",
    "description": "Tenders croustillants.",
    "image": "assets/products/039-sandwichs-classiques-tenders.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Cordon Bleu",
    "price": "7.00€",
    "description": "Cordon bleu, crudités.",
    "image": "assets/products/040-sandwichs-classiques-cordon-bleu.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Kefta",
    "price": "7.00€",
    "description": "Kefta, crudités, sauces.",
    "image": "assets/products/041-sandwichs-classiques-kefta.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Merguez",
    "price": "7.00€",
    "description": "Merguez, crudités, sauces.",
    "image": "assets/products/042-sandwichs-classiques-merguez.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Poulet pané",
    "price": "7.00€",
    "description": "Poulet pané croustillant.",
    "image": "assets/products/043-sandwichs-classiques-poulet-pan.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Falafel",
    "price": "7.00€",
    "description": "Falafel, crudités, sauces.",
    "image": "assets/products/044-sandwichs-classiques-falafel.svg"
  },
  {
    "category": "Sandwichs classiques",
    "name": "Végé",
    "price": "7.00€",
    "description": "Rosty, œuf, crudités.",
    "image": "assets/products/045-sandwichs-classiques-v-g.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "O’Bama",
    "price": "9.00€",
    "description": "Sandwich signature maison.",
    "image": "assets/products/046-sandwichs-signatures-obama.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Panam",
    "price": "9.00€",
    "description": "Recette premium.",
    "image": "assets/products/047-sandwichs-signatures-panam.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Cowboy",
    "price": "9.00€",
    "description": "Saveur BBQ généreuse.",
    "image": "assets/products/048-sandwichs-signatures-cowboy.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Veggie Lover",
    "price": "9.00€",
    "description": "Signature végétarienne.",
    "image": "assets/products/049-sandwichs-signatures-veggie-lover.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Ideal",
    "price": "9.00€",
    "description": "Signature équilibrée.",
    "image": "assets/products/050-sandwichs-signatures-ideal.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Zlatan",
    "price": "9.00€",
    "description": "Grand sandwich généreux.",
    "image": "assets/products/051-sandwichs-signatures-zlatan.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Turbo",
    "price": "9.00€",
    "description": "Recette intense.",
    "image": "assets/products/052-sandwichs-signatures-turbo.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "O’Rientale",
    "price": "9.00€",
    "description": "Saveurs orientales.",
    "image": "assets/products/053-sandwichs-signatures-orientale.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Costo",
    "price": "9.00€",
    "description": "Sandwich robuste.",
    "image": "assets/products/054-sandwichs-signatures-costo.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Radical",
    "price": "11.00€",
    "description": "Version max premium.",
    "image": "assets/products/055-sandwichs-signatures-radical.svg"
  },
  {
    "category": "Sandwichs signatures",
    "name": "Magistral",
    "price": "11.00€",
    "description": "Signature très généreuse.",
    "image": "assets/products/056-sandwichs-signatures-magistral.svg"
  },
  {
    "category": "Compose ton Bowl",
    "name": "1 viande",
    "price": "8.00€",
    "description": "Frites, sauce fromagère, gratiné mozza, sauces.",
    "image": "assets/products/057-compose-ton-bowl-1-viande.svg"
  },
  {
    "category": "Compose ton Bowl",
    "name": "2 viandes",
    "price": "10.00€",
    "description": "Frites, sauce fromagère, gratiné mozza, sauces.",
    "image": "assets/products/058-compose-ton-bowl-2-viandes.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Indy Bowl",
    "price": "11.00€",
    "description": "Bowl signature maison.",
    "image": "assets/products/059-bowl-signatures-indy-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Spicy Bowl",
    "price": "11.00€",
    "description": "Bowl relevé et gourmand.",
    "image": "assets/products/060-bowl-signatures-spicy-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Exotic Bowl",
    "price": "11.00€",
    "description": "Notes exotiques.",
    "image": "assets/products/061-bowl-signatures-exotic-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Tipik Bowl",
    "price": "11.00€",
    "description": "Bowl tipik maison.",
    "image": "assets/products/062-bowl-signatures-tipik-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Mythique Bowl",
    "price": "11.00€",
    "description": "Bowl signature mythique.",
    "image": "assets/products/063-bowl-signatures-mythique-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Crousti Bowl",
    "price": "11.00€",
    "description": "Croustillant et fondant.",
    "image": "assets/products/064-bowl-signatures-crousti-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Veggie Bowl",
    "price": "11.00€",
    "description": "Bowl végétarien.",
    "image": "assets/products/065-bowl-signatures-veggie-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Kebab Bowl",
    "price": "11.00€",
    "description": "Bowl kebab gourmand.",
    "image": "assets/products/066-bowl-signatures-kebab-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Crispy Bowl",
    "price": "11.00€",
    "description": "Bowl croustillant.",
    "image": "assets/products/067-bowl-signatures-crispy-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Super Bowl",
    "price": "15.00€",
    "description": "Version super généreuse.",
    "image": "assets/products/068-bowl-signatures-super-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Cheese Bowl",
    "price": "12.00€",
    "description": "Fromage fondant.",
    "image": "assets/products/069-bowl-signatures-cheese-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Big Bowl",
    "price": "15.00€",
    "description": "Grand format.",
    "image": "assets/products/070-bowl-signatures-big-bowl.svg"
  },
  {
    "category": "Bowl signatures",
    "name": "Box Bowl",
    "price": "8.00€",
    "description": "Format box.",
    "image": "assets/products/071-bowl-signatures-box-bowl.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Duo",
    "price": "13.90€",
    "description": "Menu pour deux gourmand.",
    "image": "assets/products/072-menus-box-menu-duo.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Gourmand",
    "price": "13.90€",
    "description": "Menu généreux.",
    "image": "assets/products/073-menus-box-menu-gourmand.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Enfants",
    "price": "6.90€",
    "description": "Menu enfant.",
    "image": "assets/products/074-menus-box-menu-enfants.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Tenders",
    "price": "8.90€",
    "description": "Menu tenders.",
    "image": "assets/products/075-menus-box-menu-tenders.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Wings",
    "price": "8.90€",
    "description": "Menu wings.",
    "image": "assets/products/076-menus-box-menu-wings.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Menu Étudiant",
    "price": "6.90€",
    "description": "Menu étudiant.",
    "image": "assets/products/077-menus-box-menu-tudiant.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Box 1",
    "price": "23.00€",
    "description": "Box à partager.",
    "image": "assets/products/078-menus-box-box-1.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Box 2",
    "price": "27.00€",
    "description": "Box généreuse.",
    "image": "assets/products/079-menus-box-box-2.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Box 3",
    "price": "27.00€",
    "description": "Box premium.",
    "image": "assets/products/080-menus-box-box-3.svg"
  },
  {
    "category": "Menus & Box",
    "name": "Box 4",
    "price": "30.00€",
    "description": "Maxi box.",
    "image": "assets/products/081-menus-box-box-4.svg"
  },
  {
    "category": "Assiettes",
    "name": "1 viande",
    "price": "12.00€",
    "description": "Assiette complète.",
    "image": "assets/products/082-assiettes-1-viande.svg"
  },
  {
    "category": "Assiettes",
    "name": "2 viandes",
    "price": "14.00€",
    "description": "Assiette 2 viandes.",
    "image": "assets/products/083-assiettes-2-viandes.svg"
  },
  {
    "category": "Assiettes",
    "name": "3 viandes",
    "price": "16.00€",
    "description": "Assiette 3 viandes.",
    "image": "assets/products/084-assiettes-3-viandes.svg"
  },
  {
    "category": "Texmex",
    "name": "Tenders x3",
    "price": "2.90€",
    "description": "Tenders croustillants.",
    "image": "assets/products/085-texmex-tenders-x3.svg"
  },
  {
    "category": "Texmex",
    "name": "Tenders x6",
    "price": "5.50€",
    "description": "Tenders croustillants.",
    "image": "assets/products/086-texmex-tenders-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Tenders x12",
    "price": "10.90€",
    "description": "Tenders à partager.",
    "image": "assets/products/087-texmex-tenders-x12.svg"
  },
  {
    "category": "Texmex",
    "name": "Onion rings x4",
    "price": "3.50€",
    "description": "Anneaux d’oignon.",
    "image": "assets/products/088-texmex-onion-rings-x4.svg"
  },
  {
    "category": "Texmex",
    "name": "Onion rings x8",
    "price": "6.90€",
    "description": "Anneaux d’oignon.",
    "image": "assets/products/089-texmex-onion-rings-x8.svg"
  },
  {
    "category": "Texmex",
    "name": "Onion rings x12",
    "price": "10.90€",
    "description": "Anneaux d’oignon.",
    "image": "assets/products/090-texmex-onion-rings-x12.svg"
  },
  {
    "category": "Texmex",
    "name": "Sticks Mozza x3",
    "price": "2.90€",
    "description": "Mozzarella fondante.",
    "image": "assets/products/091-texmex-sticks-mozza-x3.svg"
  },
  {
    "category": "Texmex",
    "name": "Sticks Mozza x6",
    "price": "5.50€",
    "description": "Mozzarella fondante.",
    "image": "assets/products/092-texmex-sticks-mozza-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Sticks Mozza x12",
    "price": "10.90€",
    "description": "Mozzarella fondante.",
    "image": "assets/products/093-texmex-sticks-mozza-x12.svg"
  },
  {
    "category": "Texmex",
    "name": "Nugget’s x5",
    "price": "3.90€",
    "description": "Nuggets croustillants.",
    "image": "assets/products/094-texmex-nuggets-x5.svg"
  },
  {
    "category": "Texmex",
    "name": "Nugget’s x10",
    "price": "7.90€",
    "description": "Nuggets croustillants.",
    "image": "assets/products/095-texmex-nuggets-x10.svg"
  },
  {
    "category": "Texmex",
    "name": "Nugget’s x15",
    "price": "12.90€",
    "description": "Nuggets à partager.",
    "image": "assets/products/096-texmex-nuggets-x15.svg"
  },
  {
    "category": "Texmex",
    "name": "Falafel x3",
    "price": "2.90€",
    "description": "Falafel veggie.",
    "image": "assets/products/097-texmex-falafel-x3.svg"
  },
  {
    "category": "Texmex",
    "name": "Falafel x6",
    "price": "5.50€",
    "description": "Falafel veggie.",
    "image": "assets/products/098-texmex-falafel-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Falafel x12",
    "price": "10.90€",
    "description": "Falafel veggie.",
    "image": "assets/products/099-texmex-falafel-x12.svg"
  },
  {
    "category": "Texmex",
    "name": "Wings x3",
    "price": "2.90€",
    "description": "Wings épicés.",
    "image": "assets/products/100-texmex-wings-x3.svg"
  },
  {
    "category": "Texmex",
    "name": "Wings x6",
    "price": "5.50€",
    "description": "Wings épicés.",
    "image": "assets/products/101-texmex-wings-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Wings x12",
    "price": "10.90€",
    "description": "Wings à partager.",
    "image": "assets/products/102-texmex-wings-x12.svg"
  },
  {
    "category": "Texmex",
    "name": "Bouchée Camembert x4",
    "price": "3.90€",
    "description": "Camembert fondant.",
    "image": "assets/products/103-texmex-bouch-e-camembert-x4.svg"
  },
  {
    "category": "Texmex",
    "name": "Bouchée Camembert x6",
    "price": "5.90€",
    "description": "Camembert fondant.",
    "image": "assets/products/104-texmex-bouch-e-camembert-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Bouchée Camembert x9",
    "price": "7.90€",
    "description": "Camembert fondant.",
    "image": "assets/products/105-texmex-bouch-e-camembert-x9.svg"
  },
  {
    "category": "Texmex",
    "name": "Chili Cheese x4",
    "price": "3.90€",
    "description": "Fromage chili.",
    "image": "assets/products/106-texmex-chili-cheese-x4.svg"
  },
  {
    "category": "Texmex",
    "name": "Chili Cheese x6",
    "price": "5.90€",
    "description": "Fromage chili.",
    "image": "assets/products/107-texmex-chili-cheese-x6.svg"
  },
  {
    "category": "Texmex",
    "name": "Chili Cheese x9",
    "price": "7.90€",
    "description": "Fromage chili.",
    "image": "assets/products/108-texmex-chili-cheese-x9.svg"
  },
  {
    "category": "Paninis",
    "name": "3 Fromages",
    "price": "7.00€",
    "description": "Panini chaud fondant.",
    "image": "assets/products/109-paninis-3-fromages.svg"
  },
  {
    "category": "Paninis",
    "name": "Chicken",
    "price": "7.00€",
    "description": "Panini chicken.",
    "image": "assets/products/110-paninis-chicken.svg"
  },
  {
    "category": "Paninis",
    "name": "Cordon Bleu",
    "price": "7.00€",
    "description": "Panini cordon bleu.",
    "image": "assets/products/111-paninis-cordon-bleu.svg"
  },
  {
    "category": "Paninis",
    "name": "Kebab",
    "price": "7.00€",
    "description": "Panini kebab.",
    "image": "assets/products/112-paninis-kebab.svg"
  },
  {
    "category": "Paninis",
    "name": "Kefta",
    "price": "7.00€",
    "description": "Panini kefta.",
    "image": "assets/products/113-paninis-kefta.svg"
  },
  {
    "category": "Paninis",
    "name": "Lardon",
    "price": "7.00€",
    "description": "Panini lardon.",
    "image": "assets/products/114-paninis-lardon.svg"
  },
  {
    "category": "Paninis",
    "name": "Merguez",
    "price": "7.00€",
    "description": "Panini merguez.",
    "image": "assets/products/115-paninis-merguez.svg"
  },
  {
    "category": "Paninis",
    "name": "Nuggets",
    "price": "7.00€",
    "description": "Panini nuggets.",
    "image": "assets/products/116-paninis-nuggets.svg"
  },
  {
    "category": "Paninis",
    "name": "Poulet pané",
    "price": "7.00€",
    "description": "Panini poulet pané.",
    "image": "assets/products/117-paninis-poulet-pan.svg"
  },
  {
    "category": "Paninis",
    "name": "Chèvre Miel",
    "price": "7.00€",
    "description": "Panini chèvre miel.",
    "image": "assets/products/118-paninis-ch-vre-miel.svg"
  },
  {
    "category": "Paninis",
    "name": "Steak",
    "price": "7.00€",
    "description": "Panini steak.",
    "image": "assets/products/119-paninis-steak.svg"
  },
  {
    "category": "Paninis",
    "name": "Tenders",
    "price": "7.00€",
    "description": "Panini tenders.",
    "image": "assets/products/120-paninis-tenders.svg"
  },
  {
    "category": "Paninis",
    "name": "Végé",
    "price": "7.00€",
    "description": "Panini végé.",
    "image": "assets/products/121-paninis-v-g.svg"
  },
  {
    "category": "Salades",
    "name": "O’Chèvre Miel",
    "price": "7.50€",
    "description": "Salade chèvre miel.",
    "image": "assets/products/122-salades-och-vre-miel.svg"
  },
  {
    "category": "Salades",
    "name": "O’Rings",
    "price": "7.50€",
    "description": "Salade onion rings.",
    "image": "assets/products/123-salades-orings.svg"
  },
  {
    "category": "Salades",
    "name": "O’Camembert",
    "price": "7.50€",
    "description": "Salade camembert.",
    "image": "assets/products/124-salades-ocamembert.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Cheddar Bacon",
    "price": "4.00€",
    "description": "Frites gourmandes cheddar bacon.",
    "image": "assets/products/125-frites-et-barquettes-frites-cheddar-bacon.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Cheddar Oignons Crispy",
    "price": "4.00€",
    "description": "Frites cheddar oignons crispy.",
    "image": "assets/products/126-frites-et-barquettes-frites-cheddar-oignons-crispy.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Fromagère Lardons",
    "price": "4.00€",
    "description": "Frites fromagère lardons.",
    "image": "assets/products/127-frites-et-barquettes-frites-fromag-re-lardons.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Fromagère",
    "price": "3.50€",
    "description": "Frites sauce fromagère.",
    "image": "assets/products/128-frites-et-barquettes-frites-fromag-re.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Cheddar",
    "price": "3.50€",
    "description": "Frites cheddar.",
    "image": "assets/products/129-frites-et-barquettes-frites-cheddar.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Cheddar Bacon Onions Crispy",
    "price": "4.50€",
    "description": "Frites extra gourmandes.",
    "image": "assets/products/130-frites-et-barquettes-frites-cheddar-bacon-onions-crispy.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Petite",
    "price": "2.50€",
    "description": "Portion petite.",
    "image": "assets/products/131-frites-et-barquettes-frites-petite.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Moyenne",
    "price": "3.00€",
    "description": "Portion moyenne.",
    "image": "assets/products/132-frites-et-barquettes-frites-moyenne.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Frites Grande",
    "price": "3.50€",
    "description": "Grande portion.",
    "image": "assets/products/133-frites-et-barquettes-frites-grande.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Barquette Chicken Tikka Curry",
    "price": "8.00€",
    "description": "Barquette chicken tikka curry.",
    "image": "assets/products/134-frites-et-barquettes-barquette-chicken-tikka-curry.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Barquette Kebab",
    "price": "8.00€",
    "description": "Barquette kebab.",
    "image": "assets/products/135-frites-et-barquettes-barquette-kebab.svg"
  },
  {
    "category": "Frites et Barquettes",
    "name": "Nuggets Cheddar Onions Crispy",
    "price": "7.00€",
    "description": "Nuggets cheddar onions crispy.",
    "image": "assets/products/136-frites-et-barquettes-nuggets-cheddar-onions-crispy.svg"
  },
  {
    "category": "Desserts",
    "name": "Burger O’ Nutella",
    "price": "2.00€",
    "description": "Dessert chocolaté.",
    "image": "assets/products/137-desserts-burger-o-nutella.svg"
  },
  {
    "category": "Desserts",
    "name": "Cheesecake Cookie",
    "price": "3.50€",
    "description": "Cheesecake cookie.",
    "image": "assets/products/138-desserts-cheesecake-cookie.svg"
  },
  {
    "category": "Desserts",
    "name": "Cheesecake Citron",
    "price": "3.50€",
    "description": "Cheesecake citron.",
    "image": "assets/products/139-desserts-cheesecake-citron.svg"
  },
  {
    "category": "Desserts",
    "name": "Tarte Daim",
    "price": "3.50€",
    "description": "Tarte Daim.",
    "image": "assets/products/140-desserts-tarte-daim.svg"
  },
  {
    "category": "Desserts",
    "name": "Tiramisu Chocolat Noisette",
    "price": "3.50€",
    "description": "Tiramisu chocolat noisette.",
    "image": "assets/products/141-desserts-tiramisu-chocolat-noisette.svg"
  },
  {
    "category": "Desserts",
    "name": "Tiramisu Caramel Spéculos",
    "price": "3.50€",
    "description": "Tiramisu caramel spéculos.",
    "image": "assets/products/142-desserts-tiramisu-caramel-sp-culos.svg"
  },
  {
    "category": "Boissons",
    "name": "Coca 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/143-boissons-coca-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Coca Zero 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/144-boissons-coca-zero-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Coca Cherry 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/145-boissons-coca-cherry-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Fanta 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/146-boissons-fanta-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Fuzetea 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/147-boissons-fuzetea-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Hawai 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/148-boissons-hawai-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Oasis Tropical 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/149-boissons-oasis-tropical-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Orangina 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/150-boissons-orangina-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Schweppes 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/151-boissons-schweppes-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Sprite 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/152-boissons-sprite-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Tropico 33cl",
    "price": "1.80€",
    "description": "Canette 33cl.",
    "image": "assets/products/153-boissons-tropico-33cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Capri Sun 29cl",
    "price": "1.80€",
    "description": "Canette 29cl.",
    "image": "assets/products/154-boissons-capri-sun-29cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Cristalline 50cl",
    "price": "1.50€",
    "description": "Eau 50cl.",
    "image": "assets/products/155-boissons-cristalline-50cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Monster 50cl",
    "price": "3.00€",
    "description": "Boisson énergisante.",
    "image": "assets/products/156-boissons-monster-50cl.svg"
  },
  {
    "category": "Boissons",
    "name": "Coca 1.25L",
    "price": "3.50€",
    "description": "Bouteille 1.25L.",
    "image": "assets/products/157-boissons-coca-1-25l.svg"
  }
];
