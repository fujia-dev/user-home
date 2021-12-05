import { homedir, tmpdir } from 'os';
import { access } from 'fs/promises';
import chalk from 'chalk';

const userHomeOrTemp = async (temp = false) => {
  try {
    const userHome = homedir();
    await access(userHome);

    return userHome;
  } catch (error) {
    if (temp === true) {
      return tmpdir();
    }

    console.log(chalk.red('Doesn\'t exist home directory for current login user.'));
    console.log();
    return;
  }
};

export default userHomeOrTemp;
