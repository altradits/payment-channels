import { createCashPaymentChannel } from "../shared.js";

export const cashMaMadPaymentChannel = createCashPaymentChannel({
  id: "cash_ma_mad",
  country: "MA",
  currency: "MAD",
});
