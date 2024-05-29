document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '5990c7d58c97467299609d254ce5a1ed';
    const newsList = document.getElementById('news-list');

    //Función para obtener noticias desde la API
    async function getNews() {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-04-28&sortBy=publishedAt&apiKey=${apiKey}`);
            const data = await response.json();
            return data.articles;
        } catch (error) {
            console.error('Error al obtener noticias:', error);
            return [];
        }
    }

    //Función para mostrar noticias en la interfaz
    async function renderNews() {
        try {
            const articles = await getNews();
            newsList.innerHTML = '';
            if (articles && articles.length > 0) {
                articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('article');
                    articleElement.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Leer más</a>
                    `;
                    newsList.appendChild(articleElement);
                });
            } else {
                newsList.innerHTML = '<p>No se encontraron noticias.</p>';
            }
        } catch (error) {
            console.error('Error al renderizar noticias: ', error);
            newsList.innerHTML = '<p>Ocurrió un error al cargar las noticias.</p>';
        }
    }    

    //Mostrar noticias al cargar la página
    renderNews();
});

//27L19PSDZ4N1AEKF
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}