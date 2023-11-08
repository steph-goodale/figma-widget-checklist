### About

This is Figma widget that contains a basic, best-practice checklist for design system component development. Loosely based on Nathan Curtis’ Figma Component Review article: https://medium.com/eightshapes-llc/the-figma-component-review-f42114450b4d

When placed on the Figma canvas near a component, the idea is that the checklist items help ensure the component is properly structured and robust enough for use in a design system setting.

![GIF](component-checklist.gif)

### Development Setup

Below are the steps to get your widget running locally for development purposes. You can also find instructions at https://www.figma.com/widget-docs/setup-guide/.

1. **Download the Figma desktop app**

   Download from your browser and walk through the installer: https://www.figma.com/downloads/.

2. **Download Visual Studio Code (or your choice of IDE)**

   Download from your browser and walk through the installer: https://code.visualstudio.com/.

   Once complete, open VS Code. In your top toolbar, select "File > Open" and open the directory containing this app code.

3. **Download Node & NPM**

   This will allow you to install TypeScript and other libraries.

   **OPTION A**

   If you already have `nvm` installed, open your terminal ("Terminal > New Terminal") and run:

    ```
    nvm install v18.17.1
    nvm use
    nvm alias default 18.17.1
    ```

   **OPTION B**

   Otherwise, you can download it from your browser:

   - Mac 64-bit: https://nodejs.org/dist/v18.17.1/node-v18.17.1.pkg
   - Windows 64-bit: https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi
   - Other download options: https://nodejs.org/dist/v18.17.1/

   Go through the installer steps. Once complete, open your terminal ("Terminal > New Terminal") and run:

    ```
    nvm use
    nvm alias default 18.17.1
    ```

4. **Compile & run your app**

   Using TypeScript requires a compiler to convert TypeScript (`src/app.tsx`) into JavaScript (`dist/app.js`) for the browser to run.

   In your terminal ("Terminal > New Terminal"), run the following commands:

   1. Install the dependencies:
       ```
       npm install
       ```
   2. Compile TS to JS and watch for file changes:
       ```
       npm run dev
       ```
      You will have to do this again every time you reopen Visual Studio Code.

5. **Watch your changes in Figma desktop**

   In Figma desktop, select from the top toolbar: "Widgets > Development > Import widget from manifest...". Navigate into this code directory and select the `manifest.json` file.
   Now when you go to "Widgets > Development", you should see a widget called "UX Checklist Concept". Select this and the widget should render on the page in front of you!

### NPM Scripts

-   `npm run format`: formats code according to the 'prettier' rules in `./prettierrc.json`
-   `npm run tsc`: ensures that our TS is compiling, without producing any JS
-   `npm run tsc:watch`: ensures that our TS is compiling, without producing any JS, and re-runs as code changes are made
-   `npm run build`: compiles and bundles our TS app (`./src/app.tsx`) into JS (`./dist/app.js`)
-   `npm run build:watch`: compiles and bundles our TS app (`./src/app.tsx`) into JS (`./dist/app.js`), and re-runs as code changes are made
-   `npm run dev`: runs all commands that are needed to serve the app locally and develop continually

### Credits

Originally created by [Matthew Rea](https://github.com/nyan-matt/figma-widget-component-checklist). Expanded for internal usage by Workday design teams by [Steph Goodale](https://github.com/stephgiftbit/figma-widget-checklist).
