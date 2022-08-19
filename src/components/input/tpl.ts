export const tpl = `
    <input 
    {{#if disabled}} disabled={{disabled}} {{/if}} 
        id={{id}} 
        type={{type}} 
        name={{name}} 
        class={{className}} 
        placeholder={{placeholder}} 
    {{#if value}} value={{value}} {{/if}}   
        >
`;