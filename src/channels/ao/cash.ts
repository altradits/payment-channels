import { createCashPaymentChannel } from "../shared.js";

export const cashAoAoaPaymentChannel = createCashPaymentChannel({
  id: "cash_ao_aoa",
  country: "AO",
  currency: "AOA",
});
