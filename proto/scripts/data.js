const breadsNutritionData = [
  {
    name: "classic italian",
    serving_size_g: 71,
    calories: 200,
    total_fat_g: 2,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 37,
    fiber_g: 1,
    sugars_g: 3,
    protein_g: 7
    , data_testauto_id: "lettuce"
  },
  {
    name: "multigrain",
    serving_size_g: 71,
    calories: 200,
    total_fat_g: 2,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 36,
    fiber_g: 3,
    sugars_g: 4,
    protein_g: 9
    , data_testauto_id: "lettuce"
  },
  {
    name: "flatbread",
    serving_size_g: 45,
    calories: 140,
    total_fat_g: 3,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 24,
    fiber_g: 1,
    sugars_g: 2,
    protein_g: 4
    , data_testauto_id: "lettuce"
  },
  {
    name: "classic italian herbs & cheese",
    serving_size_g: 82,
    calories: 240,
    total_fat_g: 5,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 39,
    fiber_g: 2,
    sugars_g: 3,
    protein_g: 9
    , data_testauto_id: "lettuce"
  },
  {
    name: "english muffin",
    serving_size_g: 57,
    calories: 120,
    total_fat_g: 1,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 23,
    fiber_g: 1,
    sugars_g: 1,
    protein_g: 5
    , data_testauto_id: "lettuce"
  },
  {
    name: "ciabatta",
    serving_size_g: 76,
    calories: 210,
    total_fat_g: 5,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 36,
    fiber_g: 2,
    sugars_g: 0,
    protein_g: 6
    , data_testauto_id: "lettuce"
  },
  {
    name: "gluten free bread",
    serving_size_g: 113,
    calories: 340,
    total_fat_g: 12,
    saturated_fat_g: 7,
    trans_fat_g: 0,
    carbohydrates_g: 51,
    fiber_g: 3,
    sugars_g: 7,
    protein_g: 6
    , data_testauto_id: "lettuce"
  },
  {
    name: "potato bun",
    serving_size_g: 39,
    calories: 110,
    total_fat_g: 2,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 20,
    fiber_g: 1,
    sugars_g: 3,
    protein_g: 3
    , data_testauto_id: "lettuce"
  },
  {
    name: "wrap",
    serving_size_g: 102,
    calories: 300,
    total_fat_g: 8,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 50,
    fiber_g: 2,
    sugars_g: 2,
    protein_g: 8
  }
];

const cheeseNutritionData = [
  {
    name: "Canadian Cheddar",
    data_testauto_id: "canadian-cheddar",
    serving_size_g: 11,
    calories: 45,
    total_fat_g: 4,
    saturated_fat_g: 3,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 3
  },
  {
    name: "Cheddar, Processed",
    data_testauto_id: "processed-cheddar",
    serving_size_g: 11,
    calories: 40,
    total_fat_g: 3,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 2
  },
  {
    name: "Extra - Cheddar, Processed",
    data_testauto_id: "extra-cheese---processed-cheddar",
    serving_size_g: 22,
    calories: 80,
    total_fat_g: 6,
    saturated_fat_g: 4,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 4
  },
  {
    name: "Habanero Jack",
    data_testauto_id: "habanero-jack",
    serving_size_g: 11,
    calories: 40,
    total_fat_g: 4,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 3
  },
  {
    name: "Fresh Mozzarella",
    data_testauto_id: "fresh-mozzarella",
    serving_size_g: 51,
    calories: 120,
    total_fat_g: 9,
    saturated_fat_g: 6,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 9
  },
  {
    name: "Monterey Jack & Cheddar Cheese Blend, Shredded",
    data_testauto_id: "shredded-monterey-cheddar",
    serving_size_g: 14,
    calories: 60,
    total_fat_g: 5,
    saturated_fat_g: 3,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 3
  },
  {
    name: "Parmesan, Grated",
    data_testauto_id: "grated-parmesan",
    serving_size_g: 3,
    calories: 10,
    total_fat_g: 1,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 1
  },
  {
    name: "Swiss",
    serving_size_g: 14,
    calories: 50,
    total_fat_g: 4,
    saturated_fat_g: 3,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 4
  }
];

