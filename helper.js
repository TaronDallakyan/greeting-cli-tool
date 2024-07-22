const { ACCEPTED_ARGUMENTS_MAPPINGS } = require("./keysAndMappings");
const { validateArgument } = require("./validation");

const formatAndValidateArguments = () => {
  const cliArguments = {};

  for (let i = 2; i <= process.argv.length - 1; i += 2) {
    const [key, value] = [process.argv[i], process.argv[i + 1]];

    validateArgument(key, value);

    cliArguments[key] = value;
  }

  let formattedCliArguments = {};

  for (const key in cliArguments) {
    const formattedKey = key.replace(/^--?/, "");
    formattedCliArguments[ACCEPTED_ARGUMENTS_MAPPINGS[formattedKey]] =
      cliArguments[key];
  }

  return formattedCliArguments;
};

module.exports = {
  formatAndValidateArguments,
};
