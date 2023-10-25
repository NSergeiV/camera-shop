import { PromoProdudct } from './types-api';

export type PromoProdudctProps = {
  promoProduct: PromoProdudct[] | null;
};

export type ProductProps = {
  product: ProductData;
}

type ProductData = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  price: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
};
