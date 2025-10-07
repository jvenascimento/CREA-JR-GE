// DASHBOARD SOEA-25 - Dados Completos e Funcionalidades (Versão Corrigida)
const soea25Data = {
    "metadata": {
        "data_processamento": "07/10/2025",
        "hora_processamento": "06:25",
        "versao": "6.0",
        "fonte_dados": "SOEA-25-CREA-JR-Pagina7-1.csv",
        "total_estados_processados": 19,
        "total_registros_processados": 2647,
        "periodo_analise": "Janeiro a Outubro 2025",
        "status": "COMPLETO"
    },
    "resumo_nacional": {
        "total_eventos": 2647,
        "estados_ativos": 19,
        "regioes_ativas": 5,
        "media_mensal": 264.7,
        "modalidades": {
            "Presencial": 1410,
            "Online": 827,
            "Híbrido": 36
        },
        "distribuicao_regional": {
            "Sul": 1144,
            "Sudeste": 583, 
            "Nordeste": 571,
            "Norte": 234,
            "Centro-Oeste": 115
        },
        "top_atividades": {
            "Reunião": 514,
            "Reunião interna": 309,
            "Palestras": 297,
            "Evento": 294,
            "Parceria": 104,
            "Visita técnica": 97,
            "Ciclo de Palestras": 94,
            "Desenvolvimento Interno": 90,
            "Ação social": 69,
            "Treinamento": 66,
            "Capacitação": 65,
            "Processo seletivo": 65,
            "Plenária": 49,
            "Semana de engenharia": 38,
            "Desenvolvimento interno": 36
        }
    },
    "dados_estados": {
        "Santa Catarina": {
            "info_basica": {
                "regiao": "Sul",
                "total_eventos": 821,
                "ranking_nacional": 1,
                "participacao_nacional": 31.02,
                "periodo_ativo": "2025",
                "meses_ativos": 10,
                "media_eventos_mes": 82.1,
                "primeiro_evento": "02/01/2025",
                "ultimo_evento": "31/10/2025",
                "total_participantes": 13020,
                "media_participantes_evento": 15.9
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 77, "2025-02": 81, "2025-03": 86, "2025-04": 90,
                    "2025-05": 85, "2025-06": 87, "2025-07": 93, "2025-08": 88,
                    "2025-09": 79, "2025-10": 55
                },
                "tendencia": "Decrescente",
                "variancia_mensal": 127.21,
                "pico_maximo": {"periodo": "2025-07", "eventos": 93},
                "vale_minimo": {"periodo": "2025-10", "eventos": 55},
                "meses_mais_ativos": [
                    {"periodo": "2025-07", "eventos": 93},
                    {"periodo": "2025-04", "eventos": 90},
                    {"periodo": "2025-08", "eventos": 88}
                ],
                "sazonalidade": "Alta"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 487, "Online": 327, "Híbrido": 7},
                "categorias": {"CREA Jr": 392, "Nucleo": 268, "CREA": 89, "Institucional": 45, "Social": 27},
                "tipos_atividade": {
                    "Reunião": 268, "Reunião interna": 147, "Palestras": 89, "Evento": 78,
                    "Desenvolvimento Interno": 56, "Visita técnica": 45, "Parceria": 39,
                    "Ciclo de Palestras": 34, "Ação social": 28, "Treinamento": 23,
                    "Capacitação": 8, "Processo seletivo": 5, "Plenaria": 1
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 1,
                "posicao_regional": 1,
                "percentil_nacional": 94.7,
                "acima_media_regional": true,
                "densidade_temporal": 82.1
            },
            "insights": {
                "caracteristicas_unicas": ["Líder nacional absoluto", "Maior densidade de eventos", "Forte presença presencial"],
                "pontos_fortes": ["Alto volume de atividades", "Consistência temporal", "Diversidade de modalidades"],
                "oportunidades": ["Reverter tendência de declínio", "Equilibrar distribuição temporal"],
                "recomendacoes": ["Manter liderança nacional", "Revisar estratégias do último trimestre", "Expandir modalidades híbridas"]
            }
        },
        "Minas Gerais": {
            "info_basica": {
                "regiao": "Sudeste",
                "total_eventos": 367,
                "ranking_nacional": 2,
                "participacao_nacional": 13.87,
                "periodo_ativo": "2025",
                "meses_ativos": 10,
                "media_eventos_mes": 36.7,
                "primeiro_evento": "05/01/2025",
                "ultimo_evento": "30/10/2025"
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 28, "2025-02": 32, "2025-03": 38, "2025-04": 42,
                    "2025-05": 39, "2025-06": 41, "2025-07": 45, "2025-08": 40,
                    "2025-09": 35, "2025-10": 27
                },
                "tendencia": "Estável",
                "variancia_mensal": 31.45,
                "pico_maximo": {"periodo": "2025-07", "eventos": 45},
                "vale_minimo": {"periodo": "2025-10", "eventos": 27},
                "sazonalidade": "Média"
            },
            "distribuicoes": {
                "modalidades": {"Online": 198, "Presencial": 151, "Híbrido": 18},
                "categorias": {"IES": 142, "CREA Jr": 98, "CREA": 67, "Nucleo": 45, "Social": 15},
                "tipos_atividade": {
                    "Palestras": 89, "Reunião": 67, "Evento": 54, "Desenvolvimento Interno": 43,
                    "Capacitação": 32, "Visita técnica": 28, "Treinamento": 24, "Ação social": 18,
                    "Parceria": 12
                },
                "modalidade_preferida": "Online",
                "categoria_principal": "IES"
            },
            "analise_comparativa": {
                "posicao_nacional": 2,
                "posicao_regional": 1,
                "percentil_nacional": 89.5,
                "acima_media_regional": true,
                "densidade_temporal": 36.7
            },
            "insights": {
                "caracteristicas_unicas": ["2º lugar nacional", "Líder em modalidade online", "Forte presença acadêmica"],
                "pontos_fortes": ["Consistência temporal", "Diversidade de categorias", "Inovação digital"],
                "recomendacoes": ["Expandir atividades presenciais", "Fortalecer parcerias regionais"]
            }
        },
        "Paraná": {
            "info_basica": {
                "regiao": "Sul",
                "total_eventos": 323,
                "ranking_nacional": 3,
                "participacao_nacional": 12.20,
                "periodo_ativo": "2025",
                "meses_ativos": 10,
                "media_eventos_mes": 32.3
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 25, "2025-02": 28, "2025-03": 31, "2025-04": 35,
                    "2025-05": 33, "2025-06": 34, "2025-07": 38, "2025-08": 36,
                    "2025-09": 32, "2025-10": 31
                },
                "tendencia": "Crescente",
                "variancia_mensal": 15.23,
                "pico_maximo": {"periodo": "2025-07", "eventos": 38},
                "vale_minimo": {"periodo": "2025-01", "eventos": 25},
                "sazonalidade": "Média"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 194, "Online": 115, "Híbrido": 14},
                "categorias": {"CREA Jr": 145, "Nucleo": 89, "CREA": 56, "Social": 23, "Institucional": 10},
                "tipos_atividade": {
                    "Reunião": 89, "Palestras": 67, "Evento": 45, "Desenvolvimento Interno": 34,
                    "Visita técnica": 28, "Ação social": 23, "Capacitação": 19, "Treinamento": 18
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 3,
                "posicao_regional": 2,
                "percentil_nacional": 84.2,
                "acima_media_regional": true,
                "densidade_temporal": 32.3
            },
            "insights": {
                "caracteristicas_unicas": ["3º lugar nacional", "Forte na região Sul", "Crescimento consistente"],
                "pontos_fortes": ["Tendência crescente", "Equilibrio modal", "Regionalização forte"],
                "recomendacoes": ["Manter crescimento", "Expandir modalidades digitais"]
            }
        },
        "Maranhão": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 269,
                "ranking_nacional": 4,
                "participacao_nacional": 10.16,
                "periodo_ativo": "2025",
                "meses_ativos": 10,
                "media_eventos_mes": 26.9
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 20, "2025-02": 23, "2025-03": 26, "2025-04": 29,
                    "2025-05": 27, "2025-06": 28, "2025-07": 31, "2025-08": 29,
                    "2025-09": 28, "2025-10": 28
                },
                "tendencia": "Crescente",
                "variancia_mensal": 10.89,
                "pico_maximo": {"periodo": "2025-07", "eventos": 31},
                "vale_minimo": {"periodo": "2025-01", "eventos": 20},
                "sazonalidade": "Alta"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 161, "Online": 98, "Híbrido": 10},
                "categorias": {"CREA Jr": 112, "Nucleo": 78, "CREA": 45, "Social": 23, "IES": 11},
                "tipos_atividade": {
                    "Reunião": 76, "Palestras": 54, "Evento": 43, "Desenvolvimento Interno": 28,
                    "Visita técnica": 24, "Ação social": 19, "Capacitação": 15, "Treinamento": 10
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 4,
                "posicao_regional": 1,
                "percentil_nacional": 78.9,
                "acima_media_regional": true,
                "densidade_temporal": 26.9
            },
            "insights": {
                "caracteristicas_unicas": ["Líder do Nordeste", "4º lugar nacional", "Alto crescimento"],
                "pontos_fortes": ["Liderança regional", "Crescimento acelerado", "Diversidade de atividades"],
                "recomendacoes": ["Manter liderança nordestina", "Expandir modalidades online"]
            }
        },
        "Espírito Santo": {
            "info_basica": {
                "regiao": "Sudeste",
                "total_eventos": 216,
                "ranking_nacional": 5,
                "participacao_nacional": 8.16,
                "periodo_ativo": "2025",
                "meses_ativos": 10,
                "media_eventos_mes": 21.6
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 18, "2025-02": 20, "2025-03": 22, "2025-04": 24,
                    "2025-05": 22, "2025-06": 23, "2025-07": 25, "2025-08": 23,
                    "2025-09": 21, "2025-10": 18
                },
                "tendencia": "Estável",
                "variancia_mensal": 5.84,
                "pico_maximo": {"periodo": "2025-07", "eventos": 25},
                "vale_minimo": {"periodo": "2025-01", "eventos": 18},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Online": 130, "Presencial": 76, "Híbrido": 10},
                "categorias": {"IES": 98, "CREA Jr": 65, "CREA": 32, "Nucleo": 15, "Social": 6},
                "tipos_atividade": {
                    "Palestras": 65, "Reunião": 43, "Evento": 32, "Capacitação": 28,
                    "Desenvolvimento Interno": 21, "Treinamento": 15, "Visita técnica": 12
                },
                "modalidade_preferida": "Online",
                "categoria_principal": "IES"
            },
            "analise_comparativa": {
                "posicao_nacional": 5,
                "posicao_regional": 2,
                "percentil_nacional": 73.7,
                "acima_media_regional": false,
                "densidade_temporal": 21.6
            },
            "insights": {
                "caracteristicas_unicas": ["5º lugar nacional", "Pioneiro digital", "Foco acadêmico"],
                "pontos_fortes": ["Inovação digital", "Parcerias acadêmicas", "Consistência"],
                "recomendacoes": ["Equilibrar modalidades", "Expandir atividades presenciais"]
            }
        },
        "Piauí": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 137,
                "ranking_nacional": 6,
                "participacao_nacional": 5.18,
                "periodo_ativo": "2025",
                "meses_ativos": 9,
                "media_eventos_mes": 15.2
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 12, "2025-02": 14, "2025-03": 16, "2025-04": 18,
                    "2025-05": 15, "2025-06": 16, "2025-07": 17, "2025-08": 15,
                    "2025-09": 14
                },
                "tendencia": "Crescente",
                "variancia_mensal": 3.96,
                "pico_maximo": {"periodo": "2025-04", "eventos": 18},
                "vale_minimo": {"periodo": "2025-01", "eventos": 12},
                "sazonalidade": "Média"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 89, "Online": 42, "Híbrido": 6},
                "categorias": {"CREA Jr": 76, "Nucleo": 34, "CREA": 18, "Social": 9},
                "tipos_atividade": {
                    "Reunião": 45, "Palestras": 32, "Evento": 23, "Desenvolvimento Interno": 16,
                    "Visita técnica": 12, "Ação social": 9
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 6,
                "posicao_regional": 2,
                "percentil_nacional": 68.4,
                "acima_media_regional": false,
                "densidade_temporal": 15.2
            },
            "insights": {
                "caracteristicas_unicas": ["6º lugar nacional", "2º no Nordeste", "Forte tradição presencial"],
                "pontos_fortes": ["Crescimento regional", "Atividades consolidadas", "Engajamento local"],
                "recomendacoes": ["Expandir modalidades digitais", "Aumentar frequência"]
            }
        },
        "Pará": {
            "info_basica": {
                "regiao": "Norte",
                "total_eventos": 118,
                "ranking_nacional": 7,
                "participacao_nacional": 4.46,
                "periodo_ativo": "2025",
                "meses_ativos": 8,
                "media_eventos_mes": 14.8
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 10, "2025-02": 12, "2025-03": 14, "2025-04": 16,
                    "2025-05": 15, "2025-06": 16, "2025-07": 17, "2025-08": 18
                },
                "tendencia": "Crescente",
                "variancia_mensal": 7.5,
                "pico_maximo": {"periodo": "2025-08", "eventos": 18},
                "vale_minimo": {"periodo": "2025-01", "eventos": 10},
                "sazonalidade": "Média"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 71, "Online": 41, "Híbrido": 6},
                "categorias": {"CREA Jr": 65, "Nucleo": 28, "CREA": 15, "Social": 10},
                "tipos_atividade": {
                    "Reunião": 34, "Palestras": 28, "Evento": 21, "Desenvolvimento Interno": 15,
                    "Visita técnica": 12, "Ação social": 8
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 7,
                "posicao_regional": 1,
                "percentil_nacional": 63.2,
                "acima_media_regional": true,
                "densidade_temporal": 14.8
            },
            "insights": {
                "caracteristicas_unicas": ["Líder da região Norte", "7º lugar nacional", "Referência amazônica"],
                "pontos_fortes": ["Liderança regional", "Crescimento sustentado", "Diversidade geográfica"],
                "recomendacoes": ["Manter liderança Norte", "Expandir cobertura regional"]
            }
        },
        "Bahia": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 84,
                "ranking_nacional": 8,
                "participacao_nacional": 3.17,
                "periodo_ativo": "2025",
                "meses_ativos": 8,
                "media_eventos_mes": 10.5
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 8, "2025-02": 9, "2025-03": 10, "2025-04": 12,
                    "2025-05": 11, "2025-06": 11, "2025-07": 12, "2025-08": 11
                },
                "tendencia": "Crescente",
                "variancia_mensal": 2.25,
                "pico_maximo": {"periodo": "2025-04", "eventos": 12},
                "vale_minimo": {"periodo": "2025-01", "eventos": 8},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 50, "Online": 30, "Híbrido": 4},
                "categorias": {"CREA Jr": 45, "Nucleo": 23, "CREA": 12, "Social": 4},
                "tipos_atividade": {
                    "Reunião": 23, "Palestras": 18, "Evento": 15, "Desenvolvimento Interno": 12,
                    "Visita técnica": 8, "Ação social": 8
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 8,
                "posicao_regional": 3,
                "percentil_nacional": 57.9,
                "acima_media_regional": false,
                "densidade_temporal": 10.5
            },
            "insights": {
                "caracteristicas_unicas": ["8º lugar nacional", "3º no Nordeste", "Potencial de crescimento"],
                "pontos_fortes": ["Base sólida", "Diversidade regional", "Tradição técnica"],
                "recomendacoes": ["Intensificar atividades", "Explorar potencial estadual"]
            }
        },
        "Amazonas": {
            "info_basica": {
                "regiao": "Norte",
                "total_eventos": 56,
                "ranking_nacional": 9,
                "participacao_nacional": 2.12,
                "periodo_ativo": "2025",
                "meses_ativos": 7,
                "media_eventos_mes": 8.0
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 6, "2025-02": 7, "2025-03": 8, "2025-04": 9,
                    "2025-05": 8, "2025-06": 9, "2025-07": 9
                },
                "tendencia": "Crescente",
                "variancia_mensal": 1.14,
                "pico_maximo": {"periodo": "2025-04", "eventos": 9},
                "vale_minimo": {"periodo": "2025-01", "eventos": 6},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Online": 34, "Presencial": 18, "Híbrido": 4},
                "categorias": {"IES": 28, "CREA Jr": 18, "CREA": 6, "Nucleo": 4},
                "tipos_atividade": {
                    "Palestras": 18, "Reunião": 12, "Capacitação": 10, "Evento": 8,
                    "Treinamento": 5, "Desenvolvimento Interno": 3
                },
                "modalidade_preferida": "Online",
                "categoria_principal": "IES"
            },
            "analise_comparativa": {
                "posicao_nacional": 9,
                "posicao_regional": 2,
                "percentil_nacional": 52.6,
                "acima_media_regional": true,
                "densidade_temporal": 8.0
            },
            "insights": {
                "caracteristicas_unicas": ["9º lugar nacional", "2º no Norte", "Foco digital"],
                "pontos_fortes": ["Adaptação digital", "Cobertura regional", "Inovação tecnológica"],
                "recomendacoes": ["Aumentar frequência", "Equilibrar modalidades"]
            }
        },
        "Goiás": {
            "info_basica": {
                "regiao": "Centro-Oeste",
                "total_eventos": 56,
                "ranking_nacional": 10,
                "participacao_nacional": 2.12,
                "periodo_ativo": "2025",
                "meses_ativos": 8,
                "media_eventos_mes": 7.0
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 5, "2025-02": 6, "2025-03": 7, "2025-04": 8,
                    "2025-05": 7, "2025-06": 8, "2025-07": 8, "2025-08": 7
                },
                "tendencia": "Crescente",
                "variancia_mensal": 1.25,
                "pico_maximo": {"periodo": "2025-04", "eventos": 8},
                "vale_minimo": {"periodo": "2025-01", "eventos": 5},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 34, "Online": 18, "Híbrido": 4},
                "categorias": {"CREA Jr": 32, "Nucleo": 15, "CREA": 6, "Social": 3},
                "tipos_atividade": {
                    "Reunião": 18, "Palestras": 12, "Evento": 10, "Desenvolvimento Interno": 8,
                    "Visita técnica": 5, "Ação social": 3
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 10,
                "posicao_regional": 1,
                "percentil_nacional": 47.4,
                "acima_media_regional": true,
                "densidade_temporal": 7.0
            },
            "insights": {
                "caracteristicas_unicas": ["Líder Centro-Oeste", "10º nacional", "Crescimento regional"],
                "pontos_fortes": ["Liderança regional", "Equilibrio de atividades", "Potencial expansão"],
                "recomendacoes": ["Manter liderança regional", "Expandir alcance"]
            }
        },
        "Rio Grande do Norte": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 56,
                "ranking_nacional": 11,
                "participacao_nacional": 2.12,
                "periodo_ativo": "2025",
                "meses_ativos": 7,
                "media_eventos_mes": 8.0
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 6, "2025-02": 7, "2025-03": 8, "2025-04": 9,
                    "2025-05": 8, "2025-06": 9, "2025-07": 9
                },
                "tendencia": "Crescente",
                "variancia_mensal": 1.14,
                "pico_maximo": {"periodo": "2025-04", "eventos": 9},
                "vale_minimo": {"periodo": "2025-01", "eventos": 6},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 36, "Online": 16, "Híbrido": 4},
                "categorias": {"CREA Jr": 32, "Nucleo": 15, "CREA": 6, "Social": 3},
                "tipos_atividade": {
                    "Reunião": 18, "Palestras": 12, "Evento": 10, "Desenvolvimento Interno": 8,
                    "Visita técnica": 5, "Ação social": 3
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 11,
                "posicao_regional": 4,
                "percentil_nacional": 42.1,
                "acima_media_regional": false,
                "densidade_temporal": 8.0
            },
            "insights": {
                "caracteristicas_unicas": ["11º nacional", "4º no Nordeste", "Crescimento consistente"],
                "pontos_fortes": ["Regularidade", "Engajamento local", "Diversidade"],
                "recomendacoes": ["Aumentar volume", "Expandir modalidades online"]
            }
        },
        "Rondônia": {
            "info_basica": {
                "regiao": "Norte",
                "total_eventos": 37,
                "ranking_nacional": 12,
                "participacao_nacional": 1.40,
                "periodo_ativo": "2025",
                "meses_ativos": 6,
                "media_eventos_mes": 6.2
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 4, "2025-02": 5, "2025-03": 6, "2025-04": 7,
                    "2025-05": 7, "2025-06": 8
                },
                "tendencia": "Crescente",
                "variancia_mensal": 2.14,
                "pico_maximo": {"periodo": "2025-06", "eventos": 8},
                "vale_minimo": {"periodo": "2025-01", "eventos": 4},
                "sazonalidade": "Média"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 23, "Online": 12, "Híbrido": 2},
                "categorias": {"CREA Jr": 22, "Nucleo": 10, "CREA": 3, "Social": 2},
                "tipos_atividade": {
                    "Reunião": 12, "Palestras": 8, "Evento": 6, "Desenvolvimento Interno": 5,
                    "Visita técnica": 3, "Ação social": 3
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 12,
                "posicao_regional": 3,
                "percentil_nacional": 36.8,
                "acima_media_regional": false,
                "densidade_temporal": 6.2
            },
            "insights": {
                "caracteristicas_unicas": ["12º nacional", "3º no Norte", "Foco regional", "Dados unificados"],
                "pontos_fortes": ["Presença consolidada", "Cobertura local", "Crescimento gradual"],
                "recomendacoes": ["Aumentar frequência", "Expandir modalidades"]
            }
        },
        "Mato Grosso": {
            "info_basica": {
                "regiao": "Centro-Oeste",
                "total_eventos": 30,
                "ranking_nacional": 13,
                "participacao_nacional": 1.13,
                "periodo_ativo": "2025",
                "meses_ativos": 6,
                "media_eventos_mes": 5.0
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 3, "2025-02": 4, "2025-03": 5, "2025-04": 6,
                    "2025-05": 6, "2025-06": 6
                },
                "tendencia": "Crescente",
                "variancia_mensal": 1.67,
                "pico_maximo": {"periodo": "2025-04", "eventos": 6},
                "vale_minimo": {"periodo": "2025-01", "eventos": 3},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Online": 18, "Presencial": 10, "Híbrido": 2},
                "categorias": {"IES": 15, "CREA Jr": 8, "CREA": 4, "Nucleo": 3},
                "tipos_atividade": {
                    "Palestras": 12, "Capacitação": 6, "Reunião": 5, "Evento": 4, "Treinamento": 3
                },
                "modalidade_preferida": "Online",
                "categoria_principal": "IES"
            },
            "analise_comparativa": {
                "posicao_nacional": 13,
                "posicao_regional": 2,
                "percentil_nacional": 31.6,
                "acima_media_regional": false,
                "densidade_temporal": 5.0
            },
            "insights": {
                "caracteristicas_unicas": ["13º nacional", "2º Centro-Oeste", "Foco digital"],
                "pontos_fortes": ["Inovação digital", "Adaptabilidade", "Cobertura regional"],
                "recomendacoes": ["Aumentar atividades", "Equilibrar modalidades"]
            }
        },
        "Distrito Federal": {
            "info_basica": {
                "regiao": "Centro-Oeste",
                "total_eventos": 29,
                "ranking_nacional": 14,
                "participacao_nacional": 1.10,
                "periodo_ativo": "2025",
                "meses_ativos": 6,
                "media_eventos_mes": 4.8
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 3, "2025-02": 4, "2025-03": 5, "2025-04": 6,
                    "2025-05": 5, "2025-06": 6
                },
                "tendencia": "Crescente",
                "variancia_mensal": 1.47,
                "pico_maximo": {"periodo": "2025-04", "eventos": 6},
                "vale_minimo": {"periodo": "2025-01", "eventos": 3},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Online": 17, "Presencial": 10, "Híbrido": 2},
                "categorias": {"Institucional": 12, "CREA Jr": 8, "IES": 5, "CREA": 4},
                "tipos_atividade": {
                    "Reunião": 8, "Palestras": 6, "Capacitação": 5, "Evento": 4, 
                    "Desenvolvimento Interno": 3, "Treinamento": 3
                },
                "modalidade_preferida": "Online",
                "categoria_principal": "Institucional"
            },
            "analise_comparativa": {
                "posicao_nacional": 14,
                "posicao_regional": 3,
                "percentil_nacional": 26.3,
                "acima_media_regional": false,
                "densidade_temporal": 4.8
            },
            "insights": {
                "caracteristicas_unicas": ["14º nacional", "3º Centro-Oeste", "Foco institucional"],
                "pontos_fortes": ["Proximidade institucional", "Diversidade", "Potencial crescimento"],
                "recomendacoes": ["Explorar vantagens institucionais", "Aumentar frequência"]
            }
        },
        "Sergipe": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 21,
                "ranking_nacional": 15,
                "participacao_nacional": 0.79,
                "periodo_ativo": "2025",
                "meses_ativos": 5,
                "media_eventos_mes": 4.2
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 3, "2025-02": 4, "2025-03": 5, "2025-04": 5, "2025-05": 4
                },
                "tendencia": "Estável",
                "variancia_mensal": 0.56,
                "pico_maximo": {"periodo": "2025-03", "eventos": 5},
                "vale_minimo": {"periodo": "2025-01", "eventos": 3},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 13, "Online": 7, "Híbrido": 1},
                "categorias": {"CREA Jr": 12, "Nucleo": 6, "CREA": 2, "Social": 1},
                "tipos_atividade": {
                    "Reunião": 8, "Palestras": 5, "Evento": 3, "Desenvolvimento Interno": 2,
                    "Visita técnica": 2, "Ação social": 1
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 15,
                "posicao_regional": 5,
                "percentil_nacional": 21.1,
                "acima_media_regional": false,
                "densidade_temporal": 4.2
            },
            "insights": {
                "caracteristicas_unicas": ["15º nacional", "5º Nordeste", "Crescimento inicial"],
                "pontos_fortes": ["Base estabelecida", "Potencial regional", "Engajamento local"],
                "recomendacoes": ["Intensificar atividades", "Expandir alcance"]
            }
        },
        "Roraima": {
            "info_basica": {
                "regiao": "Norte",
                "total_eventos": 21,
                "ranking_nacional": 16,
                "participacao_nacional": 0.79,
                "periodo_ativo": "2025",
                "meses_ativos": 5,
                "media_eventos_mes": 4.2
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-01": 3, "2025-02": 4, "2025-03": 5, "2025-04": 5, "2025-05": 4
                },
                "tendencia": "Estável",
                "variancia_mensal": 0.56,
                "pico_maximo": {"periodo": "2025-03", "eventos": 5},
                "vale_minimo": {"periodo": "2025-01", "eventos": 3},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 12, "Online": 8, "Híbrido": 1},
                "categorias": {"CREA Jr": 12, "Nucleo": 6, "CREA": 2, "Social": 1},
                "tipos_atividade": {
                    "Reunião": 8, "Palestras": 5, "Evento": 3, "Desenvolvimento Interno": 2,
                    "Visita técnica": 2, "Ação social": 1
                },
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 16,
                "posicao_regional": 4,
                "percentil_nacional": 15.8,
                "acima_media_regional": false,
                "densidade_temporal": 4.2
            },
            "insights": {
                "caracteristicas_unicas": ["16º nacional", "4º Norte", "Crescimento regional"],
                "pontos_fortes": ["Cobertura fronteiriça", "Diversidade cultural", "Potencial expansão"],
                "recomendacoes": ["Aumentar frequência", "Explorar parcerias regionais"]
            }
        },
        "Ceará": {
            "info_basica": {
                "regiao": "Nordeste",
                "total_eventos": 4,
                "ranking_nacional": 17,
                "participacao_nacional": 0.15,
                "periodo_ativo": "2025",
                "meses_ativos": 3,
                "media_eventos_mes": 1.3
            },
            "evolucao_temporal": {
                "evolucao_mensal": {
                    "2025-02": 1, "2025-05": 2, "2025-08": 1
                },
                "tendencia": "Insuficiente",
                "variancia_mensal": 0.33,
                "pico_maximo": {"periodo": "2025-05", "eventos": 2},
                "vale_minimo": {"periodo": "2025-02", "eventos": 1},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Online": 2, "Presencial": 2, "Híbrido": 0},
                "categorias": {"CREA Jr": 3, "IES": 1},
                "tipos_atividade": {
                    "Reunião": 2, "Palestra": 1, "Capacitação": 1
                },
                "modalidade_preferida": "Equilibrado",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 17,
                "posicao_regional": 6,
                "percentil_nacional": 10.5,
                "acima_media_regional": false,
                "densidade_temporal": 1.3
            },
            "insights": {
                "caracteristicas_unicas": ["17º nacional", "Alto potencial inexplorado", "Estado de oportunidade"],
                "pontos_fortes": ["Potencial mercado", "Tradição técnica", "Localização estratégica"],
                "recomendacoes": ["Revisar estratégia estadual", "Intensificar atividades", "Explorar potencial"]
            }
        },
        "Acre": {
            "info_basica": {
                "regiao": "Norte",
                "total_eventos": 2,
                "ranking_nacional": 18,
                "participacao_nacional": 0.08,
                "periodo_ativo": "2025",
                "meses_ativos": 2,
                "media_eventos_mes": 1.0,
                "primeiro_evento": "20/03/2025",
                "ultimo_evento": "19/09/2025"
            },
            "evolucao_temporal": {
                "evolucao_mensal": {"2025-03": 1, "2025-09": 1},
                "tendencia": "Insuficiente",
                "variancia_mensal": 0.0,
                "pico_maximo": {"periodo": "2025-03", "eventos": 1},
                "vale_minimo": {"periodo": "2025-03", "eventos": 1},
                "sazonalidade": "Baixa"
            },
            "distribuicoes": {
                "modalidades": {"Presencial": 2},
                "categorias": {"CREA Jr": 2},
                "tipos_atividade": {"Processo seletivo": 1, "Reunião": 1},
                "modalidade_preferida": "Presencial",
                "categoria_principal": "CREA Jr"
            },
            "analise_comparativa": {
                "posicao_nacional": 18,
                "posicao_regional": 5,
                "percentil_nacional": 5.3,
                "acima_media_regional": false,
                "densidade_temporal": 1.0
            },
            "insights": {
                "caracteristicas_unicas": ["18º nacional", "Início de atividades", "Potencial crescimento"],
                "pontos_fortes": ["Primeiros passos", "Engajamento inicial", "Oportunidade expansão"],
                "recomendacoes": ["Expandir número de atividades", "Revisar planejamento estratégico", "Considerar modalidades digitais"]
            }
        }
    },
    "rankings": {
        "nacional_por_volume": [
            ["Santa Catarina", 821], ["Minas Gerais", 367], ["Paraná", 323], ["Maranhão", 269],
            ["Espírito Santo", 216], ["Piauí", 137], ["Pará", 118], ["Bahia", 84],
            ["Amazonas", 56], ["Goiás", 56], ["Rio Grande do Norte", 56], ["Rondônia", 37],
            ["Mato Grosso", 30], ["Distrito Federal", 29], ["Sergipe", 21], ["Roraima", 21],
            ["Ceará", 4], ["Acre", 2]
        ],
        "por_consistencia": [
            ["Santa Catarina", 127.21], ["Minas Gerais", 31.45], ["Paraná", 15.23], ["Maranhão", 10.89],
            ["Pará", 7.5], ["Espírito Santo", 5.84], ["Piauí", 3.96], ["Bahia", 2.25],
            ["Rondônia", 2.14], ["Mato Grosso", 1.67]
        ]
    },
    "cores_regioes": {
        "Norte": "#28a745",
        "Nordeste": "#ffc107", 
        "Centro-Oeste": "#17a2b8",
        "Sudeste": "#dc3545",
        "Sul": "#6f42c1"
    }
};

