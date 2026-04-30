import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = join(__dirname, 'fileToCalculateHashFor.txt');
    const content = await readFile(filePath);
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();