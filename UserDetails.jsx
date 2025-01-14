import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

function UserDetails() {
  const { id } = useParams();
  
  const users = [
    { id: 1, name: "Alice", details: "Alice is a software engineer." },
    { id: 2, name: "Bob", details: "Bob is a product manager." },
    { id: 3, name: "Charlie", details: "Charlie is a designer." },
  ];

  const user = users.find((user) => user.id === parseInt(id));

  return (
    <Box p={5}>
      {user ? (
        <>
          <Heading>User Details for ID: {id}</Heading>
          <Text mt={4}>{user.details}</Text>
        </>
      ) : (
        <Heading color="red.500">User not found</Heading>
      )}
    </Box>
  );
}

export default UserDetails;
