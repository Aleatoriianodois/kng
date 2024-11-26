<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copa Rei da Colina - Batalhas do TikTok</title>
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="header-background"></div>
        <div class="header-content">
            <i class="fas fa-crown crown-icon"></i>
            <div class="main-title">
                <span class="copa-text">COPA</span>
                <span class="rei-text">REI DA COLINA</span>
            </div>
            <div class="subtitle-container">
                <h2 class="subtitle">Batalhas do TikTok</h2>
                <div class="tiktok-container">
                    <i class="fab fa-tiktok tiktok-icon"></i>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="tables-container">
            <div class="ranking-section">
                <h2>Série A</h2>
                <div class="ranking-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Nome</th>
                                <th>Títulos</th>
                                <th>TikTok</th>
                                <th>Batalhas</th>
                            </tr>
                        </thead>
                        <tbody id="rankingListA">
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="ranking-section">
                <h2>Série B</h2>
                <div class="ranking-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Nome</th>
                                <th>Títulos</th>
                                <th>TikTok</th>
                                <th>Batalhas</th>
                            </tr>
                        </thead>
                        <tbody id="rankingListB">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>Todos os direitos reservados © aleatoriianodois</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>