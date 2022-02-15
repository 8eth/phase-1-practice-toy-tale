let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// Global Variables
const url = 'http://localhost:3000/toys'

// DOM Selectors
const toyCollection = document.querySelector('#toy-collection')
const form = document.querySelector('.add-toy-form')

// Listeners
// form.addEventListener('submit', handleNewToy)

// Fetchers
function fetchAllToys(toysArr) {
  return fetch(url)
  .then (res=> res.json())
}

// Render Functions
function renderAllToys(toysArr) {
  toysArr.forEach(renderOneToy)
}

function renderOneToy(toysArr) {
  let div = document.createElement ('div')
  div.className = 'card'

  let name = document.createElement ('h2')
  name.innerText = toysArr.name
  
  let img = document.createElement ('img')
  img.src = toysArr.image
  img.className = 'toy-avatar'

  let likes = document.createElement ('p')
  likes.innerText = `${toysArr.likes} Likes`

  let likeBtn = document.createElement ('button')
  likeBtn.className = 'like-btn'
  likeBtn.id = toysArr.id
  likeBtn.textContent = 'Like'
 
  toyCollection.appendChild(div)
  div.appendChild(name)
  div.appendChild(img)
  div.appendChild(likes)
  div.appendChild(likeBtn)

  likeBtn.addEventListener('click', (
    function handleLikes() {
      let moreLikes = parseInt(likes.textContent)
      likes.textContent = `${moreLikes + 1} Likes`
    }
  ))
  
  
}

// Event Handlers
form.addEventListener('submit', (
  function handleNewToy (e) {
    e.preventDefault()
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.image.value);

    $TARGET = e.target;
    // find the name in your console
    // it might be on event `e`
    $EVENT = e;
    e.target.reset()
  }
))

// Initializer
fetchAllToys().then(renderAllToys)