import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Stack,
} from '@chakra-ui/react';
import Schedule from './components/Schedule/Schedule';
import Subject from './components/Subject/Subject';

const Main: React.FC = () => {
  return (
    <Container maxW="5xl" pt={24} pb={8}>
      <Stack spacing={8}>
        <Tabs position="relative" colorScheme="cyan" isFitted>
          <TabList>
            <Tab>📘 Schedule</Tab>
            <Tab>✏️ Add subject</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Schedule />
            </TabPanel>
            <TabPanel px={0}>
              <Subject />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text mt="auto" color="gray.300" fontSize="sm" textAlign="center">
          Position «Strong Junior Full-Stack Developer» &copy; SoloWay.
        </Text>
      </Stack>
    </Container>
  );
};

export default Main;
