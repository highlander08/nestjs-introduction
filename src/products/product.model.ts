import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// interface based on a mongoose document
//extender product interface is accurate for save of the update function within the service work
export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}
