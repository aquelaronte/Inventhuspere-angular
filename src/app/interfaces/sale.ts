interface SoldItem {
  product_id: string;
  units: number;
  product_total: number;
}

interface SaleInfo {
  time: string;
  sold_items: SoldItem[];
  sale_total: number;
}

export interface Sale {
  date: string;
  sales_info: SaleInfo[];
  sales_total: number;
}
