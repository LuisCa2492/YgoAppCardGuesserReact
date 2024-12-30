// import { useState } from 'react';
// export const useForm = ( initialForm = {} ) => {

//     const [ formState, setFormState ] = useState( initialForm );

//     const onInputChange = ({ target }) => {
//         const { name, value } = target;
//         setFormState({
//             ...formState,
//             [ name ]: value
//         });
//     }

//     const onResetForm = () => {
//         setFormState( initialForm );
//     }

//     return {
//         ...formState,
//         formState,
//         onInputChange,
//         onResetForm,
//     }
// }

import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        createValidators();
        //console.log('if3 ' + JSON.stringify(formState));

    }, [formState])

    useEffect(() => {
        setFormState(initialForm);
        //console.log('if2 ' + JSON.stringify(initialForm));
    }, [initialForm])

    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false;
        }
        return true;
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log('onInputChange ' + JSON.stringify(target));
        onResetForm();
        setFormState({
            ...formState,
            [ name ]: value
        });
        //console.log('onInputChange2 ' + JSON.stringify(formState));
    }

    const onResetForm = () => {
        //console.log('if ' + JSON.stringify(initialForm));
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
           const [fn, errorMessage='Error de validacion'] = formValidations[formField];
           formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}