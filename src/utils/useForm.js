import { useState } from "react";

export const useForm = (initialValues, submitAction) => {
    const [values, setValues] = useState(initialValues);
    const handleSubmit = e => {
        e.preventDefault();
        submitAction();
        setValues(initialValues);
    };
    return [
        values,
        e =>
            setValues({
                ...values,
                [e.target.name]: e.target.value
            }),
        handleSubmit,
    ];
};
