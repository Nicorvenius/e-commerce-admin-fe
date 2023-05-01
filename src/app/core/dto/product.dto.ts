import { CategoryDto } from "./category.dto";
import { ProductToAttributeDto } from "./product-to-atrribute.dto";

export class ProductDto {
  name: string;
  description: string;
  photo: string;
  price: string;
  size: string;
  vendorCode: string;
  weight: string;
  category: CategoryDto[];
  productToAttribute: ProductToAttributeDto[];
  year: number;
  language: string;
}
