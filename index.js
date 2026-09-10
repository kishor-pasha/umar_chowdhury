const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav-list');
const introButtons = document.querySelector('.buttons')
const readMore = document.querySelectorAll(".read-more");


navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    introButtons.classList.toggle('active');
});

readMore.forEach(button => {
    button.addEventListener("click", function () {
        const text = this.previousElementSibling;
        const moreText = text.querySelector(".more-text");

        moreText.classList.toggle("show");

        this.textContent = moreText.classList.contains("show")
            ? "Read Less"
            : "Read More";
    });
});
