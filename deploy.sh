#!/bin/sh

if [ "$(git status -s)" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B master public origin/master

echo "Generating site"
yarn install
hugo

echo "Updating gh-pages branch"
cd public && \
git add --all && \
git commit -m "Site updated: $(date +'%Y-%m-%d %H:%M:%S')" --allow-empty

echo "Pushing to GitHub"
git push origin master