import { createCashPaymentChannel } from "../shared.js";

export const cashSzZarPaymentChannel = createCashPaymentChannel({
  id: "cash_sz_zar",
  country: "SZ",
  currency: "ZAR",
});
