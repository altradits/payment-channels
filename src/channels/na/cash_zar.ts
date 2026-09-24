import { createCashPaymentChannel } from "../shared.js";

export const cashNaZarPaymentChannel = createCashPaymentChannel({
  id: "cash_na_zar",
  country: "NA",
  currency: "ZAR",
});
