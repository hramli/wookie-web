export const CakeType = {
  REGULAR: 0,
  PREMIUM: 1
}

export const WookieCakes = [
  {
    id: "roseLychee",
    name: "Rose Lychee",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "roseLychee.jpg",
    description: [
      "Our signature item features 3 layers of soft sponge with quality rose infused fresh cream, sandwiched with the juiciest of lychees.",
      "Decorated with love using Herbal leaves, twigs and dried roses.",
      "Brew the dried rose for a cup of hot rose tea and enjoy it with a slice of our Signature rose lychee cake."
    ]
  },
  {
    id: "yuzuRaspberry",
    name: "Yuzu Raspberry",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "yuzuRaspberry.jpg",
    description: [
      "Love Yuzu? This is the cake for you.",
      "3 layers of soft sponge sandwiched with raspberry cream cheese and fresh cream.",
      "Topped with freeze dried raspberries and herbal leaves and twigs."
    ]
  },
  {
    id: "strawberryShortcake",
    name: "Strawberry Shortcake",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "strawberryShortcake.jpg",
    description: [
      "Strawberry Short Cake is one of our Top Sellers.",
      "3 layers of very soft sponge sandwiched with chunky fresh strawberries.",
      "Little Sour sweet strawberries with creamy and milky fresh cream.",
      "The perfect choice for strawberry shortcake lovers."
    ]
  },
  {
    id: "earlgreyAppleLemon",
    name: "Earl Grey Apple Lemon",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "earlgreyAppleLemon.jpg",
    description: [
      "Earl Grey infused fresh cream with apple pie filling, vanilla sponge & lemon curd.",
      "A simple yet elegant cake."
    ]
  },
  {
    id: "saltedCaramelBanana",
    name: "Banana Cake with Salted Caramel",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "saltedCaramelBanana.jpg",
    description: [
      "3 layers of soft and moist banana cake with creamy fresh cream. Filled with walnuts and dark Belgian chocolate chips.",
      "Topped with home-made salted caramel and almond flakes."
    ]
  },
  {
    id: "chrysanthemumWolfberry",
    name: "Chrysanthemum with Wolfberry and Honey",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "chrysanthemumWolfberry.jpg",
    description: [
      "Chrysanthemum infused fresh cream with premium wolfberries, dried longans and ginko nuts sandwiched between 3 layers of soft fluffy vanilla sponge.",
      "Enjoy the natural sweetness from Australian Honey and wolfberry toppings."
    ]
  },
  // {
  //   id: "raspberryBlueberry",
  //   name: "Raspberry Blueberry",
  //   type: CakeType.REGULAR,
  //   price: {
  //     sixInch: 61.30,
  //     eightInch: 96.30
  //   },
  //   imageFileName: "raspberryBlueberry.jpg",
  //   description: [
  //     "Miss the old school Raspberry sliced ice cream with biscuits? This cake will take you back and more.",
  //     "3 thick layers of soft vanilla sponge with 2 layers of semi-sweet blueberry and raspberry fresh cream. Topped with plenty of freeze dried berries and herbal leaves and twigs.",
  //     "The cake for berry lovers."
  //   ]
  // },
  {
    id: "blueberryLavender",
    name: "Blueberry Lavender",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "blueberryLavender.jpg",
    description: [
      "Relax your body and mind with a slice of Lavender Cake.",
      "3 layers of soft and fluffy vanilla sponge cake sandwiched with blueberry lavender fresh cream.",
      "Topped with fresh Blueberries."
    ]
  },
  {
    id: "belgianChocolateCC",
    name: "Belgian Chocolate Cake with Cookie & Cream",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "belgianChocolateCC.jpg",
    description: [
      "Taste the goodness of the very best Belgian chocolate with cookie & cream.",
      "3 thick layers of vanilla sponge cake sandwiched with loads of oreo cookies.",
      "Topped with chocolate chips and Belgian chocolate sauce."
    ]
  },
  {
    id: "theLoveLog",
    name: "The Love Log",
    type: CakeType.PREMIUM,
    price: {
      sixInch: 76.30,
      eightInch: 119.30
    },
    imageFileName: "theLoveLog.jpg",
    description: [
      "Handcrafted with love, the LOVE LOG presents a Rose infused fresh cream layered with juicy lychee.",
      "Self-craved wood grains and dusted with rose petals and herbal leaves and twigs."
    ]
  },
  {
    id: "belgianChocolateJGF",
    name: "Belgian Chocolate Cake with Japanese Gold Flakes",
    type: CakeType.PREMIUM,
    price: {
      sixInch: 76.30,
      eightInch: 119.30
    },
    imageFileName: "belgianChocolateJGF.jpg",
    description: [
      "Delicately-textured chocolate sponge laced with decadent chocolate ganache together with crunchy twist, our Belgian chocolate cake remains on of the Wookie Bakery’s top seller."  
    ]
  }
]

export function getWookieCakeById(cakeId) {
  for (const cake of WookieCakes) {
    if (cake.id == cakeId) {
      return cake;
    }
  }
  return null;
}

export function getCakesByCakeType(cakeType) {
  let cakes = [];
  for (const cake of WookieCakes) {
    if (cake.type == cakeType) {
      cakes.push(cake)
    }
  }
  return cakes;
}
