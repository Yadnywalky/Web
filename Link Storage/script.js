// Function to load links from Local Storage
function loadLinks() {
  const savedLinks = JSON.parse(localStorage.getItem("links")) || [];
  savedLinks.forEach(addLinkToDOM);
}

// Function to save links to Local Storage
function saveLinks(links) {
  localStorage.setItem("links", JSON.stringify(links));
}

// Function to add a link to the DOM
function addLinkToDOM(link) {
  const linkList = document.getElementById("linkList");

  const linkItem = document.createElement("div");
  linkItem.classList.add("link-item");

  linkItem.innerHTML = `
    <h3>${link.title}</h3>
    <a href="${link.url}" target="_blank">${link.url}</a>
    <p>${link.category ? `Category: ${link.category}` : ""}</p>
  `;

  // Add a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.classList.add("btn");
  deleteButton.style.marginTop = "1em";
  deleteButton.onclick = () => {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    const updatedLinks = links.filter(
      (item) => item.url !== link.url
    );
    saveLinks(updatedLinks);
    linkList.removeChild(linkItem);
  };

  linkItem.appendChild(deleteButton);
  linkList.appendChild(linkItem);
}

// Handle form submission
document.getElementById("linkForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("linkTitle").value;
  const url = document.getElementById("linkURL").value;
  const category = document.getElementById("linkCategory").value;

  const link = { title, url, category };

  // Save to Local Storage
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.push(link);
  saveLinks(links);

  // Add link to the DOM
  addLinkToDOM(link);

  // Clear the form
  document.getElementById("linkForm").reset();
});

// Load saved links on page load
document.addEventListener("DOMContentLoaded", loadLinks);
