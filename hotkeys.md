### Terminal
#### Note: `C-` stands for `Control`.

> ***Important:***

> These keystrokes don't really feel as magical unless you remap Caps Lock to Control.

> Sounds weird, but back in the day, a lot of keyboards used to have Control in the Caps Lock position - the keybindings we're going to look at were designed for that particular layout.

> Besides, let's be honest, how many times a week do you use Caps Lock? Is there anything it does that you can't do just by holding `Shift`???
>
>If you have macOS Sierra, you have the option to remap Caps Lock in `System Preferences > Keyboard > Modifier Keys...`

> for other OSes, just google 'remap caps lock to control <my os>' and you'll probably have it figured out in no time. I'm also happy to help.


#### Movement
```bash
# Beginning of line...
$ (C-a)        <--  /  -->          (C-e)
                  #...end of line
```


```bash
# Note: the '_' is your cursor position
$ cd ~/Documets/ACA/Javascript/01LessonOne/index.js_
            ^^
# whoops, got a typo

# Rather than slapping backspace for the rest of your life,
# Just do C-a to move to the beginning of the line...

$_cd ~/Documets/ACA/Javascript/01LessonOne/index.js

# ...and use C-f to move your cursor forward one character at a time
$ _d ~/Documets/ACA/Javascript/01LessonOne/index.js
...
   ...
      ...
         ...
$ cd ~/Docume_s/ACA/Javascript/01LessonOne/index.js
# (type 'n')
$ cd ~/Documents/ACA/Javascript/01LessonOne/index.js
```
What about moving backward? Just use `C-b`

So far we have
- `C-a`   Move to beginning of line
- `C-e`   Move to end of line
- `C-f`   Move forward one character
- `C-b`   Move backward one character

Even having these 4 commands at your fingertips will make life a lot easier.

However, it gets better - you can also use the `Alt` key to modify this movement.

With `C-Alt-f` / `C-Alt-b`, instead of moving one character forward or backword, we can move a whole *word* forward of backward.

> note that some terminal emulators (such as iTerm) will require that you manually set the behavior of your `Alt` key (in iTerm it is `Preferences > Profiles > Keys > Left Option Key acts as: ` and set it to `+Esc`). If you're using a different OS / terminal emulator, Google "alt key as meta <terminal emulator> <OS>"

The best part? these key bindings work just about anywhere. switch over to your Browser and in the URL bar, try using `C-a` / `C-e`. same result as in the terminal. Try doing these movements on text fields anywhere - I think you'll find that they're nearly 100% universal.
> sometimes you'll find that the `Alt` modifier won't work with `Control` - in this case, you probably just need to use the keystroke without `Control` - i.e. `Alt-f` to move one word forward.

So that's it, those are the major keyboard shortcuts you should know! Make these a part of your routine - you'll be surprised how much it helps!

In closing, I'll list the ones we covered, and leave you with a couple more that I find myself using almost all the time.
- `C-a`       Move to beginning of line
- `C-e`       Move to end of line
- `C-f`       Move forward one character
- `C-b`       Move backward one character
- `C-Alt-f`   Move forward one word
- `C-Alt-b`   Move backward one word
**Bonus**
- `C-w`       Delete a whole word
> Anywhere else, you can use `Alt-Backspace` to delete a whole word (macOS only)

- `C-p`       Cycle through `p`reviously used commands (in the terminal)
- `C-n`       Same, only forward (`n`ext command)
