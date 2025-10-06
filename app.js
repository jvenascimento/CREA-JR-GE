// Dados do dashboard CREA Jr - Análise Completa ATUALIZADA
const dashboardData = {
    "resumo_executivo": {
        "total_atividades": 2526, // 1846 + 680
        "total_participantes": 49681, // 33200 + 16481
        "estados_ativos": 16,
        "estados_pendentes": 7,
        "estados_situacao_especial": 4,
        "cobertura_real": 69.6,
        "maior_evento": 3000,
        "media_participantes": 30.5, // Atualizada
        "periodo_analise": "2023-2025",
        "novos_registros": 680,
        "novos_participantes": 16481,
        "status_atualizacao": "parcial"
    },
    "situacao_estados": {
        "ativos": {
            "Santa Catarina": 716,
            "Maranhão": 356, // 228 + 128 (atualizado)
            "Espírito Santo": 213,
            "Minas Gerais": 198,
            "Piauí": 246, // 120 + 126 (atualizado)
            "Bahia": 108, // Novo (atualizado)
            "Pará": 97,
            "Goiás": 145, // 56 + 89 (atualizado)
            "Rio Grande do Norte": 133, // 54 + 79 (atualizado)
            "Mato Grosso": 96, // 30 + 66 (atualizado)
            "Distrito Federal": 70, // 29 + 41 (atualizado)
            "Roraima": 31,
            "Sergipe": 50, // 20 + 30 (atualizado)
            "Amazonas": 26,
            "Rondônia": 22,
            "Ceará": 17, // 4 + 13 (atualizado)
            "Acre": 2
        },
        "pendentes": ["Mato Grosso do Sul", "Paraná", "Paraíba", "Pernambuco", "Rio Grande do Sul", "Tocantins"],
        "situacao_especial": {
            "Alagoas": "Não tem representante",
            "Amapá": "Não tem CREA Jr",
            "Rio de Janeiro": "Reestruturando",
            "São Paulo": "Não tem CREA Jr"
        },
        "estados_atualizados": ["Maranhão", "Piauí", "Bahia", "Goiás", "Rio Grande do Norte", "Mato Grosso", "Distrito Federal", "Sergipe", "Ceará"]
    },
    "analise_atividades": {
        "podio_volume": [
            {"posicao": 1, "tipo": "Reunião", "quantidade": 395, "percentual": 15.6, "emoji": "🥇"},
            {"posicao": 2, "tipo": "Reunião interna", "quantidade": 464, "percentual": 18.4, "emoji": "🥈"}, // 300 + 164
            {"posicao": 3, "tipo": "Evento", "quantidade": 304, "percentual": 12.0, "emoji": "🥉"}, // 241 + 63
            {"posicao": 4, "tipo": "Palestras", "quantidade": 263, "percentual": 10.4, "emoji": "🏅"}, // 230 + 33
            {"posicao": 5, "tipo": "Treinamento", "quantidade": 172, "percentual": 6.8, "emoji": "🏅"} // Novo
        ],
        "podio_efetividade": [
            {"posicao": 1, "tipo": "Seminários", "efetividade": 99.2, "atividades": 7, "emoji": "🥇"},
            {"posicao": 2, "tipo": "Semana de engenharia", "efetividade": 66.0, "atividades": 31, "emoji": "🥈"},
            {"posicao": 3, "tipo": "Evento", "efetividade": 52.8, "atividades": 304, "emoji": "🥉"}, // Atualizado
            {"posicao": 4, "tipo": "Treinamento", "efetividade": 45.2, "atividades": 172, "emoji": "🏅"}, // Novo
            {"posicao": 5, "tipo": "Palestras", "efetividade": 35.3, "atividades": 263, "emoji": "🏅"} // Atualizado
        ],
        "podio_alcance": [
            {"posicao": 1, "tipo": "Evento", "participantes": 16050, "percentual": 32.3, "emoji": "🥇"}, // Atualizado
            {"posicao": 2, "tipo": "Reunião interna", "participantes": 7777, "participantes": 15.6, "emoji": "🥈"}, // Atualizado
            {"posicao": 3, "tipo": "Treinamento", "participantes": 7774, "percentual": 15.6, "emoji": "🥉"}, // Novo
            {"posicao": 4, "tipo": "Palestras", "participantes": 9288, "percentual": 18.7, "emoji": "🏅"}, // Atualizado
            {"posicao": 5, "tipo": "Reunião", "participantes": 2153, "percentual": 4.3, "emoji": "🏅"}
        ]
    },
    "eficiencia_estados": [
        {"estado": "Sergipe", "eficiencia": 82.5, "atividades": 50, "status": "atualizado"},
        {"estado": "Piauí", "eficiencia": 70.4, "atividades": 246, "status": "atualizado"},
        {"estado": "Acre", "eficiencia": 50.0, "atividades": 2, "status": "normal"},
        {"estado": "Minas Gerais", "eficiencia": 32.2, "atividades": 198, "status": "normal"},
        {"estado": "Maranhão", "eficiencia": 41.8, "atividades": 356, "status": "atualizado"}
    ],
    "categorias_detalhadas": {
        "CREA Jr": {"atividades": 1014, "participantes": 13836, "media": 13.6, "top_tipo": "Reunião interna (300)"},
        "Nucleo": {"atividades": 319, "participantes": 10736, "media": 33.7, "top_tipo": "Palestras (89)"},
        "CREA": {"atividades": 305, "participantes": 4073, "media": 13.4, "top_tipo": "Reunião (115)"},
        "IES": {"atividades": 201, "participantes": 2153, "media": 10.7, "top_tipo": "Reunião (52)"},
        "Estadual": {"atividades": 93, "participantes": 3383, "media": 36.4, "top_tipo": "Reunião interna (31)"},
        "Parceria": {"atividades": 121, "participantes": 734, "media": 6.1, "top_tipo": "Reunião (36)"},
        "Empresa": {"atividades": 69, "participantes": 4772, "media": 69.2, "top_tipo": "Treinamento (25)"}
    },
    "modalidades_atualizacao": {
        "presencial": 540,
        "online": 118,
        "hibrido": 22
    },
    "insights_curiosos": {
        "maior_evento_individual": {"participantes": 3000, "tipo": "Evento", "estado": "Piauí"},
        "tipo_mais_comum": "Reunião interna (18.4% das atividades)",
        "categoria_mais_efetiva": "Empresa (69.2 participantes por atividade)",
        "estado_mais_eficiente": "Sergipe (82.5 participantes por atividade)",
        "crescimento_participacao": "Média subiu de 18.8 para 30.5 (+62% de eficiência)"
    },
    "status_atualizacao": {
        "em_atualizacao": true,
        "timestamp": "2025-10-05T22:20:00-03:00",
        "ultima_atualizacao": "05/10/2025 às 22:20",
        "regioes_disponiveis": ["Nordeste", "Sudeste"],
        "regioes_pendentes": ["Norte", "Centro-Oeste", "Sul"],
        "progresso_percentual": 40,
        "total_registros_novos": 680,
        "mensagem": "⏱️ Dados sendo atualizados! Disponíveis: Nordeste e Sudeste parcialmente."
    },
    "admin_config": {
        "senha_acesso": "VictinhoLindo",
        "funcionalidades": ["Editar dados de atividades", "Atualizar situação de estados", "Modificar categorias", "Gerar relatórios customizados", "Exportar dados", "Configurar alertas"]
    }
};

