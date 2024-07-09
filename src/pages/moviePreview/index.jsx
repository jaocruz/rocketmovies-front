import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { RxStar, RxStarFilled, RxClock } from "react-icons/rx";

import { Link } from "react-router-dom";

import { Header } from "../../components/header";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function MoviePreview(){
  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [data, setData] =useState();

  const params = useParams();

  const MAX_RATING = 5;

  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data);
    }

    fetchMovies()
  }, [])

  return(
    <Container>
      <Header/>

      <main>
        <Link to="/"><FiArrowLeft/> Voltar</Link>

        {
          data &&
          <div className="page">
          <section>
            <h1>{data.title}</h1>

            <span className="rating">
              {[...Array(MAX_RATING)].map((_, index) =>
                index < data.rating ? (<RxStarFilled key={index}/>) : (<RxStar key={index}/>)
              )}
            </span>
          </section>

          <div className="infos">
            <img src={avatarURL} alt="" />
            <p>Por {user.name}</p>
            <RxClock/>
            <p>{data.created_at}</p>
          </div>

          <div className="tags">
            <div className="markers">
              {data.markers && data.markers.length > 0 && (
                <>
                  {data.markers.map((marker) => (
                    <span key={marker.id} className="markers">
                      {marker.name}
                    </span>
                  ))}
                </>
              )}
            </div>
          </div>

          <p>{data.description}</p>
          
          </div>
        }

      </main>
    </Container>
  )
}