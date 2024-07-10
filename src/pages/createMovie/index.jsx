import { Container, Form } from "./styles";

import { Input } from "../../components/input";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { MovieItem } from "../../components/movieItem";

import { FiArrowLeft } from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

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

  function handleBack(){
    navigate(-1)
  }

  async function handleNewMovie(){
    if(!title){
      return alert("Digite um título.")
    }

    if(!rating){
      return alert("Digite uma avaliação de 0 a 5.")
    }

    if(rating < 0 || rating > 5 || isNaN(rating)){
      return alert("Digite uma avaliação válida de 0 a 5.");
    }

    if(markers.length === 0){
      return alert("Adicione ao menos um marcador.");
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

  async function handleDeleteMarker(){
    const result = window.confirm("Você realmente deseja excluir esse filme?");

    if(result){
      alert("Filme excluído com sucesso.");
      navigate("/");
    } else {
      return
    }
  }

  return(
    <Container>
      <Header/>

      <main>
        <a onClick={handleBack}><FiArrowLeft/> Voltar</a>

        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputs">
            <Input
              placeholder="Título"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Descrição"
            type="text"
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
              onClick={handleDeleteMarker}
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