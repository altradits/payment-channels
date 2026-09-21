import { createCashPaymentChannel } from "../shared.js";

export const cashUgUgxPaymentChannel = createCashPaymentChannel({
  id: "cash_ug_ugx",
  country: "UG",
  currency: "UGX",
});
