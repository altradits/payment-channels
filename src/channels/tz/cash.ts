import { createCashPaymentChannel } from "../shared.js";

export const cashTzTzsPaymentChannel = createCashPaymentChannel({
  id: "cash_tz_tzs",
  country: "TZ",
  currency: "TZS",
});
