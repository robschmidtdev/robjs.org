
export const Cat = (id, name, food, extraFood) => {
    return `
        <div id=${id} class="text-dark card p-2">
            <p><b>Cat: ${name}</b></p>
            <p>Food received: ${food + extraFood} </p>
        </div>
    `
  };