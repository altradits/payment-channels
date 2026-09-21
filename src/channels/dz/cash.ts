import { createCashPaymentChannel } from "../shared.js";

export const cashDzDzdPaymentChannel = createCashPaymentChannel({
  id: "cash_dz_dzd",
  country: "DZ",
  currency: "DZD",
});
