export function ejercicio4Page(){
    const $content = /*html*/ `
        <form class="flex justify-center p-12 gap-4 text-lg">
            <label class="font-bold">Buscar prenda por nombre:</label>
            <input type="search" id="search" class="bg-orange-300 rounded-lg pl-2 pr-2">
            <input type="submit" id="submit" value="Buscar" class="bg-black text-white rounded-lg w-20 p-1">
        </form>
        
        <div id="container" class="grid grid-cols-4 gap-4">
            
        </div>

        <div id="containerSearch" class="grid grid-cols-4 gap-4">

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
                    <div key=${e.id} class="mx-4 p-4 text-white bg-black rounded-lg hover:bg-slate-900">
                        <h1 class="font-bold text-center mb-3">${e.title}</h1>
                        <img class="rounded-xl" src=${e.images} alt="">
                        <p class="bg-slate-800 rounded-lg text-white mt-3 p-4">${e.description}</p>
                        <p class="text-xl text-amber-600 m-3 w-20">${e.price} $USD</p>
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

                foundProducts.forEach((e) =>{
                    containerSearch.innerHTML += /*html*/ `
                     <div key=${e.id} class="mx-4 p-4 text-white bg-black rounded-lg hover:bg-slate-900">
                        <h1 class="font-bold text-center mb-3">${e.title}</h1>
                        <img class="rounded-xl" src=${e.images} alt="">
                        <p class="bg-slate-800 rounded-lg text-white mt-3 p-4">${e.description}</p>
                        <p class="text-xl text-amber-600 m-3 w-20">${e.price} $USD</p>
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