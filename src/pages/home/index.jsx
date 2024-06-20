import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Review } from "../../components/review";

export function Home(){
  return(
    <Container>
      <Header/>

      <main>
        <div className="topo">
          <h1>Meus filmes</h1>

          <Button
            icon={FiPlus}
            value="Adicionar filme"
          />
        </div>

        <section className="reviews">
          <Review
            title="Interestellar"
            rating={4}
            description="Amet magna minim elit amet laborum eiusmod eu id occaecat esse ea aliqua officia minim. Laboris laboris veniam est consequat nulla cillum minim reprehenderit nostrud dolore laboris tempor. Officia exercitation est deserunt ea laborum cupidatat irure in nostrud esse. Voluptate sint veniam do incididunt. "
            tags={["Terror", "Gore", "Suspense"]}
          />
        </section>
      </main>

    </Container>
  )
}