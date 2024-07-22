const {
  ALLOWED_LANGUAGE_KEYS,
  ALLOWED_LANGUAGE_VALUES,
  ALLOWED_LEVEL_KEYS,
  ALLOWED_LEVEL_VALUES,
} = require("./constants");
const { ALLOWED_CLI_ARGUMENT_KEYS } = require("./keysAndMappings");

const validateArgument = (cliArgumentKey, cliArgumentValue) => {
  if (!ALLOWED_CLI_ARGUMENT_KEYS.includes(cliArgumentKey)) {
    throw `Key ${cliArgumentKey} is not allowed!`;
  }

  if (!cliArgumentValue || cliArgumentValue[0] === "-") {
    throw `Value ${cliArgumentValue} is not valid! Probably you didn't specify the value for the Key ${cliArgumentKey}`;
  }

  if (
    ALLOWED_LANGUAGE_KEYS.includes(cliArgumentKey) &&
    !ALLOWED_LANGUAGE_VALUES.includes(cliArgumentValue)
  ) {
    throw `Unsupported language : ${cliArgumentValue}`;
  }

  if (
    ALLOWED_LEVEL_KEYS.includes(cliArgumentKey) &&
    !ALLOWED_LEVEL_VALUES.includes(cliArgumentValue)
  ) {
    throw `Unsupported level : ${cliArgumentValue}`;
  }
};

module.exports = {
  validateArgument,
};
