import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Box padding={2}>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {isLoading && skeleton.map((genre) => <GenreSkeleton key={genre} />)}

        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={1} listStyleType="none">
              <HStack>
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  variant={selectedGenre?.id === genre.id ? "subtle" : "ghost"}
                  fontSize="lg"
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  flexGrow="1"
                  justifyContent="flex-start"
                  onClick={() => onSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List.Root>
    </Box>
  );
};

export default GenreList;
