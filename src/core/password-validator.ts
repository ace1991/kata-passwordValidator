const MINIMUM_LENGTH = 6;

export function isStrongEnough(password: string) {
    return password.length>=MINIMUM_LENGTH;
}