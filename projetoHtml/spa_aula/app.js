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
        ${alunos.map((a)=> `<li> ${a}</li>`).join("")}
        </ul>
        </section>
    `
    },
    "/sobre": () =>`
    <section class="card">
    <h2>Sobre</h2>
    <h2>Exemplo simples de roteamento do flont-end (sem framework).</h2>
    <p>Próximo passo:carregar dados via fetch e criar componentes.</p>
    </section>
    `,
};

const router = () => {
    // 1. Descobre em qual página estamos
    const path = window.location.pathname;
    
    // 2. Busca o conteúdo ou exibe o "Início" se a rota não existir
    const render = pages[path] || pages["/"];
    
    // 3. Injeta o HTML no elemento <main id="app">
    app.innerHTML = render();
};

// Escuta cliques no documento inteiro
document.addEventListener("click", e => {
    // Se o clique foi em um link com o atributo [data-link]
    if (e.target.matches("[data-link]")) {
        e.preventDefault(); // Não recarrega a página
        history.pushState(null, null, e.target.href); // Muda a URL
        router(); // Atualiza o conteúdo da tela
    }
});

// Faz o botão "Voltar" do navegador funcionar
window.addEventListener("popstate", router);

// Renderiza a página assim que o site abre pela primeira vez
router();
