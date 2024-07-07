import { Container } from "./styles";

import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Review } from "../../components/review";

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";

export function Home(){

  const { getMovies } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const fetchedMovies = await getMovies();
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, [getMovies]);

  return(
    <Container>
      <Header/>

      <main>
        <div className="topo">
          <h1>Meus filmes</h1>

          <Link to="/createmovie">
            <Button
              icon={FiPlus}
              title="Adicionar filme"
            />
          </Link>
        </div>

        <section className="reviews">
            
          {
            movies.map(movie => (
            <Review
              key={String(movie.id)}
              data={movie}
            />
            ))
          }
              
        </section>
      </main>

    </Container>
  )
}