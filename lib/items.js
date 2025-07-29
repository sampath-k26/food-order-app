// items.js

const items = [
  // Indian
  {
    id: 1,
    title: "Paneer Butter Masala",
    description: "Creamy tomato-based curry with soft paneer cubes.",
    price: 180,
    category: "Indian",
    image: "/images/paneer-butter-masala.jpeg",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    description: "Spicy basmati rice layered with marinated chicken.",
    price: 220,
    category: "Indian",
    image: "/images/chicken-biriyani.jpeg",
  },
  {
    id: 3,
    title: "Masala Dosa",
    description: "South Indian rice crepe with spicy potato filling.",
    price: 90,
    category: "Indian",
    image: "/images/masala-dosa.jpeg",
  },

  // Chinese
  {
    id: 4,
    title: "Veg Manchurian",
    description: "Crispy veggie balls in a tangy soy garlic sauce.",
    price: 140,
    category: "Chinese",
    image: "/images/veg-manchurian.jpeg",
  },
  {
    id: 5,
    title: "Hakka Noodles",
    description: "Stir-fried noodles with veggies and sauces.",
    price: 130,
    category: "Chinese",
    image: "/images/hakka-noodles.jpeg",
  },
  {
    id: 6,
    title: "Chilli Chicken",
    description: "Spicy chicken tossed in garlic and chilli sauce.",
    price: 160,
    category: "Chinese",
    image: "/images/chilli-chicken.jpeg",
  },

  // Italian
  {
    id: 7,
    title: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella and basil.",
    price: 200,
    category: "Italian",
    image: "/images/margherita.jpeg",
  },
  {
    id: 8,
    title: "Pasta Alfredo",
    description: "Creamy pasta made with garlic and white sauce.",
    price: 180,
    category: "Italian",
    image: "/images/alfredo.jpeg",
  },
  {
    id: 9,
    title: "Lasagna",
    description: "Layered pasta with meat, sauce and cheese.",
    price: 250,
    category: "Italian",
    image: "/images/lasagna.jpeg",
  },

  // Desserts
  {
    id: 10,
    title: "Gulab Jamun",
    description: "Soft fried balls soaked in sugar syrup.",
    price: 80,
    category: "Dessert",
    image: "/images/gulab-jamun.jpeg",
  },
  {
    id: 11,
    title: "Chocolate Cake",
    description: "Moist chocolate cake with ganache frosting.",
    price: 120,
    category: "Dessert",
    image: "/images/chocolate-cake.jpeg",
  },
  {
    id: 12,
    title: "Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate syrup.",
    price: 100,
    category: "Dessert",
    image: "/images/sundae.jpeg",
  },

  // Beverages
  {
    id: 13,
    title: "Masala Chai",
    description: "Spiced Indian tea with milk.",
    price: 40,
    category: "Beverages",
    image: "/images/masala-chai.jpeg",
  },
  {
    id: 14,
    title: "Cold Coffee",
    description: "Chilled coffee shake with whipped cream.",
    price: 90,
    category: "Beverages",
    image: "/images/cold-coffee.jpeg",
  },
  {
    id: 15,
    title: "Fresh Lime Soda",
    description: "Lemon soda served sweet or salty.",
    price: 50,
    category: "Beverages",
    image: "/images/lime-soda.jpeg",
  },

  // Snacks
  {
    id: 16,
    title: "Samosa",
    description: "Crispy fried pastry with spicy potato filling.",
    price: 25,
    category: "Snacks",
    image: "/images/samosa.jpeg",
  },
  {
    id: 17,
    title: "French Fries",
    description: "Golden crispy potato fries.",
    price: 60,
    category: "Snacks",
    image: "/images/fries.jpeg",
  },
  {
    id: 18,
    title: "Onion Rings",
    description: "Battered and fried onion rings.",
    price: 70,
    category: "Snacks",
    image: "/images/onion-rings.jpeg",
  },

  // Fast Food
  {
    id: 19,
    title: "Veg Burger",
    description: "Veg patty in a bun with lettuce and sauces.",
    price: 100,
    category: "Fast Food",
    image: "/images/veg-burger.jpeg",
  },
  {
    id: 20,
    title: "Chicken Wrap",
    description: "Spicy chicken wrapped in tortilla.",
    price: 130,
    category: "Fast Food",
    image: "/images/chicken-wrap.jpeg",
  },
  {
    id: 21,
    title: "Cheese Sandwich",
    description: "Grilled bread filled with melted cheese.",
    price: 80,
    category: "Fast Food",
    image: "/images/cheese-sandwich.jpeg",
  },

  // South Indian
  {
    id: 22,
    title: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup.",
    price: 60,
    category: "South Indian",
    image: "/images/idli.jpeg",
  },
  {
    id: 23,
    title: "Vada",
    description: "Deep-fried lentil doughnuts.",
    price: 40,
    category: "South Indian",
    image: "/images/vada.jpeg",
  },
  {
    id: 24,
    title: "Uttapam",
    description: "Thick dosa topped with onions and veggies.",
    price: 90,
    category: "South Indian",
    image: "/images/uttapam.jpeg",
  },

  // North Indian
  {
    id: 25,
    title: "Rajma Chawal",
    description: "Red kidney beans curry with steamed rice.",
    price: 110,
    category: "North Indian",
    image: "/images/rajma-chawal.jpeg",
  },
  {
    id: 26,
    title: "Chole Bhature",
    description: "Spicy chickpeas with fried bread.",
    price: 120,
    category: "North Indian",
    image: "/images/chole-bhature.jpeg",
  },
  {
    id: 27,
    title: "Aloo Paratha",
    description: "Stuffed flatbread with potato filling and butter.",
    price: 90,
    category: "North Indian",
    image: "/images/aloo-paratha.jpeg",
  },

  // Street Food
  {
    id: 28,
    title: "Pani Puri",
    description: "Crispy puris filled with tangy water.",
    price: 50,
    category: "Street Food",
    image: "/images/pani-puri.jpeg",
  },
  {
    id: 29,
    title: "Pav Bhaji",
    description: "Mashed vegetable curry with buttered buns.",
    price: 100,
    category: "Street Food",
    image: "/images/pav-bhaji.jpeg",
  },
  {
    id: 30,
    title: "Kathi Roll",
    description: "Flatbread rolled with spiced filling.",
    price: 110,
    category: "Street Food",
    image: "/images/kathi-roll.jpeg",
  },

  // Salads
  {
    id: 31,
    title: "Green Salad",
    description: "Fresh cucumber, lettuce, tomato and onion.",
    price: 70,
    category: "Salads",
    image: "/images/green-salad.jpeg",
  },
  {
    id: 32,
    title: "Fruit Bowl",
    description: "Assorted seasonal fruits.",
    price: 100,
    category: "Salads",
    image: "/images/fruit-bowl.jpeg",
  },
  {
    id: 33,
    title: "Chickpea Salad",
    description: "Boiled chickpeas with veggies and lemon.",
    price: 90,
    category: "Salads",
    image: "/images/chickpea-salad.jpeg",
  },
];

export default items;
