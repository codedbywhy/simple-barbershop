// Function to handle product click event
        function handleProductClick(productName) {
            const message = `Apakah ${productName} tersedia?`;
            const waLink = `https://wa.me/6282286141946?text=${encodeURIComponent(message)}`;
            window.open(waLink, "_blank");
        }