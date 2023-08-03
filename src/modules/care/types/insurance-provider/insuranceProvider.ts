import * as z from "zod";

export const INSURANCE_PROVIDERS = [
  "Aetna",
  "Anthem",
  "Blue Cross Blue Shield",
  "Cigna",
  "United Healthcare",
] as const;

export const schema = z.enum(INSURANCE_PROVIDERS);

export type Type = z.infer<typeof schema>;

export const validate = (value: unknown): Type => {
  return schema.parse(value);
};

export const isValid = (value: unknown): value is Type => {
  try {
    validate(value);
    return true;
  } catch {
    return false;
  }
};
