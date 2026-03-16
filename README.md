# Vali-FileSize Docs

Official documentation site for [Vali-FileSize](https://github.com/UBF21/Vali-FileSize) — a lightweight .NET library to convert, format, and auto-detect file sizes across all major units.

Built with [Docusaurus 3](https://docusaurus.io/) · Deployed on [Netlify](https://www.netlify.com/)

## What's inside

- Full API reference: `Convert`, `FormatSize`, `GetBestUnit`, `FormatBestSize`
- Extension methods on `double` and `long`
- IEC binary prefix guide (KiB, MiB, GiB, TiB, PiB, EiB)
- Dependency injection setup
- Units reference table
- English and Spanish (i18n)

## Local development

```bash
# Install dependencies
bun install

# Start dev server (English)
bun start

# Start dev server (Spanish)
bun start -- --locale es

# Build
bun run build
```

## Related

- [Vali-FileSize](https://github.com/UBF21/Vali-FileSize) — the library
- [NuGet package](https://www.nuget.org/packages/Vali-FileSize)

## License

Apache-2.0 © Felipe Rafael Montenegro Morriberon
