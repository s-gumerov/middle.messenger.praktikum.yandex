export const render = (query, component) => {

    const root = document.getElementById(query);

    if (root)
        root.appendChild(component.getContent());

    component.dispatchComponentDidMount();

    return root;
}