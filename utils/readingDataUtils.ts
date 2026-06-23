import fs from 'fs';
import path from 'path';

//To retrieve data from JSON file
export function getTestData(fileName: string) {
  const filePath = path.resolve(__dirname, `../test-data/${fileName}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

//test data from Properties File
//test data from Environment Variables (.env)