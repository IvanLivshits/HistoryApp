import { useSelector } from "react-redux";
import InfoCard from "../InfoCard/InfoCard";
import { ICardsBlock } from "./CardsBlock.types";
import "./CardsBlock.scss";
import { RootState } from "../../store/store";

function CardsBlock(props: ICardsBlock) {
  const data = useSelector((state: RootState) => state.cards.value);
  const searchQuery = useSelector((state:RootState) => state.searchQuery.value)

  return (
    <section className="cards-block">
      <div className="cards-block__container">
        <div className="cards-block__title">{searchQuery && data.length > 1 ? `Results for ${searchQuery.toUpperCase()}` : "Lets find something interesting?"}</div>
        <div className="cards-block__body">
          <div className="cards-block__cards-wrapper">
            {data &&
              data.map((card, index) => (
                <div key={index} className="cards-block__card">
                  <InfoCard
                    imageUrl={card.image}
                    title={card.title}
                    country={card.country}
                    description={card.description}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsBlock;
