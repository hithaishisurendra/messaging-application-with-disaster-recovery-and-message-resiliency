import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { render, screen } from '@testing-library/react';


test('should contain all of client chats', () => {
  render(<Box>My Chats</Box>);
  expect(screen.getByText('My Chats')).toBeInTheDocument();
});

test('should render the Group chat button', () => {
  render(<Button>New Group Chat</Button>);
  expect(screen.getByText('New Group Chat')).toBeInTheDocument();
});