module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'Project name',
        default: this.outFolder
      },
      {
        name: 'description',
        message: 'Project description',
        default: ``
      }
    ]
  },

  templateData () {
    return {
      name: this.answers.name,
      description: this.answers.description
    }
  },

  actions: [
    {
      type: 'add',
      files: '**'
    },
    { type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],

  async completed () {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
