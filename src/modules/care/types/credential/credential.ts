import * as z from "zod";
import { State } from "../state";
import { InsuranceProvider } from "../insurance-provider";

export const schema = z.object({
  state: State.schema,
  acceptedInsurances: InsuranceProvider.schema.array(),
});

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
