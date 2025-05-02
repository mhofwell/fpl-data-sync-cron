# FPL Data Sync Cron Job

A simple service that runs a daily job at 4:00 AM to sync Fantasy Premier League data.

## How It Works

This service uses node-cron to schedule a daily task that calls the FPL data sync API endpoint.

## Environment Variables

-   `APP_URL`: The URL of your main FPL application
-   `CRON_SECRET`: Secret key for API authentication
