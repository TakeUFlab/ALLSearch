let searchInput = document.getElementById('searchInput');

let engine = 'Google';

window.onload = () => {
    searchInput.placeholder = `Search on ${engine}`;
}

function setEngine(engineName) {
    engine = engineName;
    searchInput.value = '';
    searchInput.placeholder = `Search on ${engine}`;
}

window.addEventListener('keyup', (e) => {
    searchInput = document.getElementById('searchInput').value;
    if (e.keyCode == 13) {
        switch (engine) {
            case 'Google':
                window.location.assign(`https://www.google.com/search?q=${searchInput}`);
                break;
            case 'Yahoo':
                window.location.assign(`https://tw.search.yahoo.com/search?p=${searchInput}`);
                break;
            case 'bing':
                window.location.assign(`https://www.bing.com/search?q=${searchInput}`);
                break;
            case 'BiliBili':
                window.location.assign(`https://search.bilibili.com/all?keyword=${searchInput}`);
                break;
            case 'DuckDuckGo':
                window.location.assign(`https://duckduckgo.com/?q=${searchInput}`);
                break;
            case 'github':
                window.location.assign(`https://github.com/search?q=${searchInput}`);
                break;
            case 'amazon':
                window.location.assign(`https://www.amazon.com/s?k=${searchInput}`);
                break;
            case 'Youtube':
                window.location.assign(`https://www.youtube.com/results?search_query=${searchInput}`);
                break;
            default:
                alert('Server error, please reload pages');
                break;
        }
    }
});