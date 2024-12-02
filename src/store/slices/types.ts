import { Employee } from "@/src/data/types";

export interface MapState {
  isActiveButton: number;
}

export interface EmployeesState {
  employees: Employee[];
  selectedEmployee: Employee | null;
}
