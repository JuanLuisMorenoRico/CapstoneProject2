"use strict";

// Global variables
const mountainSelect = document.getElementById("mountainSelect");
const mountainDropDown = document.getElementById("mountainDropDown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

// Event listeners using arrow functions
window.onload = () => {
    mountainDropDown.onclick = mountainDropDownClick;
    mountainSelect.onchange = mountainSelectChange;

    // Populate dropdown options
    populateMountainDropdown();
};

function mountainSelectChange() {
    const mountainImage = mountainSelected.value;
    const mountainImages = mountainsArray.find(mountainImg => mountainImg.img === mountainImage);
    console.log(mountainImage);
}

let mountainSelected = mountainDropDown.value;

function mountainDropDownClick() {
    mountainSelected = mountainDropDown.value;
    const mountain = mountainsArray.find(mountain => mountain.name === mountainSelected);
    console.log(mountain);

    mountainDetailRow.innerHTML = "";

    if (mountain) {
        createMountainCard(mountain);
    }
}

function populateMountainDropdown() {
    // Use forEach for clarity
    mountainsArray.forEach(mountain => {
        const newOption = new Option(mountain.name);
        mountainDropDown.appendChild(newOption);
    });
}

function createMountainCard(mountain) {
    // Center the column within the container
    const divCol = document.createElement("div");
    divCol.className = "col-12 px-5"; // Full width, can adjust if needed
    mountainDetailRow.appendChild(divCol);

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    const h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = mountain.name;
    divCardBody.appendChild(h5Name);

    const mountainDesc = createListItem("Description: " + mountain.desc);
    const mountainElevation = createListItem("Elevation: " + mountain.elevation);
    const mountainEffort = createListItem("Effort: " + mountain.effort);

    // Append details to card body
    appendChildren(divCardBody, [mountainDesc, mountainElevation, mountainEffort]);

    const mountainImage = document.createElement("img");
    mountainImage.className = "mountainImage";
    mountainImage.src = "images/" + mountain.img;
    mountainImage.alt = "mountain image";

    // Append image to card body
    divCardBody.appendChild(mountainImage);

    console.log(mountainImage);
}

function createListItem(content) {
    const listItem = document.createElement("li");
    listItem.innerHTML = content;
    return listItem;
}

function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}
