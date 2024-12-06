import { t } from "i18n-js";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(t("filter_validation.name")),
  position: Yup.string().required(t("filter_validation.position")),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,14}$/, t("filter_validation.phone_correct"))
    .required(t("filter_validation.phone_required")),
});
