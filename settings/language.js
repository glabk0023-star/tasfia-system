// ===============================
// Tasfia System V1.0
// Language Module
// ===============================

import { loadSettings, saveSettings } from "./storage.js";

import ps from "../lang/ps.js";
import ar from "../lang/ar.js";
import fa from "../lang/fa.js";
import ur from "../lang/ur.js";
import en from "../lang/en.js";

// ===============================
// Languages
// ===============================

const LANGUAGES = {

  ps: {
    code: "ps",
    name: "پښتو",
    direction: "rtl",
    dictionary: ps
  },

  ar: {
    code: "ar",
    name: "العربية",
    direction: "rtl",
    dictionary: ar
  },

  fa: {
    code: "fa",
    name: "دری",
    direction: "rtl",
    dictionary: fa
  },

  ur: {
    code: "ur",
    name: "اردو",
    direction: "rtl",
    dictionary: ur
  },

  en: {
    code: "en",
    name: "English",
    direction: "ltr",
    dictionary: en
  }

};

// ===============================
// Get Current Language
// ===============================

export function getLanguage() {

  const settings = loadSettings();

  return settings.language || "ps";

}

// ===============================
// Set Language
// ===============================

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

// ===============================
// Get Dictionary
// ===============================

export function getDictionary() {

  return LANGUAGES[getLanguage()].dictionary;

}

// ===============================
// Translate
// ===============================

export function t(key) {

  const dictionary = getDictionary();

  return dictionary[key] || key;

}

// ===============================
// Apply Language
// ===============================

export function applyLanguage() {

  const language = getLanguage();

  document.documentElement.lang = language;
  document.documentElement.dir = LANGUAGES[language].direction;

  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {

    const key = element.getAttribute("data-lang");

    if (key) {
      element.textContent = t(key);
    }

  });

}

// ===============================
// Get Language Information
// ===============================

export function getLanguageInfo() {

  return LANGUAGES[getLanguage()];

}

// ===============================
// Get All Languages
// ===============================

export function getLanguages() {

  return LANGUAGES;

}

// ===============================
// Initialize Language
// ===============================

export function initializeLanguage() {

  applyLanguage();

}