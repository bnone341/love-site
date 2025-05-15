function moveButton() {
    const yesButton = document.getElementById('yesButton');
    const x = Math.random() * (window.innerWidth - yesButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesButton.offsetHeight);
    yesButton.style.position = "absolute";
    yesButton.style.left = `${x}px`;
    yesButton.style.top = `${y}px`;
}

function loveConfirmed() {
    alert("အင်ကြင်းကိုမချစ်တာကို ချစ်တာလို့ယူထားတော့မယ်နော် 😢");
}
