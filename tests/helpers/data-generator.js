import { faker } from '@faker-js/faker/locale/id_ID';

export function generateUsername() {
    return faker.internet.userName().toLocaleLowerCase();

}

export function generatePassword() {
    return faker.internet.password();
}