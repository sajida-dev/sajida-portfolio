import { NextResponse } from "next/server";

export async function GET() {
  // Directly redirect to the resume PDF located in the public folder.
  // Next.js serves files in the `public` folder at the root path.
  return NextResponse.redirect("/resume.pdf");
}
