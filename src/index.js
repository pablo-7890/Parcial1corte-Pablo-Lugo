import RickAndMortyService from './service';


// acá deberás crear una instancia del servicio RickAndMortyService
// const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

function createCharacterList() {
    // llamar primero createCharacterCard(character);
    // llamar segundo addCharacterListeners(character);
    const service = new RickAndMortyService();
    const container = document.getElementById('character-container');

    service.getAllCharacters()
        .then(mispersonajes => {
            mispersonajes.forEach(personaje => {
                const characterCardHTML = createCharacterCard(personaje);
                const characterElement = document.createElement('div');
                characterElement.innerHTML = characterCardHTML;
                characterElement.dataset.name = personaje.name;

                addCharacterListeners(characterElement);    

                container.appendChild(characterElement);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });

}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(personaje) {
    const imageUrl = personaje.image;
    let statusClass = "";

    if (personaje.status === "Alive") {
        statusClass = "alive";
    } else if (personaje.status === "Dead") {
        statusClass = "dead";
    } else {
        statusClass = "unknown";
    }

            return `<div class="character">
            <img src="${imageUrl}" alt="${personaje.name}" class="character-image">
            <p><strong>Name:</strong> ${personaje.name}</p>            
            <p><strong>Status:</strong> <span class="character-status ${statusClass}">${personaje.status}</span></p>
            <p><strong>Species:</strong> ${personaje.species}</p>
            <p><strong>First Seen In:</strong> ${personaje.firstSeen}</p>
            <p><strong>Last Known Location:</strong> ${personaje.location}</p>
            <p>${personaje.student}</p>
            <p>${personaje.code}</p>
            </div>`;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(characterElement) {
    characterElement.addEventListener('click', () => {
        console.log(`Hola, soy ${characterElement.dataset.name}`);
    });

}
// por último se llama la función y se renderiza la vista
createCharacterList();
