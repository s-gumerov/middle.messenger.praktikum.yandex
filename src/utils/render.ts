import Component from "../services/Component";

export const render = (query: string, component: Component) => {

    const root = document.getElementById(query);

    if (root)
        root.appendChild(component.getContent());

    component.dispatchComponentDidMount();

    return root;
}