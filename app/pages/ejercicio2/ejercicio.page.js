export function ejercicio2Page(){
    const $content = /*html*/ `
        <h1>¿Que deseas hacer?</h1>

        <div class=".modalCrear">

        </div>

        <button id="crear">Crear nueva nota</button>


        <div id='container'>

        </div>
    `

    const logic = async ()  => {
        const container = document.getElementById('container');
        const crearNotes = document.getElementById('crear');
        const url = 'http://localhost:4000/notes'

        //Modal para crear una nueva tarea
        crearNotes.onclick = function(){
            let modal = document.querySelector('.modalCrear');

            if(!modal){
            modal = document.createElement('DIV');
            modal.classList.add('modalCrear');

            modal.innerHTML = /*html*/ ` 
                <form>
                    <label for="nombre">nombre de la nota</label>
                    <input type="text" id="nombre">

                    <select id="status">
                        <option value="0" disabled>¿Esta nota es?</option>
                        <option value="Normal">Normal</option>
                        <option value="Importante">Importante</option>
                    </select>

                    <input type="submit" value="enviar">
                    <button id="close">close</button>
                </form>
            ` 

            document.body.appendChild(modal);

            const $nombre = document.getElementById('nombre');
            const $status = document.getElementById('status');
            const $submit = document.getElementsByTagName('form')[0]

            $submit.addEventListener('submit', async e =>{
                e.preventDefault()
                
                try{
                    const createNote = await fetch(url,{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            note: $nombre.value,
                            status: $status.value 
                        })
                    })

                    if(!createNote.ok){
                        throw new Error('No ha sido posible crear la tarea')
                    }

                    alert('Nota creada exitosamente');
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
            const getNotes = await fetch(url);

            if(!getNotes){
                throw new Error('No es posible obtener la info')
            }

            const notesToJson = await getNotes.json();

            notesToJson.forEach(note => {
                container.innerHTML += /*html*/ `
                    <div>
                        <h1>${note.note}</h1>
                        <p>${note.status}</p>

                        <button class="edit">Editar</button>
                        <button class="delete">Eliminar</button>
                    </div>
                `
                
                const edit = document.getElementsByClassName('edit');
                const deleteNote = document.getElementsByClassName('delete');
                
                for(let f of deleteNote){
                    f.addEventListener('click', async () =>{
                        const inputUSer = confirm('¿Seguro quieres eliminar esta tarea?');

                        if(inputUSer){
                            try{
                                const _deleteTask = await fetch(` http://localhost:4000/task/${note.id}`, {
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
                                <input type="text" id="nombre" disabled value=${note.note}>
            
                                <select id="status">
                                    <option value="0" disabled>¿Esta nota es?</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Importante">Importante</option>
                                </select>
            
                                <input type="submit" value="enviar">
                                <button id="close">close</button>
                            </form>
                        ` 
            
                        document.body.appendChild(modal);
            
                        const $nombre = document.getElementById('nombre');
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
                                note: $nombre.value,
                                status: $status.value     
                            }

                            try{
                                const update = await fetch(`http://localhost:4000/notes/${note.id}`,{
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