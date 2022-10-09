let playerName = "";
const playerNameInput = document.querySelector("#playername");
const change = document.querySelectorAll(".textlastpage");
playerNameInput.addEventListener("change", function (event) {
    playerName = event.target.value;
    for (let i=0; i < change.length; i++){
        change[i].innerHTML=`${playerName}`
    }
});




const validButtons = document.querySelectorAll(".valid-button")
validButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const inputs = document.querySelectorAll(`input[name=${button.dataset.input}`)
        inputs.forEach((input) => {
            input.classList.add(input.dataset.response);
        })
    })
})

