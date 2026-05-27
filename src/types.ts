export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images?: string[];
  tags: string[];
  materials: string[];
  style: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  rating: number;
  review: string;
  productName?: string;
  date?: string;
}

export interface ShippingPaymentInfo {
  shipping: {
    methods: string[];
    cost: string;
    duration: string;
  };
  payment: {
    methods: string[];
    steps: string[];
  };
}
