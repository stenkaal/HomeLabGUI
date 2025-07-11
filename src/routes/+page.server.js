import { networkInterfaces } from 'os';
import { json } from 'stream/consumers';

export async function load({ fetch }) {
    const response = await fetch('./systemInfo')
    const data = await response.json()


    return {
        systemInfo: {
            model: `The model of the cpu is ${data.cpus[0].model}`,
            speed: `The speed of the cpu is ${data.cpus[0].speed}`,
            hostname: `${data.userInfo.username}@${data.hostname}`,
            networkInterfaces: `Internet Protocol: ${data.networkInterfaces.enp0s3[0].address}`,
            totalmem: data.totalmem / 1e+9,
            freemem: data.freemem / 1e+9,
            uptime: data.uptime
        }
    };
}