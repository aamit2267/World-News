import {useState, useEffect} from 'react';
import { fetchHeadlines, fetchCategory, fetchSearch } from './utils/api';
import './App.css';
import NavBar from './components/NavBar';
import Article from './components/Article';
import SearchBar from './components/SearchBar';

function App() {
  const [category, setCategory] = useState('');
  const [headlines, setHeadlines] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (search) {
          data = await fetchSearch(search);
        } else if (category) {
          data = await fetchCategory(category);
        } else {
          data = await fetchHeadlines();
      }
        setHeadlines(data);
      } catch (error) {
        console.error('Error fetching headlines in App.js:', error);
      }
    };

    fetchData();
  }, [category, search]);

  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <center>
      <SearchBar setSearch={setSearch} />
        <h1>{category ? `${category[0].toUpperCase() + category.slice(1)} News` : 'Top Headlines'}</h1>
        <div className="articles">
          {headlines.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </center>
    </div>
  );
}

export default App;
