import * as generator from "@tests/helpers/data-generator";

export const INVALID_DATA = {
    username: generator.generateUsername(),
    password: generator.generatePassword()
}

export const VALID_DATA = {
    username: "adminlv3@loyalto.id",
    password: "123123"
}

export const VALID_DATA_ADMIN_LV2 = {
    username: "adminlv2@loyalto.id",
    password: "123123"
}

export const VALID_DATA_ADMIN_LV1 = {
    username: "ilyas@loyalto.id",
    password: "123123"
}