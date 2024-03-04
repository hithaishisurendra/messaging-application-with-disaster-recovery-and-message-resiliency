import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

test('should accept a user message', () => {
  render(<Input
          placeholder='Enter a message...'
        />);
  expect(screen.getByPlaceholderText('Enter a message...')).toBeInTheDocument();
})

test('should contain the box for one on one texting', () => {
  render(<Box>Click on a user to start chatting</Box>);
  expect(screen.getByText('Click on a user to start chatting')).toBeInTheDocument();
});