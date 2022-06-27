import * as crud from "./crud.js";

// image preview
const imagePreviewButtonElement = document.getElementById(
  "image_preview_button"
);
imagePreviewButtonElement.addEventListener("click", () => {
  event.preventDefault();
  document.getElementById("image_preview").src =
    document.getElementById("image").value;
});

// video preview
const videoPreviewButtonElement = document.getElementById(
  "video_preview_button"
);
videoPreviewButtonElement.addEventListener("click", () => {
  event.preventDefault();
  document.getElementById("video_preview").src =
    document.getElementById("video").value;
});

// submit button
const submitButtonElement = document.getElementById("submit-buttom");

submitButtonElement.addEventListener("click", async () => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const ingredients = document.getElementById("ingredients").value;
  const time = document.getElementById("time").value;
  const cuisine = document.getElementById("cuisine").value;
  const difficulty = document.getElementById("difficulty").value;
  const image = document.getElementById("image").value;
  const video = document.getElementById("video").value;
  const instructions = document.getElementById("instructions").value;

  const recipe = await crud.createRecipe(
    name,
    ingredients,
    time,
    cuisine,
    difficulty,
    image,
    video,
    instructions
  );

  if (recipe) {
    alert("new recipe successfully created!");
  }
});
