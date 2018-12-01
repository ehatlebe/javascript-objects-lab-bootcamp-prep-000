let recipes = { ['prop']: 1 };

const updateObjectWithKeyAndValue = (object, key, value) => {
  let recipesUpdated = Object.assign(recipes, { [key]: value });
  return recipesUpdated;
};

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  let recipesAll = recipes;
  recipesAll = Object.assign(recipesAll, { [key]: value });
  return recipesAll;
};
