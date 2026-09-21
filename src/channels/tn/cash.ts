import { createCashPaymentChannel } from "../shared.js";

export const cashTnTndPaymentChannel = createCashPaymentChannel({
  id: "cash_tn_tnd",
  country: "TN",
  currency: "TND",
});
