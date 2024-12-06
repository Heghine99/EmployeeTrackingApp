import { Selector } from "react-redux";
import { RootState } from "../store";
import { EmployeesState, MapState } from "./types";
import { Employee } from "@/src/data/types";

export const mapListSelector: Selector<RootState, MapState> = (state) =>
  state.maps;

export const employeesSelector: Selector<RootState, EmployeesState> = (state) =>
  state.employees;
