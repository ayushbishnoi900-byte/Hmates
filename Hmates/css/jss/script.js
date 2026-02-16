function bookHostel() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please fill all details");
        return false;
    }

    alert("Booking Request Submitted Successfully!\nThank you for choosing HMates.");
    return true;
}
function updatePrice() {
    let hostel = document.getElementById("hostel").value;
    let room = document.getElementById("room").value;
    let price = 0;

    if (hostel === "HMates Boys Hostel") {
        if (room === "Single") price = 6000;
        if (room === "Double") price = 5000;
        if (room === "Dorm") price = 4000;
    }

    if (hostel === "HMates Girls Hostel") {
        if (room === "Single") price = 5800;
        if (room === "Double") price = 4800;
        if (room === "Dorm") price = 3800;
    }

    if (hostel === "HMates Premium Hostel") {
        if (room === "Single") price = 8500;
        if (room === "Double") price = 7000;
    }

    document.getElementById("price").innerText = price;
}
function filterHostel(type) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (type === "all") {
            card.style.display = "block";
        } else if (card.classList.contains(type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
