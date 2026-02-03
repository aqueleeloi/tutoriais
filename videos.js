const tutorialData = [
  // --- SOFTWARE LAB: PHOTOSHOP ---
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Iniciante", "title": "Curso Básico (Aula 1)", "desc": "A introdução essencial ao software.", "id": "U6qC0w5k3ec", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Técnica", "title": "Recorte de Cabelos", "desc": "Como usar máscaras avançadas.", "id": "jmsjrohHMVg", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Criação", "title": "RGB vs CMYK", "desc": "O guia de impressão vs ecrã.", "id": "O33uLdOpfhk", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "video", "tag": "Essencial", "title": "Dominar Camadas", "desc": "Organização profissional de layers.", "id": "LgS8T7qG9wE", "thumb": "" },
  { "section": "SOFTWARE", "program": "ps", "type": "doc", "tag": "Recursos", "title": "Atalhos de Teclado (PDF)", "desc": "Lista oficial da Adobe.", "id": "https://helpx.adobe.com/br/photoshop/using/default-keyboard-shortcuts.html", "thumb": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&q=80" },

  // --- SOFTWARE LAB: PHOTOPEA ---
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Intro", "title": "Photopea: Guia Completo", "desc": "Alternativa grátis ao Photoshop.", "id": "uzIhFgp3ezw", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Prática", "title": "Criar Posts Instagram", "desc": "Do zero até à exportação.", "id": "EOuiYhvAY7U", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "video", "tag": "Ferramentas", "title": "Remover Fundos", "desc": "Técnicas rápidas no browser.", "id": "J2gA3zO6cTQ", "thumb": "" },
  { "section": "SOFTWARE", "program": "pp", "type": "doc", "tag": "Manual", "title": "Manual Oficial", "desc": "Documentação escrita completa.", "id": "https://www.photopea.com/learn/", "thumb": "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&q=80" },

  // --- SOFTWARE LAB: CANVA ---
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Masterclass", "title": "Curso Canva Grátis", "desc": "Do zero ao profissional.", "id": "WyGofNDsQzQ", "thumb": "" },
  { "section": "SOFTWARE", "program": "cv", "type": "video", "tag": "Truques", "title": "10 Segredos do Canva", "desc": "Funcionalidades escondidas.", "id": "tDq7qHhC_n4", "thumb": "" },

  // --- MARKETING TOOLKIT ---
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Planeamento", "title": "Calendário Editorial", "desc": "Template Excel para Social Media.", "id": "https://offers.hubspot.com/social-media-content-calendar", "thumb": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Cores", "title": "Adobe Color", "desc": "Cria paletas cromáticas perfeitas.", "id": "https://color.adobe.com/pt/create/color-wheel", "thumb": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Imagens", "title": "Unsplash", "desc": "Banco de imagens gratuito.", "id": "https://unsplash.com/", "thumb": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Vídeo", "title": "Pexels Vídeos", "desc": "Vídeos stock para Reels/TikTok.", "id": "https://www.pexels.com/pt-br/videos/", "thumb": "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Fontes", "title": "DaFont", "desc": "Milhares de fontes grátis.", "id": "https://www.dafont.com/pt/", "thumb": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Ícones", "title": "Flaticon", "desc": "Ícones e stickers vetoriais.", "id": "https://www.flaticon.com/", "thumb": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80" },
  { "section": "MARKETING", "program": "mk", "type": "doc", "tag": "Apresentação", "title": "Slidesgo", "desc": "Templates PPT criativos.", "id": "https://slidesgo.com/", "thumb": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80" },

  // --- MINDSET & CULTURA ---
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Criatividade", "title": "Roube como um Artista", "desc": "Resumo do livro de Austin Kleon.", "id": "oww7oB9rjgw", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Psicologia", "title": "Psicologia das Cores", "desc": "Como as cores afetam emoções.", "id": "QjPpJ1_3F1o", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Carreira", "title": "O Gosto Criativo", "desc": "O vídeo essencial de Ira Glass.", "id": "PbC4gqZGPSY", "thumb": "" },
  { "section": "INSPIRATION", "program": "in", "type": "video", "tag": "Tipografia", "title": "Erros de Tipografia", "desc": "Não faças design amador.", "id": "sByzHoiYFX0", "thumb": "" }
];
