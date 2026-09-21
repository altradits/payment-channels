import { createCashPaymentChannel } from "../shared.js";

export const cashBwBwpPaymentChannel = createCashPaymentChannel({
  id: "cash_bw_bwp",
  country: "BW",
  currency: "BWP",
});
