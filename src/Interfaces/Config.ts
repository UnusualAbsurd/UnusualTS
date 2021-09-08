import env from 'dotenv';

export interface Config{
    token: string,
    mongoURI?: string,
    prefix: string,
}

