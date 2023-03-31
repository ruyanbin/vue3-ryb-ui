// import commandLineArgs from "command-line-args";//处理用户输入参数
// import commandLineUsage from 'command-line-usage';//提供帮助命令
// import gitClone from './utils/gitClone.js';
// import prompts from 'prompts';
// import { readFile } from 'fs/promises';

// const pkg =JSON.parse( await readFile(new URL('./package.json',import.meta.url)))
// // 配置参数命令
// const optionDefinitions=[
//   {name:"version",alias:"v",type:Boolean},
//   {name:"help",alias:"h",type:Boolean},
// ]
//  // 帮助指令
//  const helpSections = [
//   {
//     header:"create-ryb",
//     content:"快速生成组件库"
//   },
//   {
//     header:"Options",
//     optionList:[
//       {
//         name:"version",
//         alias:"v",
//         typeLabel:'{underline boolean}',
//         description: '版本号'
//       },
//       {
//         name: 'help',
//         alias: 'h',
//         typeLabel: '{underline boolean}',
//         description: '帮助'
//       }
//     ]
//   }
//  ]
//  //
//  const promptsOptions=[
//   {
//     type:'text',
//     name:"name",
//     message:"请输入项目名称"
//   },
//   {
//     type:'select', //单选
//     name:"template",
//     messge:'请选择一个模版',
//     choices:[
//       { title: 'kitty-ui', value: 1 },
//       { title: 'ryb', value: 2 }
//     ]
//   }
//  ]

//  const options = commandLineArgs(optionDefinitions)

//  const remoteList={
//   1: 'https://gitee.com/geeksdidi/kittyui.git',
//   2: 'https://github.com/qddidi/easyest.git'
//  }
//  const getUserInfo=async ()=>{
//   const res = await prompts(promptsOptions)
//   if(!res.name || !res.template) return
//   gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true })
//  }
//  const runOptions = ()=>{
//   if(options.version){
//     console.log(`v${pkg.version}`);
//     return
//   }
//   if (options.help) {
//     console.log(commandLineUsage(helpSections));
//     return;
//   }
//   getUserInfo();
//  }
//  runOptions();

import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import gitClone from './utils/gitClone.js';
import prompts from 'prompts';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);
//配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];

//帮助命令
const helpSections = [
  {
    header: 'create-easyest',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];
const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 1 },
      { title: 'easyest', value: 2 }
    ]
  }
];
const options = commandLineArgs(optionDefinitions);

const remoteList = {
  1: 'https://gitee.com/geeksdidi/kittyui.git',
  2: 'https://github.com/qddidi/easyest.git'
};
const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
};
const runOptions = () => {
  if (options.version) {
    console.log(`v${pkg.version}`);
    return;
  }
  if (options.help) {
    console.log(commandLineUsage(helpSections));
    return;
  }
  getUserInfo();
};

runOptions();
