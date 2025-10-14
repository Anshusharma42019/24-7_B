import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  address_id: { type: mongoose.Schema.Types.ObjectId,ref: 'Address',required: true},
  item_ids: [{type: mongoose.Schema.Types.ObjectId,ref: 'Item', required: true }],
  is_variation: {type: Boolean,default: false },
  variation: {type: mongoose.Schema.Types.Mixed, default: null},
  is_addon: {type: Boolean,default: false},
  addon: [{type: mongoose.Schema.Types.ObjectId,ref: 'Addon'}],
  gst: {type: Number,required: true},
  amount: {type: Number,required: true},
  payment_status: {type: String,enum: ['success', 'failed'], required: true},
  payment_data: {type: mongoose.Schema.Types.Mixed,default: {}},
  order_status: {type: Number,enum: [1, 2, 3, 4, 5, 6],default: 1,  required: true},// 1-Pending
  delivery_partner_id: {type: mongoose.Schema.Types.ObjectId,ref: 'DeliveryPartner',default: null},
  delivery_boy: {type: String,enum: ['Own-Delivery', 'Partner-Delivery'], default: 'Own-Delivery'},
  order_source: {type: String,enum: ['Online', 'offline'], default: 'Online'},
}, { timestamps: true });

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;
