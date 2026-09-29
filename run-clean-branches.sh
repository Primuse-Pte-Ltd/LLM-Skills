#!/bin/bash
# This script cleans up local branches that have been deleted from the remote repository.
# It fetches the latest branches from the remote repository and then deletes any branches that are no longer present on the remote.
# This is useful to keep your local repository clean and free of any branches that have been deleted from the remote repository.
# It is a good practice to run this script regularly to keep your local repository clean and free of any branches that have been deleted from the remote repository.

chmod +x run-clean-branches.sh

git fetch --prune

branches=$(git branch -vv | awk '/: gone]/{print $1}')

if [ -n "$branches" ]; then
  echo "$branches" | xargs git branch -D
else
  echo "No deleted remote branches to clean."
fi