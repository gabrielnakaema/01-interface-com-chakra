import { Box, Center, Divider, Image, Stack, Text } from '@chakra-ui/react';
import ContinentSwiper from '../components/ContinentSwiper';

import TravelType from '../components/TravelType';

export default function Home() {
  return (
    <Box>
      <Image src="/images/home/banner.png" alt="" w="full" />
      <Stack direction="row" spacing="36" justifyContent="center" mt="20">
        <TravelType
          title="vida noturna"
          imageUrl="/images/home/nightlife.svg"
        />
        <TravelType title="praia" imageUrl="/images/home/beach.svg" />
        <TravelType title="moderno" imageUrl="/images/home/modern.svg" />
        <TravelType title="clássico" imageUrl="/images/home/classic.svg" />
        <TravelType title="e mais..." imageUrl="/images/home/earth.svg" />
      </Stack>
      <Center>
        <Divider
          orientation="horizontal"
          mt="20"
          mb="12"
          w="20"
          borderWidth="thin"
          borderColor="gray.700"
        />
      </Center>
      <Center display="flex" flexDirection="column" textAlign="center">
        <Text fontSize="2xl" fontWeight="medium">
          Vamos nessa?
        </Text>
        <Text fontSize="2xl" fontWeight="medium">
          Então escolha seu continente
        </Text>
      </Center>
      <Box mx="auto" maxW="4xl" w="95vw" my="10">
        <ContinentSwiper />
      </Box>
    </Box>
  );
}
