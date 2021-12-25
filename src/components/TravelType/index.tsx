import { Image, Stack, Text } from '@chakra-ui/react';

interface TravelTypeProps {
  title: string;
  imageUrl: string;
}

export default function TravelType({ title, imageUrl }: TravelTypeProps) {
  return (
    <Stack textAlign="center" spacing="6">
      <Image src={imageUrl} alt="" h="20" />
      <Text color="gray.700" fontWeight="semibold" fontSize="xl" mt="auto">
        {title}
      </Text>
    </Stack>
  );
}
