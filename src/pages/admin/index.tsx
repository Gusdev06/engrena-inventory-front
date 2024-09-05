import PageTemplate from "@/components/page/page-template";
import apiInventory from "@/services/entrena-inventory-api";
import type { Attendance, EmployeeMin } from "@/services/entrena-inventory-api/types";
import { useQuery } from "@tanstack/react-query";
import {
  LuBoxes,
  LuUsers,
  LuAlignLeft
} from "react-icons/lu";
import AdminCard from "./components/card";
import EmployeesPage from "@/pages/employees";


export default function AdminPage() {
  const { data: employeesData } = useQuery({
    queryKey: ["apiInventory.getEmployees"],
    queryFn: async () => {
      const response = await apiInventory.getCategories();
      return response.result;
    },
  });

  const { data: todayAttendancesData } = useQuery({
    queryKey: ["apiInventory.getProducts"],
    queryFn: async () => {
      const response = await apiInventory.getProducts();
      const data = response.result;
      // const today = new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD'
      // const todaysSchedules = Array.isArray(data)
      //   ? data.filter((item) => item.clockedIn.startsWith(today))
      //   : [data];
      // return todaysSchedules;
    },
  });

  // const lunchTime = () => {
  //   const employeesLunching: EmployeeMin[] = [];
  //   if (todayAttendancesData) {
  //     todayAttendancesData.map((attendance: Attendance) => {
  //       if (attendance?.lunchStart && !attendance?.lunchEnd) {
  //         employeesLunching.push(attendance?.employee);
  //       }
  //     });
  //   }
  //   return employeesLunching;
  // };

  return (
    <PageTemplate>

      <section className="flex-wrap flex p-2">
        <AdminCard
          data={employeesData?.length}
          icon={<LuAlignLeft />}
          description="Categorias"
        />

        <AdminCard
          data={employeesData?.length}
          icon={<LuBoxes />}
          description="Produtos"
        />

        <AdminCard
          data={employeesData?.length}
          icon={<LuUsers />}
          description="Usuarios do sistema"
        />

        {/* <AdminCard
          data={lunchTime().length}
          icon={<LuSandwich />}
          description="Em horário de almoço"
        /> */}

        {/* TODO: Implementar lógica de férias */}
        {/* <AdminCard
          data={"{{ferias}}"}
          icon={<LuBaggageClaim />}
          description="Em período de férias"
        /> */}
      </section>
      <EmployeesPage />
    </PageTemplate>
  );
}
