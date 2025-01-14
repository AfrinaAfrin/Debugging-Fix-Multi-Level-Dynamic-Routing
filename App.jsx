import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
