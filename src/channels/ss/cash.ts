import { createCashPaymentChannel } from "../shared.js";

export const cashSsSspPaymentChannel = createCashPaymentChannel({
  id: "cash_ss_ssp",
  country: "SS",
  currency: "SSP",
});
