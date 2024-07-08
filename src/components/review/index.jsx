import { Container } from "./styles";
import { RxStar, RxStarFilled } from "react-icons/rx";

const MAX_RATING = 5;

export const Review = ({data}) => {
  console.log(data)

  return (
    <Container>
      <div className="info">
        <h1>{data.title}</h1>

        <span className="rating">
          {[...Array(MAX_RATING)].map((_, index) =>
            index < data.rating ? (<RxStarFilled key={index}/>) : (<RxStar key={index}/>)
          )}
        </span>
      </div>

      <p>{data.description}</p>

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

      
      
    </Container>
  );
};