import { data } from "./testData.js";

const dataTable = document.getElementById("data-table");

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.classList.add("text-center");
  td1.innerText = data[i].name;
  tr.appendChild(td1);

  //create button, add style
  const td2 = document.createElement("td");
  td2.classList.add("d-flex", "justify-content-center");
  const delete_button = document.createElement("button");
  delete_button.innerText = "delete";
  delete_button.classList.add("btn", "btn-danger", "btn-sm");
  td2.appendChild(delete_button);
  tr.appendChild(td2);

  dataTable.appendChild(tr);
}
