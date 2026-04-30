import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fresh.txt');

    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        await mkdir(folderPath, { recursive: true });
        await writeFile(filePath, 'I am fresh and young', 'utf8');
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();