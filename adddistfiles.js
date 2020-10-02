const util = require('util')
const spawn = util.promisify(require('child_process').spawn)

const lernaRootPath = process.env.LERNA_ROOT_PATH // absolute root path of the monorepo
const packageRootPath = process.cwd() // absolute path of the current package

const pkgPath = `${packageRootPath}/package.json`
const pkg = require(pkgPath)

async function main() {
  const distfiles = [pkg.main, pkg.module].filter(el => el)

  await spawn('git', ['add', ...distfiles], { stdio: 'inherit' })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})