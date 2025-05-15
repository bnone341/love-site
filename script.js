function nextPage() {
    alert("Yay! I love you too! 💖");
    // သင့်အားသီးသန့် success page သို့ပြောင်းချင်ရင်:
    // window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
