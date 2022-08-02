import { IInfoCard } from "./InfoCard.types"
import './InfoCard.scss'


const InfoCard: React.FC<IInfoCard> = ({imageUrl, country, title, description}: IInfoCard) => {
  return (
    <div className="info-card">
        <div className="info-card__inner">
            <div className="info-card__image-wrapper">
                <a href="#"><img src={imageUrl}/></a>
            </div>
            <div className="info-card__info-block">
                <div className="info-card__country">
                    {country}
                </div>
                <div className="info-card__title">
                    {title}
                </div>
                <div className="info-card__description">
                    {description}
                </div>

            </div>
        </div>
    </div>
  )
}

export default InfoCard