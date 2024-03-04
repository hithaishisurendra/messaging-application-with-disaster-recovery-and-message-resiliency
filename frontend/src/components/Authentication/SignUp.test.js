import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, FormLabel } from '@chakra-ui/react';

test('should contain email field', () => {
  render(<FormLabel>Email</FormLabel>);
  expect(screen.getByText('Email')).toBeInTheDocument();
});

test('should contain password field', () => {
  render(<FormLabel>Password</FormLabel>);
  expect(screen.getByText('Password')).toBeInTheDocument();
});

test('should contain password field', () => {
  render(<FormLabel>Password</FormLabel>);
  expect(screen.getByText('Password')).toBeInTheDocument();
});

test('should contain confirm password field', () => {
  render(<FormLabel>Confirm Password</FormLabel>);
  expect(screen.getByText('Confirm Password')).toBeInTheDocument();
});

test('should contain Upload your Picture field', () => {
  render(<FormLabel>Upload your Picture</FormLabel>);
  expect(screen.getByText('Upload your Picture')).toBeInTheDocument();
});

test('should contain Upload your Picture field', () => {
  render(<Button>Sign Up</Button>);
  expect(screen.getByText('Sign Up')).toBeInTheDocument();
});





