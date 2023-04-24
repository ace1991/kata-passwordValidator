const MINIMUM_LENGTH = 6;
const regExp_numbers = /\d/;
export function isStrongEnough(password: string) {
    return password.length>=MINIMUM_LENGTH && regExp_numbers.test(password);
}