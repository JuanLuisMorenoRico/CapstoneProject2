"use strict";

// Retrieve HTML element references
const locationOption = document.getElementById("locationOption");
const parkTypeOption = document.getElementById("parkTypeOption");
const locationDropDown = document.getElementById("locationDropDown");
const parkTypeDropDown = document.getElementById("parkTypeDropDown");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const locationSelect = document.getElementById("locationSelect");
const parkDetailRow = document.getElementById("parkDetailRow");

// Execute functions once the window has loaded
window.onload = () => {
    // Set up event handlers for option changes and dropdown selections
    locationOption.onchange = handleLocationOptionChange;
    parkTypeOption.onchange = handleParkTypeOptionChange;
    locationDropDown.onchange = handleLocationDropDownChange;
    parkTypeDropDown.onchange = handleParkTypeDropDownChange;

    // Populate the location dropdown with states
    for (let state of locationsArray) {
        let newOption = new Option(state);
        locationDropDown.appendChild(newOption);
    }

    // Populate the park type dropdown with types
    for (let type of parkTypesArray) {
        let newOption = new Option(type);
        parkTypeDropDown.appendChild(newOption);
    }
};

// Toggle display based on location option selection
function handleLocationOptionChange() {
    if (locationOption.checked) {
        // Show location dropdown, hide park type dropdown, clear park details
        locationSelect.style.display = "block";
        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        locationDropDown.selectedIndex = 0; // Reset dropdown selection
    } else {
        locationSelect.style.display = "none"; // Hide location dropdown
    }
}

// Toggle display based on park type option selection
function handleParkTypeOptionChange() {
    if (parkTypeOption.checked) {
        // Show park type dropdown, hide location dropdown, clear park details
        parkTypeSelect.style.display = "block";
        locationSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        parkTypeDropDown.selectedIndex = 0; // Reset dropdown selection
    } else {
        parkTypeSelect.style.display = "none"; // Hide park type dropdown
    }
}

// Handle location dropdown change
function handleLocationDropDownChange() {
    let selectedState = locationDropDown.value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
    parkDetailRow.innerHTML = ""; // Clear existing park details

    if (filteredParks.length > 0) {
        // Display cards for filtered parks
        for (let park of filteredParks) {
            createNationalParkCard(park);
        }
    }
}

// Handle park type dropdown change
function handleParkTypeDropDownChange() {
    let selectedType = parkTypeDropDown.value;
    const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedType));
    parkDetailRow.innerHTML = ""; // Clear existing park details

    if (filteredParks.length > 0) {
        // Display cards for filtered parks
        for (let park of filteredParks) {
            createNationalParkCard(park);
        }
    }
}

// Create cards with park details
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

// Create list elements with specified content
function createListElement(parent, className, label, value) {
    let listItem = document.createElement("li");
    listItem.className = className;
    listItem.innerHTML = `${label}: ${value}`;
    parent.appendChild(listItem);
}
