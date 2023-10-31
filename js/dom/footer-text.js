const doc = document;

export default function printFootText(text) {
  const $footText = doc.getElementById("footText");

  $footText.innerHTML = `<small><strong>${text}</strong></small>`;
}
