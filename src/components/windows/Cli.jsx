import React from 'react'
import MacWindow from './MacWindows'
import "./cli.scss"
import Terminal from 'react-console-emulator'

const Cli = () => {
  const commands = {
    about: {
      description: 'Learn more about me',
      usage: 'about',
      fn: () => 'I am a passionate full-stack developer with expertise in React, Node.js, and modern web technologies.'
    },
    skills: {
      description: 'Display my technical skills',
      usage: 'skills',
      fn: () => `
Technical Skills:
  Frontend    - React, JavaScript, CSS/SCSS, HTML5
  Backend     - Node.js, Express, Python
  Tools       - Git, VSCode, Webpack, Vite
  Databases   - MongoDB, PostgreSQL, Firebase
  Other       - REST APIs, GraphQL, Docker
      `
    },
    projects: {
      description: 'View portfolio projects',
      usage: 'projects',
      fn: () => `
Featured Projects:
  1. Mac OS Portfolio  - A macOS-themed portfolio built with React and Vite
  2. Task Manager      - A full-stack task management application
  3. Chat Application  - Real-time messaging app with WebSocket
  
Type 'projects <number>' to learn more about a specific project.
      `
    },
    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => `
Contact Information:
  Email    - your.email@example.com
  GitHub   - github.com/yourusername
  LinkedIn - linkedin.com/in/yourusername
  Twitter  - @yourusername
      `
    },
    whoami: {
      description: 'Display user information',
      usage: 'whoami',
      fn: () => 'root'
    },
    date: {
      description: 'Display current date and time',
      usage: 'date',
      fn: () => new Date().toString()
    }
  }

  const welcomeMessage = `
╔═══════════════════════════════════════════════════════════════╗
║                   Welcome to My Portfolio!                    ║
║                                                               ║
║  Type 'help' to see all available commands                    ║
╚═══════════════════════════════════════════════════════════════╝
`

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"zibranahmed:~$"}
          promptLabelStyle={{ color: "green" }}
        />
      </div>
    </MacWindow>
  )
}
export default Cli
