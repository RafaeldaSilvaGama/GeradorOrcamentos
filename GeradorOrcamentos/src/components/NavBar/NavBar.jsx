import { Box, Button, Flex, HStack, Heading, Spacer, Text, VStack, Input, IconButton, SearchIcon } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
  return (
    <Flex as="nav" p="10px" bg="black">
        <Heading as="h1" color="white">Orça Fácil</Heading>
        <Spacer/>
        <Input placeholder='Pesquisar' maxW='400px' bg="white" />
        <IconButton aria-label='Search database' icon={<SearchIcon />} />
        <Spacer />
        <HStack spacing="20px">
        <Box bg="gray.200" p="10px" borderRadius="80px">Foto</Box>
        <Text color="white">RafaelGama</Text>
        <Button colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>





   // <Flex bg="gray.200" justify="space-around" wrap="wrap" gap="2">
   //     <Box w="150px" h="50px" bg="red">1</Box>
   //     <Box w="150px" h="50px" bg="blue">2</Box>
   //     <Box w="150px" h="50px" bg="green">3</Box>
   //     <Box w="150px" h="50px" bg="yellow">4</Box>
   // </Flex>
  )
}
