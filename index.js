// console.log('Hello')
// We are going to want to get and set the value of our input field in this function, so let’s select it now. Use querySelector to get the input, save it to a variable called inputField.

let inputField = document.querySelector("input")
let message = document.querySelector('#message')

// In index.js, create a new function called addMovie that takes in an event as a parameter.
function addMovie(event) {
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let element = document.querySelector('ul')
    element.appendChild(movie)


    inputField.value = ''
}
function deleteMovie(event) {
    event.target.parentNode.remove() 
    message.textContent = 'movie deleted!'
}

let formElement = document.querySelector('form')
formElement.addEventListener('submit', addMovie)
console.log(addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains === 'checked'){
        message.textContent = 'Watched!'
    } else {
        message.textContent = "Added!"
    }
}




