import { Button, HStack, Icon, Menu, Portal, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap="2" justifyContent="center" alignItems="center">
            <Text fontSize="lg">Platform</Text>
            <Icon as={FaChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item value={platform.slug} key={platform.id}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
