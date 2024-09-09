import {
  Divider,
  HStack,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from '@chakra-ui/react';
import { useTSContext } from '../../contexts/TSContext';
import { useRef, useState } from 'react';
import { deleteSchedule } from '../../api';
import SubjectListItem from './SubjectListItem';

const SubjectList: React.FC = () => {
  const { schedule, setSchedule, fetchAssignments } = useTSContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [subjectId, setSubjectId] = useState<number | null>(null);
  const dialogSubjectRef = useRef<HTMLButtonElement>(null);

  const handleDeleteSubject = async () => {
    onClose();

    if (subjectId) {
      const response = await deleteSchedule(subjectId);

      if (response.success) {
        setSchedule(schedule.filter((schedule) => schedule.id !== subjectId));
        fetchAssignments();
      }
    }
  };

  return (
    <>
      <Divider my={4} />
      <HStack spacing={2} wrap="wrap">
        {schedule &&
          schedule.map(({ id, subject, day }) => (
            <SubjectListItem
              key={id}
              id={id}
              subject={subject}
              day={day}
              setSubjectId={setSubjectId}
              onOpenDialog={onOpen}
            />
          ))}
      </HStack>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={dialogSubjectRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete subject?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            This item will be removed from the database.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={dialogSubjectRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleDeleteSubject}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SubjectList;
