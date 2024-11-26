document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".container");
    const loading = document.querySelector(".loading");
  
    if (loading) loading.style.display = "block";
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
  
      if (loading) loading.style.display = "none";
  
      // Todo-larni ko'rsatish
      data.forEach((todo) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const title = document.createElement("h3");
        title.textContent = `Todo: ${todo.title}`;
  
        const status = document.createElement("p");
        status.textContent = `Completed: ${todo.completed ? "Yes" : "No"}`;
        status.style.color = todo.completed ? "green" : "red";
  
        card.appendChild(title);
        card.appendChild(status);
        container.appendChild(card);
      });
    } catch (error) {
      if (loading) loading.style.display = "none";
  
      const errorMessage = document.createElement("div");
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.color = "red";
      container.appendChild(errorMessage);
    }
  });
  