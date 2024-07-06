export function ejercicio1Page(){
    const $content = /*html*/ `
        <h1>¿Que deseas hacer?</h1>

        <div class=".modalCrear">

        </div>

        <button id="crear" class="bg-slate-400 rounded-lg p-2">Crear nueva tarea</button>


        <div id='container'>

        </div>
    `

    const logic = async ()  => {
        const container = document.getElementById('container');
        const crearTask = document.getElementById('crear');
        const url = 'http://localhost:4000/task'

        //Modal para crear una nueva tarea
        crearTask.onclick = function(){
            let modal = document.querySelector('.modalCrear');

            if(!modal){
            modal = document.createElement('DIV');
            modal.classList.add('modalCrear');

            modal.innerHTML = /*html*/ ` 
                <form>
                    <label for="nombre">nombre de la tarea</label>
                    <input type="text" id="nombre" class="bg-orange-300 rounded-lg pl-2 pr-2">

                    <label for="description">description</label>
                    <input type="text" id="description" class="bg-orange-300 rounded-lg pl-2 pr-2">

                    <select id="status">
                        <option value="0" disabled>Selecciona un estado</option>
                        <option value="iniciando">Iniciando</option>
                        <option value="progreso">En progreso</option>
                    </select>

                    <input type="submit" value="enviar" class="bg-orange-500  rounded-lg p-2">
                    <button id="close" class="bg-slate-400 rounded-lg p-2">close</button>
                </form>
            ` 

            document.body.appendChild(modal);

            const $nombre = document.getElementById('nombre');
            const $description = document.getElementById('description');
            const $status = document.getElementById('status');
            const $submit = document.getElementsByTagName('form')[0]

            $submit.addEventListener('submit', async e =>{
                e.preventDefault()
                
                try{
                    const createTask = await fetch(url,{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: $nombre.value,
                            description: $description.value,
                            status: $status.value 
                        })
                    })

                    if(!createTask.ok){
                        throw new Error('No ha sido posible crear la tarea')
                    }

                    alert('Tarea creado exitosamente');
                    window.location.reload()
                }catch(err){
                    alert(err)
                }
            })

            modal.style.display = 'block';
            const closeBtn = document.getElementById('close');

            closeBtn.addEventListener('click', e =>{
                e.preventDefault()
                document.body.removeChild(modal);
            })
        }
    }

        //imprimimos tareas que tengamos ya almacenadas en la base de datos
        try{
            const getTask = await fetch(url);

            if(!getTask){
                throw new Error('No es posible obtener la info')
            }

            const taskToJson = await getTask.json();

            taskToJson.forEach(task => {
                container.innerHTML += /*html*/ `
                    <div class="bg-black text-white p-2 ">
                        <h1>${task.name}</h1>
                        <p>${task.description}</p>
                        <p>${task.status}</p>

                        <button class="edit" class="bg-orange-500  rounded-lg p-2">Editar</button>
                        <button class="delete" class="bg-slate-400 rounded-lg p-2">Eliminar</button>
                    </div>
                `
                
                const edit = document.getElementsByClassName('edit');
                const deleteTask = document.getElementsByClassName('delete');
                
                for(let f of deleteTask){
                    f.addEventListener('click', async () =>{
                        const inputUSer = confirm('¿Seguro quieres eliminar esta tarea?');

                        if(inputUSer){
                            try{
                                const _deleteTask = await fetch(` http://localhost:4000/task/${task.id}`, {
                                    method: 'DELETE',
                                    headers:{
                                        'Content-Type': 'application/json'
                                    }
                                })

                                if(!_deleteTask.ok){
                                    throw new Error('No ha sido posible eliminar la tarea')
                                }

                                alert('Tarea eliminada exitosamente')
                                window.location.reload()

                            }catch(err){
                                alert(err)
                            }
                        }
                    })
                }

                for(let f of edit){
                    f.addEventListener('click', async () =>{
                        let modal = document.querySelector('.modalCrear');

                        if(!modal){
                        modal = document.createElement('DIV');
                        modal.classList.add('modalCrear');
            
                        modal.innerHTML = /*html*/ ` 
                            <form>
                                <label for="nombre" >Nombre</label>
                                <input type="text" id="nombre" disabled value=${task.name} class="bg-orange-300 rounded-lg pl-2 pr-2">
            
                                <label for="description">Description</label>
                                <input type="text" id="description" class="bg-orange-300 rounded-lg pl-2 pr-2" disabled value=${task.description}>
            
                                <select id="status">
                                    <option value="0" disabled>Selecciona un estado</option>
                                    <option value="iniciando">Iniciando</option>
                                    <option value="progreso">En progreso</option>
                                    <option value="finalizada">Finalizada</option>
                                </select>
            
                                <input type="submit" value="enviar" class="bg-orange-500  rounded-lg p-2">
                                <button id="close" class="bg-slate-400 rounded-lg p-2">close</button>
                            </form>
                        ` 
            
                        document.body.appendChild(modal);
            
                        const $nombre = document.getElementById('nombre');
                        const $description = document.getElementById('description');
                        const $status = document.getElementById('status');
                        const $submit = document.getElementsByTagName('form')[0]

                        modal.style.display = 'block';
                        const closeBtn = document.getElementById('close');
                
                        closeBtn.addEventListener('click', e =>{
                                e.preventDefault()
                                document.body.removeChild(modal);
                        })

                        $submit.addEventListener('submit', async e =>{
                            e.preventDefault()
                            
                            const updateTask =  {
                                name: $nombre.value,
                                description: $description.value,
                                status: $status.value     
                            }

                            try{
                                const update = await fetch(`http://localhost:4000/task/${task.id}`,{
                                   method: 'PUT',
                                    headers:{
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(updateTask)
                                })

                                if(!update.ok){
                                    throw new Error('No ha sido posible actualizar la tarea')
                                }

                                alert('Tarea actualizada con exito');
                                window.location.reload()

                            }catch(err){
                                alert(err)
                            }
                        })
                    }
                    })
                }
            });

        }catch(err){
            alert(err);
        }
    }

    return { html:$content, logic}
} 