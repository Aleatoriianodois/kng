const pessoasSerieA = [
    {nome: "Paulo César", titulos: "5", tiktok: "@pcoficial_", patente: "logo-patente-prata-3.png", batalhas: ["1", "2", "3"], imagem: "paulocesar.png"},
    {nome: "WTzangetsu🌻", titulos: "3", tiktok: "@wtzangetsu", patente: "logo-patente-platina-1.png", batalhas: ["1"], imagem: "zan.png"},
    {nome: "Jose Jeimesson", titulos: "3", tiktok: "@josejeimesson", patente: "logo-patente-prata-1.png", batalhas: ["1"], imagem: "jose.png"},
    {nome: "Mendes", titulos: "3", tiktok: "@mendesssssssssss.02", patente: "logo-patente-platina-2.png", batalhas: ["1"], imagem: "mendes.png"},
    {nome: "Ricardo Andrade688", titulos: "2", tiktok: "@ricardo_ddo55", patente: "logo-patente-bronze-1.png", batalhas: ["1", "2"], imagem: "ricardo.png"},
    {nome: "Andrey Santos", titulos: "1", tiktok: "@andrey_santos07", patente: "patente6.png", batalhas: ["1"], imagem: "andreysantos.png"},
    {nome: "ARTHUR ALBUQUERQUE", titulos: "1", tiktok: "@arthuralbuquerque77", patente: "patente7.png", batalhas: ["1"], imagem: "arthur.png"},
    {nome: "Bella", titulos: "1", tiktok: "@bellamy._spark", patente: "patente8.png", batalhas: ["1"], imagem: "bella.png"},
    {nome: "dfuty", titulos: "1", tiktok: "@dfuty", patente: "patente9.png", batalhas: ["1"], imagem: ""},
    {nome: "GOSPEL ✝️", titulos: "1", tiktok: "@e_almeida1k", patente: "logo-patente-bronze-2.png", batalhas: ["1"], imagem: "gospel.png"},
    {nome: "Manel_2k24__", titulos: "1", tiktok: "@manel_2k24__", patente: "patente11.png", batalhas: ["1"], imagem: "manel.png"},
    {nome: "Matheus Modesto", titulos: "1", tiktok: "@matheusmodesto5", patente: "logo-patente-bronze-1.png", batalhas: ["1"], imagem: "matheus.png"},
    {nome: "Renan.kkj", titulos: "1", tiktok: "@renan.kkjjjk", patente: "logo-patente-bronze-3.png", batalhas: ["1"], imagem: "renan.png"},
    {nome: "Ze Victor", titulos: "1", tiktok: "@zee_victoor", patente: "logo-patente-bronze-1.png", batalhas: ["1"], imagem: "zevictor.png"},
    {nome: "Jaqueline Rissardi", titulos: "1", tiktok: "@jaqueline.rissard", patente: "patente15.png", batalhas: ["1"], imagem: "jaqueline.png"},
    {nome: "Igoozinn Soares", titulos: "1", tiktok: "@igooziinn", patente: "logo-patente-bronze-1.png", batalhas: ["1"], imagem: "igo.png"},
    {nome: "emi oliveira 💍🤍", titulos: "1", tiktok: "@emi.oliveira00", patente: "patente17.png", batalhas: ["1"], imagem: "emi.png"},
    {nome: "StormyV98", titulos: "1", tiktok: "@miguelitov98", patente: "patente18.png", batalhas: ["1"], imagem: "miguelito.png"},
    {nome: "L_U_A_X", titulos: "1", tiktok: "@waron_00", patente: "patente19.png", batalhas: ["1"], imagem: "luax.png"},
    {nome: "Flopado.cdt.ofc", titulos: "1", tiktok: "@flopado.cdt.ofc", patente: "patente20.png", batalhas: ["1"], imagem: "flopado.png"},
    {nome: "Leoo_da_g5", titulos: "1", tiktok: "@leon4rdo46", patente: "logo-patente-prata-3.png", batalhas: ["1"], imagem: "leog5.png"},
    {nome: "VITNHO..F..T..R", titulos: "1", tiktok: "@vitnho..f..t..r", patente: "patente22.png", batalhas: ["1"], imagem: "vitinhovtr.png"}
];

const pessoasSerieB = [
    {nome: "Davi Souza", titulos: "0", tiktok: "@davisouzaofc", patente: "patente23.png", batalhas: ["1"], imagem: ""},
    {nome: "Enzo Gabriel", titulos: "0", tiktok: "@enzogabriel.fps", patente: "patente24.png", batalhas: ["1"], imagem: ""},
    {nome: "Gabriel Medina", titulos: "0", tiktok: "@gabrielmedina_ofc", patente: "patente25.png", batalhas: ["1"], imagem: ""},
    {nome: "Gustavo", titulos: "0", tiktok: "@gustavohenriquegamer1", patente: "patente26.png", batalhas: ["1"], imagem: ""},
    {nome: "João Pedro", titulos: "0", tiktok: "@joaopedro.fps", patente: "patente27.png", batalhas: ["1"], imagem: ""},
    {nome: "Lucas Gabriel", titulos: "0", tiktok: "@lucasgabriel.fps", patente: "patente28.png", batalhas: ["1"], imagem: ""},
    {nome: "Matheus Santos", titulos: "0", tiktok: "@matheussantos.fps", patente: "patente29.png", batalhas: ["1"], imagem: ""},
    {nome: "Pedro Henrique", titulos: "0", tiktok: "@pedrohenrique.fps", patente: "patente30.png", batalhas: ["1"], imagem: ""}
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
