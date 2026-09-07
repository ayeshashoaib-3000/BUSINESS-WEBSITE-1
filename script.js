document.addEventListener("DOMContentLoaded", function () {

    const heroBtn = document.getElementById("heroBtn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("We will contact you soon!");
        });
    }

    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thanks! We got your message.");
        });
    }

});
