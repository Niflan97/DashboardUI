import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const NavItem = (props) => {
    return (
        <>
            <Box
                paddingInline={3}
                w="100%"
                rounded={8}
                transition="all 0.3s ease-in-out"
                
                _hover={{
                    bg: "primary", 
                    color: "white",
                    scale:1.05
                }}
                _active={{
                    bg: "primary", 
                    color: "white",
                }}
            >
            <Flex align="center">
                <IconButton size={"lg"}  aria-label={props.text}
                color={props.color}
                >
                    {props.icon}
                </IconButton>
                <Text fontWeight={"medium"} ml={2} color={props.color}>
                    {props.text}
                </Text>
            </Flex>
        </Box>
        
        </>
    )
}

export default NavItem;