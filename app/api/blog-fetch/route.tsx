import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const allBlogs: string[] = [];
        const blogDirPath = path.join(process.cwd(), 'blogdata');
        const data = await fs.readdir(blogDirPath);

        for (const item of data) {
            const filePath = path.join(blogDirPath, item);
            const title = await fs.readFile(filePath, 'utf-8');
            allBlogs.push(JSON.parse(title));
        }

        return NextResponse.json(allBlogs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Blog not found or error occurred: ' + error }, { status: 500 });
    }
}
