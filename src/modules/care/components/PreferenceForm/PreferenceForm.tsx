import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Gender } from "../../types/gender";
import { GENDERS } from "../../types/gender/gender";
import { DESIGNATIONS } from "../../types/designation/designation";
import { CONCERNS } from "../../types/conern/concern";
import { STATES } from "../../types/state/state";
import { INSURANCE_PROVIDERS } from "../../types/insurance-provider/insuranceProvider";
import { ETHNICITIES } from "../../types/ethnicity/ethnicity";
import { Designation } from "../../types/designation";
import { Concern } from "../../types/conern";
import { State } from "../../types/state";
import { Ethnicity } from "../../types/ethnicity";
import { InsuranceProvider } from "../../types/insurance-provider";
import Grid from "@mui/material/Grid";

type GenderPreference = Gender.Type | "Any"
type DesignationPreference = Designation.Type | "Any"
type SpecialtyPreference = Concern.Type | "Any"
type StatePreference = State.Type | "Any"
type InsurancePreference = InsuranceProvider.Type | "Any"
type EthnicityPreference = Ethnicity.Type | "Any"
type Preference = GenderPreference | DesignationPreference | SpecialtyPreference | StatePreference | InsurancePreference | EthnicityPreference

interface PreferenceFormProps {
    preferences: MemberPreferences | null;
    setMemberPreferences: Dispatch<SetStateAction<any>>;
    setDisplayPreferenceForm: Dispatch<SetStateAction<boolean>>;
}

interface PreferenceSelectionProps {
    title: string;
    options: readonly Preference[];
    state: Preference;
    stateSetter: Dispatch<SetStateAction<any>>;
}

export interface MemberPreferences {
    gender: GenderPreference;
    designation: DesignationPreference;
    specialty: SpecialtyPreference;
    state: StatePreference;
    insurance: InsurancePreference;
    ethnicity: EthnicityPreference;
}

function PreferenceSelection({ title, options, state, stateSetter }: PreferenceSelectionProps) {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: "100%", margin: "5px" }}>
                <FormLabel id={title.toLowerCase()}>{title}</FormLabel>
                <RadioGroup value={state} sx={{ display: "flex", flexDirection: "row" }}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => stateSetter(e.target.value)}
                >
                    {[...options, "Any"].map(option => <FormControlLabel key={option} value={option} control={<Radio />} label={option} />)}
                </RadioGroup>
                <br />
            </Box>
        </Grid>
    )
}

export function PreferenceForm({ preferences, setMemberPreferences, setDisplayPreferenceForm }: PreferenceFormProps) {
    const [gender, setGender] = useState<GenderPreference>(preferences?.gender ?? "Any")
    const [designation, setDesignation] = useState<DesignationPreference>(preferences?.designation ?? "Any")
    const [specialty, setSpecialty] = useState<SpecialtyPreference>(preferences?.specialty ?? "Any")
    const [state, setState] = useState<StatePreference>(preferences?.state ?? "Any")
    const [insurance, setInsurance] = useState<InsurancePreference>(preferences?.insurance ?? "Any")
    const [ethnicity, setEthnicity] = useState<EthnicityPreference>(preferences?.ethnicity ?? "Any")

    const handleFormSubmit = (): void => {
        setMemberPreferences({ gender, designation, specialty, state, insurance, ethnicity })
        setDisplayPreferenceForm(false)
    }

    return (
        <FormControl sx={{ padding: "0 10% 5% 10%" }}>

            <Grid container spacing={2} sx={{ p: 4 }}>
                <PreferenceSelection title="Gender" options={GENDERS} state={gender} stateSetter={setGender} />
                <PreferenceSelection title="Designation" options={DESIGNATIONS} state={designation} stateSetter={setDesignation} />
                <PreferenceSelection title="Specialty" options={CONCERNS} state={specialty} stateSetter={setSpecialty} />
                <PreferenceSelection title="State" options={STATES} state={state} stateSetter={setState} />
                <PreferenceSelection title="Insurance" options={INSURANCE_PROVIDERS} state={insurance} stateSetter={setInsurance} />
                <PreferenceSelection title="Ethnicity" options={ETHNICITIES} state={ethnicity} stateSetter={setEthnicity} />
                <Button sx={{ display: "inline-flex", width: "fit-content", alignSelf: "center" }} type="submit" onClick={handleFormSubmit} >Submit</Button>
            </Grid>
        </FormControl>
    )
}

