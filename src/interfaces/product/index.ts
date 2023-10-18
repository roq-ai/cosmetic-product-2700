import { InventoryInterface } from 'interfaces/inventory';
import { OrderProductInterface } from 'interfaces/order-product';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order_product?: OrderProductInterface[];
  vendor?: VendorInterface;
  _count?: {
    inventory?: number;
    order_product?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
