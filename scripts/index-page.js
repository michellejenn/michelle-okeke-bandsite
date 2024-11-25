
import { BandSiteApi } from "./band-site-api.js";

export const comment = new BandSiteApi();
// SELECTING HTML PARENT CLASS USING DOM
let commentElement = document.querySelector(".previous");

// FUNCTION TO LOOP THROUGH ARRAY AND INSERT THE HTML STRUCTURE TO THE WEBPAGE
async function displayComments(){

    // CLEARING THE INNERHTML BEFORE RE-RENDERING PAGE
    commentElement.innerText ="";

    const commentArray = await comment.getComments();

// reversing the array to show the latest added comment first
    const orderedCommentArray = commentArray.reverse();

// LOOPING THROUGH
    for(let i = 0; i< orderedCommentArray.length; i++){
   
        let comments= orderedCommentArray[i];
        console.log(comments.id);

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
        const timestamp = comments.timestamp;
        paragraphElement.innerText= new Date(timestamp).toLocaleDateString('en-US');
        divElement.appendChild(paragraphElement);
    
        let commentParagraphElement = document.createElement("p");
        commentParagraphElement.classList.add("previous__comment");
        commentParagraphElement.innerText = comments.comment;
        sectionElement.appendChild(commentParagraphElement);

        let likeElement = document.createElement("img");
        likeElement.classList.add("previous__icon");
        likeElement.src = "./assets/icons/icon-like.svg";
        sectionElement.appendChild(likeElement);

        let updatedLikeElement = document.createElement("p");
        updatedLikeElement.classList.add("previous__icon");
        updatedLikeElement.innerText = 0;
        sectionElement.appendChild(updatedLikeElement);

        let deleteElement = document.createElement("img");
        deleteElement.classList.add("previous__icon");
        deleteElement.src = "./assets/icons/icon-delete.svg";
        sectionElement.appendChild(deleteElement);

        // adding an event listener to the like icon which calls the likeComment function as a callback function to handle the "click" event
        likeElement.addEventListener("click", async()=>{
            try{
                let updatedLikes = await comment.likeComment(comments.id);
                console.log(updatedLikes.likes)
                updatedLikeElement.innerText = `${updatedLikes.likes}`
                likeElement.classList.add("like-clicked");

                setTimeout(()=>{
                    likeElement.classList.remove("like-clicked");

                }, 300);
            }
            catch(error){
                console.error(error)
            }
        })
        
        // adding an event listener to the delete icon which calls the deleteComment function as a callback function to handle the "click" event
        deleteElement.addEventListener("click", async ()=>{
            try{
                let deletedComment = await comment.deleteComment(comments.id);
                console.log("Deleted comment:", deletedComment);

                // Removing the articleElement of the deleted object immediately from the dom.
                articleElement.remove();
            }
            catch(error){
                console.error("Error deleting comment:", error);
            }
        })
    }
    
}


// // SELECTING THE FORM OBJECT
let commentFormBody = document.getElementById("comment-form");

// ADDING EVENT LISTENER FOR THE SUBMIT EVENT
commentFormBody.addEventListener("submit", async (event)=>{

    // PREVENTING DEFAULT FORM CLEARANCE
    event.preventDefault()
   
 // GETTING NEWLY ENTERED VALUES FROM THE FORM
   let newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value
   }
   const response = await comment.postComment(newComment);

//    DISPLAYING OLD AND NEW COMMENTS
   displayComments();

// CLEARING FORM
   commentFormBody.reset();
})

// INVOKING FUNCTION TO DISPLAY ARRAY CONTENT ON WEBPAGE WHEN JAVASCRIPT FIRST LOADS
displayComments();

