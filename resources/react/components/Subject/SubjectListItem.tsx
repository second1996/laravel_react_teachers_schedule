import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { DayEnum } from '../../types';

interface SubjectListItemProps {
  id: number;
  subject: string;
  day: keyof typeof DayEnum;
  setSubjectId: (props: any) => void;
  onOpenDialog: () => void;
}

const SubjectListItem: React.FC<SubjectListItemProps> = ({
  id,
  subject,
  day,
  setSubjectId,
  onOpenDialog,
}) => {
  return (
    <Tag size="md" borderRadius="full" variant="subtle" colorScheme="gray">
      <TagLabel>
        <strong>{subject}</strong> ({DayEnum[day]})
      </TagLabel>
      <TagCloseButton
        onClick={() => {
          onOpenDialog();
          setSubjectId(id);
        }}
      />
    </Tag>
  );
};

export default SubjectListItem;
