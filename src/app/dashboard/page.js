"use client";
import {   Flex,  IconButton,  Box,  useBreakpointValue, Image, useDisclosure, } from "@chakra-ui/react"
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { FiLogOut } from "react-icons/fi";
import NavContents from "@/components/NavContents";
import NavItem from "@/components/NavItem";
import { DrawerRoot, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader,  DrawerTrigger, DrawerBody } from "@/components/ui/drawer";
import { IoIosMenu } from "react-icons/io";
import MainLayout from "@/components/MainLaout";



export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {!isMobile && (
          <Box position="sticky" top={0} left={0} h={"-webkit-fit-content"} overflowY="auto">
            <Sidebar />
          </Box>
        )}
  
        {isMobile && (
          <Flex
            alignItems="center"
            justifyContent="space-between"
            p={4}
            background="backgroundLight"
            boxShadow={"0px 4px 10px rgba(148, 148, 148, 0.5)"}
            position="sticky"
            top={0}
            zIndex={1} 
          >
            <Box>
              <DrawerRoot placement={"start"} bg="backgroundLight" color="black" colorPalette="teal">
                <DrawerTrigger asChild>
                  <IconButton color={"primary"}>
                    <IoIosMenu />
                  </IconButton>
                </DrawerTrigger>
                <DrawerContent bg="white">
                  <DrawerHeader>
                    <Image src="/Logo.png" alt="logo" />
                  </DrawerHeader>
                  <DrawerBody>
                    <NavContents />
                  </DrawerBody>
                  <DrawerFooter justifyContent={"flex-start"}>
                    <NavItem icon={<FiLogOut />} text="Logout" color="warningRed" />
                  </DrawerFooter>
                  <DrawerCloseTrigger />
                </DrawerContent>
              </DrawerRoot>
            </Box>
  
            <Box position="absolute" left="50%" transform="translateX(-50%)">
              <Image src="/logo.png" alt="logo" boxSize="72px" objectFit="contain" maxWidth="none" />
            </Box>
  
            <Box>
              <Header onOpen={onOpen} />
            </Box>
          </Flex>
        )}
  
        <Flex flex={1} direction="column" overflow="hidden">
          {!isMobile && (
            <Box position="sticky" top={0} zIndex={1} bg="backgroundlight">
              <Header />
            </Box>
          )}
  
          <Box flex={1} overflowY="auto">
            <MainLayout />
          </Box>
        </Flex>
      </Flex>
    );
  }


        
    