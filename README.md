# cspell-config

Personal cspell config

## Key features

* Spell check any files

### Installation

```sh
npm i --save-dev @schoero/cspell-config
```

### Usage

Create a `.cspell.json` file with the following content:

```jsonc
{
  "import": [
    "node_modules/@schoero/cspell-config/.cspell.json"
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
    "spellcheck": "node_modules/.bin/cspell **"
  }
}
```
