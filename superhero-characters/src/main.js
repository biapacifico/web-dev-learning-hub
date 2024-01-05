import Swal from 'sweetalert2'
import './style.css'

const image = document.querySelector('.image')
const name = document.querySelector('.name')
const publisher = document.querySelector('.publisher')
const button = document.querySelector('.btn')

//url da api que será consumida
const URL = 'https://akabab.github.io/superhero-api/api'

//função que gera um número aleatório para ser o ID
const generateRandomId = () => Math.floor(Math.random() * 731)

button.addEventListener('click', () => {
    let randomId = generateRandomId()
    fetch(`${URL}/id/${randomId}.json`)
        .then((result) => result.json())
        .then((data) => {
            image.src = data.images.md
            name.innerHTML = data.name
            publisher.innerHTML = `Editora: ${data.biography.publisher}`
        })
        .catch((error) => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            confirmButtonText: "Vou procurar outro",
        }))
})