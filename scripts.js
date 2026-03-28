const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dd) => {

    const ddLabel = dd.querySelector(".label");
    const ddContent = dd.querySelector(".content");

    ddLabel.addEventListener( 'click', () => {

        ddContent.classList.toggle("closed");
    })
})