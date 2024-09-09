import tsAxios from '../axiosConfig';
import {
  IScheduleCreate,
  IAssignmentCreate,
  IGetSchedulesResponse,
  IGetTeachersResponse,
  IGetAssignmentResponse,
} from '../types';

export const saveSchedule = async (schedule: IScheduleCreate) => {
  return (await tsAxios.post<IScheduleCreate>('/schedule', schedule)).data;
};

export const deleteSchedule = async (id: number | null) => {
  return (await tsAxios.delete(`/schedule/${id}`)).data || null;
};

export const getSchedule = async () => {
  return (
    (await tsAxios.get<IGetSchedulesResponse>('/schedule')).data.items || []
  );
};

export const getTeachers = async () => {
  return (
    (await tsAxios.get<IGetTeachersResponse>('/teachers')).data.items || []
  );
};

export const assignTeacher = async (assignment: IAssignmentCreate) => {
  return (
    (await tsAxios.post<IAssignmentCreate>('/teachers/assign', assignment))
      .data || []
  );
};

export const getAssignments = async () => {
  return (
    (await tsAxios.get<IGetAssignmentResponse>('/teachers/assignments')).data
      .items || []
  );
};
