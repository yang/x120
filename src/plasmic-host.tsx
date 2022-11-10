/** @format */

import { HelloWorld } from "./components/HelloWorld.tsx";
import { registerComponent } from "@plasmicapp/host";

registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    verbose: "boolean",
    children: "slot",
  },
  importPath: "./components/HelloWorld",
});
