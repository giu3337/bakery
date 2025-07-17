import type { Meta, StoryObj } from "@storybook/react";
import { BakeryButton } from "@/components/ui/bakery-button";

const meta: Meta<typeof BakeryButton> = {
  title: "Components/BakeryButton",
  component: BakeryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["cookies", "cakes"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cookies: Story = {
  args: {
    variant: "cookies",
    children: "COOKIES",
  },
};

export const Cakes: Story = {
  args: {
    variant: "cakes",
    children: "CAKES",
  },
};

export const SmallCookies: Story = {
  args: {
    variant: "cookies",
    size: "sm",
    children: "COOKIES",
  },
};

export const LargeCakes: Story = {
  args: {
    variant: "cakes",
    size: "lg",
    children: "CAKES",
  },
}; 