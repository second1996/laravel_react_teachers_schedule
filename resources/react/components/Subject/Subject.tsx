import { Box, Stack } from '@chakra-ui/react';
import SubjectForm from './SubjectForm';

import SubjectList from './SubjectList';
import { useTSContext } from '../../contexts/TSContext';

const Subject: React.FC = () => {
  const { schedule } = useTSContext();

  return (
    <Stack spacing={4}>
      <Box boxShadow="xs" p="6" rounded="md" bg="white">
        <SubjectForm />
        {schedule.length > 0 && <SubjectList />}
      </Box>
    </Stack>
  );
};

export default Subject;
