import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        whoami: {
            description: 'Quick intro',
            usage: 'whoami',
            fn: () => 'Manish Kumar | Web Developer | React Learner'
        },
        about: {
            description: 'Detailed introduction',
            usage: 'about',
            fn: () => `Hi, I am Manish Kumar.
I build modern, responsive web interfaces and I am currently focused on React and frontend engineering.`
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: HTML, CSS, JavaScript, React
Styling: Sass, Responsive Design
Tools: Git, GitHub, Vite
Learning: Modern React patterns and full-stack development`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. eSouk Marketplace
2. Productivity Dashboard
3. LV Website Clone
4. Portfolio MacOS-style UI`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Name: Manish Kumar
Email: manishkumar032004@gmail.com
Role: Web Developer
GitHub: https://github.com/Manish6267
LinkedIn: https://www.linkedin.com/in/manish-kumar-a3216a37a`
        },
        email: {
            description: 'Open email composer',
            usage: 'email',
            fn: () => {
                window.open('mailto:manishkumar032004@gmail.com', '_blank')
                return 'Opening mail composer...'
            }
        },
        linkedin: {
            description: 'Open LinkedIn profile',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/manish-kumar-a3216a37a', '_blank')
                return 'Opening LinkedIn profile...'
            }
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Manish6267', '_blank')
                return 'Opening GitHub profile...'
            }
        },
        resume: {
            description: 'Open resume PDF',
            usage: 'resume',
            fn: () => {
                window.open('/resume.pdf', '_blank')
                return 'Opening resume...'
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: https://github.com/Manish6267
LinkedIn: https://www.linkedin.com/in/manish-kumar-a3216a37a`
        },
        theme: {
            description: 'CLI theme details',
            usage: 'theme',
            fn: () => 'Theme: Green terminal prompt on dark background'
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
=========================================
     Welcome to Manish Portfolio CLI
=========================================

Hello! I am Manish Kumar, a Web Developer.
This terminal is your quick command center for profile, projects, and contact.

Type 'help' to see all available commands, or try:
  - whoami
  - about
  - skills
  - projects
  - contact
  - github
  - linkedin
  - email
  - social
  - resume

Thanks for visiting.
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'manishkumar:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli