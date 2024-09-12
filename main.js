let heading = document.querySelector("h1")
let backbutton = document.querySelector(".back-button")
let nextbutton = document.querySelector(".next-button")
let array = ["images/butterfly1.jpeg", "images/butterfly2.jpeg", "images/buttefly3.jpeg", "images/butterfly4.jpg", "images/butterfly5.jpg", "images/buttefly6.jpeg"]
let image = document.querySelector(".img")
let i = 0;
let text = ["1", "2", "3", "4", "5"]
nextbutton.addEventListener("click", () => {
    // console.log("Hello")
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



