"strict mode";

function addInputColor() {
  const colors = document.querySelector("#color-inputs");

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Add color (EX: #fff)";

  colors.appendChild(input);
}

const CreatePallete = () => {
  const title = document.querySelector("#title");
  const inputs = document.querySelector("#color-inputs");

  if (localStorage.getItem("palletes") === null) {
    localStorage.setItem("palletes", JSON.stringify([]));
  }

  let new_array = [];
  new_array.push(title.value);

  const palletes = JSON.parse(localStorage.getItem("palletes"));

  inputs.querySelectorAll("input").forEach((input) => {
    new_array.push(input.value);
  });

  palletes.push(new_array);

  localStorage.setItem("palletes", JSON.stringify(palletes));
};
