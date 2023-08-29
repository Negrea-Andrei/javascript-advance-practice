//!Git advance practices


//*Changing history

//? to change the most recent commit you can use:
//!git commit --amend

//?change more commits you can use:
//! git rebase -i HEAD~<the number of commits>
//*the VS code will open, change the PICK to edit and add the changes

//?Squashing commits
//!select the 2 commit you want to unite
//!on the second one use squash and add the description

//?to force a push:
//!git push --force

//?to revert a commit:
//!git revert