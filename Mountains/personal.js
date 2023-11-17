"use strict";

// Declare global variables
const mountainSelect = document.getElementById("mountainSelect");
const mountainDropDown = document.getElementById("mountainDropDown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

// Set up event listeners using arrow functions
window.onload = () => {
    mountainDropDown.onclick = handleMountainDropDownClick;
    mountainSelect.onchange = handleMountainSelectChange;

    // Initialize dropdown options
    initializeMountainDropdown();
};

// Handle the change event for the mountain selection
function handleMountainSelectChange() {
    // Retrieve the selected mountain image
    const selectedMountainImage = mountainSelected.value;
    const selectedMountainImages = mountainsArray.find(mountainImg => mountainImg.img === selectedMountainImage);
    console.log(selectedMountainImage);
}

// Initialize the default selected mountain
let mountainSelected = mountainDropDown.value;

// Handle the click event for the mountain dropdown
function handleMountainDropDownClick() {
    // Update the selected mountain based on dropdown value
    mountainSelected = mountainDropDown.value;
    const selectedMountain = mountainsArray.find(mountain => mountain.name === mountainSelected);
    console.log(selectedMountain);

    // Clear previous mountain details
    mountainDetailRow.innerHTML = "";

    // Create and display a card for the selected mountain
    if (selectedMountain) {
        createMountainCard(selectedMountain);
    }
}

// Populate the mountain dropdown with options
function initializeMountainDropdown() {
    // Use forEach for clarity
    mountainsArray.forEach(mountain => {
        const newOption = new Option(mountain.name);
        mountainDropDown.appendChild(newOption);
    });
}

// Create a card with details for the selected mountain
function createMountainCard(mountain) {
    // Center the column within the container
    const divCol = document.createElement("div");
    divCol.className = "col-12 px-5"; // Full width; can be adjusted if needed
    mountainDetailRow.appendChild(divCol);

    // Create card elements
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

    // Create list items for mountain details
    const mountainDesc = createListItem("Description: " + mountain.desc);
    const mountainElevation = createListItem("Elevation: " + mountain.elevation);
    const mountainEffort = createListItem("Effort: " + mountain.effort);

    // Append details to the card body
    appendChildren(divCardBody, [mountainDesc, mountainElevation, mountainEffort]);

    // Create and append the mountain image to the card body
    const mountainImage = document.createElement("img");
    mountainImage.className = "mountainImage";
    mountainImage.src = "images/" + mountain.img;
    mountainImage.alt = "mountain image";
    divCardBody.appendChild(mountainImage);

    console.log(mountainImage);
}

// Create a list item element with the specified content
function createListItem(content) {
    const listItem = document.createElement("li");
    listItem.innerHTML = content;
    return listItem;
}

// Append an array of child elements to a parent element
function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}