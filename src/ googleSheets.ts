import { google } from "googleapis";

const client_email = process.env.CLIENT_EMAIL;
const private_key = process.env.PRIVATE_KEY;

// Configure a JWT auth client
const auth = new google.auth.JWT(client_email, undefined, private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

// Google Sheets API
const sheets = google.sheets({ version: "v4", auth });

export async function appendRowToSheet(rowData: any[]) {
  try {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = "Sheet1!A1";
    const valueInputOption = "RAW";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: {
        values: [rowData],
      },
    });

    console.log("Data appended:", response.data);
  } catch (error) {
    console.error("The API returned an error: " + error);
  }
}
