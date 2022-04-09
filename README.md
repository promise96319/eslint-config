# eslint-config

A config of eslint, inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Install
### Typescript
``` bash
pnpm add @qgh/eslint-config-ts
```
### Vue
``` bash
pnpm add @qgh/eslint-config-vue
```
### React
``` bash
pnpm add @qgh/eslint-config-react
```
### All
This includes `@qgh/eslint-config-react` and `@qgh/eslint-config-vue`.
``` bash
pnpm add @qgh/eslint-config
```
### Basic
If you just want to use the basic config of eslint.
``` bash
pnpm add @qgh/eslint-config-basic
```

## How to use
Create a file named `.eslintrc.js` in your project.
``` javascript
module.exports = {
  // extends the config 
  extends: ['@qgh/eslint-config-basic'],
  // todo: add custom rules
}
```

## License
MIT
