# NexaWorks Tech

## Local Development

- Install dependencies with `npm install`.
- Start the dev server with `npm run dev` and browse `http://localhost:3000`.
- Create a `.env.local` file before running the app so sensitive config stays out of source control.

## Employee Verification Setup

### Environment Variables

Add the following entries to `.env.local`:

```bash
GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
# Optional: override the sheet range if you use a different worksheet name or columns
GOOGLE_SHEETS_RANGE=Employees!A:E
```

- `GOOGLE_SHEETS_API_KEY` – API key created in Google Cloud Console.
- `GOOGLE_SHEETS_SPREADSHEET_ID` – the ID from the spreadsheet URL (`https://docs.google.com/spreadsheets/d/<ID>/edit`).
- `GOOGLE_SHEETS_RANGE` – defaults to `Employees!A:E` and should include the header row with `Code, Name, Role, Achievements, Description`.

Restart the dev server whenever you change environment variables.

### Google Cloud Configuration

1. Sign in to [Google Cloud Console](https://console.cloud.google.com/) and create/select a project.
2. Enable the **Google Sheets API** from *APIs & Services → Library*.
3. Go to *APIs & Services → Credentials* and create an **API key**.
4. Restrict the key to the Sheets API if possible (Application restrictions → None, API restrictions → Google Sheets API).
5. Copy the key into `GOOGLE_SHEETS_API_KEY`.

### Share the Google Sheet

1. Open the target spreadsheet.
2. Click **Share** → **General access** → set to *Anyone with the link* → **Viewer**. This is required when authenticating with an API key.
3. If you prefer to keep the sheet private, create a Google service account instead, share the sheet with the service account email, and swap the API key flow for a service-account JWT (not implemented here).

### Testing the Verification Endpoint

- Submit the `/verify` form in the browser or call the API directly:

```bash
curl -X POST http://localhost:3000/api/verify \
	-H "Content-Type: application/json" \
	-d '{"code":"NXW-2025-001"}'
```

The response returns the matching employee payload or a 404 error when the code is invalid.
