const fs = require('fs');
const path = require('path');
const assert = require('assert');

const repoRoot = __dirname;
const readmePath = path.join(repoRoot, 'README.md');

assert.ok(fs.existsSync(readmePath), 'README.md should exist at the repository root');

const content = fs.readFileSync(readmePath, 'utf8');

assert.match(content, /stone[- ]paper[- ]scissor/i, 'README should mention the project name');
assert.match(content, /how to run|getting started|usage/i, 'README should explain how to run or use the project');
assert.match(content, /rules/i, 'README should describe the game rules');

console.log('README checks passed');
