# guid
Create guid is an extension for Visual Studio Code using multi cursor functionality. Can be executed via keyboard shortcut Ctrl+Shift+[ or via F1 -> Generate guid.

![Generate guid](https://i.giphy.com/l2R00crOUYFv71WlW.gif)

# About
This extension uses the [node-uuid](https://github.com/broofa/node-uuid) package to generate GUIDs.

The source code for this extension can be found at: https://github.com/TerraVenil/guid

# Releasing

Releasing this repository is done by changing the version inside package.json.
As a result of the change, a GitHub Actions workflow will create a new tag and publish to the VSCode Extension market place.

To make the publish succeed, GitHub Actions needs the personal access token configured within `Settings > Secrets and variables > Actions`.

The variable is called `VS_MARKETPLACE_TOKEN`

## Composite Actions used:

- Publish VS Code Extension - https://github.com/marketplace/actions/publish-vs-code-extension
- Tag on NPM Package Version Change - https://github.com/marketplace/actions/tag-on-npm-package-version-change