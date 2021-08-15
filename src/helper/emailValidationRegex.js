export default function emailValidationRegex(value) {
  const regex = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };
  return regex.email.test(value);
}
