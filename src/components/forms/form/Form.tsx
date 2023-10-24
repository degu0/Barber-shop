import React from 'react';

import { Formik, FormikHelpers, FormikProps, FormikValues, Form as FormikForm } from 'formik';

import styles from "./Form.module.css";

interface FormProps<T> {
    initialValues: T;
    onSubmit: (values: T, FormikHelpers: FormikHelpers<T>) => void | Promise<void>;
    children: (FormikProps: FormikProps<T>) => React.ReactNode;
}

const Form = <T extends FormikValues>({ initialValues, onSubmit, children }: FormProps<T>) => {
    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {(formikProps) => (
                    <FormikForm className={styles.form}>
                        {children(formikProps)}
                    </FormikForm>
                )}
            </Formik>
        </div>
    )
};

export default Form;