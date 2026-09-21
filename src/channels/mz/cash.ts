import { createCashPaymentChannel } from "../shared.js";

export const cashMzMznPaymentChannel = createCashPaymentChannel({
  id: "cash_mz_mzn",
  country: "MZ",
  currency: "MZN",
});
