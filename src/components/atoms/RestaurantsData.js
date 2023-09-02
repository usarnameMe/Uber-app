export const RestaurantsData = {
  dish: {
    id: 0,
    name: "Hamburger",
    desc: "A delicious hamburger made with fresh ingredients.",
    price: 9.99,
    imageUrl: "../images/dish.png",
  },
  dishOptions: [
    {
      id: 0,
      title: "Bread type",
      type: "radio",
      choices: [
        { id: 0, label: "White", price: 0 },
        { id: 1, label: "Wheat", price: 0 },
        { id: 2, label: "Gluten-free", price: 1 },
      ],
    },
    {
      id: 1,
      title: "Extras",
      type: "checkbox",
      choices: [
        { id: 0, label: "Extra cheese", price: 0.5 },
        { id: 1, label: "Bacon", price: 1 },
        { id: 2, label: "Avocado", price: 1 },
      ],
    },
  ],
  addOns: [
    { id: 0, label: "French Fries", price: 3 },
    { id: 1, label: "Onion Rings", price: 3.5 },
  ],
  combo: [
    { id: 0, name: "Drink", price: 2, imageUrl: "../images/drink.png" },
    {
      id: 1,
      name: "Ice Cream",
      price: 2.5,
      imageUrl: "../images/icecream.png",
    },
  ],
};
