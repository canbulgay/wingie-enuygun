import path from 'path';
import fs from 'fs';
import url from 'url';

const _dirname = url.fileURLToPath(new URL('.', import.meta.url));
const Data = fs.readFileSync(path.join(_dirname, 'db.json'), 'utf8');
const Employees = JSON.parse(Data);

export const resolver = {
    Query: {
        employees: () => {
            return Employees;
        },
        employee: (_, { id }) => {
            return Employees.find(employee => employee.id === id);
        }
    }
}
