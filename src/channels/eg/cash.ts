import { createCashPaymentChannel } from "../shared.js";

export const cashEgEgpPaymentChannel = createCashPaymentChannel({
  id: "cash_eg_egp",
  country: "EG",
  currency: "EGP",
});
