# Kata: password validator

Vamos a programar una función booleana que indica si una contraseña dada cumple con unos requisitos de fortaleza. Para que la función produzca un resultado verdadero, la contraseña debe de:

* Tener una longitud de al menos seis caracteres
* Contener algún número
* Contener alguna letra mayúscula
* Contener alguna letra minúscula
* Contener algún guion bajo

## Instrucciones
* `npm install`
* `npm test`

Más información sobre el curso en [testingsostenible.com](https://testingsostenible.com).

![Testing Sostenible con TypeScript](cover.png)

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test
