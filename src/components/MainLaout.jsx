import { Grid, GridItem } from "@chakra-ui/react";
import DashboardStats from "./DashboardStats";
import UserDistribution from "./UserDistribution";
import UserActivity from "./UserActivity";
import ActivityLog from "./AcitivityLog";

const MainLayout = () => {
    return ( 
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
            gap={6}
            p={{ base: 4, md: 6 }}
        >
            
            <GridItem colSpan={{ base: 12, md: 9 }}>
                <DashboardStats />
            </GridItem>

            <GridItem colSpan={{ base: 12, md: 3 }} rowSpan={{ base: 1, md: 2 }}>
                <UserDistribution />
            </GridItem>

            <GridItem colSpan={{ base: 12, md: 9 }}>
                <UserActivity />
            </GridItem>

            <GridItem colSpan={12}>
                <ActivityLog />
            </GridItem>
        </Grid>
    )
}

export default MainLayout;