import { createCashPaymentChannel } from "../shared.js";

export const cashLsLslPaymentChannel = createCashPaymentChannel({
  id: "cash_ls_lsl",
  country: "LS",
  currency: "LSL",
});
