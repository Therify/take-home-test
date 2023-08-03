import * as z from "zod";

export const CONCERNS = [
  "Anxiety",
  "Depression",
  "Stress",
  "Relationships",
  "Trauma",
  "Grief",
  "Self-esteem",
] as const;

export const schema = z.enum(CONCERNS);

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
