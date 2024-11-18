// TICKETARRAY SERVING AS MY DATABASE/SOURCE OF TRUTH
const ticketArray =[
    {date:"Mon Sept 09 2024", venue:"Ronald Lane ", location:"San Francisco, CA"}, 
    {date:"Tue Sept 17 2024" ,venue: "Pier 3 East ", location:"San Francisco, CA"},
    {date:"Sat Oct 12 2024", venue:"View Lounge", location:"San Francisco, CA"}, 
    {date:"Sat Nov 16 2024",venue:"Hyatt Agency", location:"San Francisco, CA"},
    {date:"Fri Nov 29 2024", venue:"Moscow Center", location:"San Francisco, CA"}, 
    {date:"Wed Dec 18 2024",venue:"Press Club", location:"San Francisco, CA"},
]

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
    dateText.innerText = ticket.date;
    dateItem.appendChild(dateHeading);
    dateItem.appendChild(dateText);
    
   
    const venueItem = document.createElement('li');
    venueItem.classList.add('shows__wrapper');
    const venueHeading = document.createElement('h4');
    venueHeading.classList.add('shows__item-heading');
    venueHeading.innerText = 'VENUE';
    const venueText = document.createElement('p');
    venueText.classList.add('shows__item');
    venueText.innerText = ticket.venue;
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

 

