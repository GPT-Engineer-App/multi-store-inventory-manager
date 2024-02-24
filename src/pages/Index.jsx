import React, { useState } from "react";
import { Box, Flex, VStack, Input, InputGroup, InputLeftElement, Button, Text, Heading, Select, Stack, IconButton, useToast } from "@chakra-ui/react";
import { FaSearch, FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Feature",
      description: "Search functionality is not implemented in this mockup.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  // Mock inventory data
  const inventoryItems = [
    { id: 1, name: "Item 1", category: "Category A" },
    { id: 2, name: "Item 2", category: "Category B" },
    { id: 3, name: "Item 3", category: "Category A" },
    // Add more items here
  ];

  return (
    <VStack spacing={4} p={5}>
      <Heading as="h1" size="xl">
        Inventory Management System
      </Heading>

      <Flex>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search inventory..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </InputGroup>
        <Button onClick={handleSearch} ml={2}>
          Search
        </Button>
      </Flex>

      <Select placeholder="Filter by category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        {/* Add more categories here */}
      </Select>

      <Button leftIcon={<FaPlus />} colorScheme="teal">
        Add New Item
      </Button>

      {inventoryItems.map((item) => (
        <Flex key={item.id} w="full" borderWidth="1px" borderRadius="lg" p={4} alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontWeight="bold">{item.name}</Text>
            <Text fontSize="sm">Category: {item.category}</Text>
          </Box>
          <Stack direction="row">
            <IconButton icon={<FaPencilAlt />} aria-label="Edit item" colorScheme="blue" />
            <IconButton icon={<FaTrash />} aria-label="Delete item" colorScheme="red" />
          </Stack>
        </Flex>
      ))}
    </VStack>
  );
};

export default Index;
