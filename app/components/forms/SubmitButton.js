import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton(props) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton 
            title="Login"
            onPress={handleSubmit} 
        />
    );
}

export default SubmitButton;
