function getChacters(done){
    const results = fetch("https://mhw-db.com/monsters");

    results
    .then(response => response.json())
    .then(data => {done(data)});
}

getChacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(`
            <article> 
                <div class="image-container">
                <img src="${personaje.image}" alt="Juego">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article>
        `);

        const main = document.querySelector("main");
        main.append(article);

    });    
});
