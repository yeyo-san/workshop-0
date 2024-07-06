export function ejercicio5Page(){
    const $content = /*html*/ `
        <h1 class="font-bold text-center">Tienda de barrio, devuelta a los uorsho</h1>
        <p class="text-center">¿Que deseas hacer?</p>
        <div class="p-2 flex justify-evenly">
            
            <button id="show">Ver productos</button>
            <button id="calculate">Calcular el precio total</button>
            <button id="searchByName">Buscar productos por nombre</button>
            <button id="searchByCategory">Buscar producto por categoria</button> 
            <button id="avaliable">Verificar disponibilidad de productos</button>
            <button id="getNamesProduct">Obtener Nombres de Productos</button>
        </div>
        
        <div id="container">

        </div>
    `

    const logic = () => {

        const products = [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
            { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
            { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
            { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
            { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
            { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
            { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
            { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
        ];

        const showProductsBtn = document.getElementById('show');
        const calculateProductsBtn = document.getElementById('calculate');
        const searchByNameBtn = document.getElementById('searchByName');
        const searchByCategoryBtn = document.getElementById('searchByCategory');
        const avaliableBtn = document.getElementById('avaliable');
        const getNamesProductBtn = document.getElementById('getNamesProduct');

        const $container = document.getElementById('container');

        showProductsBtn.addEventListener('click', () =>{
            products.forEach(p =>{
                $container.innerHTML += /*html*/ `
                    <div key=${p.id}>
                        <h1>${p.name}</h1>
                        <p>Categoria: ${p.category}</p>
                        <p>Precio: ${p.price}</p>
                        <p>Disponibles: ${p.stock}</p>
                    </div>
                `
            })
        })

        calculateProductsBtn.addEventListener('click', () =>{
            const totalValue = products.reduce((acumulador, valorAcu ) => {
                return acumulador + valorAcu.price
            }, 0)

            $container.innerHTML = ''
            $container.innerHTML += /*html*/ `
                <p>El valor total es de: ${totalValue}</p>
            `
        })

        searchByNameBtn.addEventListener('click', () =>{
            $container.innerHTML = ''

            $container.innerHTML = /*html*/ `
                <form>
                    <label for="search">Buscar producto por nombre</label>
                    <input type="search" id="search">

                    <input type="submit">
                </form>

                <div id="filterContainer">

                </div>
            `
            const $form = document.getElementsByTagName('form')[0];
            const inputUserSearch = document.getElementById('search');
            const $filter = document.getElementById('filterContainer');
            
            $form.addEventListener('submit', e =>{
                e.preventDefault();
                const foundProd = products.filter(products => products.name === inputUserSearch.value);
                
                foundProd.forEach(product =>{
                    $filter.innerHTML += /*html*/ `
                        <div key=${product.id}>
                            <h1>${product.name}</h1>
                            <p>Categoria: ${product.category}</p>
                            <p>Precio: ${product.price}</p>
                            <p>Disponibles: ${product.stock}</p>
                        </div>
                        `
                })
            })
        })

        searchByCategoryBtn.addEventListener('click', () =>{
            $container.innerHTML = ''

            $container.innerHTML = /*html*/ `
                <form>
                    <label for="search">Buscar producto por categoria</label>
                    <input type="search" id="search">

                    <input type="submit">
                </form>

                <div id="filterContainer">

                </div>
            `
            const $form = document.getElementsByTagName('form')[0];
            const inputUserSearch = document.getElementById('search');
            const $filter = document.getElementById('filterContainer');
            
            $form.addEventListener('submit', e =>{
                e.preventDefault();
                const foundProd = products.filter(products => products.category === inputUserSearch.value);
                
                foundProd.forEach(product =>{
                    $filter.innerHTML += /*html*/ `
                        <div key=${product.id}>
                            <h1>${product.name}</h1>
                            <p>Categoria: ${product.category}</p>
                            <p>Precio: ${product.price}</p>
                            <p>Disponibles: ${product.stock}</p>
                        </div>
                        `
                })
            })
        })

        avaliableBtn.addEventListener('click', () =>{
             $container.innerHTML = "" 

            const avaliableProduct = products.every((product,index, array)=> {
                return product.stock > 0 
             })

            console.log(avaliableProduct)
            if(avaliableProduct){
                products.forEach((p) =>{
                    $container.innerHTML += /*html*/`
                        <div key=${p.id}>
                            <h1>${p.name}</h1>
                            <p>Categoria: ${p.category}</p>
                            <p>Precio: ${p.price}</p>
                            <p>Disponibles: ${p.stock}</p>
                        </div>
                    `
                })
            }else{
                alert('productos no encontrados')
            }
        })

        getNamesProductBtn.addEventListener('click', () =>{
            $container.innerHTML = " "
            
            const names = products.map((produ) => produ.name)
            console.log(names)

            names.forEach((p) =>{
                $container.innerHTML += /*html*/`
                    <div>
                            <h1>${p}</h1>
                        </div>
                `
            })
        })

    }
        

    return { html:$content, logic}
} 