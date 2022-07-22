type CardProps = {
  mark?: string;
  imageSource: string;
  bookmarked?: boolean;
  price: number;
  rating: number;
  description: string;
  type: string;
}


export const Card = ({mark, imageSource, bookmarked, price, rating, description, type} : CardProps): JSX.Element => (
  <article className="cities__card place-card">
    {
      mark ?
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
        :
        ''
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={imageSource}
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${bookmarked ? 'place-card__bookmark-button--active' : ''} button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{description}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);
