// DisplayPlanets.js

export const fetchPlanets = async () => {
  try {
    // Fetching planets from SWAPI and passing it into a state variable
    const response = await fetch('https://swapi.dev/api/planets/')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    example5.updateState('planets', data.results)
  } catch (error) {
    console.error('Error fetching planets:', error)
  } 
}

export const DisplayPlanets = (id) => {

    const list = example5.state.planets.map(planet => `<li class="list-group-item">Name: ${planet.name}, Population: ${planet.population}, Terrain: ${planet.terrain}</li>`).join('');

    return `
      <div id=${id}>
        <button class="btn btn-primary mb-2" onclick="example5.DisplayPlanets.fetchPlanets()">Get Planets</button>
        ${example5.state.planets.length > 0 ? `<ul class="text-dark list-group list-group-flush">${list}</ul>` : ''}
      </div>
    `
};