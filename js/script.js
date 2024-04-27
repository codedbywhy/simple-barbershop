// Function to handle product click event
        function handleProductClick(productName) {
            const message = `Apakah ${productName} tersedia?`;
            const waLink = `https://wa.me/6281364947152?text=${encodeURIComponent(message)}`;
            window.open(waLink, "_blank");
        }