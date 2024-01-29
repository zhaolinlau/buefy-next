import * as fs from 'node:fs'

const dtsPaths = [
    './dist/buefy.d.ts',
    './temp-dts/utils/vue-augmentation.d.ts',
]
const result = dtsPaths
    .map((dtsPath) => fs.readFileSync(dtsPath, 'utf-8'))
    .join('\n')
fs.writeFileSync('./dist/buefy.d.ts', result)
