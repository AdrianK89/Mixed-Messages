# Mixed Messages Project

The program to be created must:

* Generate messages using JavaScript
* Use Git
* Use command line
* Be developed locally on my computer

## My Message Generator

Create a message generator that randomly generates a pick-you-up message such as:
*You are awesome!*

## My Topic

As mentioned, will generate pick-me-up messages. The phrase *You are* will be kept
constant to keep the level of coding simple and straight forward.

If possible, a dictionary of uplifing adjectives will be loaded to accomplish filling
in the pick-me-up word without having to manually hardcode them myself.

## Data Storage

Since I intend to keep *You are* constant, it will just be hardcoded as a literal in
the call to an uplifing function.

For the uplifting adjectives, I plan to store them as string arrays, sorted by anit-
adjectives. This feature may not be implemented, depending on complexity and practicality
(I am feeling sad => provide happy uplift, I am feeling angry => provide calming uplift).
The fallback will be to store a large array of uplifting adjectives, or multiple to lower
array size.
