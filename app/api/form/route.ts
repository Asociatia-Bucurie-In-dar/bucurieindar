import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  // Path to the PDF file in the public folder
  const filePath = path.join(process.cwd(), 'public', 'base', 'Formular230-AsocBucurieInDar.pdf');

  try {
    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Create a response with correct headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Formular230-AsocBucurieInDar.pdf"', // Auto-download
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}