// Cores para gráficos Chart.js
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Estado atual da aplicação
let currentState = {
    selectedSection: 'nacional',
    selectedState: null,
    charts: {}
};

// Configuração padrão Chart.js
Chart.defaults.font.family = "'FKGroteskNeue', 'Inter', sans-serif";
Chart.defaults.font.size = 12;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeNavigation();
    initializeNationalCharts();
    initializeStatesGrid();
    initializeSearchAndFilters();
    initializeModalHandlers();
    initializeRankings();
    loadNationalSection();
}

// Navegação principal
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });
}

function switchSection(sectionName) {
    // Atualizar navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    
    // Mostrar seção
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${sectionName}-section`).classList.add('active');
    
    currentState.selectedSection = sectionName;
    
    // Carregar conteúdo específico
    switch(sectionName) {
        case 'nacional':
            loadNationalSection();
            break;
        case 'estados':
            loadStatesSection();
            break;
        case 'regional':
            loadRegionalSection();
            break;
        case 'rankings':
            loadRankingsSection();
            break;
    }
    
    // Scroll para topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Seção Nacional
function loadNationalSection() {
    // KPIs já estão no HTML, criar gráficos
    setTimeout(() => {
        createNationalModalitiesChart();
        createNationalRegionalChart();
        createNationalActivitiesChart();
    }, 100);
}

function initializeNationalCharts() {
    // Inicializar quando necessário
}

function createNationalModalitiesChart() {
    const ctx = document.getElementById('nationalModalitiesChart');
    if (!ctx || currentState.charts.nationalModalities) return;
    
    const data = soea25Data.resumo_nacional.modalidades;
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    currentState.charts.nationalModalities = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: chartColors.slice(0, labels.length),
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
                            const total = values.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw.toLocaleString('pt-BR')} eventos (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createNationalRegionalChart() {
    const ctx = document.getElementById('nationalRegionalChart');
    if (!ctx || currentState.charts.nationalRegional) return;
    
    const data = soea25Data.resumo_nacional.distribuicao_regional;
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    currentState.charts.nationalRegional = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: labels.map(region => soea25Data.cores_regioes[region]),
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
                            const total = values.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw.toLocaleString('pt-BR')} eventos (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createNationalActivitiesChart() {
    const ctx = document.getElementById('nationalActivitiesChart');
    if (!ctx || currentState.charts.nationalActivities) return;
    
    const data = soea25Data.resumo_nacional.top_atividades;
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    currentState.charts.nationalActivities = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Eventos',
                data: values,
                backgroundColor: chartColors[0] + '80',
                borderColor: chartColors[0],
                borderWidth: 2
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
                        label: function(context) {
                            return `${context.raw.toLocaleString('pt-BR')} eventos`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Eventos'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Tipos de Atividade'
                    }
                }
            }
        }
    });
}

// Seção Estados
function loadStatesSection() {
    // Estados já carregados, resetar para seleção
    showStateSelector();
}

function initializeStatesGrid() {
    const statesGrid = document.querySelector('.states-grid');
    if (!statesGrid) return;
    
    const statesHtml = soea25Data.rankings.nacional_por_volume.map(([stateName, events], index) => {
        const stateData = soea25Data.dados_estados[stateName];
        const region = stateData?.info_basica?.regiao || 'Desconhecida';
        const icon = getStateIcon(index + 1);
        const regionColor = soea25Data.cores_regioes[region] || '#666';
        
        return `
            <div class="state-card" data-state="${stateName}" data-region="${region}">
                <div class="state-card-header">
                    <div class="state-icon">${icon}</div>
                    <div class="state-name">${stateName}</div>
                </div>
                <div class="state-stats-grid">
                    <div class="stat-item">
                        <span class="stat-value">${events.toLocaleString('pt-BR')}</span>
                        <span class="stat-label">eventos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">#${index + 1}</span>
                        <span class="stat-label">nacional</span>
                    </div>
                </div>
                <div class="state-region-info" style="border-left: 4px solid ${regionColor};">
                    Região ${region}
                </div>
            </div>
        `;
    }).join('');
    
    statesGrid.innerHTML = statesHtml;
    
    // Adicionar event listeners
    statesGrid.querySelectorAll('.state-card').forEach(card => {
        card.addEventListener('click', function() {
            const stateName = this.getAttribute('data-state');
            selectState(stateName);
        });
    });
}

function getStateIcon(position) {
    const icons = {
        1: '🏆', 2: '🥈', 3: '🥉', 4: '🌟', 5: '⭐',
        6: '📊', 7: '📈', 8: '📋', 9: '🎯', 10: '🔥',
        11: '💎', 12: '🌱', 13: '🚀', 14: '⚡', 15: '🎪',
        16: '🌈', 17: '🎨', 18: '💫'
    };
    return icons[position] || '📊';
}

function initializeSearchAndFilters() {
    const searchInput = document.getElementById('stateSearch');
    const regionFilter = document.getElementById('regionFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterStates();
        });
    }
    
    if (regionFilter) {
        regionFilter.addEventListener('change', function() {
            filterStates();
        });
    }
}

function filterStates() {
    const searchTerm = document.getElementById('stateSearch')?.value.toLowerCase() || '';
    const regionFilter = document.getElementById('regionFilter')?.value || '';
    const stateCards = document.querySelectorAll('.state-card');
    
    stateCards.forEach(card => {
        const stateName = card.getAttribute('data-state').toLowerCase();
        const stateRegion = card.getAttribute('data-region');
        
        const matchesSearch = stateName.includes(searchTerm);
        const matchesRegion = !regionFilter || stateRegion === regionFilter;
        
        if (matchesSearch && matchesRegion) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function selectState(stateName) {
    currentState.selectedState = stateName;
    showStateAnalysis(stateName);
}

function showStateSelector() {
    document.querySelector('.state-selector-wrapper').style.display = 'block';
    document.getElementById('stateAnalysisContainer').style.display = 'none';
    currentState.selectedState = null;
    
    // Limpar gráficos do estado
    ['stateEvolution', 'stateModalities', 'stateCategories'].forEach(chartKey => {
        if (currentState.charts[chartKey]) {
            currentState.charts[chartKey].destroy();
            delete currentState.charts[chartKey];
        }
    });
}

function showStateAnalysis(stateName) {
    document.querySelector('.state-selector-wrapper').style.display = 'none';
    document.getElementById('stateAnalysisContainer').style.display = 'block';
    
    loadStateData(stateName);
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadStateData(stateName) {
    const stateData = soea25Data.dados_estados[stateName];
    if (!stateData) return;
    
    updateStateHeader(stateName, stateData);
    updateStateBasicInfo(stateName, stateData);
    updateStateCharts(stateName, stateData);
    updateStateInsights(stateName, stateData);
    
    // Event listeners para controles
    document.getElementById('backToSelector')?.addEventListener('click', showStateSelector);
    document.getElementById('compareStates')?.addEventListener('click', () => openCompareModal(stateName));
    document.getElementById('exportState')?.addEventListener('click', () => exportStateData(stateName));
}

function updateStateHeader(stateName, stateData) {
    const info = stateData.info_basica;
    
    document.getElementById('selectedStateName').textContent = stateName;
    document.getElementById('selectedStateRegion').textContent = `Região ${info.regiao}`;
    document.getElementById('selectedStateRanking').textContent = `#${info.ranking_nacional}`;
    
    // Aplicar cor da região
    const regionColor = soea25Data.cores_regioes[info.regiao];
    document.getElementById('selectedStateRegion').style.backgroundColor = regionColor + '20';
    document.getElementById('selectedStateRegion').style.color = regionColor;
}

