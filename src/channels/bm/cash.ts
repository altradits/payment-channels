import { createCashPaymentChannel } from "../shared.js";

export const cashBmBmdPaymentChannel = createCashPaymentChannel({
  id: "cash_bm_bmd",
  country: "BM",
  currency: "BMD",
});
