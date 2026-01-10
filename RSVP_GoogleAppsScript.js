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
  
  const guestName = data.guestName;
  const response = data.response; // "ចូលរួម" or "មិនបានចូលរួម"
  const date = data.date;
  
  // Find the row with matching guest name in Column C (Khmer name)
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  
  let rowFound = false;
  
  // Start from row 2 (skip header row)
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const khmerName = row[2]; // Column C (index 2) - Khmer name
    const englishName = row[1]; // Column B (index 1) - English name for URL
    
    // Check if guest name matches either Khmer or English name
    if (khmerName === guestName || englishName === guestName || 
        khmerName.includes(guestName) || guestName.includes(khmerName)) {
      
      // Write RSVP response to Column E (index 5, which is E since A=1, B=2, C=3, D=4, E=5)
      sheet.getRange(i + 1, 5).setValue(response); // Column E
      sheet.getRange(i + 1, 6).setValue(date);      // Column F - timestamp
      
      rowFound = true;
      Logger.log('RSVP recorded for: ' + guestName + ' in row ' + (i + 1));
      break;
    }
  }
  
  // If guest not found in existing rows, add new row at the end
  if (!rowFound) {
    Logger.log('Guest not found in list, adding new row: ' + guestName);
    sheet.appendRow(['', '', guestName, '', response, date]);
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
