const fs = require('fs');
const path = require('path');

const categories = [
    { name: 'Top Offers', keyword: 'offer' },
    { name: 'Grocery', keyword: 'grocery' },
    { name: 'Mobile', keyword: 'mobile' },
    { name: 'Fashion', keyword: 'fashion' },
    { name: 'Electronics', keyword: 'electronics' },
    { name: 'Home', keyword: 'home' },
    { name: 'Appliances', keyword: 'appliances' },
    { name: 'Travel', keyword: 'travel' },
    { name: 'Beauty, Toys & More', keyword: 'beauty' }
];

const existingProducts = [
    {
        id: 'product1',
        url: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534687/rkuo9ld8ng2sdhfq0s5s.jpg',
        detailUrl: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534687/rkuo9ld8ng2sdhfq0s5s.jpg',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day',
        category: 'Home'
    },
    {
        id: 'product2',
        url: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534691/fk9azpn7diavsxqtudwm.jpg',
        detailUrl: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534691/fk9azpn7diavsxqtudwm.jpg',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        quantity: 1,
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off',
        tagline: 'Pestige, Nova & more',
        category: 'Appliances'
    },
    {
        id: 'product3',
        url: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534693/oderhzscztoz94hmpidh.jpg',
        detailUrl: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534693/oderhzscztoz94hmpidh.jpg',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        },
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        quantity: 1,
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day',
        category: 'Beauty, Toys & More'
    },
    {
        id: 'product4',
        url: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534694/hpezpzqcnlxsjgcq4vi2.jpg',
        detailUrl: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534694/hpezpzqcnlxsjgcq4vi2.jpg',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        quantity: 1,
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Best Seller',
        category: 'Electronics'
    },
    {
        id: 'product5',
        url: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534545/tb7aak7ihatkh1jlwuwe.jpg',
        detailUrl: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534545/tb7aak7ihatkh1jlwuwe.jpg',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        },
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        quantity: 1,
        description: '',
        discount: 'From ₹499',
        tagline: 'Kubra, Nova & more',
        category: 'Appliances'
    }
];

