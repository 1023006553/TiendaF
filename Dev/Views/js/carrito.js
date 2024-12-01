let cartItems = [];

    function addItemToCart(productName, productPrice) {
        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    }


    function updateCart() {
        const cartCountElement = document.getElementById('cart-count');
        const cartItemsDiv = document.getElementById('cart-items');
        const cartTotalDiv = document.getElementById('cart-total');

        cartCountElement.textContent = cartItems.length;

        cartItemsDiv.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            cartItemsDiv.innerHTML += `<div class="product">${item.name} - $${item.price.toFixed(2)}</div>`;
            total += item.price;
        });

        cartTotalDiv.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    }

    function toggleCart() {
        const cart = document.getElementById('cart');
        cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
    }

    function purchaseProducts() {
        if (cartItems.length === 0) {
            alert("Tu carrito está vacío. Añade productos antes de comprar.");
            return;
        }

        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        const confirmation = confirm(`¿Estás seguro de que deseas comprar los productos por un total de $${total.toFixed(2)}?`);

        if (confirmation) {
            alert("Compra realizada con éxito. ¡Gracias por tu compra!");
            cartItems = []; // Vaciar el carrito
            updateCart(); // Actualizar la vista del carrito
            toggleCart(); // Cerrar el carrito
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.dataset.productName;
                const productPrice = parseFloat(button.dataset.productPrice);
                addItemToCart(productName, productPrice);
            });
        });
    });




