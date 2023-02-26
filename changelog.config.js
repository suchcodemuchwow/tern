module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'Formatting',
    'Perf',
    'Remove',
    'Bugfix',
    'Hotfix',
    'Feature',
    'Docs',
    'Pin-Deps',
    'Deploy',
    'UI/Style',
    'Project',
    'Tests',
    'Security',
    'Secrets',
    'Tags',
    'Comp/Lint',
    'WIP',
    'Fix CI',
    'CI',
    'Analytics',
    'Refactor',
    'Add Deps',
    'Upgr Deps',
    'Down Deps',
    'Remove Deps',
    'Config',
    'Scripts',
    'Lang',
    'Typo',
    'Poop code',
    'Revert',
    'Merge',
    'Api',
    'Move',
    'License',
    'Assets',
    'Comments',
    'Database',
    'Log add',
    'Log del',
    'Contributor',
    'Responsive',
    'Gitignore',
    'Snapshots',
    'Types',
    'Seed file',
    'Error Hand',
    'Animation',
    'Auth/Perm',
    'Simple Fix',
    'Dead code',
    'Health',
    'Infra'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'subject', 'body'],
  types: {
    Formatting: {
      emoji: '🎨',
      description: 'Improve structure / format of the code.',
      value: 'Formatting'
    },
    Perf: {
      emoji: '⚡️',
      description: 'Improve performance.',
      value: 'Perf'
    },
    Remove: {
      emoji: '🔥',
      description: 'Remove code or files.',
      value: 'Remove'
    },
    Bugfix: {
      emoji: '🐛',
      description: 'Fix a bug.',
      value: 'Bugfix'
    },
    Hotfix: {
      emoji: '🚑',
      description: 'Critical hotfix.',
      value: 'Hotfix'
    },
    Feature: {
      emoji: '✨ ',
      description: 'Introduce new features.',
      value: 'Feature'
    },
    Docs: {
      emoji: '📝',
      description: 'Add or update documentation.',
      value: 'Docs'
    },
    'Pin-Deps': {
      emoji: '📌',
      description: 'Pin dependencies to specific versions.',
      value: 'Pin-Deps'
    },
    Deploy: {
      emoji: '🚀',
      description: 'Deploy stuff.',
      value: 'Deploy'
    },
    'UI/Style': {
      emoji: '💄',
      description: 'Add or update the UI and style files.',
      value: 'UI/Style'
    },
    Project: {
      emoji: '🎉',
      description: 'Begin a project.',
      value: 'Project'
    },
    Tests: {
      emoji: '✅ ',
      description: 'Add, update, or pass tests.',
      value: 'Tests'
    },
    Security: {
      emoji: '🔒',
      description: 'Fix security issues.',
      value: 'Security'
    },
    Secrets: {
      emoji: '🔐',
      description: 'Add or update secrets.',
      value: 'Secrets'
    },
    Tags: {
      emoji: '🔖',
      description: 'Release / Version tags.',
      value: 'Tags'
    },
    'Comp/Lint': {
      emoji: '🚨',
      description: 'Fix compiler / linter warnings.',
      value: 'Comp/Lint'
    },
    WIP: {
      emoji: '🚧',
      description: 'Work in progress.',
      value: 'WIP'
    },
    'Fix CI': {
      emoji: '💚',
      description: 'Fix CI Build.',
      value: 'Fix CI'
    },
    CI: {
      emoji: '👷',
      description: 'Add or update CI build system.',
      value: 'CI'
    },
    Analytics: {
      emoji: '📈',
      description: 'Add or update analytics or track code.',
      value: 'Analytics'
    },
    Refactor: {
      emoji: '♻️',
      description: 'Refactor code.',
      value: 'Refactor'
    },
    'Add Deps': {
      emoji: '➕ ',
      description: 'Add a dependency.',
      value: 'Add Deps'
    },
    'Upgr Deps': {
      emoji: '⬆️',
      description: 'Upgrade dependencies.',
      value: 'Upgr Deps'
    },
    'Down Deps': {
      emoji: '⬇️',
      description: 'Downgrade dependencies.',
      value: 'Down Deps'
    },
    'Remove Deps': {
      emoji: '➖ ',
      description: 'Remove a dependency.',
      value: 'Remove Deps'
    },
    Config: {
      emoji: '🔧',
      description: 'Add or update configuration files.',
      value: 'Config'
    },
    Scripts: {
      emoji: '🔨',
      description: 'Add or update development scripts.',
      value: 'Scripts'
    },
    Lang: {
      emoji: '🌐',
      description: 'Internationalization and localization.',
      value: 'Lang'
    },
    Typo: {
      emoji: '✏️',
      description: 'Fix typos.',
      value: 'Typo'
    },
    'Poop code': {
      emoji: '💩',
      description: 'Write bad code that needs to be improved.',
      value: 'Poop code'
    },
    Revert: {
      emoji: '⏪️',
      description: 'Revert changes.',
      value: 'Revert'
    },
    Merge: {
      emoji: '🔀',
      description: 'Merge branches.',
      value: 'Merge'
    },
    Api: {
      emoji: '👽',
      description: 'Update code due to external API changes.',
      value: 'Api'
    },
    Move: {
      emoji: '🚚',
      description: 'Move or revalue resources (e.g.: files, paths, routes).',
      value: 'Move'
    },
    License: {
      emoji: '📄',
      description: 'Add or update license.',
      value: 'License'
    },
    Assets: {
      emoji: '🍱',
      description: 'Add or update assets.',
      value: 'Assets'
    },
    Comments: {
      emoji: '💡',
      description: 'Add or update comments in source code.',
      value: 'Comments'
    },
    Database: {
      emoji: '🗃',
      description: 'Perform database related changes.',
      value: 'Database'
    },
    'Log add': {
      emoji: '🔊',
      description: 'Add or update logs.',
      value: 'Log add'
    },
    'Log del': {
      emoji: '🔇',
      description: 'Remove logs.',
      value: 'Log del'
    },
    Contributor: {
      emoji: '👥',
      description: 'Add or update contributor(s).',
      value: 'Contributor'
    },
    Responsive: {
      emoji: '📱',
      description: 'Work on responsive design.',
      value: 'Responsive'
    },
    Gitignore: {
      emoji: '🙈',
      description: 'Add or update a .gitignore file.',
      value: 'Gitignore'
    },
    Snapshots: {
      emoji: '📸',
      description: 'Add or update snapshots.',
      value: 'Snapshots'
    },
    Types: {
      emoji: '🏷',
      description: 'Add or update types.',
      value: 'Types'
    },
    'Seed file': {
      emoji: '🌱',
      description: 'Add or update seed files.',
      value: 'Seed file'
    },
    'Error Hand': {
      emoji: '🥅',
      description: 'Catch errors.',
      value: 'Error Hand'
    },
    Animation: {
      emoji: '💫',
      description: 'Add or update animations and transitions.',
      value: 'Animation'
    },
    'Auth/Perm': {
      emoji: '🛂',
      description: 'Work on code related to authorization, roles and permissions.',
      value: 'Auth/Perm'
    },
    'Simple Fix': {
      emoji: '🩹',
      description: 'Simple fix for a non-critical issue.',
      value: 'Simple Fix'
    },
    'Dead code': {
      emoji: '⚰️',
      description: 'Remove dead code.',
      value: 'Dead code'
    },
    Health: {
      emoji: '🩺',
      description: 'Add or update healthcheck.',
      value: 'Health'
    },
    Infra: {
      emoji: '🧱',
      description: 'Infrastructure related changes.',
      value: 'Infra'
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n'
    }
  }
}
