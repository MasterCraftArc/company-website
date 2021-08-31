# Defense Unicorns Website

<!-- ![(description)](https://raw.githubusercontent.com/your github username/repo name/main/file name.PNG) -->

<!-- ## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

[about] -->

# Installation

1. Clone repo
2. run `npm install`

# Usage

1. run `npm run start`
2. Navigate to `localhost:8000`

# Developer Guidelines

## [Kanban](https://github.com/leapfrogai/website/projects/1)

- When moving a story from "To Do" to "In Progress" the developer should assign themselves.
- The developer should document all changes (in the form of tasks) within the story
- When the developer is done with a story they should move the story to "Awaiting Release", create if none exists and then link the pull request, and provide the netlify deploy-preview link in the story.
- Once the story has been reviewed and the pull request completed the story should be closed and moved to "Done"

## Starting Development Server

`npm run develop`

## Cleaning Cache

`npm run clean`

## Branches

- Individual story branches are encouraged but not a requirement. With the exception of Special Requests individual story branches should be merged, via pull request, into the "feature" or "bug" branches depending on their label and never into "main". Individual story branches should be prefixed with their label followed by a dash and the story number. Examples: `feature-434`, `chore-122`, `bug-172`, `documentation-132`

### Feature

- Sprint stories are to be committed to the feature branch for weekly review and release.
- Single pull request to be merged at the end of the week.

### Bug

- bugs of high priority should be committed to the bug branch for review and immediate release.
- documentation/chores/ui tweaks that need immediate release or do not effect the rendered site itself.

### Special Requests

- Special requests are high priority stories from Business Operations and leadership
- Individual branches should be created with the prefix SR followed by a dash and the story number `SR-122`.
- Should be reviewed ASAP on completion and released.

## Commits

- All commits should start with the story(ies) they reference ie `#122. Update ...`

## Pull Requests

- All UI changes and features should be reviewed by another developer as well as the designer or pm.
- Bugs and non ui chores should be reviewed and verified by another developer.

## Creating deploy-previews

In order to create a netlify deploy-preview first create a pull request to main. This will trigger the netlify hooks to deploy the deploy preview. The link to the newly deployed site will be inside of the pull request.
