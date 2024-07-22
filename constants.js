const DEFAULT_GREETINGS = {
  en: "Hello",
  fr: "Bonjour",
  ru: "Privet",
  am: "Barev",
};

const DEFAULT_NAME = "Valodik";

const DEFAULT_LANGUAGE = "en";

const ALLOWED_CLI_ARGUMENTS = {
  name: {
    default: "--name",
    alias: "-n",
  },
  greeting: {
    default: "--greeting",
    alias: "-g",
  },
  language: {
    default: "--language",
    alias: "-l",
  },
  level: {
    default: "--level",
    alias: "-lvl",
  },
};

const ALLOWED_LANGUAGE_KEYS = [
  ALLOWED_CLI_ARGUMENTS.language.default,
  ALLOWED_CLI_ARGUMENTS.language.alias,
];

const ALLOWED_LANGUAGE_VALUES = Object.keys(DEFAULT_GREETINGS);

const ALLOWED_LEVEL_KEYS = [
  ALLOWED_CLI_ARGUMENTS.level.default,
  ALLOWED_CLI_ARGUMENTS.level.alias,
];

const ALLOWED_LEVEL_VALUES = ["1", "2"];

module.exports = {
  DEFAULT_GREETINGS,
  DEFAULT_NAME,
  DEFAULT_LANGUAGE,
  ALLOWED_CLI_ARGUMENTS,
  ALLOWED_LANGUAGE_KEYS,
  ALLOWED_LANGUAGE_VALUES,
  ALLOWED_LEVEL_KEYS,
  ALLOWED_LEVEL_VALUES,
};
