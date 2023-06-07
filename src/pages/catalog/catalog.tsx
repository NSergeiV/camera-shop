import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { useAppSelector } from '../../hooks/hook';
import { getIsProductsDataLoading, getIsPromoProductLoading, getProductsChunk, getPromoProduct } from '../../store/data-process/selectors';

import Banner from '../../components/banner/banner';
import CatalogFilterForm from '../../components/catalog-filter-form/catalog-filter-form';
import CatalogSortForm from '../../components/catalog-sort-form/catalog-sort-form';
import CatalogProductCard from '../../components/catalog-product-card/catalog-product-card';
import Pagination from '../../components/pagination/pagination';
import ModalCatalogAddItem from '../../components/modal-catalog-add-item/modal-catalog-add-item';
import ModalCatalogAddItemSuccess from '../../components/modal-catalog-add-item-success/modal-catalog-add-item-success';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function Catalog(): JSX.Element {
  const [page, setPage] = useState(0);

  const isProductsDataLoading = useAppSelector(getIsProductsDataLoading);
  const isPromoProductLoading = useAppSelector(getIsPromoProductLoading);

  const promoProduct = useAppSelector(getPromoProduct);
  const productsChunk = useAppSelector(getProductsChunk);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handlePaginateClick = (index: number) => {
    setPage(index);
  };

  if (isProductsDataLoading || isPromoProductLoading) {
    return <LoadingScreen />;
  }


  return (
    <main>
      <Helmet>
        <title>Каталог</title>
      </Helmet>
      <Banner promoProduct={promoProduct} />
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-dividerow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <div className="catalog-filter">
                  <CatalogFilterForm />
                </div>
              </div>
              <div className="catalog__content">
                <div className="catalog-sort">
                  <CatalogSortForm />
                </div>
                <div className="cards catalog__cards">
                  {productsChunk[page].map((item) => <CatalogProductCard key={item.id} product={item} />)}
                </div>
                {productsChunk.length > 1 ? <Pagination pageNumber={page} onHandlePaginateClick={handlePaginateClick} /> : ''}
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalCatalogAddItem />
      <ModalCatalogAddItemSuccess />
    </main>
  );
}

export default Catalog;
