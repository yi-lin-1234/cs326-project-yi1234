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
