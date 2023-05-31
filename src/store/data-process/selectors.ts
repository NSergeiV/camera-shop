import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import { Products, PromoProdudct } from '../../types/types-api';

export const getProducts = (state: State): Products => state[NameSpace.Data].products;
export const getPromoProduct = (state: State): PromoProdudct | null => state[NameSpace.Data].promoProduct;
export const getProductsChunk = (state: State): Products[] => state[NameSpace.Data].productsChunk;
export const getIsProductsDataLoading = (state: State): boolean => state[NameSpace.Data].isProductsDataLoading;