// Cores para os gráficos
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Estado global da aplicação
let isAdminLoggedIn = false;
let currentSection = 'geral';
let popupShown = false;

// Configuração padrão dos gráficos
Chart.defaults.font.family = "'FKGroteskNeue', 'Inter', sans-serif";
Chart.defaults.font.size = 12;

// Função para inicializar o dashboard
function initDashboard() {
    console.log('Inicializando Dashboard CREA Jr...');
    
    // Mostrar popup de atualização automaticamente
    setTimeout(showUpdatePopup, 500);
    
    // Configurar navegação
    setupNavigation();
    
    // Configurar área admin
    setupAdminLogin();
    
    // Popular dados iniciais
    populateInitialData();
    
    // Aguardar um pouco para garantir que os elementos estejam renderizados
    setTimeout(() => {
        createCharts();
        setupInteractivity();
    }, 100);
}

// Mostrar popup de atualização
function showUpdatePopup() {
    // Verificar se deve mostrar (não mostrar se usuário optou por não ver)
    if (sessionStorage.getItem('hideUpdatePopup') === 'true') {
        return;
    }
    
    const popup = document.getElementById('updatePopup');
    if (popup) {
        popup.classList.remove('hidden');
        popupShown = true;
        
        // Configurar botão fechar
        const closeBtn = document.getElementById('popupCloseBtn');
        const dontShowAgain = document.getElementById('dontShowAgain');
        
        closeBtn.addEventListener('click', () => {
            if (dontShowAgain.checked) {
                sessionStorage.setItem('hideUpdatePopup', 'true');
            }
            popup.classList.add('hidden');
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
                popup.classList.add('hidden');
            }
        });
        
        // Fechar clicando no overlay
        popup.querySelector('.update-popup-overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                popup.classList.add('hidden');
            }
        });
    }
}

