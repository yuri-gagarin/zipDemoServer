/**
 * Checks for an empty object or string
 * @param {(string|Object)} value - An object or string to check
 * @returns {boolean} True if object or string is empty or null, False if not
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

/**
  * Validates user email input
  * @param {string} user  - A user email
  * @return {boolean} Result tested against regex. True if valid, False if invalid
  */
export const validateEmail = (email) => {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  return regex.test(String(email).toLowerCase());
};