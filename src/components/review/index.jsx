import { Container } from "./styles";
import { RxStar, RxStarFilled } from "react-icons/rx";

const MAX_RATING = 5;

export const Review = ({ title, rating, description, tags }) => {
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

      <div className="tags">
        {tags && tags.length > 0 && (
          <>
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </>
        )}
      </div>

      
      
    </Container>
  );
};