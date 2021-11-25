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
    id: "earlgreyLemonApple",
    name: "Earl Grey Lemon Apple",
    type: CakeType.REGULAR,
    price: {
      sixInch: 61.30,
      eightInch: 96.30
    },
    imageFileName: "earlgreyLemonApple.jpg",
    description: [
      "Earl Grey infused fresh cream with apple pie filling, vanilla sponge & lemon curd.",
      "A simple yet elegant cake."
    ]
  },
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
  }
]

export function getWookieCakeById(cakeId) {
  for(const cake of WookieCakes) {
    if (cake.id == cakeId) {
      return cake;
    }
  }
  return null;
}