const veggieNutritionData = [
  {
    name: "Avocado, Smashed",
    data_testauto_id: "smashed-avocado",
    serving_size_g: 35,
    calories: 70,
    total_fat_g: 6,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 3,
    fiber_g: 2,
    sugars_g: 0,
    protein_g: 1
  },
  {
    name: "Banana Peppers",
    data_testauto_id: "banana-peppers",
    serving_size_g: 4,
    calories: 1,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Cucumbers",
    data_testauto_id: "cucumbers",
    serving_size_g: 14,
    calories: 2,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Green Peppers",
    data_testauto_id: "green-peppers",
    serving_size_g: 7,
    calories: 1,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Jalapeno Peppers",
    data_testauto_id: "jalapenos",
    serving_size_g: 4,
    calories: 1,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Lettuce",
    data_testauto_id: "lettuce",
    serving_size_g: 21,
    calories: 3,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Olives, Black",
    data_testauto_id: "black-olives",
    serving_size_g: 3,
    calories: 3,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Onions, Red",
    data_testauto_id: "red-onions",
    serving_size_g: 7,
    calories: 3,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Pickles",
    data_testauto_id: "pickles",
    serving_size_g: 10,
    calories: 1,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Spinach, Baby",
    data_testauto_id: "spinach",
    serving_size_g: 7,
    calories: 2,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Tomatoes",
    data_testauto_id: "tomatoes",
    serving_size_g: 35,
    calories: 5,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 0
  },
  {
    name: "Crispy Onions",
    data_testauto_id: "crispy-onions",
    serving_size_g: 14,
    calories: 80,
    total_fat_g: 4,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 7,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 1
  }
];

const proteinData = [
  {
    name: "Bacon Slices (2 strips)",
    data_testauto_id: "bacon",
    serving_size_g: 10,
    calories: 50,
    total_fat_g: 4,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 4
  },
  {
    name: "Beef Brisket (includes BBQ)",
    data_testauto_id: "beef-brisket",
    serving_size_g: 113,
    calories: 300,
    total_fat_g: 15,
    saturated_fat_g: 4,
    trans_fat_g: 0,
    carbohydrates_g: 20,
    fiber_g: 1,
    sugars_g: 14,
    protein_g: 20
  },
  {
    name: "Capicola",
    data_testauto_id: "capicola",
    serving_size_g: 22,
    calories: 35,
    total_fat_g: 2,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 3
  },
  {
    name: "Chicken, Grilled",
    data_testauto_id: "chicken-grilled",
    serving_size_g: 64,
    calories: 60,
    total_fat_g: 1,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 1,
    sugars_g: 1,
    protein_g: 11
  },
  {
    name: "Chicken Strips, Plain",
    data_testauto_id: "chicken-strips-plain",
    serving_size_g: 71,
    calories: 80,
    total_fat_g: 2,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 15
  },
  {
    name: "Cold Cut Combo Meats",
    data_testauto_id: "cold-cut-combo",
    serving_size_g: 54,
    calories: 160,
    total_fat_g: 14,
    saturated_fat_g: 5,
    trans_fat_g: 0,
    carbohydrates_g: 2,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 7
  },
  {
    name: "Egg Patty, Scrambled",
    data_testauto_id: "egg-patty-scrambled",
    serving_size_g: 85,
    calories: 150,
    total_fat_g: 12,
    saturated_fat_g: 3,
    trans_fat_g: 0,
    carbohydrates_g: 3,
    fiber_g: 1,
    sugars_g: 1,
    protein_g: 8
  },
  {
    name: "Ham, Black Forest",
    data_testauto_id: "ham-black-forest",
    serving_size_g: 54,
    calories: 70,
    total_fat_g: 2,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 4,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 8
  },
  {
    name: "Italian B.M.T.® Meats",
    data_testauto_id: "italian-bmt-meats",
    serving_size_g: 71,
    calories: 190,
    total_fat_g: 14,
    saturated_fat_g: 5,
    trans_fat_g: 0,
    carbohydrates_g: 3,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 12
  },
  {
    name: "Meatballs with Marinara",
    data_testauto_id: "meatballs-marinara",
    serving_size_g: 139,
    calories: 240,
    total_fat_g: 15,
    saturated_fat_g: 6,
    trans_fat_g: 1,
    carbohydrates_g: 12,
    fiber_g: 2,
    sugars_g: 5,
    protein_g: 15
  },
  {
    name: "Pepperoni (3 slices)",
    data_testauto_id: "pepperoni",
    serving_size_g: 18,
    calories: 80,
    total_fat_g: 7,
    saturated_fat_g: 3,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 4
  },
  {
    name: "Rotisserie-Style Chicken",
    data_testauto_id: "rotisserie-style-chicken",
    serving_size_g: 71,
    calories: 100,
    total_fat_g: 3,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 17
  },
  {
    name: "Tandoori-Spiced Pork Cutlet",
    data_testauto_id: "tandoori-spiced-pork-cutlet",
    serving_size_g: 87,
    calories: 260,
    total_fat_g: 22,
    saturated_fat_g: 5,
    trans_fat_g: 0,
    carbohydrates_g: 2,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 17
  },
  {
    name: "Porchetta, Diced",
    data_testauto_id: "porchetta",
    serving_size_g: 71,
    calories: 180,
    total_fat_g: 13,
    saturated_fat_g: 5,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 11
  }
];

