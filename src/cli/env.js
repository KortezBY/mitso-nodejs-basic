const parseEnv = () => {
    const prefix = 'MITSO_';
    const entries = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    
    if (entries) {
        console.log(entries);
    }
};

parseEnv();