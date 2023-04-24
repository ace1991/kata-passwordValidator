/*
* tener una longitud de al menos seis caracteres
* Contener algún número
* Contener alguna letra mayúscula
* Contener alguna letra minúscula
* Contener algún guion bajo
*
* 1234Ab_ -> True
* 12344678A_ -> False
* 32123213ab_ -> False
* Ab1_ -> False
* ABCdfq_ -> False
* ABCde12 -> False
*
* */

import {isStrongEnough} from "../core/password-validator";

describe('The password ', () => {
    it('meet all the security requirements', () => {
        expect(isStrongEnough('1234Ab_')).toBe(true);
    });
    it('is too short', () => {
        expect(isStrongEnough('Ab1_')).toBe(false);
    });
    it('doesn`t contain a number', () => {
        expect(isStrongEnough('ABCdfq_')).toBe(false);
    });
    it('doesn`t contain a capital letter', () => {
        expect(isStrongEnough('32123213ab_')).toBe(false);
    });
    it('doesn`t contain a lowercase letter', () => {
        expect(isStrongEnough('12344678A_')).toBe(false);
    });
    it('doesn`t contain a hyphen', () => {
        expect(isStrongEnough('ABCde12')).toBe(false);
    });
});