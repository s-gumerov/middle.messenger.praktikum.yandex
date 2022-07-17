import appStyles from './app.module.sass';
const Handlebars = require("handlebars");



const AppTemplate = Handlebars.compile(`
    <div class={{containerStyle}}>
        <main class={{mainStyle}}>
            main
        </main>
    </div>`);

const App = AppTemplate({
    containerStyle: appStyles.container,
    mainStyle: appStyles.main
});

// const AppTemplate = Handlebars.compile(`
//     <div class={{containerStyle}}>
//         <main class={{mainStyle}}>
//             main
//         </main>
//     </div>`);

// const App = AppTemplate({
//     containerStyle: appStyles.container,
//     mainStyle: appStyles.main
// });





const root = document.getElementById('root');
root.innerHTML = App;
