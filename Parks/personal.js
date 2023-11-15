"use strict";

// Define variables to hold HTML references
const locationOption = document.getElementById("locationOption");
const parkTypeOption = document.getElementById("parkTypeOption");
const locationDropDown = document.getElementById("locationDropDown");
const parkTypeDropDown = document.getElementById("parkTypeDropDown");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const locationSelect = document.getElementById("locationSelect");
const parkDetailRow = document.getElementById("parkDetailRow");

// Execute functions after the window finishes loading
window.onload = () => {
    locationOption.onchange = onLocationOptionChange;
    parkTypeOption.onchange = onParkTypeOptionChange;
    locationDropDown.onchange = locationDropDownChange;
    parkTypeDropDown.onchange = parkTypeDropDownChange;

    // Populate location dropdown
    for (let state of locationsArray) {
        let newOption = new Option(state);
        locationDropDown.appendChild(newOption);
    }

    // Populate park type dropdown
    for (let type of parkTypesArray) {
        let newOption = new Option(type);
        parkTypeDropDown.appendChild(newOption);
    }
};

// Function to hide or show location radio button
function onLocationOptionChange() {
    if (locationOption.checked) {
        locationSelect.style.display = "block";
        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        locationDropDown.selectedIndex = 0;
    } else {
        locationSelect.style.display = "none";
    }
}

// Function to hide or show park type radio button
function onParkTypeOptionChange() {
    if (parkTypeOption.checked) {
        parkTypeSelect.style.display = "block";
        locationSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        parkTypeDropDown.selectedIndex = 0;
    } else {
        parkTypeSelect.style.display = "none";
    }
}

// Function when location dropdown changes
function locationDropDownChange() {
    let selectedState = locationDropDown.value;
    const parksFilter = nationalParksArray.filter(park => park.State === selectedState);
    parkDetailRow.innerHTML = "";

    if (parksFilter.length > 0) {
        for (let park of parksFilter) {
            createNationalParkCard(park);
        }
    }
}

// Function when park type dropdown changes
function parkTypeDropDownChange() {
    let selectedType = parkTypeDropDown.value;
    const parksType = nationalParksArray.filter(park => park.LocationName.includes(selectedType));
    parkDetailRow.innerHTML = "";

    if (parksType.length > 0) {
        for (let park of parksType) {
            createNationalParkCard(park);
        }
    }
}

// Function to create cards, passing park values
function createNationalParkCard(park) {
    let divCol = document.createElement("div");
    divCol.className = "col-6 mt-4";
    parkDetailRow.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    let divHeader = document.createElement("div");
    divHeader.className = "card-header";
    divHeader.innerHTML = park.LocationName;
    divCard.appendChild(divHeader);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let unOrderedList = document.createElement("ul");
    unOrderedList.className = "card-list";
    divCardBody.appendChild(unOrderedList);

    // Create list elements for city and state
    createListElement(unOrderedList, "parkCity", "City", park.City);
    createListElement(unOrderedList, "parkState", "State", park.State);
}

// Function to create list elements
function createListElement(parent, className, label, value) {
    let listItem = document.createElement("li");
    listItem.className = className;
    listItem.innerHTML = `${label}: ${value}`;
    parent.appendChild(listItem);
}
