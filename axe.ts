import axeCore from 'axe-core';
import { exec } from 'child_process';
const viteServerPort = 5173;

async function runAxe() {
    try {
        console.log(`Running axe accessibility tests...`);
        const results = await axeCore.run({
            url: `http://localhost:${viteServerPort}`,
            axeOptions: {},
        });
        console.log(results);
    } catch (error) {
        console.error('Error while running axe tests:', error);
        process.exit(1);
    }
}

async function startServer() {
    try {
        console.log(`Starting Vite server...`);
        const viteProcess = exec('npm run dev');

        viteProcess.stdout?.on('data', (data) => {
            console.log(data.toString());
            if (data.includes('Server running at')) {
                console.log(`Vite server started successfully.`);
                runAxe();
            }
        });

        viteProcess.stderr?.on('data', (data) => {
            console.error(data.toString());
        });
    } catch (error) {
        console.error('Failed to start Vite server:', error);
        process.exit(1);
    }
}

startServer();