const dateSpan = document.getElementById("date");
const now = new Date();
const month = String(now.getMonth() + 1).padStart(2,"0");
const year = now.getFullYear();

dateSpan.textContent = `${month}-${year}`;