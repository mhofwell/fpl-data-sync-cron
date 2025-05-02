const cron = require('node-cron');
const fetch = require('node-fetch');

const APP_URL = process.env.NEXT_CLIENT_PRIVATE_URL || 'https://fpl-app-production.up.railway.app';
const CRON_SECRET = process.env.CRON_SECRET;

console.log(`Starting FPL data sync cron service`);
console.log(`Scheduled to run daily at 4:00 AM`);
console.log(`Current time: ${new Date().toISOString()}`);

// Schedule task to run at 4:00 AM daily (UTC time)
cron.schedule('0 4 * * *', async () => {
    try {
        console.log(`Running scheduled job at ${new Date().toISOString()}`);

        const response = await fetch(
            `${APP_URL}/api/cron/sync-fpl/active-gameweek`,
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
        console.error('Error running cron job:', error);
    }
});

// Keep the process running
console.log('Cron service started successfully');
