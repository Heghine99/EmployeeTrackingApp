import { t } from "i18n-js";

export function formatDurationToHours(duration: number): string {
  let minutes = duration;
  const hours = minutes / 60;

  const rhours = Math.floor(hours);

  minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (rhours && rminutes) {
    return `${rhours} ${t("route_details.hour")} ${rminutes} ${t(
      "route_details.minutes"
    )}`;
  }
  if (!rhours && rminutes) {
    return `${rminutes} ${t("route_details.minutes")}`;
  }
  if (rhours && !rminutes) {
    return `${rhours} ${t("route_details.hour")}`;
  }
  return "";
}
