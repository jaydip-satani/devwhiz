import { NextResponse } from 'next/server';
import * as fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name } = body;
        await writeFile(`contactdata/${name + "_" + (Date.now())}.json`, JSON.stringify(body, null, 2));
        return NextResponse.json({ message: 'File written successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error writing file:', error);
        return NextResponse.json({ error: 'Failed to write file' }, { status: 500 });
    }
}
