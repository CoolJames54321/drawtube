// Handle file upload
const uploadArea = document.getElementById("upload-area");
const fileInput = document.getElementById("file-input");
const galleryGrid = document.getElementById("gallery-grid");

uploadArea.addEventListener("click", () => {
  fileInput.click();
});

uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = "blue";
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.style.borderColor = "#aaa";
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = "#aaa";
  const file = e.dataTransfer.files[0];
  handleFileUpload(file);
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  handleFileUpload(file);
});

function handleFileUpload(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please upload a valid image file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.createElement("img");
    img.src = e.target.result;
    galleryGrid.appendChild(img);
  };
  reader.readAsDataURL(file);
}

// Authentication buttons
document.getElementById("login-btn").addEventListener("click", () => {
  alert("Login functionality coming soon!");
});

document.getElementById("signup-btn").addEventListener("click", () => {
  alert("Sign-up functionality coming soon!");
});
