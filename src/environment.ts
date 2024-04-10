export type ENVIRONMENT = {
  appearance: "light" | "dark"; // The appearance used by the Taab application.
  assetsPath: string; // The absolute path to the assets directory of the extension.
  extensionName: string; // The name of the extension, as specified in package.json
  isDevelopment: boolean; // Indicates whether the command is a development command (vs. an installed command from the Store).
  taabVersion: string; // The version of the main Taab app
  supportPath: string; //The absolute path for the support directory of an extension. Use it to read and write files related to your extension or command.
  textSize: "medium" | "large"; // The text size used by the Raycast application.
};

export const environment = {
  appearance: "dark",
  assetsPath: "todo",
  extensionName: "todo",
  isDevelopment: false,
  taabVersion: "todo",
  supportPath: "todo",
  textSize: "medium",
};
