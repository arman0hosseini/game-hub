import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <List.Root>
      {isLoading && skeleton.map((genre) => <GenreSkeleton key={genre} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1} listStyleType={"none"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="ghost"
              fontSize="lg"
              flexGrow="1"
              display="flex"
              justifyContent="flex-start"
              padding="5px"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
