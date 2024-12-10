

export interface IFastFood {
  id: string | number;
  title: string;
  price: string | number;
  description: string;
  path: string;
  Inventory: string | number;
  
}



export interface CartItemType extends IFastFood{
qty: number;
}