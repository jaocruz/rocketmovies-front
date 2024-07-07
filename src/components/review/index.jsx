import { Container } from "./styles";
import { RxStar, RxStarFilled } from "react-icons/rx";

const MAX_RATING = 5;

export const Review = ({ title, rating, description, markers }) => {
  return (
    <Container>
      <div className="info">
        <h1>{title}</h1>

        <span className="rating">
          {[...Array(MAX_RATING)].map((_, index) =>
            index < rating ? (<RxStarFilled key={index}/>) : (<RxStar key={index}/>)
          )}
        </span>
      </div>

      <p>{description}</p>

      <div className="markers">
        {markers && markers.length > 0 && (
          <>
            {markers.map((marker, index) => (
              <span key={index} className="markers">
                {marker}
              </span>
            ))}
          </>
        )}
      </div>

      
      
    </Container>
  );
};