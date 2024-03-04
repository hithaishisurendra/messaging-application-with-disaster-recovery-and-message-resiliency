import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { render, screen } from '@testing-library/react';


test('should display the DLQ', () => {
  render(<Button>View DLQ</Button>);
  expect(screen.getByText('View DLQ')).toBeInTheDocument();
});

/*
test('should give a choice of serialization', () => {
  render(<Box>Select Serialization Method</Box>);
  expect(screen.getByTestId('New Group ChaSelect Serialization Method')).toBeInTheDocument();
});

*/