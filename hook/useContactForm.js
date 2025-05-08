import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
};

const initialErrors = {
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
};

export function useContactForm() {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = { ...initialErrors };
        if (!values.name.trim()) newErrors.name = 'Name is required';
        if (!values.email.includes('@')) newErrors.email = 'Invalid email';
        if (!values.company.trim()) newErrors.company = 'Company is required';
        if (!values.licenseType)
            newErrors.licenseType = 'Select a license type';
        if (!values.message.trim())
            newErrors.message = 'Message cannot be empty';

        setErrors(newErrors);
        return Object.values(newErrors).every((e) => e === '');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            toast.success('Form submitted successfully!', {
                position: 'top-right',
                autoClose: 3000
            });
            console.log('Form submitted:', values);
            setValues(initialState); // clear form after success
            setTimeout(() => setSubmitted(false), 4000); // optional: reset `submitted` after 4s
        } else {
            toast.error('Please correct the errors in the form.', {
                position: 'top-right',
                autoClose: 3000
            });
        }
    };

    return { values, errors, submitted, handleChange, handleSubmit };
}
