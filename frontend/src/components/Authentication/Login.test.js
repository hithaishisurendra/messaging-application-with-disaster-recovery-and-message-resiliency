import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

test('should contain email field', () => {
  render(<Input
          placeholder='Enter Your Email'
        />);
  expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
})

test('should contain password field', () => {
  render(<FormLabel>Password</FormLabel>);
  expect(screen.getByText('Password')).toBeInTheDocument();
})

test('should contain Login button', () => {
  render(<Button>Login</Button>);
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('should contain Login as Administrator button', () => {
  render(<Button>Login as Administrator</Button>);
  expect(screen.getByText('Login as Administrator')).toBeInTheDocument();
});
