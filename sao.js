module.exports = {
  prompts: {
    name: {
      message: 'Project name',
      default: ':folderName:'
    },
    description: {
      message: 'Project description',
      default: `My PWA App`
    }
  },

  move: {
    'gitignore': '.gitignore'
  },

  post ({ yarnInstall, gitInit, chalk, pm, isNewFolder, folderName }) {
    gitInit()

    yarnInstall()

    const cd = () => {
      if (isNewFolder) {
        console.log(`    ${chalk.cyan('cd')} ${folderName}`)
      }
    }

    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run dev\n`)
    console.log(chalk.bold(`  To build for production:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run build`)
    console.log(`    ${chalk.cyan(pm)} start`)
    console.log()
  }
}
