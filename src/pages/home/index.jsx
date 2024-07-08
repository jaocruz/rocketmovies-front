import { Container } from "./styles";

import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Review } from "../../components/review";

import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";

export function Home(){

  const { getMovies, user } = useAuth();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const moviesData = await getMovies(user.id);
        setMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (user.id) {
      fetchMovies();
    }
  }, [getMovies, user.id]);

  if(isLoading){
    return (
      <div>
        carregando
      </div>
    )
  }

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
            movies?.map(movie => (
              <Review
                key={movie.id}
                data={movie}
              />
            ))}
              
        </section>
      </main>

    </Container>
  )
}