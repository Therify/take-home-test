import { MemberPreferences } from "@/modules/care/types/member-preferences";
import { Provider } from "@/modules/care/types/provider";
import { providersFilteredByPreferences } from "./memberPreferences";

const defaultPreferences: MemberPreferences.Type = {
  gender: "Any",
  designation: "Any",
  specialty: "Any",
  state: "Any",
  insurance: "Any",
  ethnicity: "Any",
};

const providers: Provider.WithPersistedProps[] = [];
for (const provider of Array.from({ length: 25 }).map(
  () => Provider.generateFakeProvider() as Provider.WithPersistedProps
)) {
  providers.push(provider);
}

const specificProviders: Provider.Type[] = [
  {
    emailAddress: "Reina.Gleichner37@gmail.com",
    designation: "Prescriber",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg",
    givenName: "Daphnee",
    surname: "Durgan",
    gender: "Female",
    ethnicity: [
      "Other",
      "Native Hawaiian or Other Pacific Islander",
      "Hispanic or Latino",
      "Black or African American",
      "American Indian or Alaska Native",
      "Asian",
    ],
    specialties: ["Trauma"],
    credentials: [{ state: "Texas", acceptedInsurances: ["Aetna"] }],
  },
  {
    emailAddress: "Carole57@gmail.com",
    designation: "Prescriber",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg",
    givenName: "Karina",
    surname: "Nitzsche",
    gender: "Male",
    ethnicity: ["Black or African American", "Other", "White", "Asian"],
    specialties: ["Anxiety", "Relationships", "Stress", "Trauma"],
    credentials: [{ state: "New York", acceptedInsurances: ["Anthem"] }],
  },
  {
    emailAddress: "Flavio53@yahoo.com",
    designation: "Therapist",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/168.jpg",
    givenName: "Jillian",
    surname: "Daugherty",
    gender: "Female",
    ethnicity: [
      "White",
      "American Indian or Alaska Native",
      "Native Hawaiian or Other Pacific Islander",
      "Other",
      "Black or African American",
    ],
    specialties: ["Stress", "Self-esteem", "Anxiety", "Grief"],
    credentials: [
      { state: "California", acceptedInsurances: ["Blue Cross Blue Shield"] },
    ],
  },
];

describe("memberPreferences", function () {
  describe("filter providers with null preferences", function () {
    it("should return the providers that were passed in", function () {
      const providers = [];
      for (const provider of Array.from({ length: 25 }).map(
        () => Provider.generateFakeProvider() as Provider.WithPersistedProps
      )) {
        providers.push(provider);
      }

      expect(providersFilteredByPreferences(providers, null)).toStrictEqual(
        providers
      );
    });
  });

  describe("filter providers with all preferences set to 'Any'", function () {
    it("should return the providers that were passed in", function () {
      expect(
        providersFilteredByPreferences(providers, defaultPreferences)
      ).toStrictEqual(providers);
    });
  });

  // describe("filter providers by various preferences", function () {
  //   it("should filter providers based on gender preference", () => {
  //     const preferences: MemberPreferences.Type = {
  //       gender: "Male",
  //       designation: "Any",
  //       specialty: "Any",
  //       state: "Any",
  //       insurance: "Any",
  //       ethnicity: "Any",
  //     };
  //     const expectedProviders = [specificProviders[1]];
  //     console.log(expectedProviders)
  //     const filteredProviders = providersFilteredByPreferences(
  //       specificProviders as Provider.WithPersistedProps[],
  //       preferences
  //     );
  //     console.log(filteredProviders)
  //     expect(filteredProviders).toBe(expectedProviders);
  //   });
  // });
});
