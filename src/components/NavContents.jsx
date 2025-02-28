import NavItem from "./NavItem";
import {  IoIosHelpCircleOutline, } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FcSurvey } from "react-icons/fc";
import { SiDatabricks } from "react-icons/si";
import { LuLibrary } from "react-icons/lu";
import { AiOutlineShop } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Separator } from "@chakra-ui/react";

const NavContents = () => {
    return (
        <>
            <NavItem icon={<MdOutlineSpaceDashboard />} text="Dashboard" />
            <NavItem icon={<SiDatabricks />} text="Data Labs" />
            <NavItem icon={<FcSurvey />} text="Surveys" />
            <NavItem icon={<LuLibrary />} text="Library" />
            <NavItem icon={<AiOutlineShop />} text="MarketPlace" />
            <Separator
                borderColor="gray.200"
                borderWidth="1px"
                opacity={0.5}
                w={"100%"}
                />
                        
            <NavItem icon={<IoSettingsOutline />} text="Settings" />
            <NavItem icon={<IoIosHelpCircleOutline />} text="Support" />
        </>
    )

}

export default NavContents;