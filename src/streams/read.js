import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const filePath = join(__dirname, 'fileToRead.txt');
    const readable = createReadStream(filePath, 'utf-8');
    readable.pipe(process.stdout);
};

await read();