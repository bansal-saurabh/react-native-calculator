import React, { Fragment } from "react";
import {
  Text,
  HStack,
  Center,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  IconButton,
  Icon,
  Divider,
  TextArea,
  StatusBar,
  Box,
} from "native-base";
// import NativeBaseIcon from "./components/NativeBaseIcon";
import { Feather, Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import operations, { initialState } from "./utils/operations";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// Calculator UI
export class Calculator extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => operations(type, value, state));
  };

  render() {
    return (
      <Fragment>
        <HStack space={2} alignItems="center" flex={10}>
          <TextArea
            flex={1}
            h={300}
            placeholder="0"
            fontSize="xl"
            showSoftInputOnFocus={false}
          >
            {parseFloat(this.state.currentValue).toLocaleString()}
          </TextArea>
        </HStack>

        <Divider my="5" />

        <HStack space={2} alignItems="center" flex={2}>
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="blueGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="alpha-c" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("clear")
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="blueGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="plus-minus-variant" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("posneg")
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="blueGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="percent-outline" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("percentage")
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warning"
            icon={
              <Icon as={MaterialCommunityIcons} name="slash-forward" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("operator", "/")
            }}
          />
        </HStack>

        <Divider my="1" />

        <HStack space={2} alignItems="center" flex={2}>
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-7" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 7)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-8" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 8)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-9" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 9)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warning"
            icon={
              <Icon as={Feather} name="x" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("operator", "*")
            }}
          />
        </HStack>

        <Divider my="1" />

        <HStack space={2} alignItems="center" flex={2}>
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-4" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 4)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-5" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 5)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-6" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 6)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warning"
            icon={
              <Icon as={MaterialCommunityIcons} name="minus" size="md" color="warmGray.50" />
            }
            onPress={() => {
              handleTap("operator", "-")
            }}
          />
        </HStack>

        <Divider my="1" />

        <HStack space={2} alignItems="center" flex={2}>
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-1" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 1)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-2" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 2)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-3" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 3)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warning"
            icon={
              <Icon as={MaterialCommunityIcons} name="plus" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("operator", "+")
            }}
          />
        </HStack>

        <Divider my="1" />

        <HStack space={2} alignItems="center" flex={2}>
          <IconButton
            flex={2}
            borderRadius="full"
            size="lg"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={MaterialCommunityIcons} name="numeric-0" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", 0)
            }}
          />
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            alignItems="center"
            variant="solid"
            alignItems="center"
            colorScheme="warmGray"
            icon={
              <Icon as={Entypo} name="dot-single" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("number", ".")
            }}
          >
          </IconButton>
          <IconButton
            flex={1}
            borderRadius="full"
            size="lg"
            alignItems="center"
            variant="solid"
            alignItems="center"
            colorScheme="warning"
            icon={
              <Icon as={MaterialCommunityIcons} name="equal" size="md" color="warmGray.50" />
            }
            onPress={() => {
              this.handleTap("equal")
            }}
          />
        </HStack>

        <Divider my="2" />

      </Fragment>

    )

  }

}

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar safeAreaTop backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#6200ee" />

      <HStack bg='#6200ee' px="4" py="4" justifyContent='space-between' alignItems='center'>
        <HStack space="2" alignItems='center'>
          <Text color="white" fontSize="20" fontWeight='bold'>Calculator</Text>
        </HStack>
        <HStack space="2">
          <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
        </HStack>
      </HStack>

      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">

          <ToggleDarkMode />

          <Calculator />

        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" flex={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
