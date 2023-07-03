//Una APi Rest nos permite obtener información de diferentes elementos de un modelo que se encuentra aen algún sitio web. Para poder realizar la pokedex 

const pokeApiUrl = "https://pokeapi.co/api/v2/";

//Vamos a crear una funcíon flecha que nos permita obtener los elemntos de la API

const pokeDex = ()=> {
    //NEcesitamos un objeto auxiliar  que nos permita poder obtener 

    const pokemonStatsElements = {
        hp: document.getElementById("pokemonStatHp"), attack: document.getElementById("pokemonStatAttack"), 
        defense: document.getElementById("pokemonStatDefense"), specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"), speed: document.getElementById("pokemonStatpokemonStatSpeed")
    }

    //Necesitamos un auxiliar que nos permita obtener cambiar la ccs de acuerdo al tipo de pokémon

    let currentClassType = null;
    //Necesitamos una cadena que nos muestre la imagen del tipo de pokemon

    const imagenTemplate = "<img class = 'pokedisplay' src='{imgSrc}' alt= 'pokedisplay' />";

    //Necesitamos un objeto que guarde las rutas de las imagenes

    const images = {
        imgPokemonNotFound: "../pokemon/img/404.png",
        imgLoading: "../pokemon/img/loading.gif"
    };

    //Necesitamos un onjeto que obtenga las referencias de los elementos que van a desplegar de acuerdo a la informaicón del Pkm

    const containers = {
        imageContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemontypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMovesElementes: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId")
    };

    //Necesitamos un objeto que contega las referencias de todos los botones

    const button = {
        all : Array.from(document.getElementById(btn)),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previous : document.getElementById("btnDown")
    };

    //Necesitamos la referencia al campo de texto que usa el usuario para escribir el nombre del pkm

    const pokemonInput = document.getElementById("pokemonName");

    //Necesitamos una función de obtener el tipo de pokémon y nos devuelva el resultado de la búsqueda dentro de la API

    const processPokemonTypes = (pokemonData) => {
        let pokemonType = "";
        //Vamos a utulizar la primera clase para dar color a los contenedores

        const firstClass = pokemonData.types[0].type.name;
        //Donde sale types, sale directamente de la página de pokeAPI

        pokemonData.types.forEach((pokemonTypeData) => {
            //Vamos a crear una etiqueta de clase por cada tipo de pokémon dentro del arreglo
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}" > ${pokemonTypeData.type.name}</span>`
            
        });

        //Vamos a quitar la clase previa del contenedor de habilidades y movimientos actualizar la nueva

        if (currentClassType) {
            containers.pokemonMovesElementes.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //Ahora se agrega la clase al contenedor de habilidades y movimientos

        containers.pokemonMovesElementes.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);

        currentClassType = firstClass;

        //Se agregan las etiquetas creadas 
        containers.pokemonTypesContainer.innerHTML = pokemonType;


    };

    //Vamos hacer una función para obtener todas las estadísticas

    const processPokemonStats = (pokemonData) => {
        //vamos a utilizar el operador ternario para realizar un encadenamiento del recorrido del arreglo.
        pokemonData.stats?.forEach((pokemonStatData)=> {
            //Vamos a evaluar el nombre de la estadística y colocar su valoe respectivo dentro del contenedor

            switch (pokemonStatData.stat.name) {
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
            
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
            
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;

                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linaer-gradient (0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%,
                    rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                
            }; //Fin Switch
        });
    };

    //Necesitamos una función que haga lo mismo que la de stats, pero con los movimientos

    const processPokemonMoves = (pokemonData) => {

        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMoves)=> {
            pokemonMovesContent += `<li> ${pokemonMove.move.name}</li>`;

        });
        containers.pokemonMovesElementes.innerHTML = pokemonMovesContent;

    };

    const processPokemonAbilities = (pokemonData) => {

        let pokemonAbilitiesContent = "";
        pokemonData.Abilities?.forEach((pokemonAbility)=> {
            pokemonAbilitiesContent += `<li> ${pokemonAbility.ability.name}</li>`;

        });
        containers.pokemonAbilitiesElementes.innerHTML = pokemonAbilitiesContent;

    };

    //Necesitamos una función para habilitar y deshabilitar los botones

    const setLoading = () =>{
        containers.imageContainer.innerHTML = imagenTemplate.replace("{imgSrc", images.imgLoading);
        buttons.all.forEach(button => button.disabled = true);
    };

    const setLoadingComplete = () => {
        buttons.all.forEach(button => cheakDisabled(button));
    };

} 