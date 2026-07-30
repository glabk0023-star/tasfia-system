// ===============================
// Tasfia System V1.0
// Backup Module
// ===============================

import {
  loadSettings,
  saveSettings
} from "./storage.js";

// Export Settings
export function exportSettings() {

  return JSON.stringify(
    loadSettings(),
    null,
    2
  );

}

// Import Settings
export function importSettings(jsonData) {

  try {

    const settings = JSON.parse(jsonData);

    saveSettings(settings);

    return true;

  } catch (error) {

    console.error(error);

    return false;

  }

}

// Reset All Settings
export function resetAllSettings() {

  localStorage.removeItem("tasfia_settings");

}