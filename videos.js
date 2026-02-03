const tutorialData = [
  // =================================================================
  // 1. SOFTWARE LAB - PHOTOSHOP (PS)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "1. Configuração", 
    "title": "Criar Documento & Cor", 
    "desc": "Tamanhos, Resolução (DPI) e RGB vs CMYK.", 
    "id": "O33uLdOpfhk", 
    "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "2. Interface", 
    "title": "Ferramentas Básicas", 
    "desc": "Interface, Layers e Ferramentas essenciais.", 
    "id": "I5k5Qj_VaaE", 
    "thumb": "https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "3. Recorte", 
    "title": "Recorte de Imagem Básico", 
    "desc": "Ferramentas de seleção rápida e laço.", 
    "id": "Fj1x5WkQJtI", 
    "thumb": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "4. Avançado", 
    "title": "Recorte com Máscaras", 
    "desc": "Como recortar cabelos e fundos complexos.", 
    "id": "jmsjrohHMVg", 
    "thumb": "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "ps", "type": "doc", "tag": "Extra", 
    "title": "Atalhos de Teclado (PDF)", 
    "desc": "Lista oficial da Adobe para consulta rápida.", 
    "id": "https://helpx.adobe.com/br/photoshop/using/default-keyboard-shortcuts.html", 
    "thumb": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 1. SOFTWARE LAB - PHOTOPEA (PP)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "1. Configuração", 
    "title": "Criar Novo Projeto", 
    "desc": "Como iniciar arquivos no navegador (Formatos).", 
    "id": "uzIhFgp3ezw", 
    "thumb": "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "2. Interface", 
    "title": "Ferramentas Essenciais", 
    "desc": "Visão geral da barra de ferramentas lateral.", 
    "id": "LGeuJgCqFp8", 
    "thumb": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "3. Recorte", 
    "title": "Remover Fundos Rápido", 
    "desc": "Usar a Varinha Mágica e Seleção Rápida.", 
    "id": "J2gA3zO6cTQ", 
    "thumb": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "4. Avançado", 
    "title": "Máscaras de Camada", 
    "desc": "Edição não destrutiva no Photopea.", 
    "id": "2y7WqZqNqQA", 
    "thumb": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 1. SOFTWARE LAB - CANVA (CV)
  // =================================================================
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Masterclass", 
    "title": "Curso de Canva Grátis", 
    "desc": "Guia completo do zero ao profissional.", 
    "id": "WyGofNDsQzQ", 
    "thumb": "https://images.unsplash.com/photo-1612815154858-60aa4c465a7e?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Truques", 
    "title": "10 Segredos do Canva", 
    "desc": "Funcionalidades mágicas escondidas.", 
    "id": "tDq7qHhC_n4", 
    "thumb": "https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Design", 
    "title": "Princípios de Design", 
    "desc": "Como não parecer amador usando templates.", 
    "id": "7X8XJ6_Xj_k", 
    "thumb": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 2. MARKETING TOOLKIT
  // =================================================================
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Planeamento", 
    "title": "Calendário Editorial", 
    "desc": "Template Excel para gerir redes sociais.", 
    "id": "https://offers.hubspot.com/social-media-content-calendar", 
    "thumb": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Cores", 
    "title": "Adobe Color", 
    "desc": "Cria paletas cromáticas perfeitas.", 
    "id": "https://color.adobe.com/pt/create/color-wheel", 
    "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Imagens", 
    "title": "Unsplash: Fotos Grátis", 
    "desc": "Banco de imagens profissional.", 
    "id": "https://unsplash.com/", 
    "thumb": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Vídeo", 
    "title": "Pexels Vídeos", 
    "desc": "Vídeos stock para Reels/TikTok.", 
    "id": "https://www.pexels.com/pt-br/videos/", 
    "thumb": "https://images.unsplash.com/photo-1492724441997-cd7a055cce7d?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Fontes", 
    "title": "DaFont", 
    "desc": "Download de fontes gratuitas.", 
    "id": "https://www.dafont.com/pt/", 
    "thumb": "https://images.unsplash.com/photo-1560416313-fd934c152427?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Ícones", 
    "title": "Flaticon", 
    "desc": "Banco de ícones e stickers.", 
    "id": "https://www.flaticon.com/", 
    "thumb": "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "IA", 
    "title": "Remove.bg", 
    "desc": "Remove fundo de fotos com IA.", 
    "id": "https://www.remove.bg/pt-br", 
    "thumb": "https://images.unsplash.com/photo-1633535803264-b52664720619?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "MARKETING", "program": "mk", "type": "doc", "tag": "PPT", 
    "title": "Slidesgo", 
    "desc": "Templates criativos para apresentações.", 
    "id": "https://slidesgo.com/", 
    "thumb": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop" 
  },

  // =================================================================
  // 3. MINDSET & CULTURA
  // =================================================================
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Criatividade", 
    "title": "Roube como um Artista", 
    "desc": "Resumo do livro de Austin Kleon.", 
    "id": "oww7oB9rjgw", 
    "thumb": "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Psicologia", 
    "title": "Psicologia das Cores", 
    "desc": "Como as cores afetam emoções.", 
    "id": "QjPpJ1_3F1o", 
    "thumb": "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Carreira", 
    "title": "O Gosto Criativo", 
    "desc": "Mensagem essencial para criativos.", 
    "id": "PbC4gqZGPSY", 
    "thumb": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Tipografia", 
    "title": "Erros de Tipografia", 
    "desc": "Não faças design amador.", 
    "id": "sByzHoiYFX0", 
    "thumb": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
  }
];
