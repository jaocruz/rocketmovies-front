import { Container, Form } from "./styles";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { api } from "../../services/api";

import { Input } from "../../components/input";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { MovieItem } from "../../components/movieItem";

export function CreateMovie(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  const navigate = useNavigate();

  function handleAddMarker(){
    setMarkers(prevState => [...prevState, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(deleted){
    setMarkers(prevState => prevState.filter(marker => marker !== deleted));
  }

  async function handleNewMovie(){
    if(!title){
      return alert("Digite um título.")
    }

    if(!rating){
      return alert("Digite uma avaliação de 0 a 5.")
    }

    if(newMarker){
      return alert("Você deixou de adicionar um marcador.")
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      markers
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header/>

      <main>
        <Link to="/"><FiArrowLeft/> Voltar</Link>

        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputs">
            <Input
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          >
          </textarea>

          <h2>Marcadores</h2>

          <div className="markersMovie">
            {
              markers.map((marker, index) => (
                <MovieItem
                  key={String(index)}
                  value={marker}
                  onClick={() => handleRemoveMarker(marker)}
                />
              ))
            }

            <MovieItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewMarker(e.target.value)}
              value={newMarker}
              onClick={handleAddMarker}
            />
          </div>

          <div className="buttons">
            <Button
              title="Excluir filme"
            />
            
            <Button
              title="Salvar alterações"
              onClick={handleNewMovie}
            />  
          </div>
        </Form>
      </main>
    </Container>
  )
}