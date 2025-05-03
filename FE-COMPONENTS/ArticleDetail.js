let articles = [];

async function loadArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  if (!articleId) {
    window.location.href = 'artigos.html';
    return;
  }

  try {
    const response = await fetch('../Artigos/data/artigos.json');
    articles = await response.json();
    const article = articles.find(a => a.id == articleId);

    if (!article) {
      window.location.href = 'artigos.html';
      return;
    }

    displayArticle(article);
  } catch (error) {
    console.error('Erro ao carregar artigo:', error);
    document.getElementById('articleDetail').innerHTML = `
      <div class="error-message">
        Não foi possível carregar o artigo no momento.
      </div>
    `;
  }
}


function displayArticle(article) {
  const imageContainer = document.getElementById('articleImageContainer');
  imageContainer.innerHTML = `
    <img src="${article.image}" alt="${article.title}" class="article-main-image">
  `;

  const container = document.getElementById('articleDetail');
  container.innerHTML = `
    <a href="../Artigos/index.html" class="back-button">
      <i class="fas fa-arrow-left"></i> Voltar
    </a>

    <div class="article-header">
      <span class="article-category">${article.category}</span>
      <h1 class="article-title">${article.title}</h1>
      <div class="article-meta">
        <span>${article.author}</span>
        <span>•</span>
        <span>${article.readingTime}</span>
      </div>
    </div>

    <div class="article-main-content">
      ${article.content}
    </div>
  `;

  const otherArticles = articles.filter(a => a.id != article.id);
  const relatedContainer = document.getElementById('relatedArticles');
  relatedContainer.innerHTML = '<h3>Outros artigos</h3>' + otherArticles.map(a => `
    <div class="related-article-card" onclick="window.location.href='artigo.html?id=${a.id}'">
      <img src="${a.image}" alt="${a.title}">
      <h4>${a.title}</h4>
    </div>
  `).join('');
  
}

document.addEventListener('DOMContentLoaded', loadArticle);

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.cases-carousel');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    
    if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});