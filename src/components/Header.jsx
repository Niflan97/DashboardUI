import { Box, Flex, IconButton, Image, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { Avatar } from "./ui/avatar";
import { FaAngleDown } from "react-icons/fa";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useEffect, useRef, useState } from "react";


const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null); 
    const searchIconRef = useRef(null);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const toggleSearch = () => setIsSearchOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current && !searchRef.current.contains(event.target) &&
                searchIconRef.current && !searchIconRef.current.contains(event.target)
            ) {
                setIsSearchOpen(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside); 
        return () => document.removeEventListener('mousedown', handleClickOutside); 
    }, []);

    return (
        <Box w="100%" h={16} px={5} display="flex" alignItems="center">
            <Flex flex="1" align="center" justify="space-between" >
                <InputGroup
                    display={isSearchOpen ? "flex" : isMobile ? "none" : "flex"}
                    startElement={<LuSearch />}
                    bg="white"
                    width={{ base: "100%", md: "40%" }}
                    borderRadius="4px"
                    _focusWithin={{ boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.6)" }}
                    _hover={{boxShadow: "0px 0px 8px rgba(138, 183, 255, 0.6)"}}
                >
                    <Input placeholder="Search..." borderRadius="4px" />
                </InputGroup>
                
                <Flex align="center" >
                    <IconButton display={isMobile ? "block" : "none"} aria-label="Search" onClick={toggleSearch}  ref={searchRef}>
                        <LuSearch />
                    </IconButton>
                    <IconButton aria-label="Notifications">
                        <GoBell />
                    </IconButton>
                    <MenuRoot>
                        <MenuTrigger >
                            <Flex alignItems={"center"}>
                                <Avatar name="John Doe" src="https://via.placeholder.com/40" size="sm" cursor="pointer" />
                                {!isMobile && (
                                <Box ml={2} textAlign="left">
                                    <Text fontSize="sm" fontWeight="bold">John Doe</Text>
                                    <Text fontSize="xs" color="gray.600">UI/UX Designer</Text>
                                </Box>
                                )}
                                {!isMobile && <FaAngleDown style={{ marginLeft: "8px" }} />}
                            </Flex>
                        </MenuTrigger>
                        <MenuContent>
                        <MenuItem>Settings</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;