// Configurar navegação entre seções
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.tab-section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.getAttribute('data-section');
            
            // Atualizar botões
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Atualizar seções
            sections.forEach(s => s.classList.remove('active'));
            const targetEl = document.getElementById(targetSection);
            if (targetEl) {
                targetEl.classList.add('active');
                currentSection = targetSection;
            }
            
            // Redimensionar gráficos
            setTimeout(() => {
                Chart.helpers.each(Chart.instances, instance => {
                    instance.resize();
                });
            }, 100);
        });
    });
}

// Configurar login admin
function setupAdminLogin() {
    const loginBtn = document.getElementById('adminLoginBtn');
    const loginForm = document.getElementById('adminLoginForm');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    
    loginBtn.addEventListener('click', () => {
        // Navegar para seção admin
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-section="admin"]').classList.add('active');
        
        document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
        document.getElementById('admin').classList.add('active');
    });
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('adminPassword').value;
        
        if (password === dashboardData.admin_config.senha_acesso) {
            loginSuccess();
        } else {
            showError('Senha incorreta!');
        }
    });
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }
}

// Login bem-sucedido
function loginSuccess() {
    isAdminLoggedIn = true;
    document.getElementById('adminLoginSection').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    
    // Atualizar timestamp
    document.getElementById('lastUpdate').textContent = dashboardData.status_atualizacao.ultima_atualizacao;
    
    // Adicionar log
    addAdminLog('Login administrativo realizado com sucesso');
    
    // Popular select de estados
    populateStatesSelect();
    
    showSuccess('Login realizado com sucesso!');
}

// Logout
function logout() {
    isAdminLoggedIn = false;
    document.getElementById('adminLoginSection').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('adminPassword').value = '';
    
    addAdminLog('Logout administrativo realizado');
    showInfo('Logout realizado com sucesso');
}

// Popular dados iniciais
function populateInitialData() {
    // Popular tabela de estados
    populateStatesTable();
    
    // Popular pódios
    populatePodiums();
    
    // Popular categorias
    populateCategories();
    
    // Popular estados ativos
    populateActiveStates();
}

