import { Helmet } from 'react-helmet-async';

import Banner from '../../components/banner/banner';
import CatalogFilterForm from '../../components/catalog-filter-form/catalog-filter-form';
import CatalogSortForm from '../../components/catalog-sort-form/catalog-sort-form';
import CatalogProductCard from '../../components/catalog-product-card/catalog-product-card';
import Pagination from '../../components/pagination/pagination';
import ModalCatalogAddItem from '../../components/modal-catalog-add-item/modal-catalog-add-item';
import ModalCatalogAddItemSuccess from '../../components/modal-catalog-add-item-success/modal-catalog-add-item-success';

function Catalog(): JSX.Element {
  return (
    <main>
      <Helmet>
        <title>Каталог</title>
      </Helmet>
      <Banner />
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
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
                  <CatalogProductCard />
                </div>
                <Pagination />
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
