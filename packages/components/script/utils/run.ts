/**
 * 创建节点的子流程
 * spawn()，fork()，exec()，和execFile()
 * spawn(command[, args][, options])
 * command： 将要运行的命令
 * args： Array 字符串参数数组
 * options Object
 * cwd String 子进程的当前工作目录
 * env Object 环境变量键值对
 * stdio Array|String 子进程的 stdio 配置
 * detached Boolean 这个子进程将会变成进程组的领导
 * uid Number 设置用户进程的 ID
 * gid Number 设置进程组的 ID
 * */
import { spawn } from 'child_process';
export default async (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父进程
      shell: false // mac不需要开启，windows下git base需要开启支持
    });
    app.on('close', resolve);
  });
};
