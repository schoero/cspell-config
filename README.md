# cspell-config

Personal cspell config

## Key features

* Spell checks all files
* Supports American english and german languages

### Installation

```sh
npm i --save-dev @schoero/cspell-config
```

### Usage

Create a `.cspell.json` file with the following content:

```jsonc
{
  "import": [
    "@schoero/cspell-config"
  ],
  "words": [
    // Add your custom words here
  ]
}
```

### VSCode integration

For highlighting spelling errors in VSCode, install the [Code Spell Checker extension](streetsidesoftware.code-spell-checker).

To recommend the extension in your repository create a `.vscode/extensions.json` with the following content:

```jsonc
{
  "recommendations": [
    "streetsidesoftware.code-spell-checker"
  ]
}
```

If you want to have spellcheck scripts, you can use something like this in the `package.json`:

```jsonc
{
  "scripts": {
    "spellcheck": "node_modules/.bin/cspell lint",
    "spellcheck:ci": "npm run spellcheck -- --no-progress"
  }
}
```
