const tutorialData = [
  // =================================================================
  // 1. SOFTWARE LAB - PHOTOSHOP (PS)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Iniciante", 
    "title": "Curso Photoshop 2024 (Aula 1)", 
    "desc": "Brainstorm Tutoriais: A base sólida para começares.", 
    "id": "I5k5Qj_VaaE", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Técnica", 
    "title": "Recorte de Cabelos Perfeito", 
    "desc": "Héber Simeoni: Como recortar fundos difíceis.", 
    "id": "Fj1x5WkQJtI", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Teoria", 
    "title": "RGB vs CMYK: O Guia", 
    "desc": "Design de Conversão: Não erres na impressão.", 
    "id": "O33uLdOpfhk", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Essencial", 
    "title": "Dominar as CAMADAS", 
    "desc": "Entende como funcionam os Layers de vez.", 
    "id": "LgS8T7qG9wE", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "doc", "tag": "Recursos", 
    "title": "Atalhos de Teclado (PDF)", 
    "desc": "Lista oficial da Adobe para imprimir.", 
    "id": "https://helpx.adobe.com/br/photoshop/using/default-keyboard-shortcuts.html", 
    "thumb": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 1. SOFTWARE LAB - PHOTOPEA (PP)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Intro", 
    "title": "Photopea: Guia Completo", 
    "desc": "Eber: Como usar o 'Photoshop Grátis' no browser.", 
    "id": "uzIhFgp3ezw", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Prática", 
    "title": "Criar Artes para Social Media", 
    "desc": "Do zero até à exportação final no Photopea.", 
    "id": "EOuiYhvAY7U", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Ferramentas", 
    "title": "Remover Fundos Rápido", 
    "desc": "Técnicas com Varinha e Laço Magnético.", 
    "id": "J2gA3zO6cTQ", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "doc", "tag": "Manual", 
    "title": "Documentação Oficial", 
    "desc": "O manual escrito de todas as ferramentas.", 
    "id": "https://www.photopea.com/learn/", 
    "thumb": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 1. SOFTWARE LAB - CANVA (CV)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Masterclass", 
    "title": "Curso de Canva Grátis", 
    "desc": "Feed do Usuário: Domina o Canva do zero ao pro.", 
    "id": "WyGofNDsQzQ", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Truques", 
    "title": "10 Segredos do Canva", 
    "desc": "Funcionalidades e atalhos escondidos.", 
    "id": "tDq7qHhC_n4", "thumb": "" 
  },
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Design", 
    "title": "Princípios de Design", 
    "desc": "Como não parecer amador usando templates.", 
    "id": "7X8XJ6_Xj_k", "thumb": "" 
  },

  // =================================================================
  // 2. MARKETING TOOLKIT (Docs & Tools)
  // =================================================================
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Planeamento", 
    "title": "Calendário Editorial", 
    "desc": "Template HubSpot para gerir redes sociais.", 
    "id": "https://offers.hubspot.com/social-media-content-calendar", 
    "thumb": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Cores", 
    "title": "Adobe Color", 
    "desc": "Cria harmonias de cores e paletas perfeitas.", 
    "id": "https://color.adobe.com/pt/create/color-wheel", 
    "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Imagens", 
    "title": "Unsplash: Fotos Grátis", 
    "desc": "Banco de imagens profissional royalty-free.", 
    "id": "https://unsplash.com/", 
    "thumb": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Vídeo Stock", 
    "title": "Pexels Vídeos", 
    "desc": "Vídeos gratuitos para usar nos teus Reels/TikToks.", 
    "id": "https://www.pexels.com/pt-br/videos/", 
    "thumb": "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Fontes", 
    "title": "DaFont (Tipografia)", 
    "desc": "Milhares de fontes grátis para instalar.", 
    "id": "https://www.dafont.com/pt/", 
    "thumb": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Ícones", 
    "title": "Flaticon", 
    "desc": "O maior banco de ícones e stickers gratuitos.", 
    "id": "https://www.flaticon.com/", 
    "thumb": "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "IA", 
    "title": "Remove.bg", 
    "desc": "Remove o fundo de qualquer foto automaticamente.", 
    "id": "https://www.remove.bg/pt-br", 
    "thumb": "https://images.unsplash.com/photo-1633535803264-b52664720619?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Apresentações", 
    "title": "Slidesgo", 
    "desc": "Templates criativos para PowerPoint.", 
    "id": "https://slidesgo.com/", 
    "thumb": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 3. MINDSET & CULTURA
  // =================================================================
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Criatividade", 
    "title": "Roube como um Artista", 
    "desc": "Resumo animado essencial do livro de Austin Kleon.", 
    "id": "oww7oB9rjgw", "thumb": "" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Psicologia", 
    "title": "Psicologia das Cores", 
    "desc": "Como as cores manipulam o que sentes.", 
    "id": "QjPpJ1_3F1o", "thumb": "" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Carreira", 
    "title": "O Gosto Criativo (Ira Glass)", 
    "desc": "O vídeo mais importante para não desistires.", 
    "id": "PbC4gqZGPSY", "thumb": "" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Tipografia", 
    "title": "Erros de Tipografia a Evitar", 
    "desc": "Não faças design amador: aprende as regras.", 
    "id": "sByzHoiYFX0", "thumb": "" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Futuro", 
    "title": "Como a IA muda o Design", 
    "desc": "O que precisas de saber para não ficar para trás.", 
    "id": "R9M4c_h_M0o", "thumb": "" 
  }
];
