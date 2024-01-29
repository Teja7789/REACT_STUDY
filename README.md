# Igniting App Install npm init -D parcel

# Step1:

    //npm init

# Step2 packege.json created

packege.json
 package name: (react_study)
version: (1.0.0)                                                             
description: This is ReactStudy
entry point: (App.js)                                                        
test command: jest                                                           
git repository: (https://github.com/Teja7789/REACT_STUDY.git)                
keywords: react,study
author: Tej                                                                  
license: (ISC)                                                               
# code  package.json
...code
{
  "name": "react_study",
  "version": "1.0.0",
  "description": "This is ReactStudy",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Teja7789/REACT_STUDY.git"
  },
  "keywords": [
    "react",
    "study"
  ],
  "author": "Tej",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Teja7789/REACT_STUDY/issues"
  },
  "homepage": "https://github.com/Teja7789/REACT_STUDY#readme"
}


Is this OK? (yes) yes

...code
# parcel

# Step3: https://parceljs.org/

    //npm install -D parcel

# code  package.json && package-lock.json && node_modules

...code
  "devDependencies": {
    "parcel": "^2.11.0"
  }
...code

# step4:

    //npx parcel index.html

    //npm i react

    //npm i react-dom

...code - App.js
import React from "react";
import ReactDOM  from "react-dom/client";
..code

...code -index.html
<script src="./App.js" type="module"></script>
...code

...code - package.json
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
...code

# step5 - parcel-build
    //npx parcel build index.html


# cdnLinks_React
module === index.html,index.css& App.js

# Theroy

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
