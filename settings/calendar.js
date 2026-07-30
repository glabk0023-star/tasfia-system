// ===============================
// Tasfia System V1.0
// Calendar Module
// ===============================

import {
  loadSettings,
  saveSettings
} from "./storage.js";

// Supported Calendars
export const CALENDARS = {

  hijri: {
    id: "hijri",
    name: "هجري قمري"
  },

  shamsi: {
    id: "shamsi",
    name: "هجري شمسي"
  },

  gregorian: {
    id: "gregorian",
    name: "میلادي"
  }

};

// Get Current Calendar
export function getCalendar() {

  const settings = loadSettings();

  return settings.calendar || "hijri";

}

// Set Calendar
export function setCalendar(calendarId) {

  if (!CALENDARS[calendarId]) {
    return false;
  }

  const settings = loadSettings();

  settings.calendar = calendarId;

  saveSettings(settings);

  return true;

}

// Get Calendar Information
export function getCalendarInfo() {

  return CALENDARS[getCalendar()];

}

// Get All Calendars
export function getCalendars() {

  return CALENDARS;

}