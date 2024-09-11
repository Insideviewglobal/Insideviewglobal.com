export interface Product {
  product_id: string;
  product_title: string;
  short_description: string;
  full_description: string;
  image: string;
  features: {
    id: string;
    title: string;
    description: string;
    imagePath: string;
  }[];
  price: string;
  link: string;
  tags: {
    id: string;
    title: string;
    color: string;
  };
}

export interface ProductsData {
  products: Product[];
}
