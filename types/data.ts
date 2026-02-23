// enums
export type CertificateCategory =
  | "สนับสนุนนโยบายสิ่งแวดล้อม"
  | "ความปลอดภัยและอาชีวอนามัย"
  | "งานขายและงานบริการ"
  | "การใช้งาน Software"
  | "การนำเสนอ"
  | "Leadership Development"
  | "การใช้งานเครื่องจักรและซ่อมบำรุง"
  | "กระบวนการคิด วิเคราะห์"
  | "พัฒนาทักษะกระบวนการทำงาน"
  | "การจัดซื้อจัดจ้าง"
  | "การสื่อสาร"
  | "โครงการสัมมนาอื่นๆ"
  | "พัฒนาขีดความสามารถระดับบริหาร"
  | "การเงินและการบัญชี";

export type CertificateStatus = "Pending" | "Approved" | "Rejected";

// main type
export type Certificate = {
  id: number;
  userId: number;
  userName: string;
  employeeId: string;
  department: string;
  division: string;
  category: CertificateCategory;
  trainingId: number;
  trainingName: string;
  image: string;
  description: string;
  status: CertificateStatus;
  createdAt: string; // ISO string from backend
  updatedAt: string; // ISO string from backend
};

export type Course = {
  id: number;

  name: string;
  calendarEventId?: string;

  speakerInstitute: string;

  type: "Online" | "Onsite" | "Hybrid";
  category:
    | "Technical Skills"
    | "Soft Skills"
    | "Leadership"
    | "Safety"
    | "Compliance";

  date: string; // ISO timestamp

  numberOfDays: number;
  numberOfHours: number;

  location: string;

  totalCost: number;
  budgetCode: string;

  numberOfPerson: number;
  costPerPerson: number;
  content?: string;
};
export type TrainingPlanStaff = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: Department;
  departmentId: string;
  role: string;
  position: string;
  agency: string;
  cotton: string;
  line: string;
  status: "active" | "inactive" | "suspended";
};

export type OjtRecord = {
  id: number;
  staff: TrainingPlanStaff;
  course: Course;
  status: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  evaluation?: string;
  prePostTestScore?: string;
};

export type Staff = {
  id: string;
  name: string;
  position: string;
};

export type Department = {
  id: string;
  name: string;
  manager: Staff;
  staff: Staff[];
  division: string;
};
