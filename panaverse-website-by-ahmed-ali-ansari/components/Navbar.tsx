import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { BellIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/panaverse.png";
import Bar from "./icons/Bar";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      color={colorMode === "light" ? "gray.900" : "gray.100"}
      boxShadow="lg"
      bg={
        "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
      }
      opacity="initial"
      position={"fixed"}
    >
      <Container maxW="1400">
        {/*we have 3 divs each into one row */}
        <SimpleGrid
          templateColumns={{ base: "repeat(6,1fr)", lg: "repeat(7,1fr)" }}
          placeItems={"center"}
          height={"97px"}
        >
          <Box
            width={{ base: "100px", lg: "150px" }}
            position="relative"
            left={"35px"}
          >
            <Link href={"/"}>
              <Image src={logo} alt="panaverse logo"></Image>
            </Link>
          </Box>

          <Flex
            display={{ lg: "flex", base: "none" }}
            marginLeft={"140"}
            fontSize="18"
            fontWeight={"semi-bold"}
            fontFamily="sans-serif"
            gap={{ base: "5", md: "5", lg: "10" }}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/courses"}>Courses</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
          </Flex>
          <Box marginLeft={"38px"}>
            <Button
              display={{ lg: "initial", md: "initial", base: "none" }}
              left="262"
              float="right"
            >
              <Icon as={BellIcon} size={"50"}></Icon>
            </Button>
          </Box>
          <Box position="relative" left={"240px"}>
            <Icon
              display={{ lg: "initial", md: "initial", base: "none" }}
              as={Bar}
            ></Icon>
          </Box>
          <Box>
            <Button
              display={{ lg: "initial", md: "initial", base: "none" }}
              float="right"
              left={"206px"}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>

          <Box>
            <Link href={"https://portal.piaic.org/signup"}>
              <Button
                onClick={() => "https://portal.piaic.org/signup"}
                display={{ lg: "initial", md: "initial", base: "none" }}
                size={{ md: "md", lg: "lg" }}
                bg="#11AD8E"
                left={{ lg: "30px", md: "-30px" }}
                marginLeft={"250px"}
                marginY={{ base: "6px" }}
              >
                Apply Now
              </Button>
            </Link>
          </Box>
          <Box display={{ lg: "none", base: "initial" }}>
            <Menu>
              <MenuButton
                float="right"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  {" "}
                  <Link href={"/"}>Home</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href={"/courses"}>Courses</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href={"/about"}>About</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link href={"/contact"}>contact</Link>
                </MenuItem>
                <MenuItem icon={<BellIcon />}>Notify</MenuItem>
                <MenuItem
                  onClick={toggleColorMode}
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                >
                  {colorMode === "light" ? "Dark Theme" : "Light Theme"}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Navbar;
