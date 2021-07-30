function GOlink(name) {
    window.location.assign(`search/${name}.html`);
}

function gosearch(event){
    if( event.keyCode === 13 ){
        var intput = document.getElementById("search").value;
        window.location.assign(`http://google.com/search?q=${intput}`)
    }
}