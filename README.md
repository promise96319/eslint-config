# @qgh/eslint-config

Some config of eslint, inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- `@qgh/eslint-config-ts`: for Typescript: 
- `@qgh/eslint-config-vue`: for Vue: 
- `@qgh/eslint-config-react`: for React: 
- `@qgh/eslint-config`: this package includes `@qgh/eslint-config-react` and `@qgh/eslint-config-vue`.
- `@qgh/eslint-config-basic`: if you just want to use the basic config of eslint.

# Usage
## Install
Install one of the packages you want:
``` bash
pnpm add @qgh/eslint-config -D
```

## Config `.eslintrc.js`
``` javascript
module.exports = {
  extends: ['@qgh/eslint-config'],
  // todo: add your custom rules
}
```

## Add script for package.json
For example:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Config VS Code auto fix
Create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```


## License
MIT
