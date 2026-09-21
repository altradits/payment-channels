import { createCashPaymentChannel } from "../shared.js";

export const cashRwRwfPaymentChannel = createCashPaymentChannel({
  id: "cash_rw_rwf",
  country: "RW",
  currency: "RWF",
});
