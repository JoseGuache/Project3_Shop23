const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Mens' },
    { name: 'Womens' },
    { name: 'Kids' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Jordan 1 Retro High OG "Chicago Lost and Found"',
      description:
        'Undoubtedly the most popular and best Jordans of all time, the Air Jordan 1 Retro Chicago are a collector’s dream. Last released in 2015, but don’t expect it to be easy to come by because this iconic silhouette has become a staple for street ballers and basketball fans. Since premiering on The Last Dance, the Chicago colourway has skyrocketed in popularity, but you can still get your hands on a pair if you have cash to the tune of $4000 AUD.',
      image: 'Jordan-1-Retro-High-OG.jpg',
      category: categories[0]._id,
      price: 299.99,
      quantity: 500
    },
    {
      name: 'Jordan 3 Retro "Black Cement"',
      description:
        'Back in 2018, the infamous Jordan 3 Retro OG ushered in a new era for the brand. It was the first time the original ‘Nike Air” branding was featured on the Black Cement since its 2001 incarnation. These iconic, elephant-print emblazoned sneakers were released on His Airness’ 55th birthday, so there’s a little celebration with every pair. Without a doubt, one of the best-looking Jordans money can buy.',
      image: 'Jordan-3-Black-Cement.jpg',
      category: categories[0]._id,
      price: 339.99,
      quantity: 500
    },
    {
      name: 'Jordan 5 "Fire Red"',
      category: categories[0]._id,
      description:
        'It might not look like it, but the 5 Fire Red Retro OG is one of the newest pieces in the Air Jordan portfolio. The retro design was released in early 2020 as part of the silhouette’s 30th anniversary. This variation is essentially identical to the OG pair from 1990, featuring smooth white leather construction on the upper and a fierce black midsole with Fire Red shark teeth to make it one of the most popular Jordans of all time.',
      image: 'Air-Jordan-5-Fire-Red.jpg',
      price: 249.99,
      quantity: 20
    },
    {
      name: 'Jordan 4 "Bred"',
      category: categories[0]._id,
      description:
        'They say a classic never dies, and the Air Jordan 4 is one example of true longevity. The ‘Black Cement or Bred 4, comes with a red sole, black upper plus grey accents, white midsole plus black, with white and grey accents. While chunky compared to more modern designs, you can’t deny this is one of the best-looking Jordans ever created.',
      image: 'Air-Jordan-4-Bred.jpg',
      price: 449.99,
      quantity: 50
    },
    {
      name: 'Jordan 11 Retro "Concord"',
      category: categories[0]._id,
      description:
        'Way back in 1995, Michael Jordan stepped onto the court and into sneaker history with this now iconic pair of Air Jordan XIs. At the time, the never-before-seen silhouette was groundbreaking, with its patent leather upper and translucent sole. More than 30 years on, the Concord XI is still referred to as one of the best Air Jordan shoes ever and thanks to the number 45 at the heel, also one of the biggest collector items.',
      image: 'Jordan-11-Retro-Concord.jpg',
      price: 499.99,
      quantity: 100
    },
    {
      name: 'Jordan 6 "Black Infrared"',
      category: categories[0]._id,
      description:
        'INFRARED is pretty much the ultimate Air Jordan sneaker colour, and the Jordan 6 INFRARED pair features a black upper, black midsole plus red accents, and a translucent sole. Not only is this one of the most popular Jordans it’s also the shoe MJ wore when he won his first championship in 1991, averaging 31.2 points, 11.4 assists, and 6.6 rebounds per game in the finals. GOAT status.',
      image: 'Air-Jordan-6-Black-Infrared.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Jordan 1 Retro High "Pine Green"',
      category: categories[0]._id,
      description:
        'Expanding the “Black Toe” lineup, these Pine Green Retro high tops aren’t just one of the best Air Jordan sneakers ever made, they’re probably the only ones that Celtics fans can embrace. The upper of this Jordan 1 Retro High is constructed from white tumbled leather. A black leather Swoosh, sail midsole, and pine green outsole complete this design.',
      image: 'Air-Jordan-Retro-1-Pine-Green.jpg',
      price: 324.99,
      quantity: 30
    },
    {
      name: 'Air Jordan 3 Retro "UNC"',
      category: categories[0]._id,
      description:
        'The 2020 edition of these classic J’s features a white tumbled leather upper with grey elephant print mudguards and valor blue detailing. These once-rare Air Jordans sport a former Player-Exclusive colourway for students at the University of North Carolina, however, in recent years the colourway has been opened to the public so expect to pay around $600 AUD.',
      image: 'Jordan3-UNC.jpg',
      price: 429.99,
      quantity: 100
    },
    {
      name: 'Jordan 11 "Bred"',
      category: categories[0]._id,
      description: 'First worn on NBA courts back in April 1996, the AJ11 Bred is playoff-ready and one of the most popular Jordans money can buy. This variation is the 2019 edition, which marked the first release for the style in seven years. The footwear ranks high on MJ’s grail and is undoubtedly one of the best Air Jordan shoes of all time.',
      image: 'Jordan11-Bred.jpg',
      price: 299.99,
      quantity: 1000
    },
    {
      name: 'Air Jordan 4 Retro "What The"',
      category: categories[0]._id,
      description:
        'Released for His Airness’s 30th anniversary, the special-edition “What The” colourway is one of the best looking Jordans of all time. This blue AJ4 features colour blocking in a mix of White/Cement, Military Blue, Fire Red, and Black/Cement. All topped off with ‘Nike Air’ branding on the heel tabs.',
      image: 'Jordan4-WhatThe.jpg',
      price: 399.99,
      quantity: 1000
    },
    {
      name: 'Jordan 1 Retro High "Shadow',
      category: categories[0]._id,
      description:
        'Having only hit shelves three times in the brand’s 30-year history, the OG Shadow is a must-have for collectors and one of the best Air Jordans of all time. The footwear features a black and grey leather upper with original “Nike Air” branding on the tongue tag and insoles.',
      image: 'Jordan1-Shadow.jpg',
      price: 294.99,
      quantity: 100
    },
    {
      name: 'Air Jordan 1 Retro "Shattered Backboard',
      category: categories[0]._id,
      description:
        'Inspired by the orange and black jersey that Michael Jordan wore when he shattered a backboard in an Italian exhibition game in 1986, this Air Jordan 1 shattered backboard is one of the rarest Air Jordan 1 model money can buy. A deadstock pair will set you back more than $2000 AUD.',
      image: 'AirJordan1-SG.jpg',
      price: 699.99,
      quantity: 600
    },
    {
      name: 'Jordan 1 Retro High OG "Chicago Lost and Found"',
      description:
        'Undoubtedly the most popular and best Jordans of all time, the Air Jordan 1 Retro Chicago are a collector’s dream. Last released in 2015, but don’t expect it to be easy to come by because this iconic silhouette has become a staple for street ballers and basketball fans. Since premiering on The Last Dance, the Chicago colourway has skyrocketed in popularity, but you can still get your hands on a pair if you have cash to the tune of $4000 AUD.',
      image: 'Jordan-1-Retro-High-OG.jpg',
      category: categories[1]._id,
      price: 299.99,
      quantity: 500
    },
    {
      name: 'Jordan 3 Retro "Black Cement"',
      description:
        'Back in 2018, the infamous Jordan 3 Retro OG ushered in a new era for the brand. It was the first time the original ‘Nike Air” branding was featured on the Black Cement since its 2001 incarnation. These iconic, elephant-print emblazoned sneakers were released on His Airness’ 55th birthday, so there’s a little celebration with every pair. Without a doubt, one of the best-looking Jordans money can buy.',
      image: 'Jordan-3-Black-Cement.jpg',
      category: categories[0]._id,
      price: 339.99,
      quantity: 500
    },
    {
      name: 'Jordan 5 "Fire Red"',
      category: categories[0]._id,
      description:
        'It might not look like it, but the 5 Fire Red Retro OG is one of the newest pieces in the Air Jordan portfolio. The retro design was released in early 2020 as part of the silhouette’s 30th anniversary. This variation is essentially identical to the OG pair from 1990, featuring smooth white leather construction on the upper and a fierce black midsole with Fire Red shark teeth to make it one of the most popular Jordans of all time.',
      image: 'Air-Jordan-5-Fire-Red.jpg',
      price: 249.99,
      quantity: 20
    },
    {
      name: 'Jordan 4 "Bred"',
      category: categories[0]._id,
      description:
        'They say a classic never dies, and the Air Jordan 4 is one example of true longevity. The ‘Black Cement or Bred 4, comes with a red sole, black upper plus grey accents, white midsole plus black, with white and grey accents. While chunky compared to more modern designs, you can’t deny this is one of the best-looking Jordans ever created.',
      image: 'Air-Jordan-4-Bred.jpg',
      price: 449.99,
      quantity: 50
    },
    {
      name: 'Jordan 11 Retro "Concord"',
      category: categories[1]._id,
      description:
        'Way back in 1995, Michael Jordan stepped onto the court and into sneaker history with this now iconic pair of Air Jordan XIs. At the time, the never-before-seen silhouette was groundbreaking, with its patent leather upper and translucent sole. More than 30 years on, the Concord XI is still referred to as one of the best Air Jordan shoes ever and thanks to the number 45 at the heel, also one of the biggest collector items.',
      image: 'Jordan-11-Retro-Concord.jpg',
      price: 499.99,
      quantity: 100
    },
    {
      name: 'Jordan 6 "Black Infrared"',
      category: categories[1]._id,
      description:
        'INFRARED is pretty much the ultimate Air Jordan sneaker colour, and the Jordan 6 INFRARED pair features a black upper, black midsole plus red accents, and a translucent sole. Not only is this one of the most popular Jordans it’s also the shoe MJ wore when he won his first championship in 1991, averaging 31.2 points, 11.4 assists, and 6.6 rebounds per game in the finals. GOAT status.',
      image: 'Air-Jordan-6-Black-Infrared.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Jordan 1 Retro High "Pine Green"',
      category: categories[1]._id,
      description:
        'Expanding the “Black Toe” lineup, these Pine Green Retro high tops aren’t just one of the best Air Jordan sneakers ever made, they’re probably the only ones that Celtics fans can embrace. The upper of this Jordan 1 Retro High is constructed from white tumbled leather. A black leather Swoosh, sail midsole, and pine green outsole complete this design.',
      image: 'Air-Jordan-Retro-1-Pine-Green.jpg',
      price: 324.99,
      quantity: 30
    },
    {
      name: 'Air Jordan 3 Retro "UNC"',
      category: categories[1]._id,
      description:
        'The 2020 edition of these classic J’s features a white tumbled leather upper with grey elephant print mudguards and valor blue detailing. These once-rare Air Jordans sport a former Player-Exclusive colourway for students at the University of North Carolina, however, in recent years the colourway has been opened to the public so expect to pay around $600 AUD.',
      image: 'Jordan3-UNC.jpg',
      price: 429.99,
      quantity: 100
    },
    {
      name: 'Jordan 11 "Bred"',
      category: categories[1]._id,
      description: 'First worn on NBA courts back in April 1996, the AJ11 Bred is playoff-ready and one of the most popular Jordans money can buy. This variation is the 2019 edition, which marked the first release for the style in seven years. The footwear ranks high on MJ’s grail and is undoubtedly one of the best Air Jordan shoes of all time.',
      image: 'Jordan11-Bred.jpg',
      price: 299.99,
      quantity: 1000
    },
    {
      name: 'Air Jordan 4 Retro "What The"',
      category: categories[1]._id,
      description:
        'Released for His Airness’s 30th anniversary, the special-edition “What The” colourway is one of the best looking Jordans of all time. This blue AJ4 features colour blocking in a mix of White/Cement, Military Blue, Fire Red, and Black/Cement. All topped off with ‘Nike Air’ branding on the heel tabs.',
      image: 'Jordan4-WhatThe.jpg',
      price: 399.99,
      quantity: 1000
    },
    {
      name: 'Jordan 1 Retro High "Shadow',
      category: categories[1]._id,
      description:
        'Having only hit shelves three times in the brand’s 30-year history, the OG Shadow is a must-have for collectors and one of the best Air Jordans of all time. The footwear features a black and grey leather upper with original “Nike Air” branding on the tongue tag and insoles.',
      image: 'Jordan1-Shadow.jpg',
      price: 294.99,
      quantity: 100
    },
    {
      name: 'Air Jordan 1 Retro "Shattered Backboard',
      category: categories[1]._id,
      description:
        'Inspired by the orange and black jersey that Michael Jordan wore when he shattered a backboard in an Italian exhibition game in 1986, this Air Jordan 1 shattered backboard is one of the rarest Air Jordan 1 model money can buy. A deadstock pair will set you back more than $2000 AUD.',
      image: 'AirJordan1-SG.jpg',
      price: 699.99,
      quantity: 600
    },
    {
      name: 'Air Jordan 1 Retro "Pale Pink" (GS)',
      category: categories[2]._id,
      description:
        'Pick pink for the win! This pair pops to life with a bright mix of rosy hues. All your classic Jordan comforts are there too: Nike Air in the sole for a cushioned step, and that rubber cupsole for everyday comfort. Leather offers durability and structure. Encapsulated Nike Air-Sole units provide lightweight cushioning. Solid rubber outsoles give you everyday traction. Wings logo stamped on collar. Stitched-down Swoosh logo. Jumpman Air design on tongue. Textile lining and insole.',
      image: 'AirJordan1PalePinkMid.jpg',
      price: 269.99,
      quantity: 600
    },
    {
      name: 'Air Jordan 4 Retro "Cool Gray" (GS)',
      category: categories[2]._id,
      description:
        'After originally releasing in 2004, the Cool Grey 4 has not since been retroed until 2019. The "Cool Grey" color garnered attention when it was featured on a pair of Air Jordan 11 Retros in 2001. It seemed only fitting for Jordan to carry this tremendous colorway to a very notable design with the Air Jordan 4.',
      image: 'AirJordan4KidsCoolGray.jpg',
      price: 299.99,
      quantity: 600
    },
    {
      name: 'Air Jordan 4 Retro "Metallic Green" (GS)',
      category: categories[2]._id,
      description:
        'The Jordan 4 Retro Metallic Green (GS) is a striking colorway of the iconic Air Jordan 4 silhouette. This shoe features a combination of white and Metallic Green accents, creating a unique and eye-catching design.',
      image: 'AirJordan4MetallicGreen.jpg',
      price: 399.99,
      quantity: 600
    },
    {
      name: 'Air Jordan 4 Retro "Winterized Loyal Blue" (GS)',
      category: categories[2]._id,
      description:
        'The Air Jordan 4 Retro Winterized GS features a Loyal Blue leather upper and a rubberized synthetic material on the throat and mid-panel netting. The tongue utilizes the same rubberized material while the inner lining sports a fleece-like fabric for added warmth and comfort. A tonal heel plate with black Jumpman branding, a black mud guard, and a visible Air unit in the heel round out the look of the durable, redesigned Jordan 4.',
      image: 'AirJordan4RetroWinterized.jpg',
      price: 299.99,
      quantity: 600
    },
    {
      name: 'Air Jordan 4 Retro "White Cement" (GS)',
      category: categories[2]._id,
      description:
        'This sneaker features a white leather upper with speckled Cement Grey accents on the heel tabs and support wings. Hits of Fire Red on the tongue branding and black on the eyelets and heel branding contrast the upper. Other details include mesh netting on the sides and tongue, white laces, and black tongue lining. A black, Tech Grey, and Fire Red sole unit with speckled Cement Grey accents on the midsole and a visible Air window at the heel rounds out this sneaker’s design.',
      image: 'AirJordan4WhiteCement.jpg',
      price: 399.99,
      quantity: 600
    },
    {
      name: 'Jordan 11 Retro "Heiress Black Stingray" (GS)',
      category: categories[2]._id,
      description:
        'The Air Jordan 11 Retro Heiress Black Stingray GS comes in a black, metallic gold and white infrared color scheme. This sneaker boasts a glittering metallic top made of black suede. The mudguard on this Retro Heiress Air Jordan 11 in black for grade schoolers features an overall shiny appearance. Additionally, the player number of Michael Jordan, 23, is embroidered in a gold hue at the heel of this shoe.',
      image: 'AirJordan11RetroBlackStingray.jpg',
      price: 399.99,
      quantity: 600
    },
    {
      name: 'Jordan 11 Retro Low "Cool Grey" (GS)',
      category: categories[2]._id,
      description:
        'The Air Jordan 11 Retro Low Cool Grey GS, which is constructed in low-top design, has a a darker grey plain leather overlay, and a cool grey nubuck upper.',
      image: 'AirJordan11RetroCoolGreyLow.jpg',
      price: 274.99,
      quantity: 600
    },
    {
      name: 'Jordan 4 Retro "University Blue" (GS)',
      category: categories[2]._id,
      description:
        'Released in 2021, the Air Jordan 4 Retro University Blue GS brings a silhouette with a suede upper and a popular shade of blue inspired by the University of North Carolina. It has a bright blue pallet often with a Jumpman icon on the back, tongue, and sole. The upper made from University Blue Suede and black plastic lace holders on its throat.',
      image: 'AirJordanRetro4KidsBlueUni.jpg',
      price: 249.99,
      quantity: 600
    },
    {
      name: 'Jordan 3 retro "Black Cement" (GS)',
      category: categories[2]._id,
      description:
        'Originally released in 1988 and last seen in 2013, the Black Cement (2024) (GS) Jordan 3 Retro boasts a tumbled leather upper in black with tonal stitching. Elephant print decorates the leather overlays at the forefoot and heel, while perforations add texture to the gray leather around the collar. Pops of Fire Red stand out on the Jumpman logo, the first three eyelets, the bottom of the shoe, and the underside of the tongue. Padding in the tongue and collar completes the look and protects the ankle.',
      image: 'Jordan-3-Black-Cement-Kids.jpg',
      price: 99.99,
      quantity: 600
    },
    {
      name: 'Jordan 4 Retro "Lightning" (GS)',
      category: categories[2]._id,
      description:
        'Similar to the original Air Jordan 4 Retro Lightning, the 2021 Grade School edition features a mid-top with a bright yellow nubuck upper. The yellow nubuck upper boasts black molded eyelets and matching black netting. In addition to its impressive mid-top, the Air Jordan 4 Retro Lightning 2021 GS also features a molded Jumpman logo as well as dark grey accents on its wings, a white foam midsole, and a grey rubber outsole.',
      image: 'Jordan4RetroLightning.jpg',
      price: 174.99,
      quantity: 600
    },
    {
      name: 'Jordan 5 Retro "Racer Blue" (GS)',
      category: categories[2]._id,
      description:
        'The grade school sized (GS) Air Jordan 5 Retro Racer Blue GS uses a Black/Racer Blue/Reflective Silver colorway on this vintage 1990 silhouette. A bright blue midsole and a silver tongue pop against a black-on-black upper made of suede and nubuck. A blue Jumpman appears on the black heel, the silver tongue, and the white part of the outsole. The Racer Blue midsole features a jagged black hit and a visible Air unit. The outsole is matte black and translucent white with a "JORDAN" insignia.',
      image: 'Jordan5RetroMidRacerBlue.jpg',
      price: 199.99,
      quantity: 600
    },
    {
      name: 'Jordan 13 Retro "Black University Blue" (GS)',
      category: categories[2]._id,
      description:
        'The upper of the Air Jordan 13 Retro Black University Blue (GS) is made from a mix of textured leather and mesh materials. The upper also features a 3M reflective design pattern that gives an eye-catching effect when it reflects light. The shoe features a Phylon midsole with Zoom Air technology in the heel and forefoot, which offers excellent cushioning and responsiveness. The shoe also has a padded tongue and collar that provides added comfort and support for the wearer. Inside the shoe, there is a mesh lining that helps to wick away moisture, keeping the feet dry and comfortable during extended use.',
      image: 'Jordan13RetroBlackLTBlue.jpg',
      price: 159.99,
      quantity: 600
    },
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
