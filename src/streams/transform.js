import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        callback(null, reversed);
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();