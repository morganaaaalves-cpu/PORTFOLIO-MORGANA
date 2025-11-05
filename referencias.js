// Dados das suas referências
const referencias = [
    { nome: "YouTube", url: "#", iconeSrc: "icone-youtube.png" },
    { nome: "TM", url: "#", iconeSrc: "icone-tm.png" },
    { nome: "Canva", url: "#", iconeSrc: "icone-canva.png" },
    { nome: "Wikipedia", url: "#", iconeSrc: "icone-wikipedia.png" },
    { nome: "Material Didático", url: "#", iconeSrc: "icone-livros.png" },
    { nome: "Aulas/Estudos", url: "#", iconeSrc: "icone-alunos.png" },
    { nome: "Educa Brasil", url: "#", iconeSrc: "icone-educabrasil.png" },
    { nome: "GeoGebra", url: "#", iconeSrc: "icone-geogebra.png" }
];

// Função que cria e insere os elementos HTML
function gerarReferencias() {
    // 1. Encontra o contêiner no HTML
    const container = document.getElementById('container-referencias');

    // 2. Cria o elemento <ul>
    const lista = document.createElement('ul');

    // 3. Itera sobre a lista de referências e cria os <li>, <a> e <img>
    referencias.forEach(ref => {
        // Cria os elementos
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const span = document.createElement('span');

        // Configura o link <a>
        a.href = ref.url;

        // Configura a imagem <img>
        img.src = ref.iconeSrc;
        img.alt = `${ref.nome} Icon`;

        // Configura o texto <span>
        span.textContent = ref.nome;

        // Monta a estrutura: <li> -> <a> -> (<img> e <span>)
        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        
        // Adiciona o item à lista
        lista.appendChild(li);
    });

    // 4. Insere a lista completa no contêiner
    container.appendChild(lista);
}

// Executa a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', gerarReferencias);