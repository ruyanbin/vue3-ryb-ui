import download from 'download-git-repo'; // 将 git 下载到带有 和 的文件夹中
import chalk from 'chalk'; //正确完成端子字符串样式
import ora from 'ora'; //优雅的终端微调器

export default (remote, name, option) => {
  const downSpinner = ora('正在下载模版...').start();
  return new Promise((resolve, reject) => {
    download(remote, name, option, (err) => {
      if (err) {
        downSpinner.fail();
        console.log('err', chalk.red(err));
        reject(err);
        return;
      }
      downSpinner.succeed(chalk.green('模版下载成功'));
      console.log(chalk.green(`cd ${name}\r\n`));
      console.log(chalk.blue('pnpm install\r\n'));
      console.log('pnpm run build:ryb\r\n');
      console.log('pnpm run ryb:dev\r\n');
      resolve();
    });
  });
};
