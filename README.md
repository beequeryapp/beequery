# BeeQuery Monorepo

A monorepo containing the BeeQuery desktop application and website.

## Structure

-   `apps/desktop/` - Tauri desktop application
-   `apps/website/` - Next.js website

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

### Tauri Commands

Run Tauri-specific commands:

```bash
bun run tauri dev
bun run tauri build
```
