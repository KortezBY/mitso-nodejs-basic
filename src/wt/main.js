import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const numCores = cpus().length;
    const workers = [];
    const results = [];

    const createWorker = (data) => {
        return new Promise((resolve) => {
            const worker = new Worker(join(__dirname, 'worker.js'), { workerData: data });
            worker.on('message', (msg) => {
                resolve(msg);
            });
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        });
    };

    for (let i = 0; i < numCores; i++) {
        workers.push(createWorker(10 + i));
    }

    const workerResults = await Promise.all(workers);
    workerResults.forEach(res => results.push(res));
    console.log(results);
};

await performCalculations();