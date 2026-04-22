const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dd) => {

    const ddLabel = dd.querySelector(".label");
    const ddContent = dd.querySelector(".content");

    dd.classList.add("opacity-90");


    ddLabel.addEventListener( 'click', () => {

         ddContent.classList.toggle("visually-hidden");
         dd.classList.toggle("off");
         
         dd.classList.toggle("opacity-90");
    })
})