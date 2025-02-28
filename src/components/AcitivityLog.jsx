import { Box, Button, Color, Flex, Link, Spacer, Tabs, Text } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { FiTrash } from "react-icons/fi";

const activityData = [
    { id: 1, user: "M", title: "User Updated", time: "2mins ago", description: "User name here permission changed to admin by admin12" },
    { id: 2, user: "M", title: "User Updated", time: "2hrs ago", description: "User name here permission changed to admin by admin12" }
  ];


const ActivityLog = () => {
    return (
        <>
        <Box bg="white" p={4} borderRadius="lg" >
            <Tabs.Root  defaultValue="activity_log" variant={"line"}>
                <Tabs.List>
                    <Tabs.Trigger value="activity_log" asChild >
                        <Link unstyled href="#activity_log" fontSize={13} 
                            transition="all 0.3s ease-in-out"
                            _hover={{ color: 'primary' }} 
                            _activeLink={{ color: 'primary' }}
                        >
                            Activity Log
                        </Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="deleted_log" asChild>
                        <Link unstyled href="#deleted_log" fontSize={13} transition="all 0.3s ease-in-out"
                            _hover={{ color: 'primary' }} 
                            _activeLink={{ color: 'primary' }}
                        >
                            Delted Log
                        </Link>
                    </Tabs.Trigger>
                    <Spacer />
                    <Button color={"gray.400"} fontSize={10} transition="all 0.3s ease-in-out"
                    _hover={{ color: 'primary' }} 
                    >
                        Clear
                    </Button>
                </Tabs.List>
                
                <Tabs.Content value="activity_log">
                    {activityData.map((item) => (
                        <Box key={item.id} bg="backgroundLight" p={4} borderRadius="md" mb={2} 
                        transition="all 0.3s ease-in-out"
                        _hover={{transform: 'scale(1.02)', boxShadow: "0px 4px 10px rgba(148, 148, 148, 0.5)"}}
                        >
                            <Flex align={"center"}>
                                <Avatar size="sm" name={item.user} bg="orange.400" color="white"/>
                                <Box ml={3}>
                                    <Text fontWeight="bold">{item.title}</Text>
                                    <Text fontSize="sm" color="gray.500">{item.time}</Text>
                                    <Text fontSize="sm">{item.description}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Tabs.Content>
                <Tabs.Content value="deleted_log">
                    <Flex align="center" justify="center" color="gray.500">
                        <FiTrash size={20} />
                        <Text ml={2}>No deleted logs</Text>
                    </Flex>
                </Tabs.Content>
            </Tabs.Root>
        </Box>
        
        </>
    )
}

export default ActivityLog;