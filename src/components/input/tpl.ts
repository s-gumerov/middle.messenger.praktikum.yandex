export const tpl = `
    <input 
    {{#if disabled}} disabled {{/if}} 
        id={{id}} 
        type={{type}} 
        name={{name}} 
        class={{className}} 
        placeholder={{placeholder}} 
        value={{value}} 
        >
`;