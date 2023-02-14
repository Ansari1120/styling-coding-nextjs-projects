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
import logo from "../public/logo.png";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      color={colorMode === "light" ? "gray.900" : "gray.200"}
      boxShadow="lg"
      bg={
        "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
      }
    >
      <Container maxW="1400">
        {/*we have 3 divs each into one row */}
        <SimpleGrid
          templateColumns={{ base: "repeat(5,1fr)", lg: "repeat(6,1fr)" }}
          placeItems={"center"}
          height={"97px"}
        >
          <Box width={{ base: "100px", lg: "initial" }}>
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
            <Link href={""}>Home</Link>
            <Link href={""}>Syllabus</Link>
            <Link href={""}>Explore</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>About</Link>
          </Flex>
          <Box>
            <Button
              display={{ lg: "initial", md: "initial", base: "none" }}
              left="59"
              float="right"
            >
              <Icon as={BellIcon} size={"50"}></Icon>
            </Button>
          </Box>
          <Box>
            <Button
              display={{ lg: "initial", md: "initial", base: "none" }}
              float="right"
              right="30"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>

          <Box>
            <Button
              display={{ lg: "initial", md: "initial", base: "none" }}
              size={{ md: "md", lg: "lg" }}
              bg="#11AD8E"
              left={{ lg: "30", md: "-30px" }}
              marginY={{ base: "6px" }}
            >
              Apply
            </Button>
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
                <MenuItem>Home</MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
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
