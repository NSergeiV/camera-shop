import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, State } from '../types/state';
import { useLocation } from 'react-router-dom';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useQueryParams = () => new URLSearchParams(useLocation().search);
