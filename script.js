function loadPalletes() {
  const palletes_container = document.getElementById("palletes");

  if (localStorage.getItem("palletes") === null) {
    palletes_container.innerHTML = "<h2>No pallets found..</h2>";
    return;
  }

  const palletes = JSON.parse(localStorage.getItem("palletes"));

  palletes.forEach((pallet_array) => {
    let pallet = document.createElement("div");

    let pallet_content = `<h4>${pallet_array[0]}</h4> `;

    for (let index = 1; index < pallet_array.length; index++) {
      pallet_content += `<div style="--background: ${pallet_array[index]};">${pallet_array[index]}</div>`;
    }

    pallet.innerHTML = pallet_content;

    palletes_container.appendChild(pallet);
  });
}

loadPalletes();
