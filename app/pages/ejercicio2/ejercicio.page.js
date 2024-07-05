export function ejercicio2Page(){
    const $content = /*html*/ `
        <h1>Hola mundo</h1>
        <a href="">hola2</a>
    `

    const logic = () => {
        console.log('hola');
    }

    return { html:$content, logic}
} 