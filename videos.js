const tutorialData = [
  // =================================================================
  // 1. SOFTWARE LAB
  // =================================================================
  
  // --- PHOTOSHOP (PS) ---
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Iniciante", "title": "Curso Básico Completo (Aula 1)", "desc": "Héber Simeoni: A introdução obrigatória.", "id": "U6qC0w5k3ec", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Técnica", "title": "Recorte de Cabelos Perfeito", "desc": "Brainstorm: Dominar máscaras e canais.", "id": "jmsjrohHMVg", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Teoria", "title": "RGB vs CMYK: O Guia", "desc": "Nunca mais erres na impressão.", "id": "O33uLdOpfhk", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Essencial", "title": "Dominar as CAMADAS", "desc": "Como organizar o projeto profissionalmente.", "id": "LgS8T7qG9wE", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "doc", "tag": "Recursos", "title": "Atalhos de Teclado (PDF)", "desc": "Lista oficial da Adobe para imprimir.", "id": "https://helpx.adobe.com/br/photoshop/using/default-keyboard-shortcuts.html", "thumb": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80" },

  // --- PHOTOPEA (PP) ---
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Intro", "title": "Guia Completo do Photopea", "desc": "Como usar o 'Photoshop Grátis'.", "id": "uzIhFgp3ezw", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Prática", "title": "Criar Posts para Social Media", "desc": "Do zero até à exportação final.", "id": "EOuiYhvAY7U", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Ferramentas", "title": "Remover Fundos Rápido", "desc": "Técnicas com Varinha e Laço.", "id": "J2gA3zO6cTQ", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "doc", "tag": "Manual", "title": "Documentação Oficial", "desc": "O manual escrito de todas as ferramentas.", "id": "https://www.photopea.com/learn/", "thumb": "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80" },

  // --- CANVA (CV) ---
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Masterclass", "title": "Curso de Canva Grátis", "desc": "Feed do Usuário: Do zero ao pro.", "id": "WyGofNDsQzQ", "thumb": "" },
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Truques", "title": "10 Segredos do Canva", "desc": "Atalhos e efeitos escondidos.", "id": "tDq7qHhC_n4", "thumb": "" },
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Design", "title": "Princípios de Design", "desc": "Como não parecer amador usando templates.", "id": "7X8XJ6_Xj_k", "thumb": "" },

  // =================================================================
  // 2. MARKETING TOOLKIT
  // =================================================================
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Planeamento", "title": "Calendário Editorial (HubSpot)", "desc": "Template Excel para gerir redes sociais.", "id": "https://offers.hubspot.com/social-media-content-calendar", "thumb": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Cores", "title": "Adobe Color (Círculo Cromático)", "desc": "Ferramenta para criar paletas perfeitas.", "id": "https://color.adobe.com/pt/create/color-wheel", "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Imagens", "title": "Unsplash: Fotos Grátis", "desc": "Banco de imagens profissional royalty-free.", "id": "https://unsplash.com/", "thumb": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Vídeo", "title": "Pexels Vídeos", "desc": "Vídeos stock para Reels/TikToks.", "id": "https://www.pexels.com/pt-br/videos/", "thumb": "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Fontes", "title": "DaFont (Tipografia)", "desc": "Milhares de fontes grátis para instalar.", "id": "https://www.dafont.com/pt/", "thumb": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Ícones", "title": "Flaticon", "desc": "O maior banco de ícones e stickers.", "id": "https://www.flaticon.com/", "thumb": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "IA", "title": "Remove.bg", "desc": "Remove fundo de fotos automaticamente.", "id": "https://www.remove.bg/pt-br", "thumb": "https://images.unsplash.com/photo-1633535803264-b52664720619?w=600&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Apresentação", "title": "Slidesgo", "desc": "Templates criativos para PowerPoint.", "id": "https://slidesgo.com/", "thumb": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" },

  // =================================================================
  // 3. MINDSET & CULTURA
  // =================================================================
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Criatividade", "title": "Roube como um Artista", "desc": "Resumo animado do livro de Austin Kleon.", "id": "oww7oB9rjgw", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Psicologia", "title": "Psicologia das Cores", "desc": "Como as cores manipulam sentimentos.", "id": "QjPpJ1_3F1o", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Carreira", "title": "O Gosto Criativo (Ira Glass)", "desc": "O vídeo essencial para não desistires.", "id": "PbC4gqZGPSY", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Tipografia", "title": "Erros de Tipografia", "desc": "Regras para não fazeres design amador.", "id": "sByzHoiYFX0", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Futuro", "title": "Como a IA muda o Design", "desc": "O que precisas de saber hoje.", "id": "R9M4c_h_M0o", "thumb": "" }
];
