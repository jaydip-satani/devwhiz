import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const blogDirPath = path.join(process.cwd(), 'blogdata');

        // Read the files from the blogdata directory
        const files = await fs.readdir(blogDirPath);

        // Read all blog files and parse their content
        const allBlogs = await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(blogDirPath, file);
                const content = await fs.readFile(filePath, 'utf-8');
                return JSON.parse(content); // Assuming the blog content is valid JSON
            })
        );

        return NextResponse.json(allBlogs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Blog not found or error occurred: ' + error }, { status: 500 });
    }
}
