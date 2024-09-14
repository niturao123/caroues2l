let heading = document.querySelector("h1")
let backbutton = document.querySelector(".back-button")
let nextbutton = document.querySelector(".next-button")
let array = ["images/nature2.jpeg","images/nature3.jpeg","images/nature4.jpeg", "images/nature5.jpeg", "images/nature7.jpeg", "images/nature9.jpeg", "images/nature10.jpeg","images/nature12.jpeg", "images/nature13.jpeg", "images/nature14.jpeg", "images/nautre15.jpeg", "images/nature16.jpeg"]
let image = document.querySelector(".img")
let i = 0;
let text = ["1", "2", "3", "4", "5"]
nextbutton.addEventListener("click", () => {
    console.log("Hello")
    i++;
    if (i >= array.length) i = 0;
    image.setAttribute("src", array[i]);
    image.setAttribute("alt", text[i]);
    console.log(image)
})
backbutton.addEventListener("click", () => {
    // console.log("Hello")
    i--;
    if (i < 0) i = array.length - 1;
    image.setAttribute("src", array[i]);
    image.setAttribute("alt", text[i]);
    console.log(image)
})



