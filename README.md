# Igniting App Install npm init -D parcel

# Step1:

      npm init

# Step2 packege.json created
```jsx
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
```

# Step3:Parcel SetUP https://parceljs.org/

      npm install -D parcel

# code  package.json && package-lock.json && node_modules

...code
  "devDependencies": {
    "parcel": "^2.11.0"
  }
...code

# step4:

      npx parcel index.html

      npm i react

      npm i react-dom

```Jsx

...code - App.js
import React from "react";
import ReactDOM  from "react-dom/client";
..code
```

```Jsx
...code -index.html
<script src="./App.js" type="module"></script>
...code
```

```Jsx
...code - package.json
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
...code
```

# step5 - parcel-build
      npx parcel build index.html
# step5.a - pacakage.json 

```Jsx
remove...code
  "main": "App.js",
...code
```

# step5.b - package.json
```Jsx
add...code
  "browserslist":[
    "last 3 versions"
  ]
...code
```
# step6 - npm start package.json
```Jsx
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    ...code
  }
```
## Export types
```
export default resList; // one anme in one file ../../utils/constants
export const HEADER_LOGO; // two names in one file ../../utils/mockData
```
 # Laying foundation Jsx , babel and componet  

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
