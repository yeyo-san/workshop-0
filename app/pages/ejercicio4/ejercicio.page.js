export function ejercicio4Page(){
    const $content = /*html*/ `
        <form>
            <label>Buscar prenda por nombre:</label>
            <input type="search" id="search">
            <input type="submit" id="submit">
        </form>
        
        <div id="container">
            
        </div>

        <div id="containerSearch">

        </div>
    `

    const logic = async () => {
        const url = 'https://api.escuelajs.co/api/v1/products';
        let $container = document.getElementById('container')
        const form = document.getElementsByTagName('form')[0];
        const $search = document.getElementById('search');
        const containerSearch = document.getElementById('containerSearch')

        try{
            const apiPlatzi = await fetch(url)

            if(!apiPlatzi){
                throw new Error('No es posible comunicarnos con la base de datos')
            }

            const apiToJson = await apiPlatzi.json();
            if(!apiPlatzi.ok){
                throw new Error('Por alguna razon, es imposible mostrar los productos')
            }

            apiToJson.forEach((e) => {
                $container.innerHTML += /*html*/ `
                    <div key=${e.id} class="tarjet">
                        <h1>${e.title}</h1>
                        <p>${e.price}</p>
                        <p>${e.description}</p>
                        <img src=${e.images} alt="">
                    </div>
            `
            });

            form.addEventListener('submit', async e =>{
                e.preventDefault()
                // Ocultar el contenedor principal de productos
                $container.style.display = 'none';

                // Mostrar el contenedor de búsqueda
                containerSearch.style.display = 'block';
                const foundProducts = await apiToJson.filter(e => e.title === $search.value );
                console.log(foundProducts);

                foundProducts.forEach((products) =>{
                    containerSearch.innerHTML += /*html*/ `
                    <div key=${products.id} class="tarjet">
                        <h1>${products.title}</h1>
                        <p>${products.price}</p>
                        <p>${products.description}</p>
                        <img src=${products.images} alt="">
                    </div>
                `
                })
            })

                containerSearch.style.display = 'block';


        }catch(err){
            alert(err)
        }

        
    }

    return { html:$content, logic}
} 