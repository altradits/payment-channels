import { createCashPaymentChannel } from "../shared.js";

export const cashSdSdgPaymentChannel = createCashPaymentChannel({
  id: "cash_sd_sdg",
  country: "SD",
  currency: "SDG",
});
