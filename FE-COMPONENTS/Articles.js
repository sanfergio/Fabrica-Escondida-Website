document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
});

async function loadArticles() {
    try {
        const response = await fetch('../Artigos/data/artigos.json');
        
        if (!response.ok) {
            throw new Error('Falha ao carregar artigos');
        }
        
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error('Erro:', error);
        showError();
    }
}

function displayArticles(articles) {
    const container = document.getElementById('articlesContainer');
    
    if (!container) {
        console.error('Elemento articlesContainer não encontrado');
        return;
    }

    if (!articles || articles.length === 0) {
        container.innerHTML = '<p class="no-articles">Nenhum artigo disponível no momento.</p>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <article class="news-article">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-summary">${article.summary}</p>
                <div class="article-footer">
                    <div class="article-meta">
                        <span>${article.author}</span>
                        <span>•</span>
                        <span>${article.readingTime}</span>
                    </div>
                    <a href="artigo.html?id=${article.id}" class="read-more">
                        Ler artigo <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}
