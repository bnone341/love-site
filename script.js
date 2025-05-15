function moveButton() {
    const yesButton = document.getElementById('yesButton');
    const x = Math.random() * (window.innerWidth - yesButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesButton.offsetHeight);
    yesButton.style.position = "absolute";
    yesButton.style.left = `${x}px`;
    yesButton.style.top = `${y}px`;
}

function loveConfirmed() {
    alert("မင်းက အင်ကြင်းကိုချစ်တာကိုသိပြီနော် 😍!");
    // အဲ့ဒီနောက် success page သို့သွားချင်ရင်:
    // window.location.href = "love.html";
}
