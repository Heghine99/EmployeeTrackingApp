import { EmployeesData } from "./types";

export const Employees: EmployeesData = {
  employees: [
    {
      id: "1",
      name: "Иван Иванов",
      position: "Менеджер",
      phone: "+79031234567",
      location: { lat: 55.7558, lng: 37.6173 },
      tracks: [
        {
          date: "29 ноября",
          movements: [
            {
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
      id: "2",
      name: "Мария Смирнова",
      position: "Разработчик",
      phone: "+79031234568",
      location: { lat: 55.7624, lng: 37.6175 },
      tracks: [
        {
          date: "30 ноября",
          movements: [
            {
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
      id: "3",
      name: "Дмитрий Павлов",
      position: "Аналитик",
      phone: "+79031234569",
      location: { lat: 55.749, lng: 37.607 },
      tracks: [
        {
          date: "1 декабря",
          movements: [
            {
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
      ],
    },
    {
      id: "4",
      name: "Ольга Кузнецова",
      position: "Дизайнер",
      phone: "+79031234570",
      location: { lat: 55.7515, lng: 37.6205 },
      tracks: [
        {
          date: "2 декабря",
          movements: [
            {
              time: "11:00 - 12:00",
              route: [
                { lat: 55.7515, lng: 37.6205 },
                { lat: 55.7605, lng: 37.6305 },
              ],
              duration: "1 час",
              distance: "5.8 км",
              averageSpeed: "5.8 км/ч",
            },
          ],
        },
      ],
    },
  ],
};
