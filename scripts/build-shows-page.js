import { BandSiteApi } from "../scripts/band-site-api.js";
// import { comment } from "./index-page.js";

const comment2 = new BandSiteApi()
const ticketArray = await comment2.getShows()
// console.log (ticketArray)

// SELECTING MY PARENT HTML CLASS TO APPEND CHILDREN
const showsSection = document.querySelector('.shows__tickets');



// LOOPING THROUGH THE TICKET ARRAY TO CREATE HTML ELEMENTS USING JS DOM
for (let i = 0; i < ticketArray.length; i++) {
    const ticket = ticketArray[i];

    const ticketArticle = document.createElement('article');
    ticketArticle.classList.add('shows__ticket');
    
    const ticketList = document.createElement('ul');
    ticketList.classList.add('shows__list');
    
    
    const dateItem = document.createElement('li');
    dateItem.classList.add('shows__wrapper');
    const dateHeading = document.createElement('h4');
    dateHeading.classList.add('shows__item-heading');
    dateHeading.innerText = 'DATE';
    const dateText = document.createElement('p');
    dateText.classList.add('shows__item', 'shows__item--date');
    const date = ticket.date;
    dateText.innerText = new Date(date).toLocaleDateString('en-US');
    dateItem.appendChild(dateHeading);
    dateItem.appendChild(dateText);
    
   
    const venueItem = document.createElement('li');
    venueItem.classList.add('shows__wrapper');
    const venueHeading = document.createElement('h4');
    venueHeading.classList.add('shows__item-heading');
    venueHeading.innerText = 'VENUE';
    const venueText = document.createElement('p');
    venueText.classList.add('shows__item');
    venueText.innerText = ticket.place;
    venueItem.appendChild(venueHeading);
    venueItem.appendChild(venueText);
    
    
    const locationItem = document.createElement('li');
    locationItem.classList.add('shows__wrapper');
    const locationHeading = document.createElement('h4');
    locationHeading.classList.add('shows__item-heading');
    locationHeading.innerText = 'LOCATION';
    const locationText = document.createElement('p');
    locationText.classList.add('shows__item');
    locationText.innerText = ticket.location;
    locationItem.appendChild(locationHeading);
    locationItem.appendChild(locationText);
    
  
    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.innerText = 'BUY TICKETS';
    ticketList.appendChild(button);
    
    
    ticketList.appendChild(dateItem);
    ticketList.appendChild(venueItem);
    ticketList.appendChild(locationItem);
    ticketList.appendChild(button);
    
    
    ticketArticle.appendChild(ticketList);
    
    showsSection.appendChild(ticketArticle);
}

// SELECTING A CLASS TO ADD MY CSS MODIFIER  AND IMPLEMENT "SELECT" STYLE
const showTicketsElement = document.querySelectorAll('.shows__ticket');

// LOOPING THROUGH EACH ROW ON SHOWS TABLE
showTicketsElement.forEach((ticket) => {
  ticket.addEventListener('click', () => {
    
    // LOOPING TO REMOVE STYLES FROM PREVIOUSLY SELECTED ITEMS
    showTicketsElement.forEach((element) => element.classList.remove('shows__ticket--selected'));

    // ASSIGNING THE MODIFIER CLASS THE THE SELECTED ROW
    ticket.classList.add('shows__ticket--selected');
  });
});

 

