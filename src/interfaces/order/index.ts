import { OrderProductInterface } from 'interfaces/order-product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  total_price: number;
  status: string;
  created_at?: any;
  updated_at?: any;
  order_product?: OrderProductInterface[];
  user?: UserInterface;
  _count?: {
    order_product?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  status?: string;
}
