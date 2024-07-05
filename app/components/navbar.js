//exportamos el componente navbar
export function navbar(){
    const $content = /*html*/ `
        <h1 class="p-5 text-3xl text-center font-bold text-white bg-black max-w-screen">HOLA NICO</h1>

        <nav class="flex justify-evenly rounded-lg px-3 p-6 bg-amber-500 text-xl hover:bg-amber-600">
            <a href="/">Ejercicio1</a>
            <a href="/ejercicio2">Ejercicio2</a>
            <a href="/ejercicio3">Ejercicio3</a>
            <a href="/ejercicio4">Ejercicio4</a>
            <a href="/ejercicio5">Ejercicio5</a>
        </nav>
    `;
    
    return { html: $content}
}