import { OjtRecord } from "@/types/data";
import { trainingPlanStaff } from "./staff";
import { courses } from "./courses";

export const ojtRecords: OjtRecord[] = [
  {
    id: 1,
    staff: trainingPlanStaff[0],
    course: courses[0],
    status: "COMPLETED",
  },
  {
    id: 2,
    staff: trainingPlanStaff[1],
    course: courses[0],
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    staff: trainingPlanStaff[2],
    course: courses[0],
    status: "NOT_STARTED",
  },
];
