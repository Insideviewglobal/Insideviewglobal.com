export interface Feature {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

export interface Product {
  product_id: string;
  product_title: string;
  product_title_html: string;
  short_description: string;
  full_description: string;
  product_message:string;
  image: string;
  features_title: string;
  features_description: string;
  demo_link: string;
  features: Feature[];
  summary_features: {
    id: string;
    metric: string;
    description: string;
    color: string;
  }[];
  price: string;
  link: string;
  moreInfo: {
    id: string;
    title: string;
    description: string;
    imagePath: string;
  }[];
  tags: {
    id: string;
    title: string;
    color: string;
  };
}

export interface ProductsData {
  products: Product[];
}
