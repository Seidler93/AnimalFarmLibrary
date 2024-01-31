import { useEffect, useState } from 'react';

function App() {
  const [animals, setAnimals] = useState([])
  // const { search, animals } = useAnimalSearch();

  // Component for each animal
  function Animal({ type, name, age }) {
    return (
      <li>
        <strong>{type}</strong> {name} ({age} years old)
      </li>
    );
  }

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem('lastQuery', q);
  };
  
  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery);
  }, []);

  return (
    <main>
      <h1>Animal Farm</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && 'No animals found'}
      </ul>
    </main>
  );
}
export default App;