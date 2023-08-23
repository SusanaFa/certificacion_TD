// ...

const campeonatoSelect = document.getElementById('campeonatoSelect');

// Cargar los campeonatos desde la API y llenar el select
async function loadCampeonatos() {
    try {
        const response = await fetch('/api/campeonatos');
        const campeonatos = await response.json();

        campeonatos.forEach(campeonato => {
            const option = document.createElement('option');
            option.value = campeonato.id;
            option.textContent = campeonato.nombre;
            campeonatoSelect.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

loadCampeonatos();

// ...


//Susana Farías Vera
//sprint MOD9 y certificación final Talento Digital
//Agosto 2023