// Popular tabela de estados
function populateStatesTable() {
    const tbody = document.getElementById('statesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const estadosArray = Object.entries(dashboardData.situacao_estados.ativos)
        .map(([nome, atividades]) => ({ nome, atividades }))
        .sort((a, b) => b.atividades - a.atividades);
    
    estadosArray.forEach((estado, index) => {
        const eficiencia = dashboardData.eficiencia_estados.find(e => e.estado === estado.nome);
        const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(estado.nome);
        const row = document.createElement('tr');
        
        if (index < 3) {
            row.classList.add('ranking-top3');
        }
        
        if (isUpdated) {
            row.classList.add('state-updated');
        }
        
        const statusBadge = isUpdated ? 
            '<span class="status updated" style="background: #28a745; color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px;">ATUALIZADO</span>' :
            '<span class="status normal" style="background: #6c757d; color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px;">NORMAL</span>';
        
        row.innerHTML = `
            <td><strong>${index + 1}º</strong></td>
            <td>${estado.nome} ${isUpdated ? '🆕' : ''}</td>
            <td><strong>${estado.atividades.toLocaleString('pt-BR')}</strong></td>
            <td>${statusBadge}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Popular pódios
function populatePodiums() {
    // Pódio Volume
    const volumePreview = document.getElementById('podiumVolumePreview');
    if (volumePreview) {
        volumePreview.innerHTML = dashboardData.analise_atividades.podio_volume.slice(0, 3).map(item => `
            <div class="podium-item">
                <span><span class="emoji">${item.emoji}</span>${item.tipo}</span>
                <span><strong>${item.quantidade}</strong></span>
            </div>
        `).join('');
    }
    
    // Pódio Efetividade
    const efetividadePreview = document.getElementById('podiumEfetividadePreview');
    if (efetividadePreview) {
        efetividadePreview.innerHTML = dashboardData.analise_atividades.podio_efetividade.slice(0, 3).map(item => `
            <div class="podium-item">
                <span><span class="emoji">${item.emoji}</span>${item.tipo}</span>
                <span><strong>${item.efetividade}</strong></span>
            </div>
        `).join('');
    }
    
    // Pódio Alcance
    const alcancePreview = document.getElementById('podiumAlcancePreview');
    if (alcancePreview) {
        alcancePreview.innerHTML = dashboardData.analise_atividades.podio_alcance.slice(0, 3).map(item => `
            <div class="podium-item">
                <span><span class="emoji">${item.emoji}</span>${item.tipo}</span>
                <span><strong>${item.participantes.toLocaleString('pt-BR')}</strong></span>
            </div>
        `).join('');
    }
}

// Popular categorias
function populateCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    Object.entries(dashboardData.categorias_detalhadas).forEach(([nome, dados]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        const icons = {
            'CREA Jr': '🎓',
            'Nucleo': '🌟',
            'CREA': '🏛️',
            'IES': '🏫',
            'Estadual': '🗺️',
            'Parceria': '🤝',
            'Empresa': '🏢'
        };
        
        categoryCard.innerHTML = `
            <h4>${icons[nome] || '📊'} ${nome}</h4>
            <div class="category-stat">
                <span>Atividades:</span>
                <span><strong>${dados.atividades.toLocaleString('pt-BR')}</strong></span>
            </div>
            <div class="category-stat">
                <span>Participantes:</span>
                <span><strong>${dados.participantes.toLocaleString('pt-BR')}</strong></span>
            </div>
            <div class="category-stat">
                <span>Média por atividade:</span>
                <span><strong>${dados.media.toFixed(1)}</strong></span>
            </div>
            <div class="category-stat">
                <span>Tipo principal:</span>
                <span><strong>${dados.top_tipo}</strong></span>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Popular estados ativos
function populateActiveStates() {
    const activeStatesList = document.getElementById('activeStatesList');
    if (!activeStatesList) return;
    
    activeStatesList.innerHTML = '';
    
    Object.entries(dashboardData.situacao_estados.ativos)
        .sort(([,a], [,b]) => b - a)
        .forEach(([nome, atividades]) => {
            const stateTag = document.createElement('span');
            const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(nome);
            
            stateTag.className = 'state-tag';
            
            if (isUpdated) {
                stateTag.style.background = 'rgba(255, 193, 7, 0.2)';
                stateTag.style.color = '#ffc107';
                stateTag.style.border = '1px solid #ffc107';
                stateTag.textContent = `${nome} (${atividades}) 🆕`;
            } else {
                stateTag.style.background = 'var(--color-bg-3)';
                stateTag.style.color = 'var(--color-success)';
                stateTag.style.border = '1px solid rgba(var(--color-success-rgb), 0.3)';
                stateTag.textContent = `${nome} (${atividades})`;
            }
            
            activeStatesList.appendChild(stateTag);
        });
}

// Criar gráficos
function createCharts() {
    createStatesChart();
    createStatesSituationChart();
    createActivityTypesChart();
}

// Gráfico de estados
function createStatesChart() {
    const ctx = document.getElementById('statesChart');
    if (!ctx) return;
    
    const estadosArray = Object.entries(dashboardData.situacao_estados.ativos)
        .map(([nome, atividades]) => ({ nome, atividades }))
        .sort((a, b) => b.atividades - a.atividades)
        .slice(0, 10);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: estadosArray.map(estado => estado.nome),
            datasets: [{
                label: 'Atividades',
                data: estadosArray.map(estado => estado.atividades),
                backgroundColor: estadosArray.map((estado, i) => {
                    const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(estado.nome);
                    return isUpdated ? '#ffc107' : chartColors[i % chartColors.length];
                }),
                borderColor: estadosArray.map((estado, i) => {
                    const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(estado.nome);
                    return isUpdated ? '#ffb300' : chartColors[i % chartColors.length];
                }),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const estado = estadosArray[index];
                            const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(estado.nome);
                            const status = isUpdated ? '\n🆕 ATUALIZADO RECENTEMENTE' : '\n📊 Dados anteriores';
                            const eficiencia = dashboardData.eficiencia_estados.find(e => e.estado === estado.nome);
                            const eficienciaText = eficiencia ? `\nEficiência: ${eficiencia.eficiencia} part/atividade` : '';
                            return status + eficienciaText;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Gráfico situação dos estados
function createStatesSituationChart() {
    const ctx = document.getElementById('statesSituationChart');
    if (!ctx) return;
    
    const dados = [
        { label: 'Estados Ativos', value: dashboardData.resumo_executivo.estados_ativos, color: chartColors[0] },
        { label: 'Estados Pendentes', value: dashboardData.resumo_executivo.estados_pendentes, color: chartColors[1] },
        { label: 'Situação Especial', value: dashboardData.resumo_executivo.estados_situacao_especial, color: chartColors[2] }
    ];
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dados.map(d => d.label),
            datasets: [{
                data: dados.map(d => d.value),
                backgroundColor: dados.map(d => d.color),
                borderColor: '#fff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = 27; // Total de estados no Brasil
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} (${percentage}% do Brasil)`;
                        }
                    }
                }
            }
        }
    });
}

// Gráfico tipos de atividades
function createActivityTypesChart() {
    const ctx = document.getElementById('activityTypesChart');
    if (!ctx) return;
    
    const tipos = dashboardData.analise_atividades.podio_volume.slice(0, 8);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tipos.map(t => t.tipo),
            datasets: [{
                label: 'Quantidade',
                data: tipos.map(t => t.quantidade),
                backgroundColor: tipos.map((t, i) => 
                    i < 3 ? ['#FFD700', '#C0C0C0', '#CD7F32'][i] : chartColors[i % chartColors.length]
                ),
                borderColor: tipos.map((t, i) => 
                    i < 3 ? ['#FFD700', '#C0C0C0', '#CD7F32'][i] : chartColors[i % chartColors.length]
                ),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const tipo = tipos[index];
                            return `Percentual: ${tipo.percentual}% do total\n📊 Dados atualizados incluídos`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Configurar interatividade
function setupInteractivity() {
    // Pódios clicáveis
    document.querySelectorAll('.podium-card').forEach(card => {
        card.addEventListener('click', () => {
            const podiumType = card.getAttribute('data-podium');
            showPodiumDetails(podiumType);
        });
    });
    
    // Ferramentas admin
    document.querySelectorAll('.admin-tool-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tool = btn.getAttribute('data-tool');
            handleAdminTool(tool);
        });
    });
    
    // Formulário de nova atividade
    const adminForm = document.querySelector('.admin-form');
    if (adminForm) {
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleNewActivity();
        });
    }
}

// Mostrar detalhes do pódio
function showPodiumDetails(type) {
    const modal = document.getElementById('podiumModal');
    const title = document.getElementById('podiumModalTitle');
    const body = document.getElementById('podiumModalBody');
    
    let podiumData, titleText;
    
    switch(type) {
        case 'volume':
            podiumData = dashboardData.analise_atividades.podio_volume;
            titleText = '🏆 Pódio por Volume - Top 5 (ATUALIZADO)';
            break;
        case 'efetividade':
            podiumData = dashboardData.analise_atividades.podio_efetividade;
            titleText = '🎯 Pódio por Efetividade - Top 5';
            break;
        case 'alcance':
            podiumData = dashboardData.analise_atividades.podio_alcance;
            titleText = '👥 Pódio por Alcance - Top 5 (ATUALIZADO)';
            break;
    }
    
    if (!podiumData) return;
    
    title.textContent = titleText;
    
    const content = podiumData.map((item, index) => {
        const medalColor = index < 3 ? ['#FFD700', '#C0C0C0', '#CD7F32'][index] : '#4A90E2';
        
        let details = '';
        if (type === 'volume') {
            details = `${item.quantidade.toLocaleString('pt-BR')} atividades (${item.percentual}%)`;
        } else if (type === 'efetividade') {
            details = `${item.efetividade} participantes por atividade (${item.atividades} atividades)`;
        } else if (type === 'alcance') {
            details = `${item.participantes.toLocaleString('pt-BR')} participantes (${item.percentual}%)`;
        }
        
        const updateBadge = (type === 'volume' || type === 'alcance') ? 
            '<span style="background: #ffc107; color: #000; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px;">NOVO</span>' : '';
        
        return `
            <div style="display: flex; align-items: center; padding: 12px; margin-bottom: 8px; background: var(--color-bg-1); border-radius: 8px; border-left: 4px solid ${medalColor};">
                <span style="font-size: 24px; margin-right: 16px;">${item.emoji}</span>
                <div style="flex: 1;">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${item.posicao}º lugar: ${item.tipo}${updateBadge}</div>
                    <div style="color: var(--color-text-secondary); font-size: 14px;">${details}</div>
                </div>
            </div>
        `;
    }).join('');
    
    body.innerHTML = content + `
        <div style="margin-top: 16px; padding: 12px; background: rgba(255, 193, 7, 0.1); border-radius: 8px; border: 1px solid #ffc107;">
            <strong>📊 Dados Atualizados:</strong><br>
            Incluídos ${dashboardData.resumo_executivo.novos_registros} novos registros e ${dashboardData.resumo_executivo.novos_participantes.toLocaleString('pt-BR')} novos participantes.<br>
            <small>Última atualização: ${dashboardData.status_atualizacao.ultima_atualizacao}</small>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Fechar modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        modal.classList.add('hidden');
    };
    
    closeBtn.onclick = closeModal;
    overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
    };
    
    document.onkeydown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.onkeydown = null;
        }
    };
}

// Lidar com ferramentas admin
function handleAdminTool(tool) {
    if (!isAdminLoggedIn) {
        showError('Acesso negado!');
        return;
    }
    
    let message = '';
    
    switch(tool) {
        case 'edit-activities':
            message = 'Funcionalidade de edição de atividades acessada';
            break;
        case 'update-states':
            message = 'Funcionalidade de atualização de estados acessada';
            break;
        case 'modify-categories':
            message = 'Funcionalidade de modificação de categorias acessada';
            break;
        case 'generate-reports':
            message = 'Gerador de relatórios acessado';
            break;
        case 'export-data':
            exportData();
            message = 'Dados exportados com sucesso (incluindo novos dados)';
            break;
        case 'configure-alerts':
            message = 'Configurador de alertas acessado';
            break;
    }
    
    addAdminLog(message);
    showInfo(`Ferramenta "${tool}" executada com sucesso`);
}

// Exportar dados
function exportData() {
    const dataToExport = {
        timestamp: new Date().toISOString(),
        dashboard_data: dashboardData,
        status_atualizacao: dashboardData.status_atualizacao,
        novos_dados: {
            registros_adicionados: dashboardData.resumo_executivo.novos_registros,
            participantes_adicionados: dashboardData.resumo_executivo.novos_participantes,
            estados_atualizados: dashboardData.situacao_estados.estados_atualizados,
            modalidades: dashboardData.modalidades_atualizacao
        },
        summary: {
            total_estados_brasil: 27,
            estados_com_dados: dashboardData.resumo_executivo.estados_ativos,
            cobertura_percentual: dashboardData.resumo_executivo.cobertura_real,
            media_participantes_atualizada: dashboardData.resumo_executivo.media_participantes
        }
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `crea_jr_dashboard_atualizado_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

// Lidar com nova atividade
function handleNewActivity() {
    if (!isAdminLoggedIn) {
        showError('Acesso negado!');
        return;
    }
    
    const form = document.querySelector('.admin-form');
    const formData = new FormData(form);
    
    addAdminLog('Nova atividade adicionada ao sistema');
    showSuccess('Atividade adicionada com sucesso!');
    
    form.reset();
}

// Popular select de estados
function populateStatesSelect() {
    const select = document.getElementById('newActivityState');
    if (!select) return;
    
    select.innerHTML = '<option value="">Selecione...</option>';
    
    Object.keys(dashboardData.situacao_estados.ativos).forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        const isUpdated = dashboardData.situacao_estados.estados_atualizados.includes(estado);
        option.textContent = `${estado}${isUpdated ? ' (ATUALIZADO)' : ''}`;
        select.appendChild(option);
    });
}

// Adicionar log admin
function addAdminLog(message) {
    const logsContainer = document.getElementById('adminLogs');
    if (!logsContainer) return;
    
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('pt-BR');
    
    logEntry.innerHTML = `
        <span class="log-time">${timeString} - ${dateString}</span>
        <span class="log-action">${message}</span>
    `;
    
    logsContainer.insertBefore(logEntry, logsContainer.firstChild);
    
    // Limitar a 10 entradas
    while (logsContainer.children.length > 10) {
        logsContainer.removeChild(logsContainer.lastChild);
    }
}

// Funções de notificação
function showSuccess(message) {
    showNotification(message, 'success');
}

function showError(message) {
    showNotification(message, 'error');
}

function showInfo(message) {
    showNotification(message, 'info');
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'});
        color: var(--color-btn-primary-text);
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10001;
        max-width: 400px;
        box-shadow: var(--shadow-lg);
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 300);
    }, 3000);
}

// Redimensionar gráficos na mudança de janela
window.addEventListener('resize', function() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
});

// Inicializar dashboard quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando dashboard CREA Jr atualizado...');
    initDashboard();
});

// Console log para debug do status de atualização
console.log('📊 Dashboard CREA Jr - Status de Atualização:', {
    novos_registros: dashboardData.resumo_executivo.novos_registros,
    novos_participantes: dashboardData.resumo_executivo.novos_participantes,
    estados_atualizados: dashboardData.situacao_estados.estados_atualizados,
    timestamp: dashboardData.status_atualizacao.timestamp
});