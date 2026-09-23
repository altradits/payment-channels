import { createCashPaymentChannel } from "../shared.js";

export const cashGlDkkPaymentChannel = createCashPaymentChannel({
  id: "cash_gl_dkk",
  country: "GL",
  currency: "DKK",
});
