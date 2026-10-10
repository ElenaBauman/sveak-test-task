import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import Handlebars from 'handlebars';
import fs from 'node:fs';
import path from 'node:path';

const icon = (name) => {
    const filePath = path.resolve('src/icons', `${name}.svg`);
    const svg = fs.readFileSync(filePath, 'utf-8');

    return new Handlebars.SafeString(svg);
};

export default defineConfig({
    base: '/sveak-test-task/',

    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'global-builtin', 'if-function'],
                quietDeps: true,
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: [
                'src/views/layout',
                'src/views/components',
            ],

            helpers: {
                icon,
            },
        }),
    ],
});