const sauceData = [
  {
    name: "Chimichurri Sauce",
    data_testauto_id: "chimichurri",
    serving_size_g: 14,
    calories: 80,
    total_fat_g: 8,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Chipotle Southwest",
    data_testauto_id: "chipotle-southwest",
    serving_size_g: 14,
    calories: 60,
    total_fat_g: 6,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Cuban-Style Sauce",
    data_testauto_id: "cuban-style-sauce",
    serving_size_g: 14,
    calories: 70,
    total_fat_g: 7,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Garlic Aioli",
    data_testauto_id: "garlic-aioli",
    serving_size_g: 14,
    calories: 70,
    total_fat_g: 7,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 0
  },
  {
    name: "House Sandwich Sauce",
    data_testauto_id: "house-sauce",
    serving_size_g: 14,
    calories: 70,
    total_fat_g: 8,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 0
  },
  {
    name: "Jerk Aioli",
    data_testauto_id: "jerk-aioli",
    serving_size_g: 14,
    calories: 90,
    total_fat_g: 10,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Mayonnaise",
    data_testauto_id: "mayonnaise",
    serving_size_g: 14,
    calories: 100,
    total_fat_g: 11,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 0,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Mustard, Yellow",
    data_testauto_id: "mustard",
    serving_size_g: 14,
    calories: 10,
    total_fat_g: 1,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 1
  },
  {
    name: "Nashville-Style Hot Sauce",
    data_testauto_id: "nashville-style-hot-sauce",
    serving_size_g: 14,
    calories: 35,
    total_fat_g: 3,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 3,
    fiber_g: 0,
    sugars_g: 2,
    protein_g: 0
  },
  {
    name: "Peppercorn Ranch",
    data_testauto_id: "peppercorn-ranch",
    serving_size_g: 14,
    calories: 80,
    total_fat_g: 8,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  },
  {
    name: "Smoky Honey Mustard",
    data_testauto_id: "smoky-honey-mustard",
    serving_size_g: 14,
    calories: 45,
    total_fat_g: 5,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 3,
    fiber_g: 0,
    sugars_g: 3,
    protein_g: 0
  },
  {
    name: "Sweet & Smoky BBQ",
    data_testauto_id: "-sweet-&-smoky-bbq-sauce",
    serving_size_g: 14,
    calories: 35,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 9,
    fiber_g: 0,
    sugars_g: 7,
    protein_g: 0
  },
  {
    name: "Sweet Onion Teriyaki Sauce",
    data_testauto_id: "sweet-onion-teriyaki-sauce",
    serving_size_g: 14,
    calories: 35,
    total_fat_g: 0,
    saturated_fat_g: 0,
    trans_fat_g: 0,
    carbohydrates_g: 8,
    fiber_g: 0,
    sugars_g: 7,
    protein_g: 0
  },
  {
    name: "Tahini Garlic Sauce",
    data_testauto_id: "tahini",
    serving_size_g: 14,
    calories: 70,
    total_fat_g: 6,
    saturated_fat_g: 1,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 1,
    protein_g: 1
  },
  {
    name: "Tandoori-Spiced Sauce",
    data_testauto_id: "tandoori-spiced-sauce",
    serving_size_g: 14,
    calories: 90,
    total_fat_g: 10,
    saturated_fat_g: 2,
    trans_fat_g: 0,
    carbohydrates_g: 1,
    fiber_g: 0,
    sugars_g: 0,
    protein_g: 0
  }
];

const cardNutritionData = veggieNutritionData.concat(cheeseNutritionData, proteinData, sauceData)