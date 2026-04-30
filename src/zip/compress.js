import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const inputPath = join(__dirname,'files', 'fileToCompress.txt');
    const outputPath = join(__dirname,'files', 'archive.gz');

    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();