const MenuPoint1 = () => `<h1>This is Menu Point 1</h1>`;
const MenuPoint2 = () => `<h1>And this Menu Point 2</h1>`;

export const Menu = (id) => {

    let menupoint
    if (example2.state.menu === 'menuPoint1') {
        menupoint = MenuPoint1()
    } else {
        menupoint = MenuPoint2()
    }
        
    return `
      <div id=${id}>
        <ul class="nav nav-pills">
            <li class="nav-item me-1">
                <a style="cursor: pointer;" class="nav-link active" onclick="example2.updateState('menu', 'menuPoint1')">MenuPoint1</a>
            </li>
            <li>
                <a style="cursor: pointer;" class="nav-link active" onclick="example2.updateState('menu', 'menuPoint2')">MenuPoint2</a>
            </li>
        </ul>
        <span class="text-dark">${menupoint}</span>
      </div>
    `
};