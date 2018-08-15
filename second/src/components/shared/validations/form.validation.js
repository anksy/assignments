export const required = value => (value || typeof value === 'number' ? undefined : 'This field is required!');
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength8 = maxLength(8);

export const twitter = value =>
    value && !/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/i.test(value)
        ? 'Invalid twitter url'
        : undefined

export const github = value =>
    value && !/http(?:s)?:\/\/(?:www\.)?github\.com\/([a-zA-Z0-9_]+)/i.test(value)
        ? 'Invalid github url'
        : undefined