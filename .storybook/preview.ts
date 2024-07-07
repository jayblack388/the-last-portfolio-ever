import type { Preview } from "@storybook/react";
import "@fontsource-variable/biorhyme";
import "@fontsource/courier-prime";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|fill)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
