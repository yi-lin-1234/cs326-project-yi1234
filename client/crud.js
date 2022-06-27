export async function createRecipe(
  name,
  ingredients,
  time,
  cuisine,
  difficulty,
  image,
  video,
  instructions
) {
  const response = await fetch(
    `/recipe/create?name=${name}&ingredients=${ingredients}&time=${time}&cuisine=${cuisine}&difficulty=${difficulty}&image=${image}&video=${video}&instructions=${instructions}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data;
}

export async function readRecipe(id) {
  const response = await fetch(`/recipe/read?id=${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export async function updateRecipe(
  id,
  name,
  ingredients,
  time,
  cuisine,
  difficulty,
  image,
  video,
  instructions
) {
  const response = await fetch(
    `/recipe/update?id=${id}&name=${name}&ingredients=${ingredients}&time=${time}&cuisine=${cuisine}&difficulty=${difficulty}&image=${image}&video=${video}&instructions=${instructions}`,
    {
      method: "PUT",
    }
  );
  const data = await response.json();
  return data;
}

export async function deleteRecipe(id) {
  const response = await fetch(`/recipe/delete?id=${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

export async function readAllRecipe() {
  const response = await fetch(`/recipe/all`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
