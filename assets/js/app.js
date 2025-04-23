const dados = {
    "receitas": [
        {
            "id": 1,
            "titulo": "Salada Completa",
            "descricao": "Salada refrescante, prática e saudável para seu almoço rápido!",
            "conteudo": "Uma salada completa com ingredientes frescos e nutritivos, perfeita para um almoço leve e saudável.",
            "categoria": "Saladas",
            "tempo_preparo": "15 min",
            "porcoes": "2",
            "dificuldade": "Fácil",
            "destaque": true,
            "imagem_principal": "assets/img/pexels-dana-tentis-118658-1213710.jpg",
            "ingredientes": [
                "1 alface americana",
                "1 tomate médio",
                "1 pepino japonês",
                "½ cebola roxa",
                "100g de queijo feta",
                "Azeite e limão a gosto",
                "Sal e pimenta"
            ],
            "modo_preparo": [
                "Lave bem todas as folhas e legumes",
                "Corte o alface em pedaços médios",
                "Pique o tomate e o pepino em cubos",
                "Fatie a cebola bem fina",
                "Misture todos os ingredientes em uma tigela grande",
                "Tempere com azeite, limão, sal e pimenta",
                "Finalize com cubos de queijo feta",
                "Sirva imediatamente"
            ],
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "assets/img/salada1.jpg",
                    "descricao": "Salada pronta para servir"
                },
                {
                    "id": 2,
                    "src": "assets/img/salada2.jpg",
                    "descricao": "Ingredientes frescos"
                }
            ]
        },
        {
            "id": 2,
            "titulo": "Pizza Caseira",
            "descricao": "Aprenda a fazer pizza em casa com massa simples e recheio criativo!",
            "conteudo": "Pizza caseira com massa crocante e recheio personalizado, perfeita para um jantar em família.",
            "categoria": "Massas",
            "tempo_preparo": "1h 30min",
            "porcoes": "4",
            "dificuldade": "Médio",
            "destaque": true,
            "imagem_principal": "assets/img/pexels-pablo-macedo-287472-845802.jpg",
            "ingredientes": [
                "2 xícaras de farinha de trigo",
                "1 colher de chá de fermento biológico",
                "1 colher de chá de sal",
                "1 colher de sopa de azeite",
                "1 xícara de água morna",
                "Molho de tomate",
                "Queijo mussarela",
                "Recheios a gosto"
            ],
            "modo_preparo": [
                "Misture a farinha, fermento e sal em uma tigela",
                "Adicione o azeite e a água morna, misturando até formar uma massa",
                "Sove a massa por 10 minutos até ficar lisa",
                "Deixe descansar por 1 hora até dobrar de volume",
                "Abra a massa em forma de disco",
                "Coloque em uma assadeira e adicione o molho",
                "Acrescente os recheios e queijo",
                "Asse em forno pré-aquecido a 200°C por 15-20 minutos"
            ],
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "assets/img/pizza1.jpg",
                    "descricao": "Massa sendo preparada"
                },
                {
                    "id": 2,
                    "src": "assets/img/pizza2.jpg",
                    "descricao": "Pizza pronta para servir"
                }
            ]
        },
        {
            "id": 3,
            "titulo": "Smoothie Matinal",
            "descricao": "Comece o dia com energia com esta receita rápida de smoothie!",
            "conteudo": "Smoothie energético e nutritivo, perfeito para começar o dia com disposição.",
            "categoria": "Bebidas",
            "tempo_preparo": "5 min",
            "porcoes": "1",
            "dificuldade": "Fácil",
            "destaque": true,
            "imagem_principal": "assets/img/pexels-rajesh-tp-1624487.png",
            "ingredientes": [
                "1 banana congelada",
                "½ xícara de morangos",
                "1 colher de sopa de aveia",
                "1 colher de chá de mel",
                "200ml de leite ou iogurte",
                "1 colher de sopa de semente de chia"
            ],
            "modo_preparo": [
                "Descongele ligeiramente a banana",
                "Coloque todos os ingredientes no liquidificador",
                "Bata até obter uma mistura homogênea",
                "Se necessário, adicione mais leite para ajustar a consistência",
                "Sirva imediatamente",
                "Decore com frutas frescas se desejar"
            ],
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "assets/img/smoothie1.jpg",
                    "descricao": "Smoothie pronto para servir"
                },
                {
                    "id": 2,
                    "src": "assets/img/smoothie2.jpg",
                    "descricao": "Ingredientes do smoothie"
                }
            ]
        }
    ]
};

