function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultado = "";

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do seu atleta ou esporte</p>";
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.instagram} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
            `;
        } 
    };
    if (!resultado){
        resultado = "Nada foi encontrado"
    }
    section.innerHTML = resultado;
}