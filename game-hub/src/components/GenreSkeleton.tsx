import { ListItem, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY={1} listStyleType={"none"}>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
