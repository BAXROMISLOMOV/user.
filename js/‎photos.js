
document.addEventListener("DOMContentLoaded", async () => {
    let container = document.querySelector(".container");
    let loading = document.querySelector(".loading");
    try {
      loading.style.display = "block";
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      loading.style.display = "none";
      data.forEach((user) => {
        let card = document.createElement("div");
        let UserId = document.createElement("h2");
        let Id = document.createElement("h3");
        let Title = document.createElement("h4");
        let complated = document.createElement("div");
        UserId.textContent = `User Id: ${user.userId}`;
        Id.textContent = `ID: ${user.id}`;
        Title.textContent = `Title: ${user.title}`;
        complated.textContent = `Completed: ${user.completed}`;
        card.append(UserId, Id, Title, complated);
        container.append(card);
      });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      loading.style.display = "none";
    }
  });