import Swal from 'sweetalert2'
import './style.css'

const dogButton = document.querySelector('#random-dog')
const catButton = document.querySelector('#random-cat')
const surpriseButton = document.querySelector('#surprise-me')
const petImage = document.querySelector('#image')

const theCatApiKey = 'live_QiZugSxBDw10oew54VsW1oDzAjsontJ7CHLgeoggFvIOzu1Itn9qL0T7y2lw5wUR'

dogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((result) => result.json())
        .then((data) => {
            petImage.src = data.message
        })
        .catch((error) => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            confirmButtonText: "Ok"
        }))
})

catButton.addEventListener('click', () => {
    fetch(`https://api.thecatapi.com/v1/images/search?api_key=${theCatApiKey}`)
        .then((result) => result.json())
        .then(([data]) => {
            petImage.src = data.url
        })
        .catch((error) => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            confirmButtonText: "Ok"
        }))
})

surpriseButton.addEventListener('click', () => {
    //retorna a api que responde primeiro
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch(`https://api.thecatapi.com/v1/images/search?api_key=${theCatApiKey}`),
    ])
        .then((result) => result.json())
        .then((data) => {
            let randomApi = data.message || data[0].url
            petImage.src = randomApi
        })
        .catch((error) => Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            confirmButtonText: "Ok"
        }))
})