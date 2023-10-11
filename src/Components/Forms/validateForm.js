export const validateForm = (fildList) => {
  // const errors = {};
  // let formIsValid = true;

  // if (valueFields.title.length === 0) {
  //   errors.title = true;
  //   formIsValid = false;
  // } else {
  //   errors.title = false;
  // }
  // if (valueFields.description.length === 0) {
  //   errors.description = true;
  //   formIsValid = false;
  // } else {
  //   errors.description = false;
  // }

  // setValidationErrors(errors);

  // return formIsValid;

  const errors = {};
  let formIsValid = true;

  for (const key in fildList) {
    if (fildList[key].length === 0) {
      errors[key] = true;
      formIsValid = false;
    } else {
      errors[key] = false;
    }
  }

  return { formIsValid, errors };

}