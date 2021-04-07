# Checkin 1

Install create-react-app
```javascript
npx create-react-app trading-app --template typescript --use-npm
```
> More info about create-react-app: 
> https://create-react-app.dev/

After installation confirm that it works as expected
```javascript
npm start
```
Go to the http://localhost:3000 and check working application

Add required library
```
npm install --save react-router-dom ag-grid-community highcharts
```
react router doesn't have types build in - need to add them manually
```
npm install --save-dev @types/react-router-dom
```
Try to think in React and start splitting your appliction into smaller parts.
https://reactjs.org/docs/thinking-in-react.html
