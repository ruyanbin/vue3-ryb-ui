/**
 * fs.readdirSync( path, options )
 * 同步读取给定目录的内容。该方法返回一个数组，其中包含目录中的所有文件名或对象
 *  path:它保存必须从中读取内容的目录路径。它可以是字符串，缓冲区或URL
 * options:它是一个对象，可用于指定将影响方法的可选参数。它具有两个可选参数：
 * encoding:它是一个字符串值，该字符串值指定给回调参数指定的文件名使用哪种编码。默认值为“ utf8”。
 * withFileTypes:这是一个布尔值，它指定是否将文件作为fs.Dirent对象返回。默认值为“ false”。
 * */
/**
 * fs.rmdirSync( path, options )
 * 同步删除给定路径下的目录。还可以通过配置options对象来递归使用它来删除嵌套目录。它返回undefined。
 *
 * path:它包含必须删除的目录的路径。它可以是字符串，缓冲区或URL。
 * options:该对象可用于指定将影响操作的可选参数。它具有三个可选参数：
 * recursive:它是一个布尔值，它指定是否执行递归目录删除。在这种模式下，如果找不到指定的路径并且在失败时重试该操作，则不会报告错误。默认值为false。
 * maxRetries:它是一个整数值，它指定Node.js如果由于任何错误而失败，将尝试执行该操作的次数。在给定的重试延迟后执行操作。如果递归选项未设置为true，则忽略此选项。默认值为0。
 * retryDelay:它是一个整数值，它指定重试该操作之前要等待的时间(以毫秒为单位)。如果递归选项未设置为true，则忽略此选项。默认值为100毫秒。
 * */
import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';
// 保留文件
const stayFile = ['package.json', 'README.md'];
// const delPath = async (path: string) => {
//   let files: string[] = [];
//   if (fs.existsSync(path)) {
//     files = fs.readdirSync(path);

//     files.forEach(async (file) => {
//       let curPath = resolve(path, file);

//       if (fs.statSync(curPath).isDirectory()) {
//         // recurse
//         if (file != "node_modules") await delPath(curPath);
//       } else {
//         // delete file
//         if (!stayFile.includes(file)) {
//           fs.unlinkSync(curPath);
//         }
//       }
//     });

//     if (path != `${pkgPath}/ryb`) fs.rmdirSync(path);
// 	// if (path != `../../../ryb`) fs.rmdirSync(path);
//   }
// };
// export default delPath;
const delPath = async (path: string) => {
  let files: string[] = [];
  // existsSync  以同步的方法检测目录是否存在。如果目录存在 返回 true ，如果目录不存在 返回false
  // 判断是否 存在
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(async (file) => {
      const curPath = resolve(path, file);
      // isDirectory 用于检查特定Dirent是否描述了目录
      if (fs.statSync(curPath).isDirectory()) {
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // 删除文件
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath); // 删除
        }
      }
    });
    if (path != `${pkgPath}/ryb`) fs.rmdirSync(path);
  }
};
export default delPath;
