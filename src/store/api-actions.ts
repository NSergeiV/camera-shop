import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { Products, PromoProducts } from '../types/types-api';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const/const';

export const fetchProductsAction = createAsyncThunk<Products, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchProducts',
  async (_, { extra: api }) => {
    const { data } = await api.get<Products>(APIRoute.Cameras);

    return data;
  }
);

export const fetchPromoProductAction = createAsyncThunk<PromoProducts, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchPromoProduct',
  async (_, { extra: api }) => {
    const { data } = await api.get<PromoProducts>(APIRoute.PromoProduct);

    return data;
  }
);
