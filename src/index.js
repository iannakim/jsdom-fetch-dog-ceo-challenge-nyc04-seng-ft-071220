const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreeds();
})

let dogImgDiv = document.querySelector("#dog-image-container")  

function loadImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then((dogObj) => {
        // console.log(dogObj.message);
        dogObj.message.forEach((dog) => {
        turnDogObjToLi(dog)})
    })

    let turnDogObjToLi = (dogPOJO) => {
    let dogImg = document.createElement("img")
    dogImg.src = dogPOJO
    dogImgDiv.append(dogImg)
    }
}

let dogUl = document.querySelector("ul#dog-breeds");

function loadBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then((dogObj) => {
        // console.log(Object.values(dogObj.message));
        Object.keys(dogObj.message).forEach((key) => {
            let value = dogObj.message[key];
            // console.log(key);
            // console.log(value);
            if (value.length > 0) {
                value.forEach((val) => { 
                    // console.log(val + " " + key);
                    let dogBreedsLi = document.createElement("li");
                    dogBreedsLi.innerText = val + " " + key;
                    dogUl.append(dogBreedsLi);
                    changeColor(dogBreedsLi);
                })
            }
            else {
                // console.log(key);
                let dogBreedsLi = document.createElement("li");
                dogBreedsLi.innerText = key;
                dogUl.append(dogBreedsLi);
                changeColor(dogBreedsLi);
            }



        })
    })
}


function changeColor(elem) {
    elem.addEventListener("click", function() {
        elem.style.color = '#4c4';
    });
}

//clear out the List
//fetch dog breeds again
//display only dog breeds with the first letter that matches the user input

const dropDown = document.querySelector("select#breed-dropdown");

dropDown.addEventListener('change', (e) => {
    let selection = e.target.value
    console.log("START FETCHING!")
    })


