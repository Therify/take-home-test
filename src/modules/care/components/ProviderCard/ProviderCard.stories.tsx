import { Meta, StoryObj } from "@storybook/react";
import { ProviderCard } from "./ProviderCard";
import { generateFakeProvider } from "../../types/provider/provider";

const meta: Meta<typeof ProviderCard> = {
  title: "Modules/Care/Components/ProviderCard",
  component: ProviderCard,
};

export default meta;

export const Therapist: StoryObj<typeof ProviderCard> = {
  args: {
    provider: generateFakeProvider({
      designation: "Therapist",
    }),
  },
};

export const Prescriber: StoryObj<typeof ProviderCard> = {
  args: {
    provider: generateFakeProvider({
      designation: "Prescriber",
    }),
  },
};

export const MentalHealthCoach: StoryObj<typeof ProviderCard> = {
  args: {
    provider: generateFakeProvider({
      designation: "Mental Health Coach",
    }),
  },
};
