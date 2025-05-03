require('dotenv').config();
const fetch = require('node-fetch');

const APP_URL = process.env.NEXT_CLIENT_PRIVATE_URL || 'https://fpl-app-production.up.railway.app';
const CRON_SECRET = process.env.CRON_SECRET;

console.log(`Starting FPL data sync job at ${new Date().toISOString()}`);

// Execute sync immediately when Railway runs this script
(async () => {
    try {
        console.log(`Fetching data from ${APP_URL}/api/cron/sync-fpl/update-all-data`);

        const response = await fetch(
            `${APP_URL}/api/cron/sync-fpl/update-all-data`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${CRON_SECRET}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Job completed successfully:', data);
    } catch (error) {
        console.error('Error running job:', error);
        process.exit(1); // Exit with error code
    }
    
    console.log('Job execution complete');
    // Process should exit naturally after completion
})();