// Helper to generate distinct products for categories
const generateCategoryProducts = () => {
    let products = [...existingProducts];
    let idCounter = 100;

    const categoryData = {
        'Top Offers': [
            { title: 'iPhone 13', desc: 'Best deal on iPhone 13', price: 49999, mrp: 69999, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534547/ve6rkcgkswjza3prvmc5.jpg' },
            { title: 'Samsung S21 FE', desc: 'Flagship killer at steal price', price: 29999, mrp: 74999, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534548/zcbh6bqnkghghm511ugr.jpg' },
            { title: 'Sony HEADPHONES', desc: 'Noise cancelling premium sound', price: 19999, mrp: 29900, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534550/bm6a8glrmefvb4i3gaev.jpg' },
            { title: 'Nike Jordans', desc: 'Limited edition sneakers', price: 12999, mrp: 18999, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534552/pqlskp3phei2dnrj30qi.jpg' },
            { title: 'Dyson V8', desc: 'Vacuum cleaner massive discount', price: 29900, mrp: 45900, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534554/yuwhffxwskb6h9zbatdx.jpg' },
            { title: 'LG 55" 4K TV', desc: 'Cinema experience at home', price: 45999, mrp: 79990, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534556/uqwzolqpt1tcpjugxbfg.jpg' },
            { title: 'Canon EOS 1500D', desc: 'DSLR Camera kit lens', price: 41990, mrp: 47990, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534558/y3iyv1s7dejbkuuv0de7.jpg' },
            { title: 'Gaming Laptop', desc: 'ASUS TUF Gaming F15', price: 54990, mrp: 85990, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534560/kon5ac9chphsehiyugxa.jpg' }
        ],
        'Grocery': [
            { title: 'Almonds 1kg', desc: 'Premium quality California almonds', price: 899, mrp: 1200, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534563/yf4huma2spdrkkqw4znr.jpg' },
            { title: 'Basmati Rice 5kg', desc: 'Long grain aromatic rice', price: 650, mrp: 900, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534565/roik6wyfirvtcvgtgvja.jpg' },
            { title: 'Tata Tea Gold', desc: '1kg Premium Tea', price: 450, mrp: 600, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534567/ero2qdgwkutmiqs7vvqz.jpg' },
            { title: 'Olive Oil 1L', desc: 'Extra Virgin Olive Oil', price: 999, mrp: 1499, img: 'https://res.cloudinary.com/dntayojln/image/upload/v1769534568/izya680aaf2lxohvpau0.jpg' },
            { title: 'Chocolates Pack', desc: 'Cadbury Celebrations Box', price: 250, mrp: 299, img: 'https://rukminim2.flixcart.com/image/612/612/kxxl9jk0/chocolate/2/7/z/-original-imaga9ezwz78y4y2.jpeg?q=70' },
            { title: 'Detergent 4kg', desc: 'Surf Excel Matic Liquid', price: 780, mrp: 950, img: 'https://rukminim2.flixcart.com/image/612/612/l51d30w0/washing-powder/z/q/3/-original-imagft5z9fgu7xhg.jpeg?q=70' },
            { title: 'Cashews 500g', desc: 'Whole Cashews Premium', price: 450, mrp: 800, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/m/p/r/-original-imaghhvfjpyphkbf.jpeg?q=70' },
            { title: 'Honey 1kg', desc: 'Dabur Honey Squeeze', price: 399, mrp: 450, img: 'https://rukminim2.flixcart.com/image/612/612/k6fd47k0/honey/z/m/3/1-honey-squeeze-bottle-dabur-original-imafzwhj6ggv7h52.jpeg?q=70' }
        ],
        'Mobile': [
            { title: 'Realme 11 Pro', desc: '5G, 100MP Camera', price: 23999, mrp: 27999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/x/c/-original-imagqadpnygfnn2v.jpeg?q=70' },
            { title: 'Pixel 7a', desc: 'Google AI Camera', price: 39999, mrp: 43999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70' },
            { title: 'Vivo V29', desc: 'Aura Light Portrait', price: 32999, mrp: 38999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/4/-original-imagw7r46cbe7r4s.jpeg?q=70' },
            { title: 'OnePlus 11R', desc: 'Snapdragon 8+ Gen 1', price: 39999, mrp: 44999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/y/k/-original-imagnqj77u9hyehf.jpeg?q=70' },
            { title: 'Redmi Note 12', desc: 'Super AMOLED 120Hz', price: 16999, mrp: 21999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghkweb36dxzxn.jpeg?q=70' },
            { title: 'POCO X5', desc: '5G Performance King', price: 14999, mrp: 20999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/m/-original-imagnvpwv74v4x8n.jpeg?q=70' },
            { title: 'Infinix Note 30', desc: '108MP Camera', price: 14999, mrp: 19999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagqg57m6g72kse.jpeg?q=70' },
            { title: 'Motorola G84', desc: 'pOLED Display', price: 18999, mrp: 22999, img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/a/i/-original-imagt5u6v85w5v0e.jpeg?q=70' }
        ],
        'Fashion': [
            { title: 'Men Jeans', desc: 'Slim Fit Blue Denim', price: 899, mrp: 2999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/y/r/y/32-23471198-roadster-original-imagkmg2h4h2hgyh.jpeg?q=70' },
            { title: 'Women Kurta', desc: 'Cotton Printed Kurta', price: 499, mrp: 1499, img: 'https://rukminim2.flixcart.com/image/612/612/kzhbfrk0/kurta/a/s/s/l-vcku1389-v-tradition-original-imagbgy2zrnzw2gs.jpeg?q=70' },
            { title: 'Sneakers', desc: 'Casual White Sneakers', price: 699, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/1/8/p/-original-imaghvb7kkpy73vn.jpeg?q=70' },
            { title: 'Watches', desc: 'Analog Watch for Men', price: 1299, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/1/h/-original-imagrdzbh9k428yq.jpeg?q=70' },
            { title: 'Handbag', desc: 'Stylish Tote Bag', price: 899, mrp: 2599, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/m/d/v/-original-imagq6z6g4z3q3h7.jpeg?q=70' },
            { title: 'T-Shirts', desc: 'Pack of 2 Cotton Tees', price: 499, mrp: 1299, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/I/S/O/s-t428bldp-eyebogler-original-imag57x6pr5z3h3t.jpeg?q=70' },
            { title: 'Saree', desc: 'Georgette Printed Saree', price: 699, mrp: 2999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/z/g/free-3286s235-samah-unstitched-original-imagnh78qg44y2c4.jpeg?q=70' },
            { title: 'Sunglasses', desc: 'Aviator Style', price: 399, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/m/n/p/-original-imagyz6h8k8k3h8j.jpeg?q=70' }
        ],
        'Electronics': [
            { title: 'Power Bank', desc: '10000mAh Fast Charging', price: 999, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/d/a/f/-original-imagky3e8y5te2d5.jpeg?q=70' },
            { title: 'Bluetooth Speaker', desc: 'JBL Go 3 Waterproof', price: 2999, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/kkh6zrk0/speaker/mobile-tablet-speaker/h/n/7/go-3-jbl-original-imafzth6szetd6zg.jpeg?q=70' },
            { title: 'Router', desc: 'TP-Link Archer SC6', price: 1999, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/kgv5x8w0/router/y/w/z/archer-c6-tp-link-original-imafxy88a9gkqh9y.jpeg?q=70' },
            { title: 'Keyboard Mouse', desc: 'Logitech Wireless Combo', price: 1499, mrp: 2499, img: 'https://rukminim2.flixcart.com/image/612/612/k0lbdzk0/keyboard/laptop-keyboard/p/w/v/logitech-mk220-original-imafkdcb32bssy5s.jpeg?q=70' },
            { title: 'Hard Drive', desc: '1TB External HDD', price: 3999, mrp: 5999, img: 'https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/external-hard-drive/hdd/b/p/e/wd-wdbu6y0015bbk-wesn-original-imafvsw2qj3y44y8.jpeg?q=70' },
            { title: 'Monitor', desc: 'Samsung 24" IPS', price: 9999, mrp: 16999, img: 'https://rukminim2.flixcart.com/image/312/312/l5ld8y80/monitor/l/k/s/-original-imagg897sfjn7wbd.jpeg?q=70' },
            { title: 'Printer', desc: 'HP Deskjet Ink Advantage', price: 5999, mrp: 8999, img: 'https://rukminim2.flixcart.com/image/312/312/k6fd47k0/printer/c/g/u/hp-deskjet-plus-ink-advantage-6075-original-imafzw2222ak74e2.jpeg?q=70' },
            { title: 'Game Controller', desc: 'Cosmic Byte Wireless', price: 1499, mrp: 2499, img: 'https://rukminim2.flixcart.com/image/612/612/kmns7m80/gamepad/k/k/k/ares-wireless-cosmic-byte-original-imagfh66wyj2r6xh.jpeg?q=70' }
        ],
        'Home': [
            { title: 'Bedsheet', desc: 'Double Bed Cotton', price: 499, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/kz5vwy80/bedsheet/z/c/c/1-extra-light-olive-oil-1-plastic-bottle-olive-oil-figaro-original-imagb8f3zgy7cz3f.jpeg?q=70' }, // using placeholder
            { title: 'Curtains', desc: 'Set of 2 Door Curtains', price: 599, mrp: 1599, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/curtain/f/m/i/door-213-ag-do-2-ag-car-fashion-original-imagk4h8483ztfh9.jpeg?q=70' },
            { title: 'Wall Clock', desc: 'Vintage Design', price: 399, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/kydb30w0/wall-clock/s/w/p/1-vintage-design-wall-clock-for-home-kitchen-living-room-original-imagamy257y5y4ge.jpeg?q=70' },
            { title: 'Showpiece', desc: 'Buddha Statue', price: 299, mrp: 799, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/i/b/12-buddha-statue-decorative-showpiece-home-decoration-item-original-imagk5z5z5z5z5z5.jpeg?q=70' },
            { title: 'Cushion Covers', desc: 'Set of 5 Printed', price: 299, mrp: 899, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cushion-pillow-cover/2/7/z/-original-imaga9ezwz78y4y2.jpeg?q=70' },
            { title: 'Table Lamp', desc: 'Night Lamp for Bedroom', price: 450, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/table-lamp/u/h/y/-original-imagr739pxg2gqgg.jpeg?q=70' },
            { title: 'Water Bottle', desc: 'Stainless Steel 1L', price: 350, mrp: 799, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/y/3/d/-original-imaghx88zrgj46h2.jpeg?q=70' },
            { title: 'Towel Set', desc: 'Bath Towel Cotton', price: 399, mrp: 799, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bath-towel/m/p/r/-original-imaghhvfjpyphkbf.jpeg?q=70' }
        ],
        'Appliances': [
            { title: 'Mixer Grinder', desc: '500W 3 Jars', price: 1499, mrp: 3299, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/mixer-grinder-juicer/z/q/3/-original-imagft5z9fgu7xhg.jpeg?q=70' },
            { title: 'Iron Box', desc: 'Dry Iron Lightweight', price: 499, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/k6fd47k0/iron/z/m/3/1-iron-squeeze-bottle-dabur-original-imafzwhj6ggv7h52.jpeg?q=70' },
            { title: 'Induction Cooktop', desc: 'Preset Menus', price: 1999, mrp: 4999, img: 'https://rukminim2.flixcart.com/image/612/612/kkh6zrk0/induction-cook-top/1/1/1/induction-cooktop-prestige-original-imafzt896898888.jpeg?q=70' },
            { title: 'Kettle', desc: '1.5L Electric Kettle', price: 699, mrp: 1299, img: 'https://rukminim2.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70' },
            { title: 'Toaster', desc: '2 Slice Pop-up', price: 1299, mrp: 2199, img: 'https://rukminim2.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70' },
            { title: 'Water Purifier', desc: 'RO+UV+MF', price: 6999, mrp: 14999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/d/a/f/-original-imagky3e8y5te2d5.jpeg?q=70' },
            { title: 'Fan', desc: 'High Speed Ceiling Fan', price: 1499, mrp: 2499, img: 'https://rukminim2.flixcart.com/image/612/612/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70' },
            { title: 'Vacuum', desc: 'Handheld Vacuum', price: 1999, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/ksez24w0/vacuum-cleaner/l/p/r/v8-absolute-cord-free-vacuum-cleaner-dyson-original-imag5zz3yyqygz4x.jpeg?q=70' }
        ],
        'Travel': [
            { title: 'Trolley Bag', desc: 'Hard Sided Cabin Luggage', price: 1999, mrp: 6999, img: 'https://rukminim1.flixcart.com/flap/200/200/image/74bc985c62f19245.jpeg?q=70' },
            { title: 'Duffel Bag', desc: 'Gym & Travel Bag', price: 699, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/duffel-bag/y/s/g/-original-imah23srqvgfjjzb.jpeg?q=70' },
            { title: 'Travel Pillow', desc: 'Neck Support Pillow', price: 399, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/travel-pillow/2/7/z/-original-imaga9ezwz78y4y2.jpeg?q=70' },
            { title: 'Backpack', desc: 'Travel Rucksack 50L', price: 1499, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/y/s/g/-original-imah23srqvgfjjzb.jpeg?q=70' },
            { title: 'Passport Holder', desc: 'Leather Wallet', price: 299, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet/card-holder/l/u/f/1-pu-leather-rfid-protected-genuine-leather-wallet-for-men-original-imagwchntfqpgfvz.jpeg?q=70' },
            { title: 'Camping Tent', desc: '2 Person Dome Tent', price: 1999, mrp: 3999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/tent/2/z/4/-original-imagqg57m6g72kse.jpeg?q=70' },
            { title: 'Travel Adapter', desc: 'Universal Plug', price: 499, mrp: 1499, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/adapter/u/h/y/-original-imagr739pxg2gqgg.jpeg?q=70' },
            { title: 'Power Bank', desc: '20000mAh for Travel', price: 1499, mrp: 2999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/d/a/f/-original-imagky3e8y5te2d5.jpeg?q=70' }
        ],
        'Beauty, Toys & More': [
            { title: 'Lipstick', desc: 'Matte Long Lasting', price: 299, mrp: 599, img: 'https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70' },
            { title: 'Teddy Bear', desc: 'Soft Plush Toy 3ft', price: 599, mrp: 1599, img: 'https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70' },
            { title: 'RC Car', desc: 'Remote Control Car', price: 899, mrp: 1999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/rc-toy/4/x/4/-original-imagw7r46cbe7r4s.jpeg?q=70' },
            { title: 'Board Game', desc: 'Monopoly Classic', price: 799, mrp: 1299, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/board-game/1/8/p/-original-imaghvb7kkpy73vn.jpeg?q=70' },
            { title: 'Face Wash', desc: 'Neem Face Wash 200ml', price: 199, mrp: 299, img: 'https://rukminim1.flixcart.com/image/200/200/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70' },
            { title: 'Perfume', desc: 'Men\'s Fragrance 100ml', price: 499, mrp: 1299, img: 'https://rukminim2.flixcart.com/image/612/612/k6fd47k0/honey/z/m/3/1-honey-squeeze-bottle-dabur-original-imafzwhj6ggv7h52.jpeg?q=70' },
            { title: 'Action Figure', desc: 'Superhero Toy', price: 399, mrp: 999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/2/z/4/-original-imagqg57m6g72kse.jpeg?q=70' },
            { title: 'Makeup Kit', desc: 'Complete Vanity Set', price: 1299, mrp: 2999, img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/d/a/f/-original-imagky3e8y5te2d5.jpeg?q=70' }
        ]
    };

    const cloudinaryImages = [
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534687/rkuo9ld8ng2sdhfq0s5s.jpg', // 1 Kettle
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534691/fk9azpn7diavsxqtudwm.jpg', // 2 Sandwich
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534693/oderhzscztoz94hmpidh.jpg', // 3 Tube
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534694/hpezpzqcnlxsjgcq4vi2.jpg', // 4 Smartwatch
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534545/tb7aak7ihatkh1jlwuwe.jpg', // 5 Hair Dryer
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534547/ve6rkcgkswjza3prvmc5.jpg', // 6 iPhone
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534548/zcbh6bqnkghghm511ugr.jpg', // 7 S21
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534550/bm6a8glrmefvb4i3gaev.jpg', // 8 Sony
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534552/pqlskp3phei2dnrj30qi.jpg', // 9 Nike
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534554/yuwhffxwskb6h9zbatdx.jpg', // 10 Dyson
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534556/uqwzolqpt1tcpjugxbfg.jpg', // 11 LG TV
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534558/y3iyv1s7dejbkuuv0de7.jpg', // 12 Canon
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534560/kon5ac9chphsehiyugxa.jpg', // 13 Laptop
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534563/yf4huma2spdrkkqw4znr.jpg', // 14 Almonds
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534565/roik6wyfirvtcvgtgvja.jpg', // 15 Rice
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534567/ero2qdgwkutmiqs7vvqz.jpg', // 16 Tea
        'https://res.cloudinary.com/dntayojln/image/upload/v1769534568/izya680aaf2lxohvpau0.jpg'  // 17 Oil
    ];

    let imgIndex = 0;

    categories.forEach(cat => {
        const catProducts = categoryData[cat.name] || [];
        catProducts.slice(0, 8).forEach(item => {
            // Use existing Cloudinary URL if present, otherwise cycle through the list
            let imageUrl = item.img;
            if (!imageUrl || !imageUrl.includes('res.cloudinary.com')) {
                imageUrl = cloudinaryImages[imgIndex % cloudinaryImages.length];
                imgIndex++;
            }

            const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);
            products.push({
                id: `product_${idCounter++}`,
                url: imageUrl,
                detailUrl: imageUrl,
                title: {
                    shortTitle: item.title,
                    longTitle: `${item.title} - ${item.desc}`
                },
                price: {
                    mrp: item.mrp,
                    cost: item.price,
                    discount: `${discount}% off`
                },
                quantity: 1,
                description: item.desc,
                discount: `Min ${discount - 5}% Off`,
                tagline: 'Best Seller',
                category: cat.name
            });
        });
    });

    return products;
};

const allProducts = generateCategoryProducts();

const fileContent = `export const products = ${JSON.stringify(allProducts, null, 4)};`;

fs.writeFileSync(path.join(__dirname, 'server/constants/product.js'), fileContent);
console.log('✅ Generated product.js with ' + allProducts.length + ' products');
