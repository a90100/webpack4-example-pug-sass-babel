# webpack4-example-pug-sass-babel
An example project use Pug, Sass, Babel in Webpack4.

## Get started from empty file
### 1. create a package.json file
`npm init`

### 2. package.json add following code
```
  "scripts": {
    "watch": "webpack --mode development --watch",
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
```

### 3. install Webpack
`npm install webpack webpack-cli --save-dev`

---

## Use Pug with Webpack4
### 1. Install following plugins
```
npm install pug pug-loader html-webpack-plugin --save-dev
```

### 2. Build html folder in src folder and build index.pug in html folder.
![](https://i.imgur.com/XysYqns.png)

### 3. Build main.js in src folder
main.js add this line:
`import html from "./html/index.pug";`

### 4. Build webpack.config.js
![](https://i.imgur.com/564lkfk.png)

### 5. npm run: choose one command to execute
```
npm run watch
npm run start
npm run build
```

---

## Use Sass with Webpack4
### 1. Install following plugins
`npm install sass-loader node-sass style-loader css-loader --save-dev`

### 2. Build styles folder in src folder and build main.sass in styles folder.
![](https://i.imgur.com/B0HO4Wj.png)

main.js add this line:
`import style from "./styles/main.sass";`

### 3. Add some loaders in webpack.config.js
```
{
  test: /\.css$/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    }
  ]
},
{
  test: /\.(sass)$/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader'
    }
  ]
},
```

### 4. npm run: choose one command to execute
```
npm run watch
npm run start
npm run build
```

---

## Use Babel with Webpack4
### 1. Install following plugins
```
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-object-rest-spread --save-dev
```

### 2. Build script folder in src folder and build app.js file in script folder.
![](https://i.imgur.com/wEWFj6X.png)

### 3. Add some code in app.js
```
let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);

let bark = (() => console.log('bark!'));
bark();
```

main.js add this line:
`import script from "./scripts/app.js";`

### 4. Add some loaders in webpack.config.js
```
{
  test: /\.(js)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
},
```

### 5. npm run: choose one command to execute
```
npm run watch
npm run start
npm run build
```
