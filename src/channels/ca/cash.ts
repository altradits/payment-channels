import { createCashPaymentChannel } from "../shared.js";

export const cashCaCadPaymentChannel = createCashPaymentChannel({
  id: "cash_ca_cad",
  country: "CA",
  currency: "CAD",
});
