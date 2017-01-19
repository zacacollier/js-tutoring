## Vim tips & tricks

##### Movement
![http://vimsheet.com/images/hjkl.png]
(http://vimsheet.com/images/hjkl.png)

Recall that typing a number before any action will repeat the action `x` times:

**Example - moving up 11 lines:**
`11k`

**Deleting 3 words forward:**
`d3e`

**Deleting 3 words backward:**
`d3b`

If my cursor is at the top of the window, and I see a block of code I want to move to at the bottom of my screen, it's easy to just tack on a number before each movement key:

`11j 11j 11j 11j ...`

This because the `1` key is easily reached by my left hand when I'm in the home position. (Same goes for `2` and `3`!)

But an even better, more exact approach is to just jump straight to the line you want!

Let's say I want to move to line 87:

`87G`

`g / G` can be thought of as "Go".

To move to the **top of a document**:

`gg`

Or to the **bottom**:

`G`

Finally, to quickly skip up or down half a page at a time:

`C^u`

`C^d`

(In vim-speak, `C^` is meant to indicate the `control` key)

#### Selection

Select a word:

Move your cursor to the beginning of the word with `b`

Tap `v` to enter VISUAL mode.

Hit `e` to select the word, (or multiple words).

You can delete these words with `d` or `x`,

OR if you want to copy / paste:

Hit `y` to "yank" them. (This is vim-speak for Copy)

Move wherever you want to place them and hit `p`. 

If you mess up, just hit `u` to undo and try again. The selection will still be on your clipboard - you can still paste them!

What if you want to select and copy a whole line?

Simply move your cursor to the line and hit `V` (`shift` + `v`)

Now move to wherever you'd like to paste in the line. 

```bash
1 | What am I even doing  ⬅︎  select (V) and yank (y) this line,
2 |
3 | Vim is weird ⬅︎  Move to this line and hit `p`,
4 |
5 |
6 |
...
```

```bash
1 | What am I even doing
2 |
3 | Vim is weird
4 | What am I even doing  ⬅︎  Here is your result!
5 |
6 |
...
```

Say you move to line 42. If you want to paste to line **43**, hit `p`.

OR if you want to paste to line **41**, hit **`P`**!

The same before / after logic applies with pasting words:

If you yank the word `dog` and move your cursor somewhere to paste it, you can paste **before your cursor** with **`P`**, or **after your cursor** with **`p`**:

```bash
1 | dog  ⬅︎  select and yank this word,
2 |
3 | park ⬅︎  move to the beginning of this word and hit `P`,
4 |
5 |
6 |
...
```

```bash
1 | dog 
2 |
3 | dog park ⬅︎ this is your result!
4 |
5 |
6 |
...
```

Or:

```bash
1 | dog  ⬅︎  again select and yank this word,
2 |
3 | hot ⬅︎  move to the END of this word and hit `p`,
4 |
5 |
6 |
...
```


```bash
1 | dog 
2 |
3 | hot dog ⬅︎ here is your result!
4 |
5 |
6 |
...
```
