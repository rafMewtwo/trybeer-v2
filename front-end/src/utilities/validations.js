const minLengthPassword = 5;
const minLengthName = 11;
const regexName = /^[a-z ,.'-]+$/i;
// const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

export const validateName = (
  value,
) => regexName.test(value) && value.length > minLengthName;

export const validateEmail = (value) => regexEmail.test(value);

export const validatePassword = (value) => value.length > minLengthPassword;
