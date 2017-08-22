## Repository created to reproduce a Webpack issue

To reproduce, run:

```
- yarn install
- yarn build
```

The build should not break, as `ComponentB`, while exported in `src/component/index.js`, isn't imported anywhere.
