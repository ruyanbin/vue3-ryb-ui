import delPath from "../utils/delpath"
/**
 * gulp.series 用于串行（顺序）执行
 * gulp.parallel 用于并行执行
 * src()表示创建一个读取文件系统的流
 * dest()是创建一个写入到文件系统的流
 * */
import { series,parallel,src,dest} from "gulp"
import {pkgPath,componentPath} from "../utils/paths"
import less from "gulp-less"
import autoprefixer from "gulp-autoprefixer"
import run from "../utils/run"
// 删除ryb
	
export const removeDist = () => {
  return delPath(`${pkgPath}/ryb`);
};

// 打包样式
	
export const buildStyle=()=>{
	 return src(`${componentPath}/src/**/style/**.less`)
	 .pipe(less())
	 .pipe(autoprefixer())
	 .pipe(dest(`${pkgPath}/ryb/lib/src`))
	 .pipe(dest(`${pkgPath}/ryb/es/src`))
}


	
export const buildComponent = async ()=>{
	 run ('pnpm run build',componentPath)
}
export default series(
async ()=>removeDist(),
parallel(
async ()=>buildStyle(),
async ()=>buildComponent()
)
)