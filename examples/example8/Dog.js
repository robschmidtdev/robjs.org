
export const Dog = (id, name, food, extraFood) => {

    if(!extraFood){
        extraFood = 0
    }

    return `
        <div id=${id} class="text-dark card p-2">
            <p><b>Dog: ${name}</b></p>
            <p>Food received: ${food + extraFood}</p>
        </div>
    `
  };