function updateStateBasicInfo(stateName, stateData) {
    const info = stateData.info_basica;
    
    document.getElementById('stateTotal').textContent = info.total_eventos.toLocaleString('pt-BR');
    document.getElementById('stateNationalRank').textContent = `#${info.ranking_nacional}`;
    document.getElementById('stateParticipation').textContent = `${info.participacao_nacional.toFixed(1)}%`;
    document.getElementById('stateAverage').textContent = info.media_eventos_mes.toFixed(1);
    document.getElementById('stateActiveMonths').textContent = `${info.meses_ativos}/10`;
    
    // Ranking regional
    const regionalRanking = stateData.analise_comparativa?.posicao_regional || 1;
    document.getElementById('stateRegionalRank').textContent = `#${regionalRanking}`;
}

function updateStateCharts(stateName, stateData) {
    // Evolução temporal
    if (stateData.evolucao_temporal?.evolucao_mensal) {
        createStateEvolutionChart(stateData.evolucao_temporal);
        updateTemporalInsights(stateData.evolucao_temporal);
    }
    
    // Distribuições
    if (stateData.distribuicoes) {
        createStateModalitiesChart(stateData.distribuicoes.modalidades);
        createStateCategoriesChart(stateData.distribuicoes.categorias);
        updateStateActivities(stateData.distribuicoes.tipos_atividade);
        updateDistributionSummary(stateData.distribuicoes);
    }
}

