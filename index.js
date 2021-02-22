
import Button from './src/components/Button';
import Input from './src/components/Input';


const install = (app) => {

    if(install.installed){
        return;
    }
    install.installed = true;

    app.component('GeoButton',Button);
    app.component('GeoInput',Input);

}

const plugin = { install };

// let GlobalVue = Vue;
// if(typeof window !== 'undefined'){
//     GlobalVue = window.vue;
// }else if(typeof global !== 'undefined'){
//     GlobalVue = global.vue;
// }

// if(GlobalVue){
//     GlobalVue.use(plugin);
// }

export default plugin;

export { default as GeoButton } from './src/components/Button';
export { default as GeoInput } from './src/components/Input';
export { default as sayHello } from './src/sayHello.js'