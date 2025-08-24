GitHub Checklist (working together in main branch)

BEFORE STARTING WORK

git pull origin main


After making changes

git add .
git commit -m "Describe what you changed"


Before pushing (if someone else pushed first)

git pull origin main --rebase


Push your changes

git push origin main


If there is a conflict

Fix the conflicting files manually. -->

Then run:

git add .
git rebase --continue
git push origin main