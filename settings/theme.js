// ===============================
// Tasfia System V1.0
// Theme Module
// ===============================

import {
  loadSettings,
  saveSettings
} from "./storage.js";

// Supported Themes
export const THEMES = {

  blue: {
    id: "blue",
    name: "Blue"
  },

  green: {
    id: "green",
    name: "Green"
  },

  dark: {
    id: "dark",
    name: "Dark"
  },

  light: {
    id: "light",
    name: "Light"
  },

  gold: {
    id: "gold",
    name: "Gold"
  }

};

// Get Current Theme
export function getTheme() {

  const settings = loadSettings();

  return settings.theme || "blue";

}

// Set Theme
export function setTheme(themeId) {

  if (!THEMES[themeId]) {
    return false;
  }

  const settings = loadSettings();

  settings.theme = themeId;

  saveSettings(settings);

  applyTheme();

  return true;

}

// Apply Theme
export function applyTheme() {

  const theme = getTheme();

  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

}

// Get Theme Information
export function getThemeInfo() {

  return THEMES[getTheme()];

}

// Initialize Theme
export function initializeTheme() {

  applyTheme();

}