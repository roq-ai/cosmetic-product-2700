import * as yup from 'yup';

export const orderProductValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  order_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
