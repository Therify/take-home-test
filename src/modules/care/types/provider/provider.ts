import * as z from "zod";
import { Gender } from "../gender";
import { Concern } from "../conern";
import { Ethnicity } from "../ethnicity";
import { Credential } from "../credential";

export const schema = z.object({
  emailAddress: z.string().email(),
  givenName: z.string().nonempty(),
  surname: z.string().nonempty(),
  gender: Gender.schema,
  ethnicity: Ethnicity.schema.array(),
  specialties: Concern.schema.array(),
  credentials: Credential.schema.array(),
});

export const withPersistedPropsSchema = schema.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Type = z.infer<typeof schema>;
export type WithPersistedProps = z.infer<typeof withPersistedPropsSchema>;

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
