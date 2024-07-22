const { ALLOWED_CLI_ARGUMENTS } = require("./constants");

const generateArgumentKeysAndMappings = (ALLOWED_CLI_ARGUMENTS) => {
  const ALLOWED_CLI_ARGUMENT_KEYS = Object.keys(ALLOWED_CLI_ARGUMENTS).reduce(
    (acc, key) => {
      acc.push(
        ALLOWED_CLI_ARGUMENTS[key].default,
        ALLOWED_CLI_ARGUMENTS[key].alias
      );
      return acc;
    },
    []
  );

  const ACCEPTED_ARGUMENTS_MAPPINGS = Object.keys(ALLOWED_CLI_ARGUMENTS).reduce(
    (acc, key) => {
      const defaultArg = ALLOWED_CLI_ARGUMENTS[key].default.replace(/^-+/, "");
      const aliasArg = ALLOWED_CLI_ARGUMENTS[key].alias.replace(/^-+/, "");
      acc[defaultArg] = key;
      acc[aliasArg] = key;
      return acc;
    },
    {}
  );

  return {
    ALLOWED_CLI_ARGUMENT_KEYS,
    ACCEPTED_ARGUMENTS_MAPPINGS,
  };
};

const { ACCEPTED_ARGUMENTS_MAPPINGS, ALLOWED_CLI_ARGUMENT_KEYS } =
  generateArgumentKeysAndMappings(ALLOWED_CLI_ARGUMENTS);

module.exports = {
  ACCEPTED_ARGUMENTS_MAPPINGS,
  ALLOWED_CLI_ARGUMENT_KEYS,
};
