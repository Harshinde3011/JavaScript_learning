// add and remove todo 


let todoForm = document.querySelector(".Form_todo")
let Text = document.querySelector(".Form_todo input[type='text']")
let ul = document.querySelector(".todo-list")

todoForm.addEventListener("submit", function(e){
    e.preventDefault();    // stop refreshing
    let newText = Text.value;   // whatever we write 
    Text.value = "";            // clear after write

    let newLi = document.createElement("li")                        // it will create todo bar as in html code line no:46
    newLiInnerHTML = `<span class="text">${newText}</span>           
    <div class="todo-buttons">
        <button class="todo-btn Done">Done</button>
        <button class="todo-btn Remove">Remove</button>
    </div>`

    newLi.innerHTML = newLiInnerHTML                               // insert html block 

    ul.append(newLi)                                               // append li in ul 

})


ul.addEventListener("click", function(e){

    if(e.target.classList.contains("Done")){
        let LiSpan = e.target.parentNode.previousElementSibling;
        LiSpan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("Remove")){
        let removeIt = e.target.parentNode.parentNode;
        removeIt.remove()
    }  
})