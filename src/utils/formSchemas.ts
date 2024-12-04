import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("ФИО обязательно"),
  position: Yup.string().required("Должность обязательна"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,14}$/, "Введите корректный номер телефона")
    .required("Номер телефона обязателен"),
});
