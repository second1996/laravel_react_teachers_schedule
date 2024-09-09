import { useForm, SubmitHandler } from 'react-hook-form';
import { saveSchedule } from '../../api';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';
import { IScheduleCreate } from '../../types';
import { useTSContext } from '../../contexts/TSContext';

const SubjectForm: React.FC = () => {
  const { fetchSchedule } = useTSContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IScheduleCreate>();

  const onSubmit: SubmitHandler<IScheduleCreate> = async (data) => {
    try {
      await saveSchedule(data);
      fetchSchedule();
      reset();
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors.day}>
          <FormLabel htmlFor="schedule-day">Day of the week</FormLabel>
          <Select
            id="schedule-day"
            placeholder="Choose a day of the week"
            {...register('day', {
              required: 'This field is required',
            })}
          >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </Select>
          <FormErrorMessage>
            {errors.day && errors.day.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.subject}>
          <FormLabel htmlFor="schedule-subject">Subject</FormLabel>
          <Input
            id="schedule-subject"
            placeholder="Mathematics"
            {...register('subject', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/,
                message: 'This field can only contain letters',
              },
              minLength: {
                value: 4,
                message: 'The minimum number of letters is at least 4',
              },
            })}
          />
          <FormErrorMessage>
            {errors.subject && errors.subject.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <Button
        type="submit"
        mt={4}
        colorScheme="orange"
        isLoading={isSubmitting}
        loadingText="Submitting"
      >
        Add subject
      </Button>
    </form>
  );
};

export default SubjectForm;
