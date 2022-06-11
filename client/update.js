import { data } from "./testData.js";

//=================javascript for left part=============================
const dataTable = document.getElementById("data-table");

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.classList.add("text-center");
  td.innerText = data[i].name;
  tr.addEventListener("click", () => {
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
submitButtonElement.addEventListener("click", () => {
  event.preventDefault();
  const recipe = {
    name: document.getElementById("name").value,
    ingredients: document.getElementById("ingredients").value,
    time: document.getElementById("time").value,
    cuisine: document.getElementById("cuisine").value,
    difficulty: document.getElementById("difficulty").value,
    image: document.getElementById("image").value,
    video: document.getElementById("video").value,
    instructions: document.getElementById("instructions").value,
  };
  console.log(recipe);
});
