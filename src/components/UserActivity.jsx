import { Box, Text } from "@chakra-ui/react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Tooltip } from "./ui/tooltip";

const data = [
    { name: "1 Sep", value: 200 },
    { name: "2 Sep", value: 700 },
    { name: "3 Sep", value: 1000 },
    { name: "4 Sep", value: 400 },
    { name: "5 Sep", value: 800 },
    { name: "6 Sep", value: 1200 }
  ];

const UserActivity = () => {
    return (
        <Box p={5} background={"white"} borderRadius={"8px"} h={"full"}
        transition="all 0.3s ease-in-out"
        _hover={{scale:1.02, boxShadow: "0px 5px 10px rgba(148, 148, 148, 0.5)"}}>
            <Text fontSize={14} fontWeight={"bold"} mb={2}>
                User Activity
            </Text>
            <ResponsiveContainer width={"100%"} height={250} >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray={"3 3"} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type={"monotone"} dataKey="value" /> 
                </LineChart>
            </ResponsiveContainer>


        </Box>
    )
}

export default UserActivity;