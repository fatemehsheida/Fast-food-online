

export interface IFastFood {
  id: string | number;
  title: string;
  price: any;
  description: string;
  path: string;
  Inventory: string | number;
  
}


export interface CartItemType extends IFastFood{
qty: number;
}