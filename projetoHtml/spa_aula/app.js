const app =document.getElementById("app");

const pages = {
"/": () => `
<section class="card">
<h2>Inicio</h2>
<p>Isso é uma SPA : navegação sem recarregar a página</p>
<p>Use o menu para trocar de página</p>
`,
    "/alunos" : () => {
        const alunos = ["Ana","Bruno","Carlos","Diana"];
        return `
        <section class="card">
        <h2>Alunos</h2>
        <ul>
        ${alunos.map((a)=> `<li> ${a}<?li>`).join("")}
        </ul>
        </section>
    `;
    }
    "/sobre": () =>`
    <section class="card">
    <h2>Sobre</h2>
    <h2>Exemplo simples de roteamento do flont-end (sem framework).</h2>
    <p>Próximo passo:carregar dados via fetch e criar componentes.</p>
    </section>
    `,
};