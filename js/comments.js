document.addEventListener("DOMContentLoaded", async () => {
    let container = document.querySelector(".container");
    let loading = document.querySelector(".loading");
    loading.style.display = "block";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
      loading.style.display = "none";
      data.forEach((user) => {
        let card = document.createElement("div");
        let postId = document.createElement("div");
        let id = document.createElement("p");
        let name = document.createElement("h3");
        let email = document.createElement("h4");
        let comment = document.createElement("p");
        postId.textContent = `Post Id: ${user.postId}`;
        id.textContent = `Id: ${user.id}`;
        name.textContent = `User's Name: ${user.name}`;
        email.textContent = `Email: ${user.email}`;
        comment.textContent = `Comment: ${user.body}`;
        card.append(postId, id, name, email, comment);
        container.append(card);
      });
    } catch (error) {
      console.error(error);
    }
  });
  