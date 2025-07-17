# 🤝 Contributing to Simple Todo List

Thank you for your interest in contributing! This guide will help you get started with contributing to our open-source Todo List project.

## 🌟 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account
- A text editor (VS Code, Sublime Text, etc.)

### Setting Up Your Development Environment

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page
   - This creates a copy of the project in your GitHub account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/open-source.git
   cd open-source
   ```

3. **Set up the upstream remote**
   ```bash
   git remote add upstream https://github.com/JustVarunsai/open-source.git
   ```

4. **Verify the setup**
   ```bash
   git remote -v
   # Should show both origin (your fork) and upstream (original repo)
   ```

## 📝 How to Contribute

### Step 1: Choose an Issue

1. Browse [open issues](https://github.com/JustVarunsai/open-source/issues)
2. Look for issues labeled:
   - `good first issue` - Perfect for beginners
   - `help wanted` - We need community help
   - `enhancement` - New features
   - `bug` - Something isn't working

3. Comment on the issue you'd like to work on
4. Wait for assignment before starting work

### Step 2: Create a Branch

```bash
# Make sure you're on the main branch
git checkout main

# Pull the latest changes
git pull upstream main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b bugfix/issue-description
```

### Step 3: Make Your Changes

#### Code Style Guidelines

- **HTML**: Use semantic HTML5 elements
- **CSS**: Follow BEM methodology for class naming
- **JavaScript**: Use ES6+ features, meaningful variable names
- **Indentation**: Use 4 spaces (no tabs)
- **Comments**: Add comments for complex logic

#### Example of Good Code Style

```javascript
// Good: Descriptive function name and clear logic
function updateTaskStatistics() {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    
    // Update DOM elements with new statistics
    document.getElementById('totalTasks').textContent = `Total: ${totalTasks}`;
    document.getElementById('completedTasks').textContent = `Completed: ${completedTasks}`;
}

// Good: Clear CSS class naming
.todo-item__text {
    flex: 1;
    margin-left: 10px;
    font-size: 16px;
}
```

### Step 4: Test Your Changes

1. **Manual Testing**
   - Open `index.html` in your browser
   - Test all existing functionality
   - Verify your new feature/fix works correctly
   - Test on different screen sizes (mobile, tablet, desktop)

2. **Browser Compatibility**
   - Test in Chrome, Firefox, Safari, and Edge
   - Check browser console for any errors

3. **Code Review Checklist**
   - [ ] Code follows project style guidelines
   - [ ] No console errors
   - [ ] Features work as expected
   - [ ] Responsive design maintained
   - [ ] Comments added where necessary

### Step 5: Commit Your Changes

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add: task category feature with dropdown selection

- Added category dropdown to task input
- Updated task object to include category field  
- Added category display in task list
- Updated CSS for category styling"
```

#### Commit Message Guidelines

Use the following format:
- `Add: description` - for new features
- `Fix: description` - for bug fixes
- `Update: description` - for improvements
- `Remove: description` - for deletions
- `Docs: description` - for documentation changes

### Step 6: Push and Create Pull Request

```bash
# Push your branch to your fork
git push origin feature/your-feature-name
```

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template with:
   - Clear title describing your changes
   - Detailed description of what you implemented
   - Screenshots if you changed the UI
   - Reference the issue number (e.g., "Closes #123")

## 🏷️ Issue Labels

| Label | Description |
|-------|-------------|
| `good first issue` | Good for newcomers |
| `enhancement` | New feature or request |
| `bug` | Something isn't working |
| `documentation` | Improvements to docs |
| `help wanted` | Extra attention is needed |
| `question` | Further information is requested |

## 💡 Contribution Ideas

### Beginner-Friendly (Good First Issues)

1. **Add Local Storage**
   - Save todos to browser localStorage
   - Load todos when page refreshes

2. **Dark Mode Toggle**
   - Add button to switch themes
   - Create dark color scheme

3. **Improve Styling**
   - Add hover effects
   - Improve button styles
   - Add loading animations

### Intermediate Features

1. **Task Categories**
   - Add category dropdown
   - Filter tasks by category
   - Color-code categories

2. **Due Dates**
   - Add date picker for tasks
   - Show overdue tasks differently
   - Sort by due date

3. **Task Priority**
   - Add priority levels (High, Medium, Low)
   - Visual indicators for priority
   - Sort by priority

### Advanced Features

1. **Drag and Drop**
   - Reorder tasks by dragging
   - Move between categories

2. **Search and Filter**
   - Search tasks by text
   - Filter by completion status
   - Advanced filtering options

## ❓ Getting Help

- **Questions**: Open a [discussion](https://github.com/JustVarunsai/open-source/discussions)
- **Issues**: Create a [new issue](https://github.com/JustVarunsai/open-source/issues/new)
- **Contact**: Mention @JustVarunsai in comments

## 🎉 Recognition

All contributors will be:
- Listed in our README contributors section
- Mentioned in release notes
- Invited to be project collaborators (for regular contributors)

## 📚 Resources for Beginners

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Markdown Guide](https://www.markdownguide.org/)
- [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Tricks](https://css-tricks.com/)

---

**Thank you for contributing! Every contribution makes this project better for everyone. 🚀**