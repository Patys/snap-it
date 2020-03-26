# snap-it

This is a tool to create a snapshot for your components.

## Installation

```bash
yarn add --dev @patys/snap-it
```

Add to your package.json

```bash
{
  "scripts": {
    ...
    "snap-it": "yarn snap-it g "
    ...
  }
}
```

Usage:

```bash
yarn snap-it components/Search.tsx
```

Or you can use it directly without installing:
```bash
npx @patys/snap-it g components/Search.tsx
```
