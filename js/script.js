// Function to handle product click event
function handleProductClick(productName) {
    const message = `Apakah ${productName} tersedia?`;
    const waLink = `https://wa.me/6282286141946?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
}

//typing text
const text = "DIM'S BARBERSHOP";
let index = 0;
const typingTitle = document.getElementById('typing-title');

function type() {
    if (index < text.length) {
        typingTitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        
        typingTitle.textContent = '';
        index = 0;
        setTimeout(type, 1000);
    }
}

type();