import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { generateCssVars, resolveValues, structureTokens } from './utils.mjs';

copyFileSync('./index.js', './dist/index.js');
copyFileSync('./index.d.ts', './dist/index.d.ts');

const raw = readFileSync('./tokens.json');
const tokens = JSON.parse(raw);

const resolvedTokens = resolveValues(tokens);
writeFileSync(
  './dist/tokens.json',
  JSON.stringify(resolvedTokens, null, 2),
);

const structuredTokens = structureTokens(resolvedTokens);
writeFileSync(
  './dist/structured-tokens.json',
  JSON.stringify(structuredTokens, null, 2),
);

const cssVars = generateCssVars(resolvedTokens);
writeFileSync('./dist/tokens.css', cssVars);

// const createResolvedFigmaTokens = () => {
//   const raw = readFileSync('./figma-tokens.json');
//   const data = JSON.parse(raw);
//   const resolvedTokens = resolveFigmaValues(data.global, data);
//   writeFileSync(
//     './resolved-figma-tokens.json',
//     JSON.stringify(resolvedTokens, null, 2),
//   );
// };

// createResolvedFigmTokens();
