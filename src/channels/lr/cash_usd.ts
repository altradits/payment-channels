import { createCashPaymentChannel } from "../shared.js";

export const cashLrUsdPaymentChannel = createCashPaymentChannel({
  id: "cash_lr_usd",
  country: "LR",
  currency: "USD",
});