function createStateEvolutionChart(evolutionData) {
    const ctx = document.getElementById('stateEvolutionChart');
    if (!ctx) return;
    
    // Limpar gráfico anterior
    if (currentState.charts.stateEvolution) {
        currentState.charts.stateEvolution.destroy();
    }
    
    const monthsData = evolutionData.evolucao_mensal;
    const months = Object.keys(monthsData);
    const values = Object.values(monthsData);
    
    const labels = months.map(month => {
        const [year, monthNum] = month.split('-');
        const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
                           'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        return `${monthNames[parseInt(monthNum) - 1]}/${year}`;
    });
    
    currentState.charts.stateEvolution = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Eventos por Mês',
                data: values,
                borderColor: chartColors[0],
                backgroundColor: chartColors[0] + '20',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors[0],
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5
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
                            return `${context.raw} eventos`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Eventos'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Período'
                    }
                }
            }
        }
    });
}

function updateTemporalInsights(evolutionData) {
    // Atualizar indicador de tendência
    const trendIndicator = document.getElementById('trendIndicator');
    const trend = evolutionData.tendencia;
    const trendIcon = trend === 'Crescente' ? '📈' : trend === 'Decrescente' ? '📉' : '📊';
    
    trendIndicator.innerHTML = `
        <span class="trend-icon">${trendIcon}</span>
        <span class="trend-text">${trend}</span>
    `;
    
    // Insights temporais
    const peak = evolutionData.pico_maximo;
    const valley = evolutionData.vale_minimo;
    
    document.getElementById('statePeakMonth').textContent = `${formatPeriod(peak.periodo)}: ${peak.eventos} eventos`;
    document.getElementById('stateValleyMonth').textContent = `${formatPeriod(valley.periodo)}: ${valley.eventos} eventos`;
    document.getElementById('stateVariance').textContent = evolutionData.variancia_mensal.toFixed(2);
    document.getElementById('stateSeason').textContent = evolutionData.sazonalidade;
    
    // Top meses
    const topMonthsList = document.getElementById('topMonthsList');
    if (topMonthsList && evolutionData.meses_mais_ativos) {
        topMonthsList.innerHTML = evolutionData.meses_mais_ativos.map(month => `
            <div class="month-item">
                <span class="month-name">${formatPeriod(month.periodo)}</span>
                <span class="month-events">${month.eventos} eventos</span>
            </div>
        `).join('');
    }
}

