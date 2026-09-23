let quantity = 1;
const pricePerKg = 350;

function changeQuantity(amount) {
    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
    }

    document.getElementById("quantity").textContent = quantity;
    document.getElementById("totalPrice").textContent =
        quantity * pricePerKg;

    updateCheckout();
}

function updateCheckout() {
    const checkoutQuantity =
        document.getElementById("checkoutQuantity");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    if (checkoutQuantity) {
        checkoutQuantity.textContent = quantity;
    }

    if (checkoutTotal) {
        checkoutTotal.textContent =
            quantity * pricePerKg;
    }
}

function showCheckout() {
    updateCheckout();

    document.getElementById("checkout")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function sendOrder() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();

    if (!name || !phone || !address) {
        alert("Please fill in all details before ordering.");
        return;
    }

    const total = quantity * pricePerKg;

    const message =
        "Hello Peantora!%0A%0A" +
        "I want to place an order.%0A%0A" +
        "Name: " + name + "%0A" +
        "WhatsApp: " + phone + "%0A" +
        "Quantity: " + quantity + " kg%0A" +
        "Total: ₹" + total + "%0A%0A" +
        "Delivery Address:%0A" +
        address;

    const phoneNumber = "917700916425";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.location.href = whatsappURL;
}

function toggleMenu() {
    const nav =
        document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }
}

function closeMenu() {
    const nav =
        document.getElementById("mainNav");

    if (nav) {
        nav.classList.remove("active");
    }
}