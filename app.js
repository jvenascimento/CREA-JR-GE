// Dados do dashboard CREA Jr
const dashboardData = {
    "resumo_executivo": {
        "total_atividades": 1846,
        "total_participantes": 33200,
        "estados_ativos": 16,
        "estados_inativos": 11,
        "cobertura_percentual": 59.3,
        "estado_mais_ativo": "Santa Catarina",
        "periodo_analise": "2023-2025"
    },
    "estados_detalhado": [
        {"nome": "Santa Catarina", "atividades": 716, "participantes": 4139, "ranking": 1},
        {"nome": "Maranhão", "atividades": 228, "participantes": 4473, "ranking": 2},
        {"nome": "Espírito Santo", "atividades": 213, "participantes": 3154, "ranking": 3},
        {"nome": "Minas Gerais", "atividades": 198, "participantes": 6368, "ranking": 4},
        {"nome": "Piauí", "atividades": 120, "participantes": 7722, "ranking": 5},
        {"nome": "Pará", "atividades": 97, "participantes": 2738, "ranking": 6},
        {"nome": "Goiás", "atividades": 56, "participantes": 1107, "ranking": 7},
        {"nome": "Rio Grande do Norte", "atividades": 54, "participantes": 206, "ranking": 8},
        {"nome": "Roraima", "atividades": 31, "participantes": 731, "ranking": 9},
        {"nome": "Mato Grosso", "atividades": 30, "participantes": 16, "ranking": 10},
        {"nome": "Distrito Federal", "atividades": 29, "participantes": 511, "ranking": 11},
        {"nome": "Amazonas", "atividades": 26, "participantes": 43, "ranking": 12},
        {"nome": "Rondônia", "atividades": 22, "participantes": 266, "ranking": 13},
        {"nome": "Sergipe", "atividades": 20, "participantes": 1650, "ranking": 14},
        {"nome": "Ceará", "atividades": 4, "participantes": 26, "ranking": 15},
        {"nome": "Acre", "atividades": 2, "participantes": 50, "ranking": 16}
    ],
    "modalidades": [
        {"nome": "Presencial", "quantidade": 1067, "participantes": 24721, "percentual": 58.0},
        {"nome": "Online", "quantidade": 747, "participantes": 7794, "percentual": 40.6},
        {"nome": "Híbrido", "quantidade": 25, "participantes": 685, "percentual": 1.4}
    ],
    "categorias": [
        {"nome": "CREA Jr", "atividades": 778, "participantes": 10236},
        {"nome": "Nucleo", "atividades": 266, "participantes": 7736},
        {"nome": "CREA", "atividades": 255, "participantes": 3073},
        {"nome": "IES", "atividades": 171, "participantes": 1453},
        {"nome": "Parceria", "atividades": 91, "participantes": 534}
    ],
    "timeline_mensal": [
        {"mes": "Janeiro 2025", "atividades": 87, "participantes": 1502},
        {"mes": "Fevereiro 2025", "atividades": 198, "participantes": 3499},
        {"mes": "Março 2025", "atividades": 345, "participantes": 4740},
        {"mes": "Abril 2025", "atividades": 359, "participantes": 6125},
        {"mes": "Maio 2025", "atividades": 318, "participantes": 5817},
        {"mes": "Junho 2025", "atividades": 211, "participantes": 6275},
        {"mes": "Julho 2025", "atividades": 146, "participantes": 3029},
        {"mes": "Agosto 2025", "atividades": 172, "participantes": 2024}
    ],
    "estados_sem_dados": ["Alagoas", "Amapá", "Bahia", "Mato Grosso do Sul", "Paraná", "Paraíba", "Pernambuco", "Rio Grande do Sul", "Rio de Janeiro", "São Paulo", "Tocantins"]
};

// Cores para os gráficos
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Configuração padrão dos gráficos
Chart.defaults.font.family = "'FKGroteskNeue', 'Inter', sans-serif";
Chart.defaults.font.size = 12;

// Função para inicializar o dashboard
function initDashboard() {
    // Aguardar um pouco para garantir que os elementos estejam renderizados
    setTimeout(() => {
        updateChartDefaults();
        populateStatesTable();
        createStatesChart();
        createTimelineChart();
        createParticipantsChart();
        createModalityChart();
        createCategoryChart();
        addKPIInteractivity();
    }, 100);
}

// Atualizar configurações dos gráficos
function updateChartDefaults() {
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
    if (textColor) {
        Chart.defaults.color = textColor;
    }
}

