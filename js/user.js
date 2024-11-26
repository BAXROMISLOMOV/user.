document.addEventListener("DOMContentLoaded", async () => {
  let container = document.querySelector(".container");
  let loading = document.querySelector(".loading");

  if (loading) loading.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    if (loading) loading.style.display = "none";

    data.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card"); 

      let name = document.createElement("h2");
      let userName = document.createElement("h3");
      let email = document.createElement("h4");
      let address = document.createElement("p");
      let number = document.createElement("p");

      name.textContent = `Name: ${user.name}`;
      userName.textContent = `Username: ${user.username}`;
      email.textContent = `Email: ${user.email}`;
      address.textContent = `Address: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}`;      number.textContent = `Phone Number: ${user.phone}`;

      card.append(name, userName, email, address,  number);
      container.append(card);
    });
  } catch (error) {
    if (loading) loading.style.display = "none";
    console.error("An error occurred:", error.message);
    let errorMessage = document.createElement("div");
    errorMessage.style.color = "red";
  }
});
