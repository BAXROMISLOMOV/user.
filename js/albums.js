document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".container");
    const loading = document.querySelector(".loading");
  
    if (loading) loading.style.display = "block";
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
  
      if (loading) loading.style.display = "none";
  
      // Albomlarni ko'rsatish
      data.forEach((album) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const title = document.createElement("h3");
        title.textContent = `Album Title: ${album.title}`;
  
        const albumId = document.createElement("p");
        albumId.textContent = `Album ID: ${album.id}`;
  
        card.appendChild(title);
        card.appendChild(albumId);
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
  