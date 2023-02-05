document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => {
        const dogs = data
        displayRegisteredDogs(dogs)
    })
})


function displayRegisteredDogs(dogs) {
    dogs.forEach(dog => {
        const registeredDogsContainer = document.getElementById("table-body")
        const tr = document.createElement("tr")
        const name = document.createElement("td")
        name.innerText = dog.name
        const dogBreed = document.createElement("td")
        dogBreed.innerText = dog.breed
        const dogSex = document.createElement("td")
        dogSex.innerText = dog.sex
        const button =  document.createElement("button")
        button.innerText = "Edit Dog"
        button.addEventListener("click", () => editDog(dog))
        tr.append(name, dogBreed, dogSex, button)
        registeredDogsContainer.append(tr)
        
    })
}

function editDog(dog) {
    let editDogName = document.getElementById("editName")
    editDogName.value = dog.name
    const editDogBreed = document.getElementById("editBreed")
    editDogBreed.value = dog.breed
    const editDogSex = document.getElementById("editSex")
    editDogSex.value = dog.sex
    const submitForm = document.getElementById("dog-form")
    submitForm.addEventListener("submit", () => {
        event.preventDefault()
        dog.name = editDogName.value
    })
}