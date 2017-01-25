#### Git common practices

###### Commit early, commit often

It should go without saying that you **save often** as you work on a project. I personally keep my thumb and ring finger on `Command` + `s` respectively, all the time.

The step beyond that is **committing** with git so that you can manage a healthy project workflow. 

Every time you finish a feature, fix a bug, etc - **Add**, **Commit** and **Push** your work.

```bash
git add myproject.js
git commit -m "Finish new function"
git push
```

###### Stay up to date by **pulling** in changes from `upstream`

I'll often notify you when there are important changes I've made to the repository.

To synchronize your copy on disk, use:
```bash
git pull upstream master
```
