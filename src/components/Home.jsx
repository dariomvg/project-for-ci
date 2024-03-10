import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((response) => setData(response.results));
  }, [currentPage]);

  
  const next = () => setCurrentPage(currentPage + 1);
  const back = () =>
    currentPage === 1 ? null : setCurrentPage(currentPage - 1);

  return (
    <>
      <h1>Datos de Rick y Morty</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "16px",
          alignItems: "center",
        }}>
        <button onClick={back}>Return page</button>
        <button onClick={next}>Next page</button>
        <strong>Pagina {currentPage}</strong>
      </div>

      <section
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
        }}>
          
        {data && data.map((item) => <Card key={item.id} item={item} />)}
      </section>
    </>
  );
};

export default Home;
