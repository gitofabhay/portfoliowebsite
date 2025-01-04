function toggleArticle(articleNumber) {
    const article = document.getElementById(`article-${articleNumber}`);
    article.classList.toggle('expanded');
}
