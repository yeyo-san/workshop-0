import { ejercicio1Page } from "./pages/ejercicio1/ejercicio.page"
import { ejercicio2Page } from "./pages/ejercicio2/ejercicio.page"
import { ejercicio3Page } from "./pages/ejercicio3/ejercicio.page"
import { ejercicio4Page } from "./pages/ejercicio4/ejercicio.page"
import { ejercicio5Page } from "./pages/ejercicio5/ejercicio.page"

export const routes = {
    pages: [
        { path: '/', page: ejercicio1Page},
        { path: '/ejercicio2', page: ejercicio2Page},
        { path: '/ejercicio3', page: ejercicio3Page},
        { path: '/ejercicio4', page: ejercicio4Page},
        { path: '/ejercicio5', page: ejercicio5Page}
    ]
}
