import {
  NormalizationKind,
  PaymentChannelAutomation,
  PaymentChannelGroup,
  ValidationRuleKind,
  definePaymentChannelSchema,
} from "../../core.js";
import { descriptionField, mobileReferenceEvidence, phoneNumberField } from "../shared.js";

export const telebirrPhoneEtEtbPaymentChannel = definePaymentChannelSchema({
  id: "telebirr_phone_et_etb",
  version: 1,
  display: {
    label: "Telebirr phone",
    shortLabel: "Telebirr",
    description: "Telebirr wallet transfer to an Ethiopian phone number.",
    icon: "telebirr",
    group: PaymentChannelGroup.MobileMoney,
  },
  network: { id: "telebirr", label: "Telebirr", country: "ET", currency: "ETB" },
  support: {
    automation: PaymentChannelAutomation.Manual,
  },
  fields: [
    {
      ...phoneNumberField,
      placeholder: "+251912345678",
      normalize: [NormalizationKind.Trim, NormalizationKind.E164EthiopiaPhone],
      validation: [
        {
          kind: ValidationRuleKind.Pattern,
          pattern: "^\\+251[79][0-9]{8}$",
          message: "Use an Ethiopian phone number in international format, e.g. +251912345678 or +251712345678",
        },
      ],
    },
    descriptionField,
  ],
  detailRows: [{ key: "phoneNumber", label: "Phone number", fields: ["phoneNumber"], copyable: true }],
  instructions: {
    payer: ["Send the exact amount to the displayed Telebirr phone number via the Telebirr app or *127#."],
    payee: ["Confirm the Telebirr reference is available if the payment is disputed."],
  },
  evidence: mobileReferenceEvidence,
});