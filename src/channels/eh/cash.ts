import { createCashPaymentChannel } from "../shared.js";

export const cashEhMadPaymentChannel = createCashPaymentChannel({
  id: "cash_eh_mad",
  country: "EH",
  currency: "MAD",
});
