import { createCashPaymentChannel } from "../shared.js";

export const cashZwUsdPaymentChannel = createCashPaymentChannel({
  id: "cash_zw_usd",
  country: "ZW",
  currency: "USD",
});
