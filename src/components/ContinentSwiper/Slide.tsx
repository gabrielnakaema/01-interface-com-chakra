import { Center, Text } from '@chakra-ui/react';

interface SlideProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  shouldTint?: boolean;
}

export function Slide({
  title,
  subtitle,
  imageUrl,
  shouldTint = false,
}: SlideProps) {
  return (
    <Center
      bg={
        shouldTint
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`
          : `url(${imageUrl})`
      }
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgBlendMode=""
      w="full"
      display="flex"
      flexDirection="column"
      color="white"
      h="450px"
    >
      <Text fontSize="4xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="lg" fontWeight="semibold" mt="2">
        {subtitle}
      </Text>
    </Center>
  );
}
