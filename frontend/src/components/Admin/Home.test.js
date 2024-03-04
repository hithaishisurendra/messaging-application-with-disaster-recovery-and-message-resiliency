import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { render, screen } from '@testing-library/react';


test('should display admin home oage', () => {
  render(<Box>Welcome to Admin Dashboard.</Box>);
  expect(screen.getByText('Welcome to Admin Dashboard.')).toBeInTheDocument();
});