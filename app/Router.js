import { routes } from "./routes";
import { layout } from "./components/layout";

export function navigateTo(path){
    window.history.pushState({}, '', window.location.origin + path);
    Router()
}

//Funcion para manejar las rutas
export function Router(){
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    const pageRoute = routes.pages.find(r => r.path === path);

    if(pageRoute){
        const { html: $content, logic} = pageRoute.page();
        layout($content, logic);
    }else{
        alert('esa monda no se encuentra pa')
    } 
}


window.onpopstate = Router;