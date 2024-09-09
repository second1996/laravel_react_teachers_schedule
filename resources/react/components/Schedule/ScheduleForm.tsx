import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { DayEnum, IAssignmentCreate, ISchedule, ITeacher } from '../../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { assignTeacher } from '../../api';

interface ScheduleFormProps {
  teachers: ITeacher[];
  schedule: ISchedule[];
  fetchAssignments: () => void;
  isLoading?: boolean;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({
  teachers,
  schedule,
  fetchAssignments,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IAssignmentCreate>();

  const onSubmit: SubmitHandler<IAssignmentCreate> = async (data) => {
    await assignTeacher(data);
    fetchAssignments();
    reset();
  };

  if (isLoading) {
    return (
      <Stack spacing={3}>
        <Skeleton height="20px" />
        <Skeleton height="38px" />
        <Skeleton height="20px" />
        <Skeleton height="38px" />
        <Skeleton height="40px" width="40%" />
      </Stack>
    );
  }

  if (!schedule.length) {
    return (
      <Stack spacing={4}>
        <Heading as="h2" size="md">
          There are no items 🥱
        </Heading>
        <Text>Make changes under "Add Item"</Text>
      </Stack>
    );
  } else {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl isInvalid={!!errors.teacher_id}>
            <FormLabel htmlFor="schedule-teacher_id">Teacher</FormLabel>
            <Select
              id="schedule-teacher_id"
              placeholder="Choose a teacher"
              {...register('teacher_id', {
                required: 'This field is required',
              })}
            >
              {teachers &&
                teachers.map(({ id, first_name, last_name }) => (
                  <option value={id} key={id}>
                    {last_name} {first_name}
                  </option>
                ))}
            </Select>
            <FormErrorMessage>
              {errors.teacher_id && errors.teacher_id.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.schedule_id}>
            <FormLabel htmlFor="schedule-schedule_id">Subject</FormLabel>
            <Select
              id="schedule-schedule_id"
              placeholder="Choose a subject"
              {...register('schedule_id', {
                required: 'This field is required',
              })}
            >
              {schedule &&
                schedule.map(({ id, day, subject }) => (
                  <option value={id} key={id}>
                    {subject} ({DayEnum[day]})
                  </option>
                ))}
            </Select>
            <FormErrorMessage>
              {errors.schedule_id && errors.schedule_id.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          type="submit"
          mt={4}
          colorScheme="blue"
          isLoading={isSubmitting}
          loadingText="Submitting"
        >
          Add to schedule
        </Button>
      </form>
    );
  }
};

export default ScheduleForm;
