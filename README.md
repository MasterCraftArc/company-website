# Defense Unicorns Website

<!-- ![(description)](https://raw.githubusercontent.com/your github username/repo name/main/file name.PNG) -->

<!-- ## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

[about] -->

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

- Branches should be created for an issue. Related issues may be added if they share overlapping work and may be merged into one issue.  

### Special Requests

- Special requests are high priority stories from Business Operations and leadership
- Should be reviewed ASAP on completion and released.

## Commits

- All commits should start with the story(ies) they reference ie `#122. Update ...`

## Pull Requests

- All UI changes and features should be reviewed by another developer as well as the designer or pm.
- Bugs and non ui chores should be reviewed and verified by another developer.

## Creating deploy-previews

In order to create a netlify deploy-preview first create a pull request to main. This will trigger the netlify hooks to deploy the deploy preview. The link to the newly deployed site will be inside of the pull request.

## Handling merge conflicts

If unable to merge with the github ui due to merge conflicts follow these steps:  
**Ask for help if you are not confident merging**.

1. Ensure you are on the branch you are attempting to merge. for example if merging from feature to main, ensure you are on the feature branch in your local dev environment.
2. ensure you do not have any uncommitted changes. If you do, stash or commit prior to merging.
3. run `git merge BRANCH_NAME` for the above example it will be `git merge main`
4. Handle all merge conflicts.
5. add and commit changes
6. push resolved merge.
