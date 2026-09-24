import { createCashPaymentChannel } from "../shared.js";

export const cashLsZarPaymentChannel = createCashPaymentChannel({
  id: "cash_ls_zar",
  country: "LS",
  currency: "ZAR",
});
