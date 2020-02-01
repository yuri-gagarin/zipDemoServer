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

export const validatePhone = (phoneNumber) => {

};