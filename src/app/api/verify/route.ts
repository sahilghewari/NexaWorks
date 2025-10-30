import { NextRequest, NextResponse } from "next/server";

type SheetsRow = string[];

type EmployeePayload = {
  code: string;
  name: string;
  role: string;
  achievements: string;
  description: string;
};

const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const RANGE = process.env.GOOGLE_SHEETS_RANGE || "Employees!A:E";

export async function POST(req: NextRequest) {
  try {
    if (!API_KEY || !SPREADSHEET_ID) {
      console.error("Missing Google Sheets configuration");
      return NextResponse.json(
        { error: "Server misconfiguration. Contact support." },
        { status: 500 }
      );
    }

    const { code } = await req.json();
    const trimmedCode = typeof code === "string" ? code.trim() : "";

    if (!trimmedCode) {
      return NextResponse.json(
        { error: "Verification code is required." },
        { status: 400 }
      );
    }

    // Fetch rows once and resolve the match locally to avoid multiple network calls per request.
    const url = new URL(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
        RANGE
      )}`
    );
    url.searchParams.set("key", API_KEY);

    const sheetResponse = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!sheetResponse.ok) {
      const errBody = await sheetResponse.text();
      console.error("Google Sheets API error", sheetResponse.status, errBody);
      return NextResponse.json(
        { error: "Unable to verify code right now. Try again later." },
        { status: 502 }
      );
    }

    const payload = (await sheetResponse.json()) as {
      values?: SheetsRow[];
    };

    const rows = payload.values ?? [];
    const [headerRow, ...dataRows] = rows;

    if (!headerRow) {
      console.warn("Google Sheet returned no data");
      return NextResponse.json(
        { error: "No employee records found." },
        { status: 404 }
      );
    }

    const match = dataRows.find((row) => {
      const [rowCode] = row;
      return (rowCode ?? "").trim().toLowerCase() === trimmedCode.toLowerCase();
    });

    if (!match) {
      return NextResponse.json(
        { error: "Code not found. Double-check and try again." },
        { status: 404 }
      );
    }

    const [foundCode, name, role, achievements, description] = match;

    const employee: EmployeePayload = {
      code: foundCode ?? "",
      name: name ?? "",
      role: role ?? "",
      achievements: achievements ?? "",
      description: description ?? "",
    };

    return NextResponse.json({ employee });
  } catch (error) {
    console.error("Unexpected verification error", error);
    return NextResponse.json(
      { error: "Unexpected error verifying code." },
      { status: 500 }
    );
  }
}
