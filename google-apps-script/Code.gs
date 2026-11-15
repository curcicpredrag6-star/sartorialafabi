/**
 * SARTORIAL — Google Apps Script endpoint (starter)
 * 1) Create a Google Sheet and set row 1 headers using the README.
 * 2) Extensions > Apps Script; paste this file.
 * 3) Set SHEET_NAME below, save, Deploy > New deployment > Web app.
 * 4) Execute as: Me. Access: Anyone (only if you understand the public endpoint risk).
 * IMPORTANT: This endpoint is a starter, not a hardened production API.
 */
const SHEET_NAME = "Orders";
const HEADERS = ["Order ID","Created At","Language","Name","Email","Phone","Fabric","Initials","Measurement Mode","Neck cm","Chest cm","Waist cm","Sleeve cm","Shoulders cm","Length cm","Fit Pattern","Standard Size","Height cm","Weight kg","Notes","Price EUR"];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (!data.orderId || !data.customerName || !data.email || !data.privacyConsent) {
      throw new Error("Missing required fields");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) throw new Error("Invalid email");
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    const m = data.measurements || {};
    sheet.appendRow([
      safe(data.orderId), safe(data.createdAt), safe(data.language), safe(data.customerName),
      safe(data.email), safe(data.phone), safe(data.fabric), safe(data.initials), safe(data.measurementMode),
      safe(m.neck), safe(m.chest), safe(m.waist), safe(m.sleeve), safe(m.shoulders), safe(m.length),
      safe(m.fitPattern), safe(m.standardSize), safe(m.height), safe(m.weight), safe(data.notes), 50
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true,orderId:data.orderId})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
function safe(value) {
  const s = String(value == null ? "" : value).slice(0, 1000);
  // Prevent spreadsheet formula injection.
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
