import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, SIZE_CHUNK } from '../../const/const';
import { DataProcess } from '../../types/types-api';
import { fetchProductsAction, fetchPromoProductAction } from '../api-actions';

const initialState: DataProcess = {
  products: [],
  isProductsDataLoading: false,
  promoProduct: [],
  isPromoProductLoading: false,
  productsChunk: [],
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isProductsDataLoading = true;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        const data = action.payload;
        const productsData = [];

        for (let i = 0; i < data.length; i += SIZE_CHUNK) {
          productsData.push(data.slice(i, i + SIZE_CHUNK));
        }

        state.productsChunk = productsData;
        state.products = data;

        state.isProductsDataLoading = false;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.isProductsDataLoading = false;
      })
      .addCase(fetchPromoProductAction.pending, (state) => {
        state.isPromoProductLoading = true;
      })
      .addCase(fetchPromoProductAction.fulfilled, (state, action) => {
        state.promoProduct = action.payload;
        state.isPromoProductLoading = false;
      })
      .addCase(fetchPromoProductAction.rejected, (state) => {
        state.isPromoProductLoading = false;
      });
  }
});
