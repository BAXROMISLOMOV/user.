document.addEventListener("DOMContentLoaded", async () => {
    let container = document.querySelector(".container");
    let loading = document.querySelector(".loading");
    loading.style.display = "block";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      loading.style.display = "none";
      data.forEach((user) => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let userName = document.createElement("h3");
        let email = document.createElement("h4");
        let address = document.createElement("p");
        let zipcode = document.createElement("p");
        let number = document.createElement("p");
        name.textContent = `Name: ${user.name}`;
        userName.textContent = `User Name: ${user.username}`;
        email.textContent = `Email: ${user.email}`;
        address.textContent = `Address: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}`;
        zipcode.textContent = `Zipcode: ${user.address.zipcode}`;
        number.textContent = `Phone Number: ${user.phone}`;
        card.append(name, userName, email, address, zipcode, number);
        container.append(card);
      });
    } catch (error) {
      console.error(error);
    }
  });