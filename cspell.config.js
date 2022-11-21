import { getDefaultSettings } from "cspell-lib";

const defaultSettings = getDefaultSettings();

export default {
  "ignoreRegExpList": defaultSettings.ignoreRegExpList,
  "patterns": defaultSettings.patterns,
  "maxNumberOfProblems": defaultSettings.maxNumberOfProblems,
  "numSuggestions": defaultSettings.numSuggestions,
  "suggestionsTimeout": defaultSettings.suggestionsTimeout,
  "suggestionNumChanges": defaultSettings.suggestionNumChanges,
  "dictionaries": [
    "names",
    "vscode",
    "networking-terms"
  ],
  "dictionaryDefinitions": [
    {
      "addWords": false,
      "name": "names",
      "path": "./dict/names.txt"
    },
    {
      "addWords": false,
      "name": "vscode",
      "path": "./dict/vscode.txt"
    }
  ],
  "files": [
    "**/{*,.*}/**/*"
  ],
  "ignorePaths": [
    "**/node_modules/**",
    "**/vscode-extension/**",
    "**/.git/**",
    "**/.vscode/**",
    "**/lib/**",
    "package-lock.json"
  ],
  "import": [
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
  "language": "en, de",
  "loadDefaultConfiguration": false,
  "version": "0.2"
}
