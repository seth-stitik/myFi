import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BudgetForm = ({ addBudget }) => {
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        description: '',
        date: '',
    });

    const [errors, setErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        if (!values.amount) {
            errors.amount = 'Amount is required';
        }
        if (!values.category) {
            errors.category = 'Category is required';
        }
        if (!values.description) {
            errors.description = 'Description is required';
        }
        if (!values.date) {
            errors.date = 'Date is required';
        }
        return errors;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log(formData);
            // addBudget(formData); // Uncomment when addBudget is implemented
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* Amount Field */}
            <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    isInvalid={!!errors.amount}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.amount}
                </Form.Control.Feedback>
            </Form.Group>

            {/* Category Field */}
            <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control 
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    isInvalid={!!errors.category}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.category}
                </Form.Control.Feedback>
            </Form.Group>

            {/* Description Field */}
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.description}
                </Form.Control.Feedback>
            </Form.Group>

            {/* Date Field */}
            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.date}
                </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default BudgetForm;
