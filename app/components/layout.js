import { navbar } from "./navbar";

export function layout(pageContent, logic){
    const $content = document.getElementById('root');
    const {html: navbarHtml} = navbar();

    $content.innerHTML = /*html*/ `
        ${navbarHtml}
        <main>
            ${pageContent}
        </main>
    `

    logic()
}