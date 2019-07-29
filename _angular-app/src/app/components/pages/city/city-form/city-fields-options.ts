import {FieldsOptions} from "../../../../common/fields-options";

const fieldsOptions: FieldsOptions = {
    city_name: {
        id: 'city_name',
        label: 'Nome',
        validationMessage: {
            maxlength: 30
        }
    },
    state_id: {
        id: 'state_id',
        label: 'Estado'
    }
};

export default fieldsOptions;