import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeesState } from "./types";

const initialState: EmployeesState = {
  employees: [
    {
      id: 1,
      name: "Иван Иванов",
      position: "Менеджер",
      phone: "+79031234567",
      location: { lat: 55.7558, lng: 37.6173 },
      tracks: [
        {
          id: 19,
          title: "29 ноября",
          data: [
            {
              id: 20,
              time: "08:00 - 09:00",
              route: [
                { lat: 55.7512, lng: 37.6184 },
                { lat: 55.7601, lng: 37.6202 },
              ],
              duration: "1 час",
              distance: "5 км",
              averageSpeed: "5 км/ч",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Мария Смирнова",
      position: "Разработчик",
      phone: "+79031234568",
      location: { lat: 55.7624, lng: 37.6175 },
      tracks: [
        {
          id: 18,
          title: "30 ноября",
          data: [
            {
              id: 25,
              time: "09:00 - 10:00",
              route: [
                { lat: 55.7624, lng: 37.6175 },
                { lat: 55.77, lng: 37.625 },
              ],
              duration: "1 час",
              distance: "4.5 км",
              averageSpeed: "4.5 км/ч",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Дмитрий Павлов",
      position: "Аналитик",
      phone: "+79031234569",
      location: { lat: 55.749, lng: 37.607 },
      tracks: [
        {
          id: 10,
          title: "1 декабря",
          data: [
            {
              id: 28,
              time: "10:00 - 11:00",
              route: [
                { lat: 55.749, lng: 37.607 },
                { lat: 55.758, lng: 37.616 },
              ],
              duration: "1 час",
              distance: "6 км",
              averageSpeed: "6 км/ч",
            },
          ],
        },
        {
          id: 15,
          title: "2 декабря",
          data: [
            {
              id: 29,
              time: "10:00 - 19:00",
              route: [
                { lat: 55.749, lng: 37.607 },
                { lat: 55.758, lng: 37.616 },
              ],
              duration: "1 час",
              distance: "6 км",
              averageSpeed: "6 км/ч",
            },
          ],
        },
        {
          id: 17,
          title: "3 декабря",
          data: [
            {
              id: 21,
              time: "10:00 - 13:00",
              route: [
                { lat: 55.749, lng: 37.607 },
                { lat: 55.758, lng: 37.616 },
              ],
              duration: "1 час",
              distance: "6 км",
              averageSpeed: "6 км/ч",
            },
            {
              id: 22,
              time: "10:00 - 15:00",
              route: [
                { lat: 55.749, lng: 37.607 },
                { lat: 55.758, lng: 37.616 },
              ],
              duration: "1 час",
              distance: "500 м",
              averageSpeed: "6 км/ч",
            },
          ],
        },
      ],
    },
  ],
  selectedEmployee: null,
};

export const employeesSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    setSelectedEmployee(state, action: PayloadAction<number>) {
      state.selectedEmployee =
        state.employees.find((employee) => employee.id === action.payload) ||
        null;
    },
  },
});

export const { setSelectedEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
