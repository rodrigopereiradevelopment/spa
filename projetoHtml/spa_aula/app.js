const app =document.getElementById("app");

const pages = {
"/": () => `
<section class="card">
<h2>Inicio</h2>
<p>Isso é uma SPA : navegação sem recarregar a página</p>
<p>Use o menu para trocar de página</p>
</section>
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
    `
}
}