import { Box,  Image,  useDisclosure,  IconButton, Flex, VStack, Spacer,  } from "@chakra-ui/react";
import {  IoIosMenu  } from "react-icons/io";
import { DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTrigger } from "./ui/drawer";
import NavItem from "./NavItem";
import { FiLogOut } from "react-icons/fi";
import NavContents from "./NavContents";



const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box display={{ base: "block", md: "none" }} p={2}>
        <Flex justify="space-between" align="center">
          <IconButton
            icon={<IoIosMenu />}
            onClick={onOpen}
            aria-label="Open Menu"
            colorScheme="teal"
          />
          <Image src="/logo.png" alt="logo" boxSize="40px" />
        </Flex>
            <DrawerRoot isOpen={isOpen} onClose={onClose} placement="start">
              <DrawerTrigger asChild>
                <IconButton
                  icon={<IoIosMenu />}
                  onClick={onOpen}
                  colorScheme="teal"
                  aria-label="Open Menu"
                />
              </DrawerTrigger>
              <DrawerContent bg="white">
                <DrawerHeader>
                  <Image src="/Logo.png" alt="logo" />
                </DrawerHeader>
                <DrawerBody>
                  <NavContents />
                </DrawerBody>
                <DrawerFooter justifyContent="center">
                  <NavItem icon={<FiLogOut />} text="Logout" color="warningRed" />
                </DrawerFooter>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
            <Image src="/logo.png" alt="logo" />
        </Box>
  
        <Box
            display= {{ base: "none", md: "flex" }}
            bg="backgroundLight"
            w="250px"
            h="100vh"
            p={5}
            
            flexDirection={"column"}
        >
          <Flex justify="center">
            <Image
              src="/logo.png"
              alt="logo"
              objectFit="contain"
              maxWidth="none"
              boxSize="100px"
            />
          </Flex>
  
          <VStack spacing={1} align="flex-start" flex="1">
            <NavContents />
          </VStack>
  
          <Spacer />
          <Flex align="flex-start" color="warningRed">
            <NavItem icon={<FiLogOut />} text="Logout" />
          </Flex>
        </Box>
      </>
    );
  };

export default Sidebar;