function createStateModalitiesChart(modalitiesData) {
    const ctx = document.getElementById('stateModalitiesChart');
    if (!ctx || !modalitiesData) return;
    
    if (currentState.charts.stateModalities) {
        currentState.charts.stateModalities.destroy();
    }
    
    const labels = Object.keys(modalitiesData);
    const values = Object.values(modalitiesData);
    
    currentState.charts.stateModalities = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: chartColors.slice(0, labels.length),
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
                            const total = values.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} eventos (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createStateCategoriesChart(categoriesData) {
    const ctx = document.getElementById('stateCategoriesChart');
    if (!ctx || !categoriesData) return;
    
    if (currentState.charts.stateCategories) {
        currentState.charts.stateCategories.destroy();
    }
    
    const labels = Object.keys(categoriesData);
    const values = Object.values(categoriesData);
    
    currentState.charts.stateCategories = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: chartColors.slice(3, 3 + labels.length),
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
                            const total = values.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} eventos (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function updateStateActivities(activitiesData) {
    const activitiesList = document.getElementById('stateActivitiesList');
    if (!activitiesList || !activitiesData) return;
    
    const sortedActivities = Object.entries(activitiesData)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15);
    
    activitiesList.innerHTML = sortedActivities.map(([name, count]) => `
        <div class="activity-item">
            <span class="activity-name">${name}</span>
            <span class="activity-count">${count}</span>
        </div>
    `).join('');
}

function updateDistributionSummary(distributionsData) {
    const distributionSummary = document.getElementById('distributionSummary');
    if (!distributionSummary) return;
    
    distributionSummary.innerHTML = `
        <span class="preferred-modality">${distributionsData.modalidade_preferida}</span>
        <span class="separator">•</span>
        <span class="main-category">${distributionsData.categoria_principal}</span>
    `;
}

function updateStateInsights(stateName, stateData) {
    const insights = stateData.insights;
    if (!insights) return;
    
    // Características únicas
    const uniqueCharacteristics = document.getElementById('uniqueCharacteristics');
    if (uniqueCharacteristics) {
        uniqueCharacteristics.innerHTML = insights.caracteristicas_unicas.map(char => `<li>${char}</li>`).join('');
    }
    
    // Pontos fortes
    const stateStrengths = document.getElementById('stateStrengths');
    if (stateStrengths) {
        stateStrengths.innerHTML = insights.pontos_fortes.map(strength => `<li>${strength}</li>`).join('');
    }
    
    // Recomendações
    const stateRecommendations = document.getElementById('stateRecommendations');
    if (stateRecommendations) {
        stateRecommendations.innerHTML = insights.recomendacoes.map(rec => `<li>${rec}</li>`).join('');
    }
    
    // Análise comparativa
    updateComparativeAnalysis(stateData);
}

function updateComparativeAnalysis(stateData) {
    const comparative = stateData.analise_comparativa;
    if (!comparative) return;
    
    const nationalPosition = document.getElementById('nationalPosition');
    const nationalPercentile = document.getElementById('nationalPercentile');
    const regionalPosition = document.getElementById('regionalPosition');
    const regionalStatus = document.getElementById('regionalStatus');
    const temporalDensity = document.getElementById('temporalDensity');
    
    if (nationalPosition) {
        nationalPosition.textContent = `#${comparative.posicao_nacional} de 18 estados`;
    }
    
    if (nationalPercentile) {
        nationalPercentile.textContent = `${comparative.percentil_nacional}º percentil`;
    }
    
    if (regionalPosition) {
        regionalPosition.textContent = `#${comparative.posicao_regional} na região ${stateData.info_basica.regiao}`;
    }
    
    if (regionalStatus) {
        regionalStatus.textContent = comparative.acima_media_regional ? 'Acima da média regional' : 'Abaixo da média regional';
    }
    
    if (temporalDensity) {
        temporalDensity.textContent = `${comparative.densidade_temporal} eventos/mês`;
    }
}

// Seção Regional
function loadRegionalSection() {
    // Dados regionais já estão no HTML
    console.log('Seção regional carregada');
}

// Seção Rankings
function loadRankingsSection() {
    loadNationalRanking();
    loadConsistencyRanking();
}

function initializeRankings() {
    // Inicializar quando necessário
}

function loadNationalRanking() {
    const rankingList = document.getElementById('nationalRankingList');
    if (!rankingList) return;
    
    const ranking = soea25Data.rankings.nacional_por_volume;
    
    rankingList.innerHTML = ranking.map(([stateName, events], index) => {
        const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : '';
        const stateData = soea25Data.dados_estados[stateName];
        const region = stateData?.info_basica?.regiao || 'Desconhecida';
        const regionColor = soea25Data.cores_regioes[region];
        
        return `
            <div class="ranking-list-item" style="border-left: 4px solid ${regionColor};">
                <span class="ranking-position">${index + 1}º</span>
                <span class="ranking-state">${stateName}</span>
                <span class="ranking-value">${events.toLocaleString('pt-BR')} eventos</span>
                <span class="ranking-medal">${medal}</span>
            </div>
        `;
    }).join('');
}

function loadConsistencyRanking() {
    const rankingList = document.getElementById('consistencyRankingList');
    if (!rankingList) return;
    
    const ranking = soea25Data.rankings.por_consistencia;
    
    rankingList.innerHTML = ranking.map(([stateName, score], index) => {
        const stateData = soea25Data.dados_estados[stateName];
        const region = stateData?.info_basica?.regiao || 'Desconhecida';
        const regionColor = soea25Data.cores_regioes[region];
        
        return `
            <div class="ranking-list-item" style="border-left: 4px solid ${regionColor};">
                <span class="ranking-position">${index + 1}º</span>
                <span class="ranking-state">${stateName}</span>
                <span class="ranking-value">Variância: ${score}</span>
            </div>
        `;
    }).join('');
}

// Modal e Comparação
function initializeModalHandlers() {
    const compareModal = document.getElementById('compareModal');
    if (!compareModal) return;
    
    // Populizar selects de comparação
    populateCompareSelects();
    
    // Event listeners
    document.getElementById('cancelCompare')?.addEventListener('click', closeCompareModal);
    document.getElementById('executeCompare')?.addEventListener('click', executeComparison);
    document.querySelector('.modal-close')?.addEventListener('click', closeCompareModal);
    document.querySelector('.modal-overlay')?.addEventListener('click', closeCompareModal);
}

function openCompareModal(currentStateName = null) {
    const modal = document.getElementById('compareModal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    
    if (currentStateName) {
        document.getElementById('compareState1').value = currentStateName;
    }
}

function closeCompareModal() {
    const modal = document.getElementById('compareModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function populateCompareSelects() {
    const select1 = document.getElementById('compareState1');
    const select2 = document.getElementById('compareState2');
    
    if (!select1 || !select2) return;
    
    const states = soea25Data.rankings.nacional_por_volume;
    const options = states.map(([stateName, events]) => 
        `<option value="${stateName}">${stateName} (${events} eventos)</option>`
    ).join('');
    
    select1.innerHTML = '<option value="">Selecionar estado...</option>' + options;
    select2.innerHTML = '<option value="">Selecionar estado...</option>' + options;
}

function executeComparison() {
    const state1 = document.getElementById('compareState1').value;
    const state2 = document.getElementById('compareState2').value;
    
    if (!state1 || !state2 || state1 === state2) {
        alert('Por favor, selecione dois estados diferentes para comparar.');
        return;
    }
    
    // Implementar lógica de comparação
    const resultsDiv = document.getElementById('compareResults');
    if (resultsDiv) {
        resultsDiv.innerHTML = generateComparisonResults(state1, state2);
    }
}

function generateComparisonResults(state1Name, state2Name) {
    const data1 = soea25Data.dados_estados[state1Name];
    const data2 = soea25Data.dados_estados[state2Name];
    
    if (!data1 || !data2) return '<p>Dados não disponíveis para comparação.</p>';
    
    return `
        <div class="comparison-results">
            <div class="comparison-header">
                <h4>${state1Name} vs ${state2Name}</h4>
            </div>
            <div class="comparison-grid">
                <div class="comparison-metric">
                    <div class="metric-name">Total de Eventos</div>
                    <div class="metric-values">
                        <span>${data1.info_basica.total_eventos}</span>
                        <span>vs</span>
                        <span>${data2.info_basica.total_eventos}</span>
                    </div>
                </div>
                <div class="comparison-metric">
                    <div class="metric-name">Ranking Nacional</div>
                    <div class="metric-values">
                        <span>#${data1.info_basica.ranking_nacional}</span>
                        <span>vs</span>
                        <span>#${data2.info_basica.ranking_nacional}</span>
                    </div>
                </div>
                <div class="comparison-metric">
                    <div class="metric-name">Participação Nacional</div>
                    <div class="metric-values">
                        <span>${data1.info_basica.participacao_nacional.toFixed(1)}%</span>
                        <span>vs</span>
                        <span>${data2.info_basica.participacao_nacional.toFixed(1)}%</span>
                    </div>
                </div>
                <div class="comparison-metric">
                    <div class="metric-name">Média por Mês</div>
                    <div class="metric-values">
                        <span>${data1.info_basica.media_eventos_mes.toFixed(1)}</span>
                        <span>vs</span>
                        <span>${data2.info_basica.media_eventos_mes.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function exportStateData(stateName) {
    const stateData = soea25Data.dados_estados[stateName];
    if (!stateData) return;
    
    const exportData = {
        estado: stateName,
        data_exportacao: new Date().toLocaleString('pt-BR'),
        dados: stateData
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SOEA25_${stateName.replace(/\s+/g, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Funções utilitárias
function formatPeriod(period) {
    const [year, month] = period.split('-');
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
                       'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${monthNames[parseInt(month) - 1]}/${year}`;
}

// Redimensionamento de gráficos
window.addEventListener('resize', function() {
    Object.values(currentState.charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
});

// Limpeza de gráficos ao trocar de seção
function cleanupCharts() {
    Object.keys(currentState.charts).forEach(key => {
        if (currentState.charts[key]) {
            currentState.charts[key].destroy();
            delete currentState.charts[key];
        }
    });
}