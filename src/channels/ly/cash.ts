import { createCashPaymentChannel } from "../shared.js";

export const cashLyLydPaymentChannel = createCashPaymentChannel({
  id: "cash_ly_lyd",
  country: "LY",
  currency: "LYD",
});
