const searchInput = document.getElementById('search-input');
const searchResults = document.getElementsByClassName('search-results');

searchInput.addEventListener('input', () => {
  const regex = new RegExp(searchInput.value, 'gi');
  const text = searchResults.innerText;
  const matches = text.match(regex);
  if (matches) {
    const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
    searchResults.innerHTML = highlightedText;
  } else {
    searchResults.innerHTML = text;
  }
});