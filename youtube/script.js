let menuIcon = document.querySelector(".menu_icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small_sidebar");
    container.classList.toggle("large-container");
}