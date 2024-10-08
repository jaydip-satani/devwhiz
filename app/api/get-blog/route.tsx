import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');
        const filePath = path.join(process.cwd(), 'blogdata', `${slug}.json`);
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);

        return NextResponse.json(jsonData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'File not found or error occurred: ' + error }, { status: 500 });
    }
}
