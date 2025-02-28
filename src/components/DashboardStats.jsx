import { Badge, Box, Card, Flex, FormatNumber, HStack, Stat, Text } from "@chakra-ui/react";


const StatCards = (props) => {
    return (
        < Box
            flex="1" 
            minW={{ base: "100%", md: "calc(50% - 16px)", lg: "calc(25% - 16px)" }}
            mb={4}>
            <Stat.Root background={"white"}  borderRadius={"8px"} h={"full"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            transition="all 0.3s ease-in-out"
            _hover={{scale:1.05, boxShadow: "0px 4px 10px rgba(148, 148, 148, 0.5)"}}  
            >
            <Stat.Label p={3}>
                {props.lable}
            </Stat.Label>
            <HStack justify={"space-between"} px={3}>
                <Stat.ValueText fontSize="2xl" fontWeight="bold" color="gray.900">
                    <FormatNumber value={props.value} />
                </Stat.ValueText>
                { props.isIncrease ? 
                    <Badge color="secondary" bg="bgLightGreen">
                        <Stat.UpIndicator  color={"green"}/>
                        {props.indicatorValue}%
                    </Badge> 
                    :
                    <Badge color="warningRed" bg="bgLightRed">
                        <Stat.DownIndicator color={"Red"} />
                        {props.indicatorValue}%
                    </Badge> 
                }  
            </HStack>
            <Stat.HelpText bg={"backgroundLight"} p={3} borderBottomRadius={"8px"}>
                {props.helpText}
            </Stat.HelpText>
        </Stat.Root>
    </Box>
    );
};

const DashboardStats = () => {
    return (
    <Flex gap={4} wrap={"wrap"} h={"full"} >
        <StatCards lable= "Daily Active Users" value="1051" isIncrease={true} indicatorValue="12.5" helpText="Since 05 Feb" />
        <StatCards lable= "Monthly Active Users" value="1051" isIncrease={false} indicatorValue="12.5" helpText="Since 05 Feb" />
        <StatCards lable= "Daily Active Users" value="1051" isIncrease={true} indicatorValue="12.5" helpText="Since 05 Feb" />
        
    </Flex>
    ); 
}

export default DashboardStats;