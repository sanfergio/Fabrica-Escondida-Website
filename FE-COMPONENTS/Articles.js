async function loadArticles() {
    try {
        const response = await fetch('data/artigos.json');  
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error('Erro ao carregar artigos:', error);
    }
}

function displayArticles(articles) {
    const container = document.getElementById('articlesContainer');
    
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-summary">${article.summary}</p>
                <button class="read-more" onclick="openModal(${article.id})">Leia mais</button>
                <div class="article-meta">
                    <span>${article.author}</span>
                    <span>${article.readingTime}</span>
                </div>
            </div>
        `;
        container.appendChild(articleCard);
    });
}

function openModal(articleId) {
    fetch('data/artigos.json')  
        .then(response => response.json())
        .then(articles => {
            const article = articles.find(a => a.id === articleId);
            if (article) {
                const modal = document.getElementById('articleModal');
                document.getElementById('modalImage').src = article.image;
                document.getElementById('modalImage').alt = article.title;
                document.getElementById('modalContent').innerHTML = `
                    <span class="article-category">${article.category}</span>
                    <h2>${article.title}</h2>
                    <div class="article-meta">
                        <span>${article.author}</span>
                        <span>${article.readingTime}</span>
                    </div>
                    ${article.content}
                `;
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        })
        .catch(error => console.error('Erro ao carregar artigo:', error));
}

function closeModal() {
    document.getElementById('articleModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', loadArticles);