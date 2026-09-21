import { createCashPaymentChannel } from "../shared.js";

export const cashEtEtbPaymentChannel = createCashPaymentChannel({
  id: "cash_et_etb",
  country: "ET",
  currency: "ETB",
});
