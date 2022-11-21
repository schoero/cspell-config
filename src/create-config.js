import { getDefaultSettings } from "cspell-lib";


const defaultSettings = getDefaultSettings();

process.stdout.write(JSON.stringify({
  dictionaries: [
    "names",
    "vscode",
    "networking-terms"
  ],
  dictionaryDefinitions: [
    {
      addWords: false,
      name: "names",
      path: "./dict/names.txt"
    },
    {
      addWords: false,
      name: "vscode",
      path: "./dict/vscode.txt"
    }
  ],
  files: [
    "**/{*,.*}/**/*"
  ],
  ignorePaths: [
    "**/node_modules/**",
    "**/vscode-extension/**",
    "**/.git/**",
    "**/.vscode/**",
    "**/lib/**",
    "package-lock.json"
  ],
  ignoreRegExpList: defaultSettings.ignoreRegExpList,
  import: [
    "@cspell/dict-en_us/cspell-ext.json",
    "@cspell/dict-de-ch/cspell-ext.json",
    "@cspell/dict-typescript/cspell-ext.json",
    "@cspell/dict-html/cspell-ext.json",
    "@cspell/dict-html-symbol-entities/cspell-ext.json",
    "@cspell/dict-bash/cspell-ext.json",
    "@cspell/dict-npm/cspell-ext.json",
    "@cspell/dict-node/cspell-ext.json",
    "@cspell/dict-css/cspell-ext.json",
    "@cspell/dict-markdown/cspell-ext.json",
    "@cspell/dict-software-terms/cspell-ext.json",
    "@cspell/dict-public-licenses/cspell-ext.json",
    "@cspell/dict-fullstack/cspell-ext.json",
    "@cspell/dict-companies/cspell-ext.json"
  ],
  language: "en, de",
  loadDefaultConfiguration: false,
  maxNumberOfProblems: defaultSettings.maxNumberOfProblems,
  numSuggestions: defaultSettings.numSuggestions,
  patterns: defaultSettings.patterns,
  suggestionNumChanges: defaultSettings.suggestionNumChanges,
  suggestionsTimeout: defaultSettings.suggestionsTimeout,
  version: "0.2"
}, null, 2));
