# Install Dependencies

`npm install`

> Note: The app uses NextJS v14 and node engine >= v19.8.1

# Reproduce Issue

`npx tsc -p ./tsconfig.json` or `npm run build`

> Note: If running above commands result in any kind of error, then it means transpiling/build was successful

# How was the app setup to reproduce the bug?

- NextJS app was created using `npx create-next-app@14.0.1 --template typescript`
- Added `ag-grid-community` & `ag-grid-react` dependencies
- Added `moment` and defined an interface with one of the field of type `Moment`
- Used this interface with `ColDef` from `ag-grid-community`
- Added **storybook** using `npx storybook@latest init`
- Transpiling the app using `npx tsc -p ./tsconfig.json` or building the app using `npm run build` would result in the build being stuck
