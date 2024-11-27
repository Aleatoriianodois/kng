const pessoasSerieA = [
    {nome: "Paulo César", titulos: "3", tiktok: "@pcoficial_", batalhas: ["1", "2", "3"], imagem: "paulocesar.png"},
    {nome: "Jose Jeimesson", titulos: "2", tiktok: "@josejeimesson", batalhas: ["1", "2"], imagem: "jose.png"},
    {nome: "Ricardo Andrade688", titulos: "2", tiktok: "@ricardo_ddo55", batalhas: ["1", "2"], imagem: "ricardo.png"},
    {nome: "Andrey Santos", titulos: "1", tiktok: "@andrey_santos07", batalhas: ["1"], imagem: "andreysantos.png"},
    {nome: "ARTHUR ALBUQUERQUE", titulos: "1", tiktok: "@arthuralbuquerque77", batalhas: ["1"], imagem: "arthur.png"},
    {nome: "Bella", titulos: "1", tiktok: "@bellamy._spark", batalhas: ["1"], imagem: "bella.png"},
    {nome: "dfuty", titulos: "1", tiktok: "@dfuty", batalhas: ["1"], imagem: ""},
    {nome: "GOSPEL ✝️", titulos: "1", tiktok: "@e_almeida1k", batalhas: ["1"], imagem: "gospel.png"},
    {nome: "Manel_2k24__", titulos: "1", tiktok: "@manel_2k24__", batalhas: ["1"], imagem: "manel.png"},
    {nome: "Matheus Modesto", titulos: "1", tiktok: "@matheusmodesto5", batalhas: ["1"], imagem: "matheus.png"},
    {nome: "Renan.kkj", titulos: "1", tiktok: "@renan.kkjjjk", batalhas: ["1"], imagem: "renan.png"},
    {nome: "Ze Victor", titulos: "1", tiktok: "@zee_victoor", batalhas: ["1"], imagem: "zevictor.png"},
    {nome: "Jaqueline Rissardi", titulos: "1", tiktok: "@jaqueline.rissard", batalhas: ["1"], imagem: "jaqueline.png"}
];

const pessoasSerieB = [
    {nome: "Davi Souza", titulos: "0", tiktok: "@davisouzaofc", batalhas: ["1"], imagem: ""},
    {nome: "Enzo Gabriel", titulos: "0", tiktok: "@enzogabriel.fps", batalhas: ["1"], imagem: ""},
    {nome: "Gabriel Medina", titulos: "0", tiktok: "@gabrielmedina_ofc", batalhas: ["1"], imagem: ""},
    {nome: "Gustavo", titulos: "0", tiktok: "@gustavohenriquegamer1", batalhas: ["1"], imagem: ""},
    {nome: "João Pedro", titulos: "0", tiktok: "@joaopedro.fps", batalhas: ["1"], imagem: ""},
    {nome: "Lucas Gabriel", titulos: "0", tiktok: "@lucasgabriel.fps", batalhas: ["1"], imagem: ""},
    {nome: "Matheus Santos", titulos: "0", tiktok: "@matheussantos.fps", batalhas: ["1"], imagem: ""},
    {nome: "Pedro Henrique", titulos: "0", tiktok: "@pedrohenrique.fps", batalhas: ["1"], imagem: ""}
];

function criarRanking(pessoas, elementId) {
    const rankingList = document.getElementById(elementId);
    const isSerieA = elementId === 'rankingListA';
    
    pessoas.forEach((pessoa, index) => {
        const tr = document.createElement('tr');
        tr.className = isSerieA ? 'serie-a' : 'serie-b';
        
        const tdPosition = document.createElement('td');
        tdPosition.className = 'position';
        
        if(isSerieA) {
            if(index === 0) {
                tdPosition.textContent = `🥇`;
            } else if(index === 1) {
                tdPosition.textContent = `🥈`;
            } else if(index === 2) {
                tdPosition.textContent = `🥉`;
            } else {
                tdPosition.textContent = `${index + 1}º`;
            }
        } else {
            tdPosition.textContent = `${index + 1}º`;
        }
        
        const tdName = document.createElement('td');
        if (pessoa.imagem) {
            const img = document.createElement('img');
            img.src = `images/${pessoa.imagem}`;
            img.style.width = '25px';
            img.style.height = '25px';
            img.style.borderRadius = '50%';
            img.style.marginRight = '8px';
            img.style.verticalAlign = 'middle';
            tdName.appendChild(img);
        }
        tdName.appendChild(document.createTextNode(pessoa.nome));
        
        const tdTitle = document.createElement('td');
        tdTitle.className = 'title';
        tdTitle.textContent = pessoa.titulos;

        const tdTiktok = document.createElement('td');
        const tiktokLink = document.createElement('a');
        tiktokLink.href = `https://tiktok.com/${pessoa.tiktok}`;
        tiktokLink.textContent = pessoa.tiktok;
        tiktokLink.target = "_blank";
        tdTiktok.appendChild(tiktokLink);

        const tdBatalhas = document.createElement('td');
        tdBatalhas.className = 'batalhas';
        pessoa.batalhas.forEach((batalha, idx) => {
            const battleLink = document.createElement('a');
            
            // Links especiais para as batalhas
            if(isSerieA) {
                if(index === 0) { // Paulo César (agora em primeiro)
                    if(idx === 0) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7438448739628354871";
                    } else if(idx === 1) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440890776449502520";
                    } else if(idx === 2) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7441657829989109047";
                    }
                } else if(index === 1) { // Jose Jeimesson (agora em segundo)
                    if(idx === 0) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440494121178926391";
                    } else if(idx === 1) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440663019023093047";
                    }
                } else if(index === 11) { // Jaqueline Rissardi
                    if(idx === 0) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7441704719430585656";
                    }
                } else {
                    // Links específicos para cada pessoa
                    switch(pessoa.tiktok) {
                        case "@zee_victoor":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7438998433999932728";
                            break;
                        case "@andrey_santos07":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7439140601213275448";
                            break;
                        case "@ricardo_ddo55":
                            if(idx === 0) {
                                battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7439390007535750455";
                            } else if(idx === 1) {
                                battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7441403910683708728";
                            }
                            break;
                        case "@bellamy._spark":
                            battleLink.href = "https://www.tiktok.com/@bellamy._spark";
                            break;
                        case "@renan.kkjjjk":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7439812067353218360";
                            break;
                        case "@manel_2k24__":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440140431721188664";
                            break;
                        case "@matheusmodesto5":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440165746988125496";
                            break;
                        case "@e_almeida1k":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440573654313798967";
                            break;
                        case "@arthuralbuquerque77":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7441017940721274168";
                            break;
                        case "@dfuty":
                            battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7441395208740179255";
                            break;
                        default:
                            battleLink.href = `#batalha-${batalha}`;
                    }
                }
            } else {
                battleLink.href = `#batalha-${batalha}`;
            }
            
            battleLink.textContent = `Batalha ${batalha}`;
            battleLink.className = 'battle-link';
            battleLink.target = "_blank";
            tdBatalhas.appendChild(battleLink);
            
            if (idx < pessoa.batalhas.length - 1) {
                tdBatalhas.appendChild(document.createTextNode(' '));
            }
        });
        
        tr.appendChild(tdPosition);
        tr.appendChild(tdName);
        tr.appendChild(tdTitle);
        tr.appendChild(tdTiktok);
        tr.appendChild(tdBatalhas);
        rankingList.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    criarRanking(pessoasSerieA, 'rankingListA');
    criarRanking(pessoasSerieB, 'rankingListB');
});
