const MenuPoint1 = () => `<h1>MenuPoint1</h1>`;
const MenuPoint2 = () => `<h1>MenuPoint2</h1>`;

export const Menu = () => {

    let menupoint
    if (app.state.menu === 'menuPoint1') {
        menupoint = MenuPoint1()
    } else {
        menupoint = MenuPoint2()
    }
        
    return `
      <div class="Menu">
        <ul class="nav nav-pills">
            <li class="nav-item me-1">
                <a style="cursor: pointer;" class="nav-link active" onclick="app.updateState('menu', 'menuPoint1')">MenuPoint1</a>
            </li>
            <li>
                <a style="cursor: pointer;" class="nav-link active" onclick="app.updateState('menu', 'menuPoint2')">MenuPoint2</a>
            </li>
        </ul>
        <span class="text-dark">${menupoint}</span>
      </div>
    `
};