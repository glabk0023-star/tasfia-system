// ===============================
// Tasfia System V1.0
// Security Module
// ===============================

import {
  loadSettings,
  saveSettings
} from "./storage.js";

const DEFAULT_SECURITY = {

  autoLogout: 30,      // Minutes

  screenLock: false,

  biometric: false,

  sessionTimeout: true

};

// Get Security Settings
export function getSecurity() {

  const settings = loadSettings();

  if (!settings.security) {

    settings.security = DEFAULT_SECURITY;

    saveSettings(settings);

  }

  return settings.security;

}

// Save Security Settings
export function saveSecurity(security) {

  const settings = loadSettings();

  settings.security = security;

  saveSettings(settings);

}

// Reset Security Settings
export function resetSecurity() {

  const settings = loadSettings();

  settings.security = DEFAULT_SECURITY;

  saveSettings(settings);

}