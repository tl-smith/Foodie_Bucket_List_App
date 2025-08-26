# 🍜 WanderBite

**Travel somewhere. Get a random food. Save it to your bucket list.**

WanderBite is a full-stack CRUD web application that lets users explore global destinations and local cuisine in an interactive and engaging way. With a simple click, users can generate random travel locations and food pairings, and save those experiences to a personalized bucket list.

---

## ✨ Features

- 🌍 Generate a random travel destination
- 🍱 Get a food suggestion associated with that region
- ✅ Manage and complete a personal travel-food bucket list
- 🔐 Secure login and protected API routes
- 📦 Full-stack architecture using modern web technologies

## Figma File

[Figma File](https://www.figma.com/design/hgNYVqnJUIz3hVEj7zNEVU/WanderBite-Wireframe?node-id=2-2&t=YxjjxenTtIKkQEQH-1)

## How to Contribute

## Wander Bite Git Workflow

### Whole Repo Setup (only do once)
1. Clone repository using command `git clone https://www.github.com/tl-smith/WanderBite`
2. Change into the directory using command `cd WanderBite`
3. Create and move into `develop` branch using command `git checkout -b develop`
4. Pull changes from the remote `develop` branch using command `git pull origin develop`
5. Instantiate git commit message template using command `git config commit.template .gitcommitmsg.txt`
6. _(Optional)_ If you want to edit commit messages in VSCode instead of the terminal, use command `git config core.editor "code --wait"`
7. ***Note***: When you make commits, run command `git commit` with no message. That way the template will pop open, and once you add your changes and save, it will make the commit with that message.

### Backend Folder Instructions
1. Change into the backend directory using `cd backend`
2. Copy contents of `.env.example` file into a new file `.env`
3. Get secrets from our channel and add to `.env` file
4. Install all packages with `npm install`
5. Run backend server with `npm run dev`

### Frontend Folder Instructions
1. Change into the frontend directory using `cd frontend
2. Install all packages with `npm install`
3. Run frontend server with `npm run dev`

### Contributing to the repo
1. Create and move into new feature branch using command `git checkout -b feature-<name-of-task>`. Make sure they are small enough so commit messages aren't too long
2. Pull latest changes from `develop` branch using command `git pull origin develop`
3. Make your changes, and commit them using command `git commit`
4. Once you've made all your changes, push them to the origin version of your branch using command `git push -u origin feature-<name-of-task>`
5. Then in Github, open a pull request from `origin/feature-<name-of-feature>` to `origin/develop` branch.
6. Ask someone to take a look at it, then merge with button **Merge Pull Request**
7. Pull from `dev` branch at least once a day so your feature branch is up-to-date
8. **Note**: Try to add the associated feature branch to your current Project ticket so that when branch is merged, ticket will close.

### For finalized changes (once we finish a phase, i.e. Backend Setup, Frontend, Deployment)
1. Open a pull request in Github from the `origin/develop` branch to `origin/main`.
2. Ask someone to review it (will need to press an Approve button)
3. Merge pull request

