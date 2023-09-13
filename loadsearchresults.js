let searchTerm = new URLSearchParams(window.location.search);

if (searchTerm.has('searchterm')) {
    document.getElementById("search-results-header").innerHTML =
     "Search results for: " + searchTerm.get('searchterm');
}