// Popular tabela de estados
function populateStatesTable() {
    const tbody = document.getElementById('statesTableBody');
    if (!tbody) return;
    
    dashboardData.estados_detalhado.forEach((estado, index) => {
        const row = document.createElement('tr');
        if (index < 3) {
            row.classList.add('ranking-top3');
        }
        
        row.innerHTML = `
            <td><strong>${estado.ranking}º</strong></td>
            <td>${estado.nome}</td>
            <td><strong>${estado.atividades.toLocaleString('pt-BR')}</strong></td>
            <td>${estado.participantes.toLocaleString('pt-BR')}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Gráfico de estados (Top 10)
function createStatesChart() {
    const ctx = document.getElementById('statesChart');
    if (!ctx) return;
    
    const top10States = dashboardData.estados_detalhado.slice(0, 10);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top10States.map(estado => estado.nome),
            datasets: [{
                label: 'Atividades',
                data: top10States.map(estado => estado.atividades),
                backgroundColor: chartColors.slice(0, 10),
                borderColor: chartColors.slice(0, 10),
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
                            const participantes = top10States[index].participantes;
                            return `Participantes: ${participantes.toLocaleString('pt-BR')}`;
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

// Gráfico de evolução temporal
function createTimelineChart() {
    const ctx = document.getElementById('timelineChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dashboardData.timeline_mensal.map(item => item.mes.replace(' 2025', '')),
            datasets: [{
                label: 'Atividades por Mês',
                data: dashboardData.timeline_mensal.map(item => item.atividades),
                borderColor: chartColors[0],
                backgroundColor: chartColors[0] + '20',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors[0],
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
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
                    }
                }
            }
        }
    });
}

// Gráfico de participantes por mês
function createParticipantsChart() {
    const ctx = document.getElementById('participantsChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dashboardData.timeline_mensal.map(item => item.mes.replace(' 2025', '')),
            datasets: [{
                label: 'Participantes por Mês',
                data: dashboardData.timeline_mensal.map(item => item.participantes),
                borderColor: chartColors[2],
                backgroundColor: chartColors[2] + '20',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors[2],
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
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
                        label: function(context) {
                            return `Participantes: ${context.raw.toLocaleString('pt-BR')}`;
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
                    }
                }
            }
        }
    });
}

// Gráfico de modalidades (Pizza)
function createModalityChart() {
    const ctx = document.getElementById('modalityChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dashboardData.modalidades.map(item => item.nome),
            datasets: [{
                data: dashboardData.modalidades.map(item => item.quantidade),
                backgroundColor: [chartColors[0], chartColors[1], chartColors[2]],
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
                            const modalidade = dashboardData.modalidades[context.dataIndex];
                            return [
                                `${modalidade.nome}: ${modalidade.quantidade} atividades`,
                                `${modalidade.participantes.toLocaleString('pt-BR')} participantes`,
                                `${modalidade.percentual}% do total`
                            ];
                        }
                    }
                }
            }
        }
    });
}

// Gráfico de categorias
function createCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.categorias.map(item => item.nome),
            datasets: [{
                label: 'Atividades por Categoria',
                data: dashboardData.categorias.map(item => item.atividades),
                backgroundColor: chartColors.slice(0, 5),
                borderColor: chartColors.slice(0, 5),
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
                            const participantes = dashboardData.categorias[index].participantes;
                            return `Participantes: ${participantes.toLocaleString('pt-BR')}`;
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
                    }
                }
            }
        }
    });
}

// Adicionar interatividade aos KPIs
function addKPIInteractivity() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    kpiCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const kpiType = this.getAttribute('data-kpi');
            if (kpiType) {
                showKPIDetails(kpiType);
            }
        });
        
        // Adicionar indicador visual de clicável
        card.style.cursor = 'pointer';
        card.setAttribute('title', 'Clique para ver detalhes');
    });
}

// Mostrar detalhes dos KPIs
function showKPIDetails(kpiType) {
    let title = '';
    let message = '';
    
    switch(kpiType) {
        case 'atividades':
            title = '📊 Total de Atividades';
            message = `
                <p><strong>${dashboardData.resumo_executivo.total_atividades.toLocaleString('pt-BR')} atividades</strong> foram realizadas no período ${dashboardData.resumo_executivo.periodo_analise}.</p>
                <p>Santa Catarina lidera com <strong>${dashboardData.estados_detalhado[0].atividades} atividades</strong>, representando ${(dashboardData.estados_detalhado[0].atividades / dashboardData.resumo_executivo.total_atividades * 100).toFixed(1)}% do total nacional.</p>
                <p>As modalidades se dividem em: Presencial (58%), Online (40,6%) e Híbrido (1,4%).</p>
            `;
            break;
        case 'participantes':
            title = '👥 Total de Participantes';
            message = `
                <p><strong>${dashboardData.resumo_executivo.total_participantes.toLocaleString('pt-BR')} pessoas</strong> participaram das atividades do CREA Jr.</p>
                <p>Média de <strong>${Math.round(dashboardData.resumo_executivo.total_participantes / dashboardData.resumo_executivo.total_atividades)} participantes por atividade</strong>.</p>
                <p>O estado com maior número de participantes é <strong>Piauí</strong> com ${dashboardData.estados_detalhado[4].participantes.toLocaleString('pt-BR')} participantes.</p>
            `;
            break;
        case 'cobertura':
            title = '🗺️ Cobertura Geográfica';
            message = `
                <p>O CREA Jr está presente em <strong>${dashboardData.resumo_executivo.estados_ativos} dos 27 estados</strong> brasileiros.</p>
                <p>Isso representa <strong>${dashboardData.resumo_executivo.cobertura_percentual}% de cobertura nacional</strong>.</p>
                <p><strong>${dashboardData.resumo_executivo.estados_inativos} estados</strong> ainda não forneceram dados, representando uma grande oportunidade de expansão, especialmente em estados como São Paulo, Rio de Janeiro e Bahia.</p>
            `;
            break;
        case 'destaque':
            title = '🏆 Estado Mais Ativo';
            message = `
                <p><strong>${dashboardData.resumo_executivo.estado_mais_ativo}</strong> é o estado mais ativo do CREA Jr.</p>
                <p>Com <strong>${dashboardData.estados_detalhado[0].atividades} atividades</strong>, representa ${(dashboardData.estados_detalhado[0].atividades / dashboardData.resumo_executivo.total_atividades * 100).toFixed(1)}% do total nacional.</p>
                <p>Santa Catarina teve <strong>${dashboardData.estados_detalhado[0].participantes.toLocaleString('pt-BR')} participantes</strong> em suas atividades.</p>
            `;
            break;
        default:
            return;
    }
    
    showModal(title, message);
}

// Mostrar modal personalizado
function showModal(title, content) {
    // Remove modal existente
    const existingModal = document.getElementById('kpi-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Cria novo modal
    const modal = document.createElement('div');
    modal.id = 'kpi-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" aria-label="Fechar">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
    
    // Adiciona estilos do modal
    const style = document.createElement('style');
    style.textContent = `
        #kpi-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(3px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-content {
            background: var(--color-surface, #fff);
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }
        
        .modal-header {
            padding: 24px 24px 16px;
            border-bottom: 1px solid var(--color-card-border, #e5e7eb);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .modal-header h3 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: var(--color-text, #000);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: var(--color-text-secondary, #6b7280);
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }
        
        .modal-close:hover {
            background: var(--color-secondary, #f3f4f6);
            color: var(--color-text, #000);
        }
        
        .modal-body {
            padding: 24px;
            color: var(--color-text, #000);
            line-height: 1.6;
        }
        
        .modal-body p {
            margin: 0 0 16px 0;
        }
        
        .modal-body p:last-child {
            margin-bottom: 0;
        }
        
        .modal-body strong {
            color: var(--color-primary, #1fb8cd);
            font-weight: 600;
        }
        
        @media (max-width: 640px) {
            .modal-content {
                margin: 10px;
                max-height: 90vh;
            }
            
            .modal-header,
            .modal-body {
                padding: 16px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
    
    // Eventos para fechar
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        document.body.style.overflow = '';
        modal.remove();
        style.remove();
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // Fechar com ESC
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
    
    // Focar no modal para acessibilidade
    modal.focus();
}

// Formatação de números
function formatNumber(num) {
    return num.toLocaleString('pt-BR');
}

// Atualizar cores dos gráficos baseado no tema
function updateChartsTheme() {
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
    if (textColor) {
        Chart.defaults.color = textColor;
    }
}

// Observar mudanças de tema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateChartsTheme);
}

// Adicionar animações de entrada
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.chart-container, .insight-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Inicializar dashboard quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando dashboard...');
    initDashboard();
    addScrollAnimations();
    
    // Adicionar loading state
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Adicionar responsividade aos gráficos
window.addEventListener('resize', function() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
});