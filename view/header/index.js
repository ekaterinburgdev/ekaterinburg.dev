const headerText = document.querySelector('[data-id="header-text"]');

const text = headerText.innerText.split(" ")
headerText.innerHTML = ''

for (let word of text) {
  const el = document.createElement("span");
  el.innerText = word + ' ';
  headerText.appendChild(el);
}

