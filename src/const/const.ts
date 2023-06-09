export enum AppRoute {
	Catalog = '/catalog/?page_1',
	Product = '/product/:id',
	Basket = '/basket',
}

export enum APIRoute {
	Cameras = '/cameras',
	PromoProduct = '/promo',
}

export enum NameSpace {
	Data = 'Data',
}

export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';

export const REQUEST_TIMEOUT = 5000;

export const SIZE_CHUNK = 9;
