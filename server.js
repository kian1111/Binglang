import config from './server/config/index.js';
import makeServer from './server/express/index.js';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.resolve(__dirname, 'client', 'build', 'index.html');


const server = makeServer({config, indexPath});


