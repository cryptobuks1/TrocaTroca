import {FieldsOptions} from "../../../../common/fields-options";

const fieldsOptions: FieldsOptions = {
    unit_name: {
        id: 'unit_name',
        label: 'Nome',
        validationMessage: {
            maxlength: 30
        }
    },
    city_id: {
        id: 'city_id',
        label: 'Cidade'
    }
};

export default fieldsOptions;