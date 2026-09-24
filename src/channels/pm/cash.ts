import { createCashPaymentChannel } from "../shared.js";

export const cashPmEurPaymentChannel = createCashPaymentChannel({
  id: "cash_pm_eur",
  country: "PM",
  currency: "EUR",
});
