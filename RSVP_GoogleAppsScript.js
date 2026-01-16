// Google Apps Script for Wedding Invitation RSVP
// Deploy this as a Web App with "Anyone" access

// YOUR SPREADSHEET ID
const SPREADSHEET_ID = '1ZGsLXEYqLWg7Ax_PAvdgxxMIa-DY1WGc_fecNMYnV0w';
const SHEET_NAME = 'Sheet1';

// Handle POST requests
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Check if this is an RSVP request
    if (data.action === 'rsvp') {
      return handleRSVP(data);
    }
    
    // Otherwise, handle as a wish/message (existing functionality)
    return handleWish(data);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle RSVP submissions
function handleRSVP(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  const guestName = data.guestName;       // Display name (e.g., Khmer name or full name)
  const guestKey = data.guestKey || '';   // URL key (e.g., from ?to= parameter)
  const response = data.response;          // "ចូលរួម" or "មិនបានចូលរួម"
  const date = data.date;
  
  // Find the row with matching guest name based on columns B, C, D
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  
  let rowFound = false;
  let foundRowIndex = -1;
  
  // Normalize names for comparison
  const normalizedGuestName = String(guestName).trim().toLowerCase();
  const normalizedGuestKey = String(guestKey).trim().toLowerCase().replace(/[\+_\s]/g, ' ');
  
  // Start from row 2 (skip header row)
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const colB = String(row[1]).trim().toLowerCase();  // Column B - URL/Link name
    const colC = String(row[2]).trim().toLowerCase();  // Column C - Display name
    const colD = String(row[3]).trim().toLowerCase();  // Column D - Additional info
    
    // Priority 1: Exact match Column B (URL/Link key) - most reliable
    if (normalizedGuestKey && colB === normalizedGuestKey.replace(/[\+_\s]/g, ' ')) {
      foundRowIndex = i;
      rowFound = true;
      Logger.log('RSVP: Matched by Column B (URL Link) - Row ' + (i + 1));
      break;
    }
    
    // Priority 2: Exact match Column C (Khmer display name)
    if (normalizedGuestName && colC === normalizedGuestName) {
      foundRowIndex = i;
      rowFound = true;
      Logger.log('RSVP: Matched by Column C (Khmer Name) - Row ' + (i + 1));
      break;
    }
    
    // Priority 3: Partial match in Column B, C, or D
    if ((colB.includes(normalizedGuestName) && normalizedGuestName.length > 2) ||
        (colC.includes(normalizedGuestName) && normalizedGuestName.length > 2) ||
        (colD.includes(normalizedGuestName) && normalizedGuestName.length > 2) ||
        (normalizedGuestName.includes(colB) && colB.length > 2) ||
        (normalizedGuestName.includes(colC) && colC.length > 2) ||
        (normalizedGuestName.includes(colD) && colD.length > 2)) {
      foundRowIndex = i;
      rowFound = true;
      Logger.log('RSVP: Partial match found - Row ' + (i + 1) + ' (ColB: ' + colB + ', ColC: ' + colC + ')');
      break;
    }
  }
  
  // If guest found, update their RSVP response
  if (rowFound && foundRowIndex >= 0) {
    sheet.getRange(foundRowIndex + 1, 5).setValue(response); // Column E - RSVP Response
    sheet.getRange(foundRowIndex + 1, 6).setValue(date);     // Column F - timestamp
    Logger.log('RSVP recorded for: ' + guestName + ' in row ' + (foundRowIndex + 1));
  } else {
    // If guest not found, add new row at the end
    Logger.log('Guest not found in existing list, adding new row: ' + guestName + ' (Key: ' + guestKey + ')');
    sheet.appendRow(['', guestKey, guestName, '', response, date]);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'RSVP recorded'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle wish/message submissions (existing functionality)
function handleWish(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const wishSheet = ss.getSheetByName('Wishes') || ss.insertSheet('Wishes');
  
  const name = data.name;
  const message = data.message;
  const date = data.date;
  
  // Append wish to Wishes sheet
  wishSheet.appendRow([name, message, date]);
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Wish recorded'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle GET requests (for fetching wishes)
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const wishSheet = ss.getSheetByName('Wishes');
    
    if (!wishSheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'success',
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const dataRange = wishSheet.getDataRange();
    const values = dataRange.getValues();
    
    // Skip header row and convert to JSON
    const wishes = [];
    for (let i = 1; i < values.length; i++) {
      wishes.push({
        name: values[i][0],
        message: values[i][1],
        date: values[i][2]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: wishes.reverse() // Most recent first
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
