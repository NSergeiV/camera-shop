
export type DataProcess = {
  products: ProductData[];
  isProductsDataLoading: boolean;
  promoProduct: PromoProducts;
  isPromoProductLoading: boolean;
  productsChunk: ProductData[][];
}

export type Products = ProductData[];

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

export type PromoProducts = PromoProdudct[];

export type PromoProdudct = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}
