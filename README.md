# FPL Data Sync Cron Job

A simple service designed to be scheduled on Railway to sync Fantasy Premier League data daily at 4:00 AM (UTC).

## How It Works

This service is configured to run as a Railway cron job. When Railway executes this script at the scheduled time, it makes an API call to sync Fantasy Premier League data.

## Setup on Railway

1. Push this repository to your Railway project
2. Configure environment variables in Railway dashboard:
   - `NEXT_CLIENT_PRIVATE_URL` (optional, defaults to production URL)
   - `CRON_SECRET` (required)
3. Set up a Railway cron job to run at 4:00 AM UTC with the cron expression: `0 4 * * *`

## Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy the `.env.example` file to `.env` and configure your environment variables:
   ```
   cp .env.example .env
   ```
4. Edit the `.env` file with your specific configuration
5. Run the script manually:
   ```
   npm start
   ```

## Environment Variables

-   `NEXT_CLIENT_PRIVATE_URL`: The URL of your main FPL application (defaults to production URL if not set)
-   `CRON_SECRET`: Secret key for API authentication (required)
