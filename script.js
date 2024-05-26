var overlay = document.querySelector(".overlay")
var box = document.querySelector(".box")
var Btn = document.getElementById("add-popup-button")

Btn.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})

var cancel = document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
})


var container = document.querySelector(".container")
var Booktitle = document.getElementById("Book-title-input")
var Bookauthor = document.getElementById("Book-author-input")
var addbook = document.getElementById("add-book")
var description = document.getElementById("book-description-input")



addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${Booktitle.value}</h2>
    <h5>${Bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}