
export const Dog = (id, name, sound) => {
    return `
        <div id=${id} class="card mb-1">
            <div class="card-body">
                <p class="text-dark">Dog's Name: ${name}</p>
                <button class="btn btn-primary" onclick="${sound}('${name}')">Make Sound</button>
            </div>
        </div>
    `
  };