import { MemberPreferences } from "@/modules/care/components/PreferenceForm/PreferenceForm";
import { Provider } from "@/modules/care/types/provider";

export function providersFilteredByPreferences(providers: Provider.WithPersistedProps[], preferences: MemberPreferences | null): Provider.WithPersistedProps[] {
    if (preferences === null) {
        return providers
    }
    return providers.filter(provider => {
        const genderMatchesPreference = preferences.gender === "Any" || provider.gender === preferences.gender
        const designationMatchesPreference = preferences.gender === "Any" || provider.designation === preferences.designation
        const specialtiesMatchPreference = preferences.specialty === "Any" || provider.specialties.includes(preferences.specialty)

        const credentialsMatchPreference = provider.credentials.filter(cred => {
            const stateMatchesPreference = preferences.state === "Any" || cred.state === preferences.state
            const insuranceMatchesPreference = preferences.insurance === "Any" || cred.acceptedInsurances.includes(preferences.insurance)
            return stateMatchesPreference && insuranceMatchesPreference
        })

        const ethnicityMatchesPreference = preferences.ethnicity === "Any" || provider.ethnicity.includes(preferences.ethnicity)

        const providerMatchesAllPreferences =
            genderMatchesPreference
            && designationMatchesPreference
            && specialtiesMatchPreference
            && credentialsMatchPreference
            && ethnicityMatchesPreference

        return providerMatchesAllPreferences
    })
}
