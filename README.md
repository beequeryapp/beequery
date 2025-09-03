# BeeQuery Monorepo

A monorepo containing the BeeQuery desktop application and website.

## Structure

- `apps/desktop/` - Wails desktop application (Go + React)
- `apps/website/` - Next.js website

## Getting Started

### Install Dependencies

```bash
bun run install:all
```

### Development

Run both applications:

```bash
bun run dev
```

Run desktop app only:

```bash
bun run dev:desktop
```

Run website only:

```bash
bun run dev:website
```

### Building

Build both applications:

```bash
bun run build
```

Build desktop app only:

```bash
bun run build:desktop
```

Build website only:

```bash
bun run build:website
```

### Wails Commands

Run Wails-specific commands for the desktop app:

```bash
# Development mode (from apps/desktop/ directory)
wails dev

# Build desktop app (from apps/desktop/ directory)
wails build

# Generate Go bindings (from apps/desktop/ directory)
wails generate module
```
