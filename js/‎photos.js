document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".container");
  const loading = document.querySelector(".loading");
  console.log("asasas");
  
  if (loading) loading.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    if (loading) loading.style.display = "none";

    data.slice(0, 50).forEach((photo) => { // Faqat birinchi 50 ta rasmlar
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;

      const title = document.createElement("p");
      title.textContent = photo.title;

      card.appendChild(img);
      card.appendChild(title);
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
