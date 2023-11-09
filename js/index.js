const doc = document;

import printFootText from "./dom/footer-text.js";

doc.addEventListener("DOMContentLoaded", (e) => {
  const msg = "Hecho con ❤️ por CEVA®️";
  printFootText(msg);
});
