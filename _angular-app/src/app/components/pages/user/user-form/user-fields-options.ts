import {FieldsOptions} from "../../../../common/fields-options";

const fieldsOptions: FieldsOptions = {
    username: {
        id: 'username',
        label: 'Nome',
        validationMessage: {
            maxlength: 30
        }
    },
    email: {
        id: 'email',
        label: 'Email'
    },
    password: {
        id: 'password',
        label: 'Senha',
        validationMessage: {
            minlength: 6,
            maxlength: 16
        }
    },
    unit_id: {
        id: 'unit_id',
        label: 'Unidade'
    },
    sector_id: {
        id: 'sector_id',
        label: 'Setor'
    }
};

export default fieldsOptions;