const api = "YOUR_API_KEY_HERE"; // Replace with your own API key from https://newsapi.org/

export const fetchHeadlines = async () => {
    const cachedHeadlines = localStorage.getItem("headlines");

    if (cachedHeadlines === null) {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`;
        const response = await fetch(url);
        const data = await response.json();
        data.articles = data.articles.filter(article => article.urlToImage && article.title && article.source && article.publishedAt && article.description);
        localStorage.setItem("headlines", JSON.stringify(data.articles));
        return data.articles;
      } else {
        return JSON.parse(cachedHeadlines);
      }
};
/*
  The function fetchHeadlines fetches the top headlines from the News API. It first checks if the headlines are already cached in the local storage. If not, it fetches the headlines from the API and stores them in the local storage. If the headlines are already cached, it returns the cached headlines.
  The response from the API is filtered to remove articles without an image, title, source, published date, and description. This is done to ensure that only valid articles are stored in the local storage.
*/

export const fetchCategory = async (category) => {
    const cachedCategory = localStorage.getItem(category);

    if (cachedCategory === null) {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`;
        const response = await fetch(url);
        const data = await response.json();
        data.articles = data.articles.filter(article => article.urlToImage && article.title && article.source && article.publishedAt && article.description);
        localStorage.setItem(category, JSON.stringify(data.articles));
        return data.articles;
      } else {
        return JSON.parse(cachedCategory);
      }
};

/*
  The function fetchCategory fetches the top headlines for a specific category from the News API. It first checks if the category is already cached in the local storage. If not, it fetches the headlines from the API and stores them in the local storage. If the category is already cached, it returns the cached headlines.
  The response from the API is filtered to remove articles without an image, title, source, published date, and description. This is done to ensure that only valid articles are stored in the local storage.
*/

export const fetchSearch = async (search) => {
    const cachedSearch = localStorage.getItem(search);

    if (cachedSearch === null) {
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${api}`;
        const response = await fetch(url);
        const data = await response.json();
        data.articles = data.articles.filter(article => article.urlToImage && article.title && article.source && article.publishedAt && article.description);
        localStorage.setItem(search, JSON.stringify(data.articles));
        return data.articles;
      } else {
        return JSON.parse(cachedSearch);
      }
}

/*
  The function fetchSearch fetches the top headlines for a specific search query from the News API. It first checks if the search query is already cached in the local storage. If not, it fetches the headlines from the API and stores them in the local storage. If the search query is already cached, it returns the cached headlines.
  The response from the API is filtered to remove articles without an image, title, source, published date, and description. This is done to ensure that only valid articles are stored in the local storage.
*/
