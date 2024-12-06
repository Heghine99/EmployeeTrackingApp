import { t } from "i18n-js";

export function formatDistanceToMeters(distance: number): string {
  const kilometer = Math.floor(distance);
  const meter = Math.round((distance - kilometer) * 1000);

  if (kilometer && meter) {
    return `${kilometer} ${t("route_details.kilometer")} ${meter} ${t(
      "route_details.meter"
    )}`;
  }
  if (!kilometer && meter) {
    return `${meter} ${t("route_details.meter")}`;
  }
  if (kilometer && !meter) {
    return `${kilometer} ${t("route_details.kilometer")}`;
  }
  return "";
}
