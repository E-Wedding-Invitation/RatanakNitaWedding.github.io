# RSVP Google Spreadsheet Integration Setup

## Overview
This setup allows RSVP responses to be automatically recorded in your Google Spreadsheet in Column E based on the guest name.

## Spreadsheet Structure

Your Google Spreadsheet should have the following columns:

| Column A | Column B (English Name) | Column C (Khmer Name) | Column D | Column E (RSVP) | Column F (Timestamp) |
|----------|------------------------|----------------------|----------|-----------------|---------------------|
| Row 1    | John_Smith             | ចន ស្មីត            |          | ចូលរួម           | 1/9/2026 10:30 AM   |
| Row 2    | Jane_Doe               | ជេន ដូ              |          | មិនបានចូលរួម      | 1/9/2026 11:15 AM   |

- **Column B**: English name (used in URL parameter: ?to=John_Smith)
- **Column C**: Khmer name (display name shown on the website)
- **Column E**: RSVP response ("ចូលរួម" = Will Attend, "មិនបានចូលរួម" = Unable to Attend)
- **Column F**: Timestamp when RSVP was submitted

## Setup Instructions

### Step 1: Open Google Apps Script

1. Open your Google Spreadsheet: https://docs.google.com/spreadsheets/d/1ZGsLXEYqLWg7Ax_PAvdgxxMIa-DY1WGc_fecNMYnV0w/edit
2. Click **Extensions** → **Apps Script**
3. Delete any existing code in the editor

### Step 2: Add the RSVP Script

1. Copy all the code from the file `RSVP_GoogleAppsScript.js` in this folder
2. Paste it into the Apps Script editor
3. Click **Save** (💾 icon)

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure:
   - **Description**: Wedding RSVP Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Copy the **Web app URL** (it will look like: https://script.google.com/macros/s/ABC.../exec)

### Step 4: Update Your Website

The script.js file has already been updated with the RSVP functionality. Make sure the `RSVP_SCRIPT_URL` matches your deployed Web App URL.

Current URL in script.js:
```javascript
const RSVP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDzcd9yZPHjWj8u_2hNwm4tJDnyvGkX1Bik-jSb3OBx26Q_WkxMACDWjXJLvtdrbZu/exec';
```

If you get a new deployment URL, update this line in `script.js` around line 1219.

## How It Works

1. **Guest opens personalized URL**: 
   - Example: `https://yoursite.com?to=John_Smith`
   
2. **Guest clicks RSVP button**: 
   - Selects either "ចូលរួម" (Will Attend) or "មិនបានចូលរួម" (Unable to Attend)
   
3. **Data is sent to Google Sheets**:
   - The script searches for the guest name in Column C (Khmer) or Column B (English)
   - When found, it writes the RSVP response to Column E in that row
   - It also records the timestamp in Column F
   
4. **If guest not found**:
   - A new row is added with the guest name and their response

## Testing

1. Open your website with a personalized URL: `?to=John_Smith`
2. Scroll to the RSVP section
3. Click one of the RSVP buttons
4. Check your Google Spreadsheet - Column E should show the response

## Troubleshooting

### RSVP not appearing in spreadsheet?

1. Check browser console (F12) for errors
2. Verify the Web App URL in script.js matches your deployment
3. Make sure the spreadsheet ID is correct
4. Check that Column C or B has guest names that match the URL parameter

### Need to redeploy?

If you make changes to the Apps Script:
1. Click **Deploy** → **Manage deployments**
2. Click the pencil icon ✏️ to edit
3. Change version to **New version**
4. Click **Deploy**
5. You may need to update the URL in script.js

## Column Mapping

- Column A: (Not used for RSVP)
- Column B: English name for URL key
- Column C: Khmer display name
- Column D: (Not used for RSVP)
- **Column E: RSVP Response** ← This is where responses are recorded
- Column F: Timestamp of RSVP submission

## Notes

- Guests can change their RSVP - it will update Column E with the new response
- Each guest's response is stored in their corresponding row based on their name
- The system matches guest names from the URL parameter with names in the spreadsheet
