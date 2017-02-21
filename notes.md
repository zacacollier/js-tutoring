- Document-Object Model
- (DOM)
    myObject = {
      jerry: 'comedian',
      elaine: 'ex-girlfriend',
      kramer: "???",
      george: 'architect'
    }

    myObject.jerry
    // "comedian"

* Direct DOM Manipulation
    - Directly affects elements on the page
* Virtual DOM Manipulation
    - 'takes a snapshot' of the DOM
    - leaves the DOM alone (at first)
        - it updates the snapshot
        - then and only then does it decide if it should directly update the DOM
            
