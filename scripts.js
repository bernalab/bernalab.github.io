const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dd) => {

    const ddLabel = dd.querySelector(".label");
    const ddContent = dd.querySelector(".content");

    ddLabel.addEventListener( 'click', async () => {

        await ddContent.classList.toggle("closed");
        await dd.classList.toggle("border-2")
        await dd.classList.toggle("border-0")
        
        await ddLabel.classList.toggle("border")
        await ddLabel.classList.toggle("border-bottom")
    })
})