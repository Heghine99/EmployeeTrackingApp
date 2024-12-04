import I18n from "i18n-js";
import { getLocales } from "react-native-localize";

// Импорт файлов переводов
import en from "./en.json";
import ru from "./ru.json";

// Настройка переводов
I18n.fallbacks = true; // Использовать запасной язык, если перевод не найден
I18n.translations = { en, ru };

// Получить язык системы и установить по умолчанию
export const getDefaultLocale = () => {
  const systemLocale = getLocales()[0].languageCode;
  const lang = Languages.find((lang) => lang.value === systemLocale);

  return lang ? lang.value : "en";
};

// Установить выбранный язык
export const setI18nLang = (value: string) => {
  I18n.locale = value;
};

// Доступные языки для выбора
export const Languages = [
  { label: "English", value: "en" },
  { label: "Русский", value: "ru" },
];

// Функция для перевода
export function t(name: string, params = {}) {
  return I18n.t(name, { language: I18n.currentLocale(), ...params });
}
