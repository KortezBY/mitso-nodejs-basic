import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const inputPath = join(__dirname,'files', 'archive.gz');
    const outputPath = join(__dirname,'files', 'fileToCompress.txt');

    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();