function carregarDestaques() {
    const destaques = dados.receitas.filter(receita => receita.destaque);
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    
    // Limpa qualquer conteúdo existente
    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    // Adiciona os itens do carrossel
    destaques.forEach((receita, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `
            <a href="detalhes.html?id=${receita.id}">
                <img src="${receita.imagem_principal}" 
                     class="d-block w-100" 
                     alt="${receita.titulo}" 
                     style="height: 500px; object-fit: cover;">
            </a>
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3">
                <h3>${receita.titulo}</h3>
                <p>${receita.descricao}</p>
            </div>
        `;
        carouselInner.appendChild(item);
        
        // Adiciona indicadores
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#receitasCarousel';
        indicator.dataset.bsSlideTo = index;
        if (index === 0) {
            indicator.className = 'active';
            indicator.setAttribute('aria-current', 'true');
        }
        carouselIndicators.appendChild(indicator);
    });
    
    // Inicializa o carrossel manualmente
    const carousel = new bootstrap.Carousel(document.getElementById('receitasCarousel'), {
        interval: 5000, // Troca a cada 5 segundos
        wrap: true
    });
}

// Função para carregar todas as receitas na seção de cards
function carregarTodasReceitas() {
    const receitasContainer = document.getElementById('todas-receitas');
    
    dados.receitas.forEach(receita => {
        receitasContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-0 shadow-sm hover-shadow">
                    <a href="detalhes.html?id=${receita.id}">
                        <img src="${receita.imagem_principal}" class="card-img-top" alt="${receita.titulo}" style="height: 200px; object-fit: cover;">
                    </a>
                    <div class="card-body">
                        <h3 class="card-title"><a href="detalhes.html?id=${receita.id}" class="text-decoration-none text-dark">${receita.titulo}</a></h3>
                        <p class="card-text">${receita.descricao}</p>
                        <div class="d-flex justify-content-between">
                            <small class="text-muted"><i class="bi bi-clock"></i> ${receita.tempo_preparo}</small>
                            <small class="text-muted"><i class="bi bi-people"></i> ${receita.porcoes}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Função para carregar detalhes da receita
function carregarDetalhesReceita() {
    const urlParams = new URLSearchParams(window.location.search);
    const receitaId = parseInt(urlParams.get('id'));
    const receita = dados.receitas.find(r => r.id === receitaId);
    
    if (!receita) {
        window.location.href = 'index.html';
        return;
    }
    
    // Preencher informações básicas
    document.title = `${receita.titulo} - EasyFoods`;
    document.getElementById('receita-titulo').textContent = receita.titulo;
    document.getElementById('receita-imagem').src = receita.imagem_principal;
    document.getElementById('receita-imagem').alt = receita.titulo;
    document.getElementById('receita-descricao').textContent = receita.conteudo;
    
    // Preencher informações adicionais
    document.getElementById('tempo-preparo').textContent = receita.tempo_preparo;
    document.getElementById('porcoes').textContent = receita.porcoes;
    document.getElementById('dificuldade').textContent = receita.dificuldade;
    document.getElementById('categoria').textContent = receita.categoria;
    
    // Preencher ingredientes
    const ingredientesList = document.getElementById('ingredientes-list');
    receita.ingredientes.forEach(ingrediente => {
        ingredientesList.innerHTML += `<li class="mb-2">${ingrediente}</li>`;
    });
    
    // Preencher modo de preparo
    const preparoList = document.getElementById('preparo-list');
    receita.modo_preparo.forEach((passo, index) => {
        preparoList.innerHTML += `<li class="mb-3">${passo}</li>`;
    });
    
    // Preencher imagens complementares
    const galeriaContainer = document.getElementById('galeria-receita');
    receita.imagens_complementares.forEach(imagem => {
        galeriaContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card border-0 shadow-sm">
                    <img src="${imagem.src}" class="card-img-top" alt="${imagem.descricao}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <p class="card-text text-center">${imagem.descricao}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Verificar qual página está carregando e executar a função correspondente
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.carousel-inner')) {
        carregarDestaques();
        carregarTodasReceitas();
    }
    
    if (document.getElementById('receita-titulo')) {
        carregarDetalhesReceita();
    }
});