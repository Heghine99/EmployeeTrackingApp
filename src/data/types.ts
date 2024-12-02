export type Route = {
  lat: number;
  lng: number;
};

export type Movement = {
  id: number;
  time: string;
  route: Route[];
  duration: string;
  distance: string;
  averageSpeed: string;
};

export type Track = {
  id: number;
  title: string;
  data: Movement[];
};

export type Location = {
  lat: number;
  lng: number;
};

export type Employee = {
  id: number;
  name: string;
  position: string;
  phone: string;
  location: Location;
  tracks: Track[];
};

export type EmployeesData = {
  employees: Employee[];
};
