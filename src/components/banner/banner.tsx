import { Link } from 'react-router-dom';

import { PromoProdudctProps } from '../../types/types-props';

function Banner({ promoProduct }: PromoProdudctProps): JSX.Element {

  if (!promoProduct) {
    return <div>No Promo</div>;
  }

  const { id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = promoProduct[0];

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
        <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="280" height="240" alt={name} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link to={`/product/:${id}`} className="btn" >Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
