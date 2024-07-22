const {
  DEFAULT_LANGUAGE,
  DEFAULT_GREETINGS,
  DEFAULT_NAME,
} = require("./constants");
const { formatAndValidateArguments } = require("./helper");

const constructGreetingValues = (formattedArguments) => {
  const language = formattedArguments.language || DEFAULT_LANGUAGE;

  return {
    name: formattedArguments.name || DEFAULT_NAME,
    greeting: formattedArguments.greeting || DEFAULT_GREETINGS[language],
    level: formattedArguments.level,
  };
};

const getGreetingMsg = () => {
  const { name, greeting, level } = constructGreetingValues(
    formatAndValidateArguments()
  );

  let greetingMsg = `${greeting}, ${name}.`;

  if (level === "2") greetingMsg = `${greetingMsg} (${new Date()})`;

  return greetingMsg;
};

module.exports = {
  getGreetingMsg,
};
