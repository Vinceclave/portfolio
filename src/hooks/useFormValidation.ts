import { useState, useCallback } from 'react';

/**
 * Type for form field validation rules
 */
interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

/**
 * Type for form field validation rules object
 */
interface ValidationRules {
  [key: string]: ValidationRule[];
}

/**
 * Type for form values
 */
interface FormValues {
  [key: string]: string;
}

/**
 * Type for form errors
 */
interface FormErrors {
  [key: string]: string;
}

/**
 * Custom hook for form validation
 */
const useFormValidation = (initialValues: FormValues, validationRules: ValidationRules) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Validate a single field
   */
  const validateField = useCallback((name: string, value: string): string => {
    if (!validationRules[name]) return '';

    for (const rule of validationRules[name]) {
      if (!rule.validate(value)) {
        return rule.message;
      }
    }
    
    return '';
  }, [validationRules]);

  /**
   * Validate all fields in the form
   */
  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(values).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) {
        isValid = false;
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  /**
   * Handle input change
   */
  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  /**
   * Handle input blur
   */
  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, [validateField]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback((
    onSubmit: (values: FormValues) => void | Promise<void>,
    e?: React.FormEvent
  ) => {
    if (e) e.preventDefault();
    
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    const isValid = validateAll();
    if (isValid) {
      setIsSubmitting(true);
      Promise.resolve(onSubmit(values))
        .finally(() => setIsSubmitting(false));
    }
  }, [values, validateAll]);

  /**
   * Reset the form
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues
  };
};

export default useFormValidation;

/**
 * Common validation rules for forms
 */
export const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validate: (value) => value.trim() !== '',
    message
  }),
  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validate: (value) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return value === '' || emailRegex.test(value);
    },
    message
  }),
  minLength: (length: number, message = `Minimum ${length} characters required`): ValidationRule => ({
    validate: (value) => value === '' || value.length >= length,
    message
  }),
  maxLength: (length: number, message = `Maximum ${length} characters allowed`): ValidationRule => ({
    validate: (value) => value === '' || value.length <= length,
    message
  }),
  match: (pattern: RegExp, message: string): ValidationRule => ({
    validate: (value) => value === '' || pattern.test(value),
    message
  }),
};
