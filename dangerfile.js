import { fail, warn, message, markdown, danger } from 'danger';
// import commitlint from 'danger-plugin-conventional-commitlint';
// import configConventional from '@commitlint/config-conventional';

warn('This is a warning');
message('This is a normal message');
markdown('*Markdown* is also **supported**');

const { additions = 0, deletions = 0 } = danger.github.pr;
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`);

const tests = danger.git.fileMatch('*/__tests__/*');
if (!tests.modified) {
  warn('You have app changes without tests.');
}

// (async function dangerReport() {
//   const commitlintConfig = {
//     severity: 'warn',
//   };
//   await commitlint(configConventional.rules, commitlintConfig);
// })();

// Warns if there are changes to package.json, and tags the team.
// const packageChanged = includes(danger.git.modified_files, 'package.json');
if (packageChanged) {
  const title = ':lock: package.json';
  const idea =
    'Changes were made to package.json. ' +
    'This will require a manual import by a Facebook employee.';
  warn(`${title} - <i>${idea}</i>`);
}
