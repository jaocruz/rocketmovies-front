import { Container } from './styles';

import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Review } from '../../components/review';

import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { getMovies, user } = useAuth();

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies(user.id);
        setMovies(moviesData);
        setFilteredMovies(moviesData);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        setMovies([]);
        setFilteredMovies([]);
      }
    };

    if (user.id) {
      fetchMovies();
    }
  }, [getMovies, user.id]);

  const handleSearch = (search) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  function handleDetails(id){
    navigate(`/moviepreview/${id}`)
  }

  return (
    <Container>
      <Header onSearch={handleSearch} />

      <main>
        <div className="topo">
          <h1>Meus filmes</h1>

          <Button
            icon={FiPlus}
            title="Adicionar filme"
            onClick={() => navigate("/createmovie")}
          />
        </div>

        <section className="reviews">
          {filteredMovies.length === 0 ? (
            <p>Nenhum filme encontrado.</p>
          ) : (
            filteredMovies.map((movie) => (
              <Review
                key={movie.id}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          )}
        </section>
      </main>
    </Container>
  );
}
