// ===============================
// Tasfia System V1.0
// Language Module
// ===============================

import {
  loadSettings,
  saveSettings
} from "./storage.js";

// Supported Languages
export const LANGUAGES = {

  ps: {
    code: "ps",
    name: "پښتو",
    direction: "rtl"
  },

  ar: {
    code: "ar",
    name: "العربية",
    direction: "rtl"
  },

  fa: {
    code: "fa",
    name: "دری",
    direction: "rtl"
  },

  ur: {
    code: "ur",
    name: "اردو",
    direction: "rtl"
  },

  en: {
    code: "en",
    name: "English",
    direction: "ltr"
  }

};

// Get Current Language
export function getLanguage() {

  const settings = loadSettings();

  return settings.language || "ps";

}

// Set Language
export function setLanguage(languageCode) {

  if (!LANGUAGES[languageCode]) {
    return false;
  }

  const settings = loadSettings();

  settings.language = languageCode;

  saveSettings(settings);

  applyLanguage();

  return true;

}

// Apply Language
export function applyLanguage() {

  const language = getLanguage();

  document.documentElement.lang = language;

  document.documentElement.dir =
    LANGUAGES[language].direction;

}

// Get Language Information
export function getLanguageInfo() {

  return LANGUAGES[getLanguage()];

}

// Initialize Language
export function initializeLanguage() {

  applyLanguage();

}