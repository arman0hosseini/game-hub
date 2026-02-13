import wow from "../assets/emojies/wow.webp";
import like from "../assets/emojies/like.webp";
import meh from "../assets/emojies/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: like, alt: "Like", boxSize: "25px" },
    5: { src: wow, alt: "Wow", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
