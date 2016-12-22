# (ง°ل͜°)ง Javascript Tutoring

### Mindset Check

* *Aspire toward mastery.*
##### *Read*. *Look stuff up*. *Clutter your browser with tabs for every time you have to Google something*, whether out of necessity or just on a whim. 
When you don't know something, *first and foremost* go look it up - read, practice, relish in your newfound knowledge. When you forget about it a day or so later, hang your head, go look it up again, practice more. Give yourself a break; nobody gets everything on the first go-around. 

* *Embrace your failures, celebrate your successes.*
##### The vast majority of your time learning Javascript will be spent debugging i.e. *fixing shit*. 
Don't worry, we'll work on developing some skills to help make this process less disorienting - once you remove you bruised ego from the equation, you'll find that it can actually be pretty fun.

* *Write code everyday.*
##### Self-explanatory. You won't learn anything if you don't practice regularly; you won't *become proficient* at anything if you don't practice *daily*. 
My recommendation? Start as soon as you wake up - drink some water, make a coffee, ignore your pending Instagram notifications, begin coding. Even just 15 minutes to get the ball rolling will help you come back to it later in the day.

* *Enjoy the process.*
##### Learning programming is about *changing your brain*. 
Frustration and confusion are your brain's way of responding to the frightening and unfamiliar surroundings to which you're exposing it. Moreover, they are concrete signs of progress - emotional responses signalling an impending change. 

> **“In the beginner’s mind there are many possibilities, but in the expert’s there are few.” ― Shunryu Suzuki**

### Pre-Work
##### Before we begin, I'd like you to complete some readings and exercises. They're listed in order of importance - nevertheless, work on them concurrently or sequentially, whichever suits your learning style best. 
##### _Note that I won't expect you to pay for / complete any Codecademy Pro content - the Free track will suffice_
1. [Codecademy: Javascript](https://www.codecademy.com/learn/javascript)
Familiarize yourself with the fundamentals.

2. [MDN: "What is Javascript?"](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
A little slice of the big picture.

3. [_Javascript Allongé: Values and Expressions over Coffee_](https://leanpub.com/javascriptallongesix/read#leanpub-auto-prelude-values-and-expressions-over-coffee)
_"Values are expressions..."

4. [Udemy: "Javascript: Understanding the Weird Parts"](https://www.udemy.com/understand-javascript/)
##### Don't. miss. this. one.
Anthony Aliceas' course on Udemy is simply one of the best Javascript resources out there. Once you know enough JS to survive - you've had time to get acquainted with some of it's maddening nuances - go grab this course. When I was struggling with JS at first, this helped me, more than anything, start to feel like I was "getting it". 
The course lists for $175, but here's how you can get it for about $15:

 - Download the [Honey extension](https://chrome.google.com/webstore/detail/honey/) for Chrome.
 - Go to Udemy and add the course to your Shopping Cart
 - Go to Checkout. Honey will start doing it's thing.
 - When it's finished scanning for Coupon Codes, the price will have been reduced to about $15!

4. [Codecademy: Learn Git](https://www.codecademy.com/learn/learn-git)
Say goodbye to Github Desktop - from now on, we use Git the proper way, as Linus Torvalds originally intended it.
Also check out [Try Git](https://try.github.io/levels/1/challenges/1).

5. [Lifehacker: Keyboard Shortcuts](http://lifehacker.com/5970089/back-to-the-basics-learn-to-use-keyboard-shortcuts-like-a-ninja)
The faster, the better. If you want to really optimize your keystroke efficiency, [I highly recommend you consider learning Vim - see Environment Setup below for details](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=learn%20vim).

6. [Codecademy: Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)
You'll pick this up more as you go along, but go ahead and learn some basics for now.

* [_Bonus: Eloquent Javascript: Introduction & Chapter 1_](http://eloquentjavascript.net/00_intro.html)
Another great, more computer-sciencey JS intro.

* [Shunryu Suzuki quotes for motivation](https://www.goodreads.com/author/quotes/62707.Shunryu_Suzuki)

### Environment Setup & Optimization
##### The steps listed below are in numerical order, from **easiest-to-implement** to **more involved / time-consuming**. 
1. **_"The Great Suspender" Chrome Plug-in_**
Chrome's a massive RAMhog - ease the burden on your system memory with this plugin.

2. **_Remap `Caps Lock` to `Control`_** 
There are different ways to do this depending on your system, but it's usually pretty easy - Google your OS version to find out how. macOS Sierra 10.12, for instance, allows you to easily remap `Caps Lock` from within System Preferences (arguably the only positive side-effect of their decision to abandon the `Escape` key on the new 2016 MacBook Pro).
 - **"But why Caps Lock?"**
  Being as `Control` is the default leader key for some very useful keyboard shortcuts on the command line (which, again, you're going to be using more and more from now on), and `Caps Lock` is so much more conveniently located. In fact, many of the first consumer-grade computer keyboards [shipped with the `Control` key where `Caps Lock` is nowadays](https://donatstudios.com/UNIX-Keyboards). Besides, I bet you can count on one hand the number of times you've used `Caps Lock` in the past month... **;o)**
  
3. **_Upgrade and Customize your Terminal_** 
Since you'll be spending so much time with the command line, I recommend you select a better Terminal emulator than the one that comes with your machine.
  - **macOS**: Install [iTerm2](https://www.iterm2.com/) and [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH) for a much better CLI experience. I recommend using a minimal theme like [Avit](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes#avit)
  - **Windows**: Install [Cygwin] and configure to your liking.
  
4. **_Start learning `vim`_** 
This will be the most challenging change to implement in your development environment, but the longterm benefits you will gain from being able to **write code really fast** are absolutely worth it. There are many development environments and text editors out there, but the oldest and most widely-revered standbys are [Vim](http://www.vim.org/) and [Emacs](https://www.gnu.org/software/emacs/tour/). Both have strengths and weaknesses, an extended discussion of which would be outside the scope of this article. Vim is my favorite, for a number of reasons:
  - **Lightning-fast editing capabilities** - the keymappings are weird at first, but [you'll be able to edit text much, much faster once you get used to them](https://youtu.be/4Z8YbjQvb3s).
  - **Runs natively in a terminal window** - no need to constantly switch between text editors and terminal windows.
  - **Lightweight** - This because Vim runs in the terminal. I'm pretty OCD about CPU / RAM usage; the fewer application processes I have running, the better.
  - **Supported everywhere** - Lots of UNIX-based systems even come with Vim already installed. Not only that, but since the *configuration* is loaded from a regular plaintext file in the host's home directory, it's easy to backup and install from anywhere - for instance, I can host my `config` files on Github, pull in my `.vimrc` and load in my preferred settings.
  The best way to transition is to **first install Vim bindings for your current editor**. **Atom**, for instance, has a package called **"Vim Mode Plus"** that's got all the basic functionality you'll need to get your bearings. This way, you'll be able to learn the basics - moving around, cutting / pasting text - but you'll always be able to fall back on the mouse when necessary. 
  I'll post a more detailed guide on how to get **just the right amount of customization** in your `vim` setup, so you can really soup up your development environment when you're ready.

##### More to come!
I'll keep you updated on how we'll be using this repo to co-work on projects and exercises.


