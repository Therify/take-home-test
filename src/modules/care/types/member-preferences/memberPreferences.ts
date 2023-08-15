import * as z from "zod";
import { GENDERS } from "../gender/gender";
import { DESIGNATIONS } from "../designation/designation";
import { CONCERNS } from "../conern/concern";
import { STATES } from "../state/state";
import { INSURANCE_PROVIDERS } from "../insurance-provider/insuranceProvider";
import { ETHNICITIES } from "../ethnicity/ethnicity";

export const GENDER_PREFERENCE = [...GENDERS, "Any"] as const;
export const DESIGNATION_PREFERENCE = [...DESIGNATIONS, "Any"] as const;
export const SPECIALTY_PREFERENCE = [...CONCERNS, "Any"] as const;
export const STATE_PREFERENCE = [...STATES, "Any"] as const;
export const INSURANCE_PREFERENCE = [...INSURANCE_PROVIDERS, "Any"] as const;
export const ETHNICITY_PREFERENCE = [...ETHNICITIES, "Any"] as const;

export const genderPreferenceSchema = z.enum(GENDER_PREFERENCE)
export const designationPreferenceSchema = z.enum(DESIGNATION_PREFERENCE)
export const specialtyPreferenceSchema = z.enum(SPECIALTY_PREFERENCE)
export const statePreferenceSchema = z.enum(STATE_PREFERENCE)
export const insurancePreferenceSchema = z.enum(INSURANCE_PREFERENCE)
export const ethnicityPreferenceSchema = z.enum(ETHNICITY_PREFERENCE)

export type GenderPreferenceType = z.infer<typeof genderPreferenceSchema>
export type DesignationPreferenceType = z.infer<typeof designationPreferenceSchema>
export type SpecialtyPreferenceType = z.infer<typeof specialtyPreferenceSchema>
export type StatePreferenceType = z.infer<typeof statePreferenceSchema>
export type InsurancePreferenceType = z.infer<typeof insurancePreferenceSchema>
export type EthnicityPreferenceType = z.infer<typeof ethnicityPreferenceSchema>

export const schema = z.object({
    gender: genderPreferenceSchema,
    designation: designationPreferenceSchema,
    specialty: specialtyPreferenceSchema,
    state: statePreferenceSchema,
    insurance: insurancePreferenceSchema,
    ethnicity: ethnicityPreferenceSchema
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
