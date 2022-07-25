import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStory<typeof Home> = () => <Home />;
