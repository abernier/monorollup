//
// Script to invoke with `lerna exec` to build each package with rollup, but **ONLY IF NEEDED**
//

const fs = require('fs')

const util = require('util')
const spawn = util.promisify(require('child_process').spawn)

const uptodeps = require('uptodeps')

const lernaRootPath = process.env.LERNA_ROOT_PATH // absolute root path of the monorepo
const packageRootPath = process.cwd() // absolute path of the current package

const defaultSrcPath = 'index.js'

async function main() {
  //
  // Get the package's `package.json` file
  //

  const pkgPath = `${packageRootPath}/package.json`
  if (!fs.existsSync(pkgPath)) {
    throw new Error(`No 'package.json' file found into the package: ${packageRootPath}`)
  }

  const pkg = require(pkgPath)
  // console.log(pkg)

  console.group(`📦 ${pkg.name}`)

  //
  // Determine if we need to build or rebuild
  //

  const {main: mainField, src: srcField} = pkg
  if (!mainField || !srcField) {
    throw new Error(`${pkg.name}: missing 'main' or 'src' field into the 'package.json'.`)
  }

  // `needBuild`: we need to build if `mainField` file doesn't exist
  const needBuild = !fs.existsSync(`${packageRootPath}/${mainField}`)

  // `needRebuild`: we need to REbuild if any dep is newer
  const target = `${packageRootPath}/${mainField}`
  const entrypoint = `${packageRootPath}/${srcField || defaultSrcPath}` // ex: 'index.js'

  const needRebuild = !uptodeps(target, entrypoint, {
    filter: path => !path.includes('node_modules')
  })

  //
  // Build if needed
  //

  if (needBuild || needRebuild) {
    console.log(`(Re)Building ${pkg.name}...`)
    // Rolling-up entrypoint (and forwarding stdout/stderr)
    await spawn('npx', ['rollup', '-c', `${lernaRootPath}/rollup.config.js`, '--', `${entrypoint}`], { stdio: 'inherit' })
  } else {
    console.log(`Ok, ${pkg.name} does not need to be rebuilt`)
  }

  console.groupEnd()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})