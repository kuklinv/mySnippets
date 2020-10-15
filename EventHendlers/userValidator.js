// Returns a function which runs given checkFn against a value.
const createRule = (checkFn, errorMessage) => {
  return async (value) =>
    (await Promise.resolve(checkFn(value))) ? null : errorMessage;
};

// Returns a function which accepts a value to validate and runs all passed rules.
const defineValidator = (...rules) => {
  return async (value) => {
    for (const rule of rules) {
      const errorMessage = await rule(value);
      if (errorMessage !== null) {
        return { valid: false, reason: errorMessage };
      }
    }

    return { valid: true, reason: null };
  };
};

// Define rules
const validNonEmptyString = (value) =>
  typeof value === "string" && value.trim() !== "";
const validUsername = (username) => username.match(/^\w+$/);
const isUniqueUsername = async (username) => {
  const response = await fetch(`/api/checkusername/${username}`); // returns { available: true | false }
  return (await response.json()).available;
};

// Define a validator combining various rules
const validateUsername = defineValidator(
  createRule(validNonEmptyString, "Username is needed"),
  createRule(validUsername, "Username must consist of characters and numbers"),
  createRule(isUniqueUsername, "Username is already taken")
);

const showError = (text) => {
  document.getElementById("error-text").innerText = text;
};

// Use it.
const { valid, reason } = validateUsername("test").then(({ valid, reason }) => {
  if (!valid) {
    showError(reason);
    return;
  }

  // continue with registration
});
