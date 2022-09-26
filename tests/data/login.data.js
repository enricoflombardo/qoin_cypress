import * as generator from "@tests/helpers/data-generator";

export const INVALID_DATA = {
    username: generator.generateUsername(),
    password: generator.generatePassword()
}

export const VALID_DATA = {
    username: "adminlv3@loyalto.id",
    password: "123123"
}
