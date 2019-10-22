export const minLength = (min, value) =>
  value.length >= min ? undefined : `Should be greater than ${min}`;

export const checkMail = email => {
  const testMail = new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  );
  return testMail.test(email);
};

export const checkPhone = phone => {
  const testPhone = /380\d{9}/;
  return testPhone.test(phone);
};
