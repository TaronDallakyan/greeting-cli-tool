# Greetings Command-Line Tool

## Overview

This script is a command-line tool that greets a user based on various optional parameters. It supports different greeting messages, names, verbosity levels, and languages.

## Features

- **Allowed Levels**: 1 and 2
- **Allowed Languages**: en, fr, ru, am
- **Allowed Keys**: `--name`, `--language`, `--greeting`, `--level`
  - **Aliases for Quick Access**: `-n`, `-l`, `-g`, `-lvl`

## Example Usage

You can run the CLI script using:

```bash
node index.js -n Gago --greeting "inch ka" --language fr -lvl 1
```

You can also use the npm start command:

```bash
npm start -- --language fr --level 2
```

Level 1 Example:

```bash
node index.js -n Gago --greeting "inch ka" --language fr -lvl 1
```

Output: inch ka, Gago

Level 2 Example:

```bash
npm start -- --language fr --level 2
```

Output: Bonjour, Valodik! (Date and Time: 2024-01-01 12:34:56)

Description
--name or -n: Specifies the name of the user.
--language or -l: Specifies the language of the greeting.
--greeting or -g: Custom greeting message.
--level or -lvl: Specifies the verbosity level.
