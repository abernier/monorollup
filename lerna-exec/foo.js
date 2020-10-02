const lernaRootPath = process.env.LERNA_ROOT_PATH // absolute root path of the monorepo
const packageRootPath = process.cwd() // absolute path of the current package

const pkgPath = `${packageRootPath}/package.json`
const pkg = require(pkgPath)

console.log([pkg.main, pkg.module].filter(el => el).join(' '))