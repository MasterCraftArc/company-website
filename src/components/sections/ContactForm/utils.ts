import { stringify } from 'query-string';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdtKiyFPqZS7ycB-igr7SIlQxdJstV5UMj8fHdCWbu16yY5rQ/formResponse?';

export function clearQuery() {
  return {
    name: '',
    email: '',
    organization: '',
    message: '',
  };
}

export function createQueryString(query) {
  const splitName = query.name.split(' ');
  const firstName = splitName[0] || '';
  const lastName = splitName[splitName.length - 1] || '';
  return stringify({
    // G-form name field id
    'entry.1197773672': firstName,
    // G-form lastName field id,
    'entry.244703714': lastName,
    // G-form emailAddress field name
    emailAddress: query.email,
    // G-form organization field id
    'entry.192647911': query.organization,
    // G-form message field id
    'entry.1425002156': query.message,
  });
}

export async function postContactForm(formQuery, successHandler?, errorHandler?) {
  try {
    await fetch(FORM_URL + createQueryString(formQuery), {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    successHandler && successHandler();
  } catch {
    errorHandler && errorHandler();
  }
}

export const FieldType = Object.freeze({
  NAME: 'name',
  EMAIL: 'email',
  ORG: 'organization',
  MESSAGE: 'message',
});
