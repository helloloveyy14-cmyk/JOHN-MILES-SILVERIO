// ==============================
// MIGUELEO SPORTS BAR AND COFFEE SHOP
// JAVASCRIPT
// ==============================

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

```
contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        alert("Please fill out all required fields.");

        return;
    }

    alert(
        "Thank you for contacting MIGUELEO SPORTS BAR AND COFFEE SHOP!\n\nWe have received your message."
    );

    contactForm.reset();

});
```

}

// RESERVATION FORM

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

```
reservationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const eventType = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (
        fullname === "" ||
        email === "" ||
        phone === "" ||
        eventType === "" ||
        date === "" ||
        guests === ""
    ) {

        alert("Please complete all required fields.");

        return;
    }

    alert(
        "Thank you!\n\nYour reservation request has been submitted successfully."
    );

    reservationForm.reset();

});
```

}