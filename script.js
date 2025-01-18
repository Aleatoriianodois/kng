const pessoasSerieA = [
   {nome: "group_peron", titulos: "1", tiktok: "@peron_xly", batalhas: ["1"], imagem: "peron_xly.png"}
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
        
        const tdPatente = document.createElement('td'); // Adicionada a célula para Patente
        if (pessoa.patente) {
            const imgPatente = document.createElement('img');
            imgPatente.src = `images/${pessoa.patente}`; // Caminho da imagem da patente
            imgPatente.style.width = '25px'; // Ajuste o tamanho da imagem
            imgPatente.style.height = '25px'; // Ajuste o tamanho da imagem
            imgPatente.style.borderRadius = '50%'; // Bordas arredondadas
            imgPatente.style.marginRight = '8px'; // Espaçamento à direita
            tdPatente.appendChild(imgPatente);
        }

        const tdTitle = document.createElement('td');
        tdTitle.className = 'title';
        tdTitle.textContent = pessoa.titulos;

        const tdTiktok = document.createElement('td');
        const tiktokLink = document.createElement('a');
        tiktokLink.href = `https://tiktok.com/${pessoa.tiktok}`;
        tiktokLink.textContent = pessoa.tiktok;
        tiktokLink.target = "_blank";
        tdTiktok.appendChild(tiktokLink);

        tr.appendChild(tdPosition);
        tr.appendChild(tdName);
        tr.appendChild(tdPatente); // Adicionada a célula de Patente
        tr.appendChild(tdTitle);
        tr.appendChild(tdTiktok);
        rankingList.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    criarRanking(pessoasSerieA, 'rankingListA');
    criarRanking(pessoasSerieB, 'rankingListB');
});
