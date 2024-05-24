var allpics = document.getElementById("allpics")
var pics__arr = allpics.querySelectorAll("div")
var view = document.getElementById("view")
var closebtn = document.getElementById("closebtn")

closebtn.addEventListener("click", () => {
    view.style.display = "none"
})

for (let i = 0; i < pics__arr.length; i++) {
    pics__arr[i].addEventListener("click", function (event) {
        view.style.display = "block"
        view.querySelector("img").classList.add("inline", "h-3/4", "md:mt-24", "mt-28")
        view.querySelector("img").src = event.target.currentSrc
    })
}
