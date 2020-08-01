let div = document.querySelector('.joke')
function updateJoke(name, surname) {
    div.innerHTML = 'Loading...'

    let xhr = new XMLHttpRequest()
    let URL = 'https://api.icndb.com/jokes/random'

    if (name && surname) {
        URL += `?firstName=${name}&lastName=${surname}`
    }
        
    xhr.open('GET', URL)
    xhr.send()

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        div.innerHTML = data.value.joke
    })
}

updateJoke()

const form = document.querySelector('#form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const firstName = form.elements.firstName
    const lastName = form.elements.lastName

    updateJoke(firstName.value, lastName.value)
})