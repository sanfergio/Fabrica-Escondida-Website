async function loadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        window.location.href = 'artigos.html';
        return;
    }
    
    try {
        const response = await fetch('../Artigos/data/artigos.json');
        const articles = await response.json();
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
    const container = document.getElementById('articleDetail');
    
    container.innerHTML = `
    <div class="article-image-container">
        <img src="${article.image}" alt="${article.title}" class="article-main-image">
    </div>

    <div class="content-container">
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
    </div>
    `;
    
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease';
        container.style.opacity = 1;
    }, 100);
}

document.addEventListener('DOMContentLoaded', loadArticle);
