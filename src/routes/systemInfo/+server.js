import { cpus, hostname, networkInterfaces, totalmem, uptime, freemem, userInfo } from 'node:os';
import { json } from '@sveltejs/kit'

export function GET() {

    const data = { cpus: cpus(), hostname: hostname(), networkInterfaces: networkInterfaces(), totalmem: totalmem(), freemem: freemem(), uptime: uptime(), userInfo: userInfo() }

    return json(data);
}