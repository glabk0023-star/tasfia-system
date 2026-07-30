// ===============================
// Tasfia System V1.0
// Settings Manager
// ===============================

import { initializeLanguage } from "./language.js";
import { initializeTheme } from "./theme.js";
import { getCalendar } from "./calendar.js";
import { getSecurity } from "./security.js";
import { loadSettings } from "./storage.js";

// ===============================
// Initialize Settings
// ===============================

export function initializeSettings() {

    // Load saved settings
    loadSettings();

    // Apply language
    initializeLanguage();

    // Apply theme
    initializeTheme();

    // Load calendar
    getCalendar();

    // Load security
    getSecurity();

    console.log("Tasfia Settings Initialized");

}

// Auto Initialize
initializeSettings();