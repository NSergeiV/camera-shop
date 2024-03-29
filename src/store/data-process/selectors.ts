import { NameSpace } from '../../const/const';
import { State } from '../../types/state';
import { Products, PromoProducts } from '../../types/types-api';

export const getProducts = (state: State): Products => state[NameSpace.Data].products;
export const getPromoProduct = (state: State): PromoProducts | null => state[NameSpace.Data].promoProduct;
export const getProductsChunk = (state: State): Products[] => state[NameSpace.Data].productsChunk;
export const getIsProductsDataLoading = (state: State): boolean => state[NameSpace.Data].isProductsDataLoading;
export const getIsPromoProductLoading = (state: State): boolean => state[NameSpace.Data].isPromoProductLoading;
