import type { Meta, StoryObj } from "@storybook/react";

import { GridExample } from "./grid-example";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/AG Grid",
  component: GridExample,
  tags: ["autodocs"],
} satisfies Meta<typeof GridExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithElectricColumnHidden: Story = {
  args: {
    hiddenColumns: ["electric"],
  },
};

export const WithNoAnyHiddenColumns: Story = {
  args: {
    hiddenColumns: [],
  },
};

export const WithEditableColumn: Story = {
  args: {
    hiddenColumns: [],
    editable: true,
  },
};
