import { EmployeesData } from "./types";

export const Employees: EmployeesData = {
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
              date: "29 ноября",
              time: "08:00 - 09:00",
              route: [
                { latitude: 55.7512, longitude: 37.6184 },
                { latitude: 55.7601, longitude: 37.6202 },
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
              date: "30 ноября",
              time: "09:00 - 10:00",
              route: [
                { latitude: 55.7624, longitude: 37.6175 },
                { latitude: 55.77, longitude: 37.625 },
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
              date: "2 декабря",
              time: "10:00 - 11:00",
              route: [
                { latitude: 55.749, longitude: 37.607 },
                { latitude: 55.758, longitude: 37.616 },
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
              date: "2 декабря",
              time: "10:00 - 19:00",
              route: [
                { latitude: 55.749, longitude: 37.607 },
                { latitude: 55.758, longitude: 37.616 },
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
              date: "3 декабря",
              time: "10:00 - 13:00",
              route: [
                { latitude: 55.7512, longitude: 37.6184 },
                { latitude: 55.7601, longitude: 37.6202 },
              ],
              duration: "1 час",
              distance: "6 км",
              averageSpeed: "6 км/ч",
            },
            {
              id: 22,
              date: "3 декабря",
              time: "10:00 - 15:00",
              route: [
                { latitude: 55.749, longitude: 37.607 },
                { latitude: 55.758, longitude: 37.616 },
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
};
