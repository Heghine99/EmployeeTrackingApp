import { t } from "i18n-js";

export const calculateAverageSpeed = (
  distanceInMeters: number,
  durationInSeconds: number
): string => {
  const distanceInKilometers = distanceInMeters / 1000;
  const durationInHours = durationInSeconds / 3600;

  if (durationInHours === 0) return "0";

  const averageSpeed = distanceInKilometers / durationInHours;
  return `${averageSpeed.toFixed(2)} ${t("route_details.kilometer")}/${t(
    "route_details.hour"
  )}`;
};
