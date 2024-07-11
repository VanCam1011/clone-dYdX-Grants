const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
