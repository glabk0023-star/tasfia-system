// ===============================
// Tasfia System V1.0
// Settings Storage Module
// ===============================

const SETTINGS_KEY = "tasfia_settings";

// Default Settings
const DEFAULT_SETTINGS = {
  language: "ps",
  theme: "blue",
  mode: "light",
  calendar: "hijri",
  fontSize: "medium"
};

// Load Settings
export function loadSettings() {

  const data = localStorage.getItem(SETTINGS_KEY);

  if (!data) {
    return DEFAULT_SETTINGS;
  }

  return JSON.parse(data);

}

// Save Settings
export function saveSettings(settings) {

  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify(settings)
  );

}

// Reset Settings
export function resetSettings() {

  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify(DEFAULT_SETTINGS)
  );

}