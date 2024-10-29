
import * as readline from 'readline';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Bitte gib den Namen der Stripchat Script-file (z.B. "check-username.ts") ein: ', (filename) => {
  const filePath = path.join(__dirname, "stripchat/", filename);

  if (fs.existsSync(filePath)) {
    console.log(`Stripchat-Script "${filename}" wird ausgeführt...\n`);

    exec(`tsx ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Fehler beim Ausführen der Datei: ${error.message}`);
      }
      if (stderr) {
        console.error(`Fehler: ${stderr}`);
      }
      console.log(stdout);
    });
  } else {
    console.log(`Die Datei "${filename}" existiert nicht im aktuellen Verzeichnis.`);
  }

  rl.close();
});
