// ARRAY SERVING AS MY DATABASE OR SOURCE OF TRUTH
const commentArray=[
    { 
        name: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    { 
        name: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    { 
        name: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."

    }
]
// SELECTING HTML PARENT CLASS USING DOM
let commentElement = document.querySelector(".previous");

// FUNCTION TO LOOP THROUGH ARRAY AND INSERT THE HTML STRUCTURE TO THE WEBPAGE
function displayComments(){

    // CLEARING THE INNERHTML BEFORE RE-RENDERING PAGE
    commentElement.innerText ="";

// LOOPING THROUGH
    for(let i = 0; i< commentArray.length; i++){
   
        let comments= commentArray[i];
       
    
        let articleElement = document.createElement("article");
        articleElement.classList.add("previous__article");
        commentElement.appendChild(articleElement);
    
        let imageElement = document.createElement("p");
        imageElement.classList.add("previous__image");
        articleElement.appendChild(imageElement);
    
        let sectionElement = document.createElement("section");
        sectionElement.classList.add("previous__section");
        articleElement.appendChild(sectionElement);
        
        let divElement = document.createElement("div");
        divElement.classList.add("previous__wrapper");
        sectionElement.appendChild(divElement);
    
        let headingElement =document.createElement("h4");
        headingElement.classList.add("previous__name");
        headingElement.innerText = comments.name;
        divElement.appendChild(headingElement);
    
        let paragraphElement = document.createElement("p");
        paragraphElement.classList.add("previous__date");
        paragraphElement.innerText= comments.date;
        divElement.appendChild(paragraphElement);
    
        let commentParagraphElement = document.createElement("p");
        commentParagraphElement.classList.add("previous__comment");
        commentParagraphElement.innerText = comments.comment;
        sectionElement.appendChild(commentParagraphElement);
    
    }
    
}
// INVOKING FUNCTION TO DISPLAY ARRAY CONTENT ON WEBPAGE
displayComments()



// SELECTING THE FORM OBJECT
let commentFormBody = document.getElementById("comment-form");

// ADDING EVENT LISTENER FOR THE SUBMIT EVENT
commentFormBody.addEventListener("submit", (event)=>{

    // PREVENTING DEFAULT FORM CLEARANCE
    event.preventDefault()

   let dateNow = Date.now();
   const formattedDate = new Date(dateNow).toLocaleDateString('en-US');
   
    // GETTING NEWLY ENTERED VALUES FROM THE FORM
   let newComment = {
    name: event.target.name.value,
    date: formattedDate,
    comment: event.target.comment.value
   }
  
//    ADDING NEW COMMENTS TO THE EXISTING ARRAY
   commentArray.unshift(newComment);
   console.log('new comment', newComment)

//    DISPLAYING OLD AND NEW COMMENTS
   displayComments();

// CLEARING FORM
   commentFormBody.reset();
})


