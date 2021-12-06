import React from "react";
import { Story, Meta } from "@storybook/react";

import Foo from "./Foo";

export default {
    title: "Foo",
    component: Foo,
} as Meta;

const Template: Story = () => <Foo />;

export const Default = Template.bind({});
