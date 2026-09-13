import { describe, it, expect } from 'vitest';
import { validateContactForm, getInitialFormState } from './formValidation';

describe('getInitialFormState', () => {
    it('returns an empty form with a honeypot field', () => {
        expect(getInitialFormState()).toEqual({
            name: '',
            email: '',
            subject: '',
            message: '',
            honeypot: ''
        });
    });
});

describe('validateContactForm', () => {
    const validForm = {
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        subject: 'Hello',
        message: 'A message body'
    };

    it('accepts a fully populated, valid form', () => {
        expect(validateContactForm(validForm)).toEqual({ isValid: true, error: '' });
    });

    it('rejects a missing name', () => {
        expect(validateContactForm({ ...validForm, name: '' })).toEqual({
            isValid: false,
            error: 'Please enter your name'
        });
    });

    it('rejects a whitespace-only name', () => {
        expect(validateContactForm({ ...validForm, name: '   ' }).isValid).toBe(false);
    });

    it('rejects a missing email', () => {
        expect(validateContactForm({ ...validForm, email: '' })).toEqual({
            isValid: false,
            error: 'Please enter your email address'
        });
    });

    it.each([
        'not-an-email',
        'missing-at.example.com',
        'has @space.com',
        'no-domain@',
        '@no-local.com'
    ])('rejects malformed email "%s"', (email) => {
        expect(validateContactForm({ ...validForm, email })).toEqual({
            isValid: false,
            error: 'Please enter a valid email address'
        });
    });

    it('rejects a missing subject', () => {
        expect(validateContactForm({ ...validForm, subject: '' })).toEqual({
            isValid: false,
            error: 'Please enter a subject'
        });
    });

    it('rejects a missing message', () => {
        expect(validateContactForm({ ...validForm, message: '' })).toEqual({
            isValid: false,
            error: 'Please enter your message'
        });
    });
});
