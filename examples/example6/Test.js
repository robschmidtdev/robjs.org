
export const Test = (id, first_name, fktname) => {
    const count = 0
    return `
        <div id=${id}>
        <p class="text-dark">Count: ${count}, First Name: ${first_name}, Rerendered: ${Date.now()}</p>
        <button onclick="${fktname}">Btn</button>
        </div>
    `
  };