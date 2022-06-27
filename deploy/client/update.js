import * as crud from "./crud.js";

//=================javascript for left part=============================
const dataTable = document.getElementById("data-table");

const data = await crud.readAllRecipe();

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.classList.add("text-center");
  td.innerText = data[i].name;
  tr.addEventListener("click", () => {
    document.getElementById("id").innerHTML = data[i].id;
    document.getElementById("name").value = data[i].name;
    document.getElementById("ingredients").value = data[i].ingredients;
    document.getElementById("time").value = data[i].time;
    document.getElementById("cuisine").value = data[i].cuisine;
    document.getElementById("difficulty").value = data[i].difficulty;
    document.getElementById("image").value = data[i].image;
    document.getElementById("video").value = data[i].video;
    document.getElementById("instructions").value = data[i].instructions;
  });
  tr.appendChild(td);
  dataTable.appendChild(tr);
}

//=================javascript for right part=============================

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
  const id = document.getElementById("id").innerHTML;
  const name = document.getElementById("name").value;
  const ingredients = document.getElementById("ingredients").value;
  const time = document.getElementById("time").value;
  const cuisine = document.getElementById("cuisine").value;
  const difficulty = document.getElementById("difficulty").value;
  const image = document.getElementById("image").value;
  const video = document.getElementById("video").value;
  const instructions = document.getElementById("instructions").value;

  const recipe = await crud.updateRecipe(
    id,
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
    alert("recipe successfully updated!");
  }
});
