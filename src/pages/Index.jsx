import React, { useState } from "react";
import { Box, Flex, VStack, Input, InputGroup, InputLeftElement, Button, Text, Heading, Select, Stack, IconButton, useToast, useDisclosure } from "@chakra-ui/react";
import { FaSearch, FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import NewItemModal from "./NewItemModal.jsx";

const Index = () => {
  // Existing code...

  // Add the following state and function
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "Item 1", category: "Category A" },
    { id: 2, name: "Item 2", category: "Category B" },
    { id: 3, name: "Item 3", category: "Category A" },
    // Existing items...
  ]);

  const addItem = (name, category) => {
    const newItem = {
      id: inventoryItems.length + 1,
      name,
      category,
    };
    setInventoryItems([...inventoryItems, newItem]);
  };

  // Existing code...

  return (
    // Existing code...
    <>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        Add New Item
      </Button>
      <NewItemModal isOpen={isOpen} onClose={onClose} addItem={addItem} />
    </>
    // Existing code...
  );
};

export default Index;
