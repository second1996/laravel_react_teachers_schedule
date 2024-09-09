import { createContext, ReactNode, useContext, useState } from 'react';
import { IAssignment, ISchedule, ITeacher } from '../types';
import { getAssignments, getSchedule, getTeachers } from '../api';

interface TSContextType {
  teachers: ITeacher[];
  schedule: ISchedule[];
  assignments: IAssignment[];
  setSchedule: (props: any) => void;
  fetchTeachers: () => void;
  fetchSchedule: () => void;
  fetchAssignments: () => void;
}

export const TSContext = createContext<TSContextType | undefined>(undefined);

export const TSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);
  const [assignments, setAssignments] = useState<IAssignment[]>([]);

  const fetchTeachers = async () => {
    console.log('🔄️ Teachers fetching');
    const response = await getTeachers();
    setTeachers(response);
  };

  const fetchSchedule = async () => {
    console.log('🔄️ Schedule fetching');
    const response = await getSchedule();
    setSchedule(response);
  };

  const fetchAssignments = async () => {
    console.log('🔄️ Assignments fetching');
    const response = await getAssignments();
    setAssignments(response);
  };

  return (
    <TSContext.Provider
      value={{
        teachers,
        schedule,
        assignments,
        setSchedule,
        fetchTeachers,
        fetchSchedule,
        fetchAssignments,
      }}
    >
      {children}
    </TSContext.Provider>
  );
};

export const useTSContext = () => {
  const context = useContext(TSContext);

  if (!context) {
    throw new Error('useTSContext must be used within an AssignmentsProvider');
  }

  return context;
};

export default TSProvider;
