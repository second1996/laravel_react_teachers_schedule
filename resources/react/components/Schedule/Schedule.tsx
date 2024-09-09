import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import ScheduleForm from './ScheduleForm';
import ScheduleTable from './ScheduleTable';
import { useTSContext } from '../../contexts/TSContext';

const Schedule: React.FC = () => {
  const {
    teachers,
    schedule,
    assignments,
    fetchTeachers,
    fetchSchedule,
    fetchAssignments,
  } = useTSContext();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchTeachers(), fetchSchedule(), fetchAssignments()]).finally(
      () => setLoading(false)
    );
  }, []);

  return (
    <SimpleGrid
      columns={{
        base: 1,
        lg: 2,
      }}
      spacing={4}
      alignItems={'start'}
    >
      <Box boxShadow="xs" p="6" rounded="md" bg="white">
        {schedule && (
          <ScheduleForm
            teachers={teachers}
            schedule={schedule}
            fetchAssignments={fetchAssignments}
            isLoading={isLoading}
          />
        )}
      </Box>
      <Box boxShadow="xs" p="6" rounded="md" bg="white">
        <Heading as="h1" size="md" mb={4}>
          Schedule
        </Heading>
        {assignments && (
          <ScheduleTable assignments={assignments} isLoading={isLoading} />
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Schedule;
