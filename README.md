# Simple WebApp w/ Sqlite Connection

## Instructions

### Dev Setup

```shell
npm install
npm run dev
```

### Setup

```shell
npm install
npm start
```

### Scratch Setup

```shell
npm init -y
npm i express sqlite3
npm i -D nodemon
npm i -D eslint
npm init @eslint/config
npm i -D prettier eslint-config-prettier
```

```json
// .eslint.json

{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
```

```json
// .prettierrc.json

{
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "quoteProps": "as-needed",
    "trailingComma": "es5",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always"
}
```

```text
// .prettierignore

node_modules
```
