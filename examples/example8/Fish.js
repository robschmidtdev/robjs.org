
export const Fish = (id, name, special, food, freshWater) => {
    return `
        <div id=${id} class="text-dark card p-2">
            <p><b>Fish: ${name}, ${special}</b></p>
            <p>Food received: ${food} </p>
            <p>Fresh water received: ${freshWater !== undefined ? freshWater : 0}</p>
        </div>
    `
  };