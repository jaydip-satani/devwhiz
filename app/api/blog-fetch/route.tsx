import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function GET(req: Request) {
    try {
        const allBlogs: string[] = [];
        const data = await fs.readdir("blogdata");

        for (const item of data) {
            const title = await fs.readFile(`blogdata/${item}`, 'utf-8');
            allBlogs.push(JSON.parse(title));
        }

        return NextResponse.json(allBlogs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Blog not found or error occurred' }, { status: 500 });
    }
}
