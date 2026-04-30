import { rename, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const renameFile = async () => {
    const wrongPath = join(__dirname, 'wrongFilename.txt');
    const properPath = join(__dirname, 'properFilename.md');

    try {
        await access(wrongPath);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access(properPath);
        // Если properFilename.md уже существует – ошибка
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.message === 'FS operation failed') throw err;
    }

    try {
        await rename(wrongPath, properPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await renameFile();