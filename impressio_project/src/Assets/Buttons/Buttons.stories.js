import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: ["primary-btn", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "primary-btn",
    className: {},
    text: "button",
  },
};
