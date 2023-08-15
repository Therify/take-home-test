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
      const providers = [];
      for (const provider of Array.from({ length: 25 }).map(
        () => Provider.generateFakeProvider() as Provider.WithPersistedProps
      )) {
        providers.push(provider);
      }

      expect(
        providersFilteredByPreferences(providers, defaultPreferences)
      ).toStrictEqual(providers);
    });
  });
});
