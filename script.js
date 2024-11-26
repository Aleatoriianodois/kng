const pessoasSerieA = [
    {nome: "Jose Jeimesson", titulos: "2", tiktok: "@josejeimesson", batalhas: ["1", "2"]},
    {nome: "Paulo César", titulos: "2", tiktok: "@pcoficial_", batalhas: ["1", "2"]},
    {nome: "Ricardo Andrade688", titulos: "2", tiktok: "@ricardo_ddo55", batalhas: ["1", "2"]},
    {nome: "Andrey Santos", titulos: "1", tiktok: "@andrey_santos07", batalhas: ["1"]},
    {nome: "ARTHUR ALBUQUERQUE", titulos: "1", tiktok: "@arthuralbuquerque77", batalhas: ["1"]},
    {nome: "Bella", titulos: "1", tiktok: "@bellamy._spark", batalhas: ["1"]},
    {nome: "dfuty", titulos: "1", tiktok: "@dfuty", batalhas: ["1"]},
    {nome: "GOSPEL ✝️", titulos: "1", tiktok: "@e_almeida1k", batalhas: ["1"]},
    {nome: "Manel_2k24__", titulos: "1", tiktok: "@manel_2k24__", batalhas: ["1"]},
    {nome: "Matheus Modesto", titulos: "1", tiktok: "@matheusmodesto5", batalhas: ["1"]},
    {nome: "Renan.kkj", titulos: "1", tiktok: "@renan.kkjjjk", batalhas: ["1"]},
    {nome: "Ze Victor", titulos: "1", tiktok: "@zee_victoor", batalhas: ["1"]}
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
        tdName.textContent = pessoa.nome;
        
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
                if(index === 0) { // Jose Jeimesson
                    if(idx === 0) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440494121178926391";
                    } else if(idx === 1) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440663019023093047";
                    }
                } else if(index === 1) { // Paulo César
                    if(idx === 0) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7438448739628354871";
                    } else if(idx === 1) {
                        battleLink.href = "https://www.tiktok.com/@aleatoriianodois/video/7440890776449502520";
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
