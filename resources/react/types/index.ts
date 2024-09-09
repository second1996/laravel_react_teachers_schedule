export enum DayEnum {
  monday = 'Monday',
  tuesday = 'Tuesday',
  wednesday = 'Wednesday',
  thursday = 'Thursday',
  friday = 'Friday',
}

export interface ICommonResponse {
  success: boolean;
  message: string;
}

export interface ITeacher {
  id: number;
  first_name: string;
  last_name: string;
}

export interface IScheduleCreate {
  day: keyof typeof DayEnum;
  subject: string;
}

export interface ISchedule extends IScheduleCreate {
  id: number;
}

export interface IAssignment {
  id: string;
  teacher: string;
  subject: string;
  day: keyof typeof DayEnum;
}

export interface IAssignmentCreate {
  teacher_id: string;
  schedule_id: string;
}

export interface IGetSchedulesResponse extends ICommonResponse {
  items: ISchedule[];
}

export interface IGetTeachersResponse extends ICommonResponse {
  items: ITeacher[];
}

export interface IGetAssignmentResponse extends IAssignment {
  items: IAssignment[];
}
