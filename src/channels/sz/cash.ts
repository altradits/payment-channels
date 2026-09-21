import { createCashPaymentChannel } from "../shared.js";

export const cashSzSzlPaymentChannel = createCashPaymentChannel({
  id: "cash_sz_szl",
  country: "SZ",
  currency: "SZL",
});
