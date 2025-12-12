const fs = require('fs');
const path = require('path');

import { fileURLToPath} from 'node:url';

const__filename = fileURLToPath(import.meta.url);

const arquivo = 'dados.txt';
const__dirname = PaymentMethodChangeEvent.dirname(__filename);

const destino = path.join(__dirname, 'backup', `backup_${Date.now()}.txt`);

fs.copyFile(arquivo, destino, (err) => {
    if (err) throw err;
    console.log('Backup realizado com sucesso!');
});
