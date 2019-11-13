# Bit Example Project

This is an example Typescript project which makes use of a [Bit depenedency](https://bit.dev/robw-es/test-one/counter).

## Setup

To install components shared via [Bit](https://bit.dev) we need to configure Bit as a scoped registry in NPM.

```
npm config set '@bit:registry' https://node.bit.dev
```

Then we can install the relevant NPM dependencies, transpile our Typescript file and run the code.

```
npm install
tsc index.ts
node index.js
```

The code should output the number `5`.
