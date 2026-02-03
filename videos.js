const tutorialData = [
  // =================================================================
  // 1. SOFTWARE LAB - PHOTOSHOP (PS)
  // =================================================================
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Configuração", "title": "Criar Documento & Cor", "desc": "Tamanhos, Resolução (DPI) e RGB vs CMYK.", "id": "O33uLdOpfhk", "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Interface", "title": "Ferramentas Básicas", "desc": "Visão geral das ferramentas essenciais.", "id": "I5k5Qj_VaaE", "thumb": "https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=800" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Recorte", "title": "Recorte de Imagem Básico", "desc": "Ferramentas de seleção e laço.", "id": "Fj1x5WkQJtI", "thumb": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Máscaras", "title": "Recorte com Máscaras", "desc": "O segredo para recortes perfeitos.", "id": "jmsjrohHMVg", "thumb": "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800" },

  // =================================================================
  // 1. SOFTWARE LAB - PHOTOPEA (PP) - EXATAMENTE COMO PEDISTE
  // =================================================================
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Configuração", "title": "Criar Documento (Tamanhos e Cores)", "desc": "Aprende a configurar o teu projeto no Photopea.", "id": "uzIhFgp3ezw", "thumb": "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=800" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Ferramentas", "title": "Ferramentas Básicas", "desc": "Domina a barra lateral e os atalhos.", "id": "LGeuJgCqFp8", "thumb": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Recorte", "title": "Recorte de Imagem Básico", "desc": "Remover fundos de forma rápida e simples.", "id": "J2gA3zO6cTQ", "thumb": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Máscaras", "title": "Recorte com Máscaras", "desc": "Edição avançada e não destrutiva.", "id": "2y7WqZqNqQA", "thumb": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" },

  // =================================================================
  // 1. SOFTWARE LAB - CANVA (CV) - SELEÇÃO ESTRATÉGICA
  // =================================================================
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Produtividade", "title": "10 Segredos do Canva", "desc": "Atalhos e funções que poupam horas de trabalho.", "id": "tDq7qHhC_n4", "thumb": "https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=800" },
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Design", "title": "Design Profissional no Canva", "desc": "Como fugir do aspeto 'template' e criar artes únicas.", "id": "7X8XJ6_Xj_k", "thumb": "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800" },
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Animação", "title": "Artes Animadas para Reels", "desc": "Cria vídeos dinâmicos sem usar softwares complexos.", "id": "E3uN96FqFmI", "thumb": "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=800" },

  // =================================================================
  // 2. MARKETING TOOLKIT - CONTEÚDO ESSENCIAL
  // =================================================================
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Paleta", "title": "Adobe Color Wheel", "desc": "A ferramenta definitiva para criar harmonias cromáticas.", "id": "https://color.adobe.com/", "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Imagens", "title": "Unsplash Premium", "desc": "O melhor banco de imagens profissionais gratuito.", "id": "https://unsplash.com/", "thumb": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Fontes", "title": "Google Fonts Pro", "desc": "Biblioteca oficial de tipografias modernas para web.", "id": "https://fonts.google.com/", "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Ícones", "title": "Flaticon Library", "desc": "Milhões de ícones vetoriais para os teus designs.", "id": "https://www.flaticon.com/", "thumb": "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=800" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Estratégia", "title": "Calendário Editorial", "desc": "Template para organizar as tuas redes sociais.", "id": "https://offers.hubspot.com/social-media-content-calendar", "thumb": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800" },

  // =================================================================
  // 3. MINDSET & CULTURA - CONTEÚDO DE ALTO VALOR
  // =================================================================
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Processo", "title": "Roube como um Artista", "desc": "Aprende a transformar referências em originalidade.", "id": "oww7oB9rjgw", "thumb": "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Psicologia", "title": "Psicologia das Cores", "desc": "Como as marcas manipulam o que sentes através da cor.", "id": "QjPpJ1_3F1o", "thumb": "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=800" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Motivação", "title": "The Creative Taste (Ira Glass)", "desc": "Porque é que o teu trabalho ainda não é bom o suficiente.", "id": "PbC4gqZGPSY", "thumb": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Futuro", "title": "Design e Inteligência Artificial", "desc": "Como a IA está a revolucionar a nossa profissão.", "id": "R9M4c_h_M0o", "thumb": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" }
];
