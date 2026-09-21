import { createCashPaymentChannel } from "../shared.js";

export const cashNaNadPaymentChannel = createCashPaymentChannel({
  id: "cash_na_nad",
  country: "NA",
  currency: "NAD",
});
