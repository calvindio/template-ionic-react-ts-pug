1. `ionic start my-app blank --type=react --capacitor`
2. `npm i babel-plugin-transform-react-pug customize-cra react-app-rewired`
3. on `package.json` replace start and build script with `react-app-rewired`
4. add `config-overrides.js`
5. Refactor App.tsx from jsx to pug