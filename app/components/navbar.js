//exportamos el componente navbar
export function navbar(){
    const $content = /*html*/ `
        <h1>hola nico</h1>

        <nav>
            <a href="/">Ejercicio1</a>
            <a href="/ejercicio2">Ejercicio2</a>
            <a href="/ejercicio3">Ejercicio3</a>
            <a href="/ejercicio4">Ejercicio4</a>
        </nav>
    `;
    
    return { html: $content}
}