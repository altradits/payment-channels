import { createCashPaymentChannel } from "../shared.js";

export const cashBiBifPaymentChannel = createCashPaymentChannel({
  id: "cash_bi_bif",
  country: "BI",
  currency: "BIF",
});
