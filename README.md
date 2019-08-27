# Base Web

Uber's [Base Web design system](https://baseweb.design/) as a Framer X package.

#### Sections

All components have been split into sections with the intention to replicate Base Web's documentation page.

#### Known Issues

- Select's dropdowns are sometimes rendered below other components. There seems to be a z-index problem here.
- File Uploader currently does nothing.
- Theming support is to be considered a work in progress.

#### Faq

- What is the code/generated folder?
  `baseui.framerx` was created using the [@framerj/scomponent-importer](https://www.npmjs.com/package/@framerjs/component-importer). This folder should be cleaned up at some point since many of the generated files are not used anymore.
