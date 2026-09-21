export type ShopCategory={slug:string;name:string;description:string;service:string;icon:string;sourceId:string;parent:string|null;image?:string};
export type ShopProduct={id:string;slug:string;name:string;price:number;collections:string[];service:string;description:string;image:string;sourceUrl:string};
export const shopCategories:ShopCategory[]=[
  {
    "slug": "mens-apparel",
    "name": "Men’s apparel",
    "description": "Personalize everyday tees, long sleeves and tanks from Port & Company, District and Sport-Tek.",
    "service": "apparel",
    "icon": "Shirt",
    "sourceId": "182245657",
    "parent": null,
    "image": "/catalog/c182245657.jpg"
  },
  {
    "slug": "womens-apparel",
    "name": "Women’s apparel",
    "description": "Custom tees, tanks and polos, with fits made for your everyday wardrobe.",
    "service": "apparel",
    "icon": "Shirt",
    "sourceId": "182245658",
    "parent": null,
    "image": "/catalog/c182245658.jpg"
  },
  {
    "slug": "sweatshirts",
    "name": "Sweatshirts & hoodies",
    "description": "Make a fleece crewneck or pullover your own with a name, image or team design.",
    "service": "apparel",
    "icon": "Shirt",
    "sourceId": "182245656",
    "parent": null,
    "image": "/catalog/c182245656.jpg"
  },
  {
    "slug": "youth-baby",
    "name": "Youth & baby",
    "description": "Personalized pieces for the little ones, from family celebrations to everyday adventures.",
    "service": "apparel",
    "icon": "Baby",
    "sourceId": "182246158",
    "parent": null,
    "image": "/catalog/c182246158.jpg"
  },
  {
    "slug": "drinkware",
    "name": "Mugs & drinkware",
    "description": "Put a favorite photo, message or logo on mugs, tumblers and water bottles.",
    "service": "drinkware",
    "icon": "Coffee",
    "sourceId": "182965511",
    "parent": null,
    "image": "/catalog/c182965511.jpg"
  },
  {
    "slug": "engraved-gifts",
    "name": "Engravable gifts",
    "description": "Thoughtful details on wallets, pens, jewelry and gifts worth keeping.",
    "service": "engraving",
    "icon": "PenTool",
    "sourceId": "183025013",
    "parent": null,
    "image": "/catalog/c183025013.jpg"
  },
  {
    "slug": "embroidery",
    "name": "Embroidery",
    "description": "Names, logos and designs stitched onto caps, polos and other personal favorites.",
    "service": "embroidery",
    "icon": "Scissors",
    "sourceId": "183649082",
    "parent": null,
    "image": "/catalog/c183649082.jpg"
  },
  {
    "slug": "hats",
    "name": "Hats",
    "description": "Explore the OTTO FLEX cap collection and ask about adding your name or logo.",
    "service": "embroidery",
    "icon": "Scissors",
    "parent": "embroidery",
    "sourceId": "184041831",
    "image": "/catalog/c184041831.png"
  },
  {
    "slug": "polos",
    "name": "Polos",
    "description": "Port Authority polos for embroidered names and business logos.",
    "service": "embroidery",
    "icon": "Shirt",
    "parent": "embroidery",
    "sourceId": "184264064",
    "image": "/catalog/c184264064.jpg"
  },
  {
    "slug": "trump-hats",
    "name": "Trump hats",
    "description": "Specialty hats from the existing shop collection. Confirm design options with the studio.",
    "service": "embroidery",
    "icon": "Scissors",
    "parent": "embroidery",
    "sourceId": "185031477",
    "image": "/catalog/c185031477.jpg"
  }
];
export const shopProducts:ShopProduct[]=[
  {
    "id": "750701120",
    "slug": "essential-tee",
    "name": "Port & Company® Essential Tee",
    "price": 15,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A classic everyday tee for your words, artwork or team logo.",
    "image": "/catalog/p750701120.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Essential-Tee-p750701120"
  },
  {
    "id": "753572893",
    "slug": "tall-essential-tee",
    "name": "Port & Company® Tall Essential Tee",
    "price": 19,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "The Essential Tee in a tall fit, ready for a personal design.",
    "image": "/catalog/p753572893.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Tall-Essential-Tee-p753572893"
  },
  {
    "id": "753572800",
    "slug": "long-sleeve-essential-tee",
    "name": "Port & Company® Long Sleeve Essential Tee",
    "price": 19,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A long-sleeve canvas for a name, photo or custom graphic.",
    "image": "/catalog/p753572800.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Long-Sleeve-Essential-Tee-p753572800"
  },
  {
    "id": "758269758",
    "slug": "fleece-crewneck",
    "name": "Port & Company® Essential Fleece Crewneck Sweatshirt",
    "price": 34.95,
    "collections": [
      "sweatshirts",
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A fleece crewneck for personalized everyday layers and team apparel.",
    "image": "/catalog/p758269758.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Essential-Fleece-Crewneck-Sweatshirt-p758269758"
  },
  {
    "id": "753843636",
    "slug": "sport-tek-tough-tee",
    "name": "Sport-Tek® PosiCharge® Tough Tee®",
    "price": 15,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A Sport-Tek tee for your next team, event or personal project.",
    "image": "/catalog/p753843636.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Sport-Tek-r-PosiCharge-r-Tough-Tee-r-p753843636"
  },
  {
    "id": "754887703",
    "slug": "district-v-neck",
    "name": "District® Very Important Tee® V-Neck",
    "price": 15,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A V-neck option for a design that feels like you.",
    "image": "/catalog/p754887703.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/District-r-Very-Important-Tee-r-V-Neck-p754887703"
  },
  {
    "id": "757328765",
    "slug": "youth-essential-tee",
    "name": "Port & Company® Youth Essential Tee",
    "price": 15,
    "collections": [
      "youth-baby",
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A youth tee for family designs, birthdays and team occasions.",
    "image": "/catalog/p757328765.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Youth-Essential-Tee-p757328765"
  },
  {
    "id": "755521124",
    "slug": "concert-tank",
    "name": "District® The Concert Tank®",
    "price": 15,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A simple tank for your next personalized look.",
    "image": "/catalog/p755521124.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/District-r-The-Concert-Tank-r-p755521124"
  },
  {
    "id": "759399507",
    "slug": "district-important-tee",
    "name": "District® Very Important Tee®",
    "price": 15,
    "collections": [
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "A versatile District tee for your custom text or artwork.",
    "image": "/catalog/p759399507.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/District-r-Very-Important-Tee-r-p759399507"
  },
  {
    "id": "759399509",
    "slug": "fleece-pullover-hoodie",
    "name": "Port & Company® Essential Fleece Pullover Hooded Sweatshirt",
    "price": 45,
    "collections": [
      "sweatshirts",
      "mens-apparel"
    ],
    "service": "apparel",
    "description": "Add a personal design to a fleece pullover hoodie.",
    "image": "/catalog/p759399509.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Essential-Fleece-Pullover-Hooded-Sweatshirt-p759399509"
  },
  {
    "id": "755521131",
    "slug": "womens-essential-tee",
    "name": "Port & Company® Women’s Essential Tee",
    "price": 15,
    "collections": [
      "womens-apparel"
    ],
    "service": "apparel",
    "description": "An everyday women’s tee with room for your own creative touch.",
    "image": "/catalog/p755521131.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Womens-Essential-Tee-p755521131"
  },
  {
    "id": "756709457",
    "slug": "womens-performance-v-neck",
    "name": "Port & Company® Women’s Performance Blend V-Neck Tee",
    "price": 15,
    "collections": [
      "womens-apparel"
    ],
    "service": "apparel",
    "description": "A women’s performance-blend V-neck for a custom design.",
    "image": "/catalog/p756709457.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Womens-Performance-Blend-V-Neck-Tee-p756709457"
  },
  {
    "id": "755521150",
    "slug": "womens-fitted-tee",
    "name": "District® Women’s Fitted Very Important Tee®",
    "price": 15,
    "collections": [
      "womens-apparel"
    ],
    "service": "apparel",
    "description": "A fitted women’s tee for personalized gifts and everyday wear.",
    "image": "/catalog/p755521150.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/District-r-Womens-Fitted-Very-Important-Tee-r-p755521150"
  },
  {
    "id": "756764001",
    "slug": "womens-cotton-tank",
    "name": "Port & Company® Women’s Core Cotton Tank Top",
    "price": 15,
    "collections": [
      "womens-apparel"
    ],
    "service": "apparel",
    "description": "A cotton tank top to make your own with text or artwork.",
    "image": "/catalog/p756764001.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Womens-Core-Cotton-Tank-Top-p756764001"
  },
  {
    "id": "760313108",
    "slug": "womens-grid-polo",
    "name": "Port Authority® Women’s Dry Zone® Grid Polo",
    "price": 19.95,
    "collections": [
      "womens-apparel",
      "embroidery",
      "polos"
    ],
    "service": "embroidery",
    "description": "A women’s polo for a stitched name or business logo.",
    "image": "/catalog/p760313108.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-Authority-r-Womens-Dry-Zone-r-Grid-Polo-p760313108"
  },
  {
    "id": "757330560",
    "slug": "youth-fleece-hoodie",
    "name": "Port & Company® Youth Core Fleece Pullover Hooded Sweatshirt",
    "price": 35,
    "collections": [
      "youth-baby"
    ],
    "service": "apparel",
    "description": "A youth pullover for family projects and personalized gifts.",
    "image": "/catalog/p757330560.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-&-Company-r-Youth-Core-Fleece-Pullover-Hooded-Sweatshirt-p757330560"
  },
  {
    "id": "757330568",
    "slug": "infant-bodysuit",
    "name": "Rabbit Skins™ Infant Short Sleeve Baby Rib Bodysuit",
    "price": 15,
    "collections": [
      "youth-baby"
    ],
    "service": "apparel",
    "description": "A baby bodysuit for a name, milestone or family celebration.",
    "image": "/catalog/p757330568.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Rabbit-Skins-tm-Infant-Short-Sleeve-Baby-Rib-Bodysuit-p757330568"
  },
  {
    "id": "757773694",
    "slug": "toddler-jersey-tee",
    "name": "Rabbit Skins™ Toddler Fine Jersey Tee",
    "price": 15,
    "collections": [
      "youth-baby"
    ],
    "service": "apparel",
    "description": "A toddler tee for a small person with a big personality.",
    "image": "/catalog/p757773694.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Rabbit-Skins-tm-Toddler-Fine-Jersey-Tee-p757773694"
  },
  {
    "id": "757794066",
    "slug": "color-mug-11oz",
    "name": "Custom Color Mugs 11oz",
    "price": 22,
    "collections": [
      "drinkware"
    ],
    "service": "drinkware",
    "description": "An 11 oz mug for a favorite photo, message or logo.",
    "image": "/catalog/p757794066.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Custom-Color-Mugs-11oz-p757794066"
  },
  {
    "id": "758219341",
    "slug": "custom-water-bottle",
    "name": "Custom Water Bottles",
    "price": 39,
    "collections": [
      "drinkware"
    ],
    "service": "drinkware",
    "description": "Make a water bottle personal with your text or design.",
    "image": "/catalog/p758219341.png",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Custom-Water-Bottles-p758219341"
  },
  {
    "id": "757794053",
    "slug": "white-mug",
    "name": "Custom White Mugs",
    "price": 20,
    "collections": [
      "drinkware"
    ],
    "service": "drinkware",
    "description": "A white mug that gives your photo or message center stage.",
    "image": "/catalog/p757794053.png",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Custom-White-Mugs-p757794053"
  },
  {
    "id": "763702881",
    "slug": "engraved-wallet",
    "name": "Wallets",
    "price": 35,
    "collections": [
      "engraved-gifts"
    ],
    "service": "engraving",
    "description": "Add a personal detail to a wallet for a thoughtful everyday gift.",
    "image": "/catalog/p763702881.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Wallets-p763702881"
  },
  {
    "id": "763702885",
    "slug": "engraved-pen",
    "name": "Pens",
    "price": 35,
    "collections": [
      "engraved-gifts"
    ],
    "service": "engraving",
    "description": "A personalized pen for a milestone, a colleague or your own desk.",
    "image": "/catalog/p763702885.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/PENS-p763702885"
  },
  {
    "id": "761938022",
    "slug": "otto-flex-6-panel",
    "name": "OTTO CAP “OTTO FLEX” Fitted 6 Panel Low Profile Baseball Cap",
    "price": 24.95,
    "collections": [
      "embroidery",
      "hats"
    ],
    "service": "embroidery",
    "description": "A six-panel OTTO FLEX cap for a name, logo or stitched design.",
    "image": "/catalog/p761938022.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/OTTO-CAP-OTTO-FLEX-Fitted-6-Panel-Low-Profile-Baseball-Cap-p761938022"
  },
  {
    "id": "765505110",
    "slug": "otto-flex-5-panel",
    "name": "OTTO CAP “OTTO FLEX” Fitted 5 Panel Low Profile Baseball Cap",
    "price": 24.95,
    "collections": [
      "embroidery",
      "hats"
    ],
    "service": "embroidery",
    "description": "A five-panel OTTO FLEX cap with a low-profile shape.",
    "image": "/catalog/p765505110.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/OTTO-CAP-OTTO-FLEX-Fitted-5-Panel-Low-Profile-Baseball-Cap-p765505110"
  },
  {
    "id": "766487871",
    "slug": "otto-flex-5-panel-special",
    "name": "OTTO CAP “OTTO FLEX” Fitted 5 Panel Low Profile Baseball Cap — Special design",
    "price": 19.95,
    "collections": [
      "embroidery",
      "hats",
      "trump-hats"
    ],
    "service": "embroidery",
    "description": "A special-design cap from the existing collection. Ask the studio about the pictured design and customization options.",
    "image": "/catalog/p766487871.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/OTTO-CAP-OTTO-FLEX-Fitted-5-Panel-Low-Profile-Baseball-Cap-p766487871"
  },
  {
    "id": "766487870",
    "slug": "trump-hats-women",
    "name": "Trump Hats for Women",
    "price": 19.95,
    "collections": [
      "embroidery",
      "trump-hats"
    ],
    "service": "embroidery",
    "description": "A hat from the existing specialty collection. Confirm the design and available options with the studio.",
    "image": "/catalog/p766487870.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Trump-Hats-For-Woman-p766487870"
  },
  {
    "id": "765505117",
    "slug": "grid-polo",
    "name": "Port Authority® Dry Zone® Grid Polo",
    "price": 19.95,
    "collections": [
      "embroidery",
      "polos"
    ],
    "service": "embroidery",
    "description": "A polo for embroidered business logos, names and team apparel.",
    "image": "/catalog/p765505117.jpg",
    "sourceUrl": "https://www.makeitpersonalized.com/shop/Port-Authority-r-Dry-Zone-r-Grid-Polo-p765505117"
  }
];
export const findProduct=(slug:string)=>shopProducts.find(p=>p.slug===slug);
export const priceLabel=(price:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(price);
export const productUrl=(p:ShopProduct)=>'/shop/products/'+p.slug;
