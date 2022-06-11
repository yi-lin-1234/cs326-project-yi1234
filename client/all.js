import { data } from "./testData.js";

const dataTable = document.getElementById("data-table");

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.classList.add("text-center");
  td.innerText = data[i].name;
  tr.addEventListener("click", () => {
    document.getElementById("detail-name").innerText = data[i].name;
    document.getElementById("detail-ingredients").innerText =
      data[i].ingredients;
    document.getElementById("detail-time").innerText = data[i].time;
    document.getElementById("detail-cuisine").innerText = data[i].cuisine;
    document.getElementById("detail-difficulty").innerText = data[i].difficulty;
    document.getElementById("detail-image").src = data[i].image;
    document.getElementById("detail-video").src = data[i].video;
    document.getElementById("detail-instructions").innerText =
      data[i].instructions;
  });
  tr.appendChild(td);
  dataTable.appendChild(tr);
}
