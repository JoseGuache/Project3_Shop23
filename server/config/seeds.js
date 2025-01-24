const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
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
      category: categories[1]._id,
      description:
        'It might not look like it, but the 5 Fire Red Retro OG is one of the newest pieces in the Air Jordan portfolio. The retro design was released in early 2020 as part of the silhouette’s 30th anniversary. This variation is essentially identical to the OG pair from 1990, featuring smooth white leather construction on the upper and a fierce black midsole with Fire Red shark teeth to make it one of the most popular Jordans of all time.',
      image: 'Air-Jordan-5-Fire-Red.jpg',
      price: 249.99,
      quantity: 20
    },
    {
      name: 'Jordan 4 "Bred"',
      category: categories[1]._id,
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
      category: categories[2]._id,
      description:
        'INFRARED is pretty much the ultimate Air Jordan sneaker colour, and the Jordan 6 INFRARED pair features a black upper, black midsole plus red accents, and a translucent sole. Not only is this one of the most popular Jordans it’s also the shoe MJ wore when he won his first championship in 1991, averaging 31.2 points, 11.4 assists, and 6.6 rebounds per game in the finals. GOAT status.',
      image: 'Air-Jordan-6-Black-Infrared.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Jordan 1 Retro High "Pine Green"',
      category: categories[2]._id,
      description:
        'Expanding the “Black Toe” lineup, these Pine Green Retro high tops aren’t just one of the best Air Jordan sneakers ever made, they’re probably the only ones that Celtics fans can embrace. The upper of this Jordan 1 Retro High is constructed from white tumbled leather. A black leather Swoosh, sail midsole, and pine green outsole complete this design.',
      image: 'Air-Jordan-Retro-1-Pine-Green.jpg',
      price: 324.99,
      quantity: 30
    },
    {
      name: 'Air Jordan 3 Retro "UNC"',
      category: categories[3]._id,
      description:
        'The 2020 edition of these classic J’s features a white tumbled leather upper with grey elephant print mudguards and valor blue detailing. These once-rare Air Jordans sport a former Player-Exclusive colourway for students at the University of North Carolina, however, in recent years the colourway has been opened to the public so expect to pay around $600 AUD.',
      image: 'Jordan3-UNC.jpg',
      price: 429.99,
      quantity: 100
    },
    {
      name: 'Jordan 11 "Bred"',
      category: categories[4]._id,
      description: 'First worn on NBA courts back in April 1996, the AJ11 Bred is playoff-ready and one of the most popular Jordans money can buy. This variation is the 2019 edition, which marked the first release for the style in seven years. The footwear ranks high on MJ’s grail and is undoubtedly one of the best Air Jordan shoes of all time.',
      image: 'Jordan11-Bred.jpg',
      price: 299.99,
      quantity: 1000
    },
    {
      name: 'Air Jordan 4 Retro "What The"',
      category: categories[4]._id,
      description:
        'Released for His Airness’s 30th anniversary, the special-edition “What The” colourway is one of the best looking Jordans of all time. This blue AJ4 features colour blocking in a mix of White/Cement, Military Blue, Fire Red, and Black/Cement. All topped off with ‘Nike Air’ branding on the heel tabs.',
      image: 'Jordan4-WhatThe.jpg',
      price: 399.99,
      quantity: 1000
    },
    {
      name: 'Jordan 1 Retro High "Shadow',
      category: categories[4]._id,
      description:
        'Having only hit shelves three times in the brand’s 30-year history, the OG Shadow is a must-have for collectors and one of the best Air Jordans of all time. The footwear features a black and grey leather upper with original “Nike Air” branding on the tongue tag and insoles.',
      image: 'Jordan1-Shadow.jpg',
      price: 294.99,
      quantity: 100
    },
    {
      name: 'Air Jordan 1 Retro "Shattered Backboard',
      category: categories[4]._id,
      description:
        'Inspired by the orange and black jersey that Michael Jordan wore when he shattered a backboard in an Italian exhibition game in 1986, this Air Jordan 1 shattered backboard is one of the rarest Air Jordan 1 model money can buy. A deadstock pair will set you back more than $2000 AUD.',
      image: 'AirJordan1-SG.jpg',
      price: 699.99,
      quantity: 600
    }
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
