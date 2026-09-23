import { createCashPaymentChannel } from "../shared.js";

export const cashSoUsdPaymentChannel = createCashPaymentChannel({
  id: "cash_so_usd",
  country: "SO",
  currency: "USD",
});
