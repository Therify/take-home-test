import * as z from "zod";
import { Gender } from "../gender";
import { Concern } from "../conern";
import { Ethnicity } from "../ethnicity";
import { Credential } from "../credential";
import { faker } from "@faker-js/faker";

export const schema = z.object({
  emailAddress: z.string().email(),
  avatarUrl: z.string().url().optional(),
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

export function generateFakeProvider(overrides: Partial<Type> = {}): Type {
  return {
    emailAddress: faker.internet.email(),
    avatarUrl: faker.internet.avatar(),
    givenName: faker.person.firstName(),
    surname: faker.person.lastName(),
    gender: faker.helpers.arrayElement(Gender.GENDERS),
    ethnicity: faker.helpers.arrayElements(Ethnicity.ETHNICITIES),
    specialties: faker.helpers.arrayElements(Concern.CONCERNS),
    credentials: Array.from({
      length: faker.number.int({ min: 1, max: 3 }),
    }).map(() => Credential.generateFakeCredential()),
    ...overrides,
  };
}
