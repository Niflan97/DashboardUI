import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Tooltip } from "./ui/tooltip";
import { useState } from "react";

const data = [
    { name: "Staff", value: 450 },
    { name: "Students", value: 280 },
    { name: "Guests", value: 200 },
    { name: "Others", value: 121 }
  ];
  const COLORS = ["#004E64", "#00A5CF", "#78CDD7", "#25A18E"];
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  const CustomLabel = ({ totalValue }) => {
    return (
        <>
        <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '20px', fontWeight: 'bold' }}
        >
            {totalValue}
        </text>
        </>
      
    );
  };

  const ByUsers = (props) => {
    return (
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Flex alignItems="center" gap={2}>
          <Box h={6} w={6} bg={props.bgColor} borderRadius={4} />
          <Text fontSize={12} >
            {props.label}
          </Text>
        </Flex>
        <Text fontSize={12} fontWeight="bold">
          {props.value}
        </Text>
      </Flex>
    );
  };

  const ByAuthMethod = (props) => {
    return (
        <>
        <Text>
            {props.label}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" width="100%" mt={-3}>
            <Box h={2} w={props.width} bg={props.bgColor}  />
            <Text fontSize={12} fontWeight="bold">
                {props.value}
            </Text>
        </Flex>
        </>
    );
  };

const UserDistribution = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
        <Box background={"white"} borderRadius={"8px"}  p={5} h={"100%"} >
             
            <Text fontSize={14} fontWeight={"bold"} mb={2}>
                Daily Active Users
            </Text>   
            <ResponsiveContainer height={240}>
                <PieChart >
                    <Pie 
                        data={data} 
                        dataKey="value" 
                        nameKey="name" 
                        outerRadius={80} 
                        innerRadius={50}
                        cx={"50%"}
                        cy={"40%"}
                        paddingAngle={3}
                        onMouseEnter={(_, index) => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animationDuration={300} 
                        labelLine = {false}
                        label = {<CustomLabel totalValue={totalValue} />}

                    >

                        {data.map((_, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={ COLORS[index % COLORS.length]}
                                style={{
                                    transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                                    transition: "transform 0.3s ease-in-out",
                                    transformOrigin: "center",
                                    }}
                                
                                />
                        ))}

                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <VStack alignItems="flex-start" spacing={4} width="100%" mt={-12}>
                <ByUsers label="Staff" bgColor="#004E64" value="150" />
                <ByUsers label="Students" bgColor="#00A5CF" value="280" />
                <ByUsers label="Guests" bgColor="#78CDD7" value="200" />
                <ByUsers label="Others" bgColor="#25A18E" value="121" />
            </VStack>

            <Text fontSize={14} fontWeight={"bold"} mt={4}> 
                By Athendication Method
            </Text>
            <VStack alignItems="flex-start" spacing={3} width="100%" >
                <ByAuthMethod label="Microsoft" width="70%" value="150" bgColor="#003049" />
                <ByAuthMethod label="Internal" width="85%" value="150" bgColor="#054A91" />
                <ByAuthMethod label="Small" width="50%" value="150" bgColor="#324376" />
            </VStack>


        </Box>
        </>
    )
}

export default UserDistribution;