import * as z from "zod";

export const STATES = ["California", "New York", "Texas"] as const;

export const schema = z.enum(STATES);

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
