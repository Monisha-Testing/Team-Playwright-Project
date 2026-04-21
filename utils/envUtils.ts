import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

/**
 * Utility class to manage environment variables.
 */
export class EnvUtils {
    public static readonly BASE_URL = process.env.BASE_URL || '';
    public static readonly TEST_EMAIL = process.env.TEST_EMAIL || '';
}