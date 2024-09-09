import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Divider,
  Stack,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { DayEnum, IAssignment } from '../../types';

interface ScheduleTableProps {
  assignments: IAssignment[];
  isLoading?: boolean;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({
  assignments,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Stack spacing={3}>
        <Skeleton height="1px" />
        <Skeleton height="20px" />
        <Skeleton height="8px" />
        <Skeleton height="8px" />
        <Skeleton height="8px" />
        <Skeleton height="8px" />
      </Stack>
    );
  }

  if (!assignments.length) {
    return <Text>There are no records...</Text>;
  } else {
    return (
      <>
        <Divider mb={4} />
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Teacher</Th>
                <Th>Subject</Th>
                <Th>Day</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assignments.map(({ id, teacher, subject, day }) => (
                <Tr key={id}>
                  <Td>{teacher}</Td>
                  <Td>{subject}</Td>
                  <Td>
                    <Badge variant="outline" colorScheme="green">
                      {DayEnum[day]}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default ScheduleTable;
