function mostrar(categoria) {

const informacion = document.getElementById("informacion");

if (categoria === "goleadores") {

    informacion.innerHTML = `
        <h2>⚽ Máximos goleadores de los Mundiales</h2>

        <p>
            En esta sección estará el top 10 de los máximos
            goleadores históricos de la Copa Mundial masculina.
        </p>

        <p>
            Organizaremos la información en una tabla con
            el puesto, el jugador, su selección y sus goles.
        </p>
    `;

} else if (categoria === "campeones") {

    informacion.innerHTML = `
        <h2>🏆 Ganadores de todos los Mundiales</h2>

        <p>
            En esta sección aparecerá la lista de las ediciones
            de la Copa Mundial masculina y sus campeones.
        </p>

        <p>
            Incluirá el año, el país organizador,
            el campeón y el subcampeón.
        </p>
    `;

} else if (categoria === "selecciones") {

    informacion.innerHTML = `
        <h2>🌍 Selecciones más ganadoras</h2>

        <p>
            Aquí mostraremos las selecciones con más títulos
            mundiales y la cantidad de campeonatos de cada una.
        </p>
    `;

}

}
const goleadores = [
    { nombre: "Kylian Mbappé", pais: "Francia", goles: 22 },
    { nombre: "Lionel Messi", pais: "Argentina", goles: 21 },
    { nombre: "Miroslav Klose", pais: "Alemania", goles: 16 },
    { nombre: "Ronaldo Nazário", pais: "Brasil", goles: 15 },
    { nombre: "Gerd Müller", pais: "Alemania", goles: 14 },
    { nombre: "Harry Kane", pais: "Inglaterra", goles: 14 },
    { nombre: "Just Fontaine", pais: "Francia", goles: 13 },
    { nombre: "Pelé", pais: "Brasil", goles: 12 },
    { nombre: "Sándor Kocsis", pais: "Hungría", goles: 11 },
    { nombre: "Jürgen Klinsmann", pais: "Alemania", goles: 11 },
    { nombre: "Cristiano Ronaldo", pais: "Portugal", goles: 11 }
];

const campeones = [
    { anio: 1930, pais: "Uruguay", subcampeon: "Argentina" },
    { anio: 1934, pais: "Italia", subcampeon: "Checoslovaquia" },
    { anio: 1938, pais: "Italia", subcampeon: "Hungría" },
    { anio: 1950, pais: "Uruguay", subcampeon: "Brasil" },
    { anio: 1954, pais: "Alemania", subcampeon: "Hungría" },
    { anio: 1958, pais: "Brasil", subcampeon: "Suecia" },
    { anio: 1962, pais: "Brasil", subcampeon: "Checoslovaquia" },
    { anio: 1966, pais: "Inglaterra", subcampeon: "Alemania" },
    { anio: 1970, pais: "Brasil", subcampeon: "Italia" },
    { anio: 1974, pais: "Alemania", subcampeon: "Países Bajos" },
    { anio: 1978, pais: "Argentina", subcampeon: "Países Bajos" },
    { anio: 1982, pais: "Italia", subcampeon: "Alemania" },
    { anio: 1986, pais: "Argentina", subcampeon: "Alemania" },
    { anio: 1990, pais: "Alemania" , subcampeon: "Argentina" },
    { anio: 1994, pais: "Brasil", subcampeon: "Italia" },
    { anio: 1998, pais: "Francia", subcampeon: "Brasil" },
    { anio: 2002, pais: "Brasil", subcampeon: "Alemania" },
    { anio: 2006, pais: "Italia", subcampeon: "Francia" },
    { anio: 2010, pais: "España", subcampeon: "Países Bajos" },
    { anio: 2014, pais: "Alemania", subcampeon: "Argentina" },
    { anio: 2018, pais: "Francia", subcampeon: "Croacia" },
    { anio: 2022, pais: "Argentina", subcampeon: "Francia" },
    { anio: 2026, pais: "España", subcampeon: "Argentina" }
];

const informacion = document.getElementById("informacion");

function crearTabla(encabezados, filas) {
    return `
        <div style="overflow-x:auto">
            <table>
                <thead>
                    <tr>
                        ${encabezados.map(h => `<th>${h}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${filas.map(fila => `
                        <tr>
                            ${fila.map(celda => `<td>${celda}</td>`).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function mostrar(categoria) {
    if (categoria === "goleadores") {
        informacion.innerHTML = `
            <h2>⚽ Goleadores históricos de los Mundiales</h2>
            <p>Goles acumulados en la Copa Mundial masculina hasta 2026.</p>
            ${crearTabla(
                ["Puesto", "Jugador", "Selección", "Goles"],
                goleadores.map((j, i) => [
                    i + 1,
                    j.nombre,
                    j.pais,
                    j.goles
                ])
            )}
            <p><small>Hay empates en la cantidad de goles; por eso
            esta lista muestra 11 jugadores para cubrir los puestos
            hasta el décimo.</small></p>
            <p>Fuente: <a href="https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/articles/maximos-goleadores-historia-mundial" target="_blank" rel="noopener noreferrer">FIFA</a></p>
        `;
    }

    else if (categoria === "campeones") {
        informacion.innerHTML = `
            <h2>🏆 Campeones de todos los Mundiales</h2>
            <p>Las 23 ediciones disputadas entre 1930 y 2026.</p>
            ${crearTabla(
                ["Año", "Campeón 🏆", "Subcampeón"],
                campeones.map(c => [
                    c.anio,
                    c.pais,
                    c.subcampeon
                ])
            )}
            <p>Fuente: <a href="https://www.fifa.com/es/tournaments/mens/worldcup/articles/todas-las-finales-de-la-copa-mundial-de-la-fifa" target="_blank" rel="noopener noreferrer">FIFA</a></p>
        `;
    }

    else if (categoria === "selecciones") {
        const titulos = {};

        campeones.forEach(c => {
            titulos[c.pais] = (titulos[c.pais] || 0) + 1;
        });

        const ordenados = Object.entries(titulos)
            .sort((a, b) => b[1] - a[1]);

        informacion.innerHTML = `
            <h2>🌍 Selecciones con más Mundiales</h2>
            <p>Cantidad de títulos mundiales por selección.</p>
            ${crearTabla(
                ["Puesto", "Selección", "Títulos"],
                ordenados.map((equipo, i) => [
                    i + 1,
                    equipo[0],
                    equipo[1]
                ])
            )}
        `;
    }
}