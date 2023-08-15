import { Meta, StoryObj } from "@storybook/react";
import { PreferenceForm } from "./PreferenceForm";

const meta: Meta<typeof PreferenceForm> = {
    title: "Modules/Care/Components/PreferenceForm",
    component: PreferenceForm,
};

export default meta;

export const DefaultPreferenceForm: StoryObj<typeof PreferenceForm> = {
    args: {
        preferences: {
            gender: "Any",
            designation: "Any",
            specialty: "Any",
            state: "Any",
            insurance: "Any",
            ethnicity: "Any",
        }
    },
};
