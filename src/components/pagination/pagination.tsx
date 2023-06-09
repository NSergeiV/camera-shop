import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useAppSelector } from '../../hooks/hook';
import { getProductsChunk } from '../../store/data-process/selectors';

type paginationProps = {
  pageNumber: number;
  onHandlePaginateClick: (index: number) => void;
}

function Pagination({ pageNumber, onHandlePaginateClick }: paginationProps): JSX.Element {

  const productsChunk = useAppSelector(getProductsChunk);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          {pageNumber === 0 ? '' : <a className="pagination__link pagination__link--text" href="2">Назад</a>}
        </li>
        {productsChunk.map(
          (chunk, index) => (
            <li key={chunk[0].id} className="pagination__item">
              <Link
                to={`/page_${index + 1}`}
                className={cn(
                  'pagination__link',
                  { 'pagination__link--active': pageNumber === index }
                )}
                onClick={() => onHandlePaginateClick(index)}
              >
                {index + 1}
              </Link>
            </li>
          )
        )}
        <li className="pagination__item">
          {pageNumber === productsChunk.length - 1 ? '' : <a className="pagination__link pagination__link--text" href="2">Далее</a>}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
