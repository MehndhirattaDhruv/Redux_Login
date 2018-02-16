import Validator from 'is_js';
import { isEmpty } from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (Validator.empty(data.name)) {
    errors.name = 'Name is required';
  }

  if (Validator.empty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    errors.email = 'Invalid email';
  }
  if (Validator.empty(data.phone)) {
    errors.phone = 'Phone Number is required';
  }
  if (Validator.empty(data.industry_Name)) {
    errors.industry_Name = 'Industry Name is required';
  }
  if (Validator.empty(data.address)) {
    errors.address= 'Contact address is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
