import { Product } from './product';
import { Profile } from './profile';
import { Sale } from './sale';

export interface User {
  profile: Profile;
  products: Product[];
  sales: Sale[];
}
