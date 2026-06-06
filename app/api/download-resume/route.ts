import { NextResponse } from "next/server";

export async function GET() {
  // Telemetry analytics tracking
  console.log(`[Telemetry] Resume download requested at ${new Date().toISOString()}`);

  const docUrl = "https://docs.google.com/document/d/1IGvG4b7Spj8dAmoRvLBO3Iah8ofvOIOhLI9ocD15H28/export?format=pdf";

  try {
    const response = await fetch(docUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Google Doc export returned status: ${response.status}`);
    }

    const fileBuffer = await response.arrayBuffer();

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Sajida_Javed_Resume.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("[Telemetry] Server-side resume download proxy failed, falling back to direct redirect.", err);
    // Safe fallback: redirect user directly to the export URL if our proxy server encounters issues
    return NextResponse.redirect(docUrl);
  }
}
