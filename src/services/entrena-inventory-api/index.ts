import type {
  CreateDayOffProps,
  CreateEmployeeProps,
  CreateOrDeleteDayOffResponse,
  GetAttendancesByEmployeeIdResponse,
  GetAttendancesResponse,
  GetCategoriesResponse,
  GetDaysOffResponse,
  GetEmployeeByIdResponse,
  GetProductsResponse,
  GetReportProps,
  RegisterClockedOutProps,
  RegisterLunchEndProps,
  RegisterLunchStartProps,
  RegisterStartTimeProps,
  ScheduleResponse,
} from "./types";
import { API } from "../base";

// EMPLOYEE SERVICES
const getCategories = async () => {
  const response = await API.get<GetCategoriesResponse>("/category/list");
  return response.data;
};

const getEmployeeById = async (employeeId: string) => {
  const response = await API.get<GetEmployeeByIdResponse>(
    `/employee/${employeeId}`,
  );
  return response.data;
};

const createEmployee = async (newEmployee: CreateEmployeeProps) =>
  await API.post("/employee/create", newEmployee);

const deleteEmployee = async (employeeId: string) =>
  await API.delete(`/employee/delete/${employeeId}`);

// ATTENDANCE SERVICES
const getAttendances = async () => {
  const response = await API.get<GetAttendancesResponse>("/attendances/list");
  return response.data;
};

const getProducts = async () => {
  const response = await API.get<GetProductsResponse>("/product/list");
  return response.data;
};

const getAttendancesByEmployeeId = async (employeeId: string) => {
  const response = await API.get<GetAttendancesByEmployeeIdResponse>(
    `/attendances/employee/${employeeId}`,
  );
  return response.data;
};

const getProductDetailsById = async (productId: number) => {
  const response = await API.get<GetAttendancesByEmployeeIdResponse>(
    `/product/get/${productId}`,
  );
  return response.data;
};

const deleteAttendance = async (attendanceId: string) =>
  await API.delete(`/attendances/${attendanceId}`);

// DAY OFF SERVICES
const getDaysOff = async () => {
  const response = await API.get<GetDaysOffResponse>("/daysoff/list");
  return response.data;
};

const createDayOff = async (dayOffProps: CreateDayOffProps) =>
  await API.post<CreateOrDeleteDayOffResponse>("/daysoff/create", dayOffProps);

const deleteDayOff = async (dayOffId: string) =>
  await API.delete<CreateOrDeleteDayOffResponse>(`/daysoff/delete/${dayOffId}`);

// JOURNEY SERVICES

// SCHEDULE SERVICES
const registerStartTime = async (props: RegisterStartTimeProps) =>
  await API.post<ScheduleResponse>("/schedules/clockedIn", props);

const registerLunchStart = async (props: RegisterLunchStartProps) =>
  await API.post<ScheduleResponse>("/schedules/lunchstart", props);

const registerLunchEnd = async (props: RegisterLunchEndProps) =>
  await API.post<ScheduleResponse>("/schedules/lunchEnd", props);

const registerClockedOut = async (props: RegisterClockedOutProps) =>
  await API.post<ScheduleResponse>("/schedules/clockedOut", props);

// JUSTIFICATION SERVICES

// REPORT SERVICES
const getReportPdf = async (props: GetReportProps) => {
  const response = await API.get(
    `/report/pdf/${props.initialDate}/${props.finalDate}/${props.rfid}`,
  );
  return response.data;
};

const getReportHttp = async (props: GetReportProps) => {
  const response = await API.get(
    `/report/${props.initialDate}/${props.finalDate}/${props.rfid}`,
  );
  return response.data;
};

const apiInventory = {
  getCategories,
  getEmployeeById,
  getProductDetailsById,
  createEmployee,
  deleteEmployee,
  getAttendances,
  getAttendancesByEmployeeId,
  deleteAttendance,
  getDaysOff,
  createDayOff,
  deleteDayOff,
  registerStartTime,
  registerLunchStart,
  registerLunchEnd,
  registerClockedOut,
  getReportPdf,
  getReportHttp,
  getProducts,
};

export default apiInventory;
