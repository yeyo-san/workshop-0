export function ejercicio3Page(){
    const $content = /*html*/`
      <div id="container-posts">
        <button id="display">toca aca</button>
      </div>
    `;
    
    const logic = async () => {
      const container = document.getElementById('container-posts')
      const display = document.getElementById('display')

      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json();

     display.addEventListener('click', async () =>{
        posts.forEach((post) => {
            const postElement = document.createElement('DIV');
            postElement.classList.add('post');
            postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
            `;
            container.appendChild(postElement);
          });
     })
    
    };

    return { html:$content, logic}
} 