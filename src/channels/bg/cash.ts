import { createCashPaymentChannel } from "../shared.js";

export const cashBgEurPaymentChannel = createCashPaymentChannel({
  id: "cash_bg_eur",
  country: "BG",
  currency: "EUR",
});
