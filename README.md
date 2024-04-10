# Angular Assessment

•	Implement infinite Continuous scroll author list view
•	Click on any author then to open another screen of author detail page.
•	Click back to Go back on Author List view screen

## `I have Implement infinite scroll of author list Using Intersection Observer API:-`

For this method I have create directive

This is a custom method that sets up the IntersectionObserver. It creates an observer with specified options, including the root element, root margin, and threshold. The observer listens for changes in intersection and triggers a callback function when an intersection occurs. If the observed element is intersecting with its parent container, it logs a message to the console and emits true through the appIntersectionListener event emitter.


## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

## Getting Started

To clone the repo to your local machine (or AVD), run the below command

```bash
$ git clone https://github.com/sunsunny762/Angular-Assessment.git
```

If you are using SSH, use the below command

```bash
$ git clone git@github.com:sunsunny762/Angular-Assessment.git
```