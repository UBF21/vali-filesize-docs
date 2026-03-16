---
id: units-reference
title: Units Reference
sidebar_position: 8
---

# Units Reference

All units available in the `FileSizeUnit` enum.

## Traditional binary units

| Enum value | Suffix | Factor |
|---|---|---|
| `FileSizeUnit.Bytes` | B | 1 byte |
| `FileSizeUnit.Kilobytes` | KB | 1 024 B |
| `FileSizeUnit.Megabytes` | MB | 1 024 KB |
| `FileSizeUnit.Gigabytes` | GB | 1 024 MB |
| `FileSizeUnit.Terabytes` | TB | 1 024 GB |
| `FileSizeUnit.Petabytes` | PB | 1 024 TB |
| `FileSizeUnit.Exabytes` | EB | 1 024 PB |

## IEC binary units

| Enum value | Suffix | Factor |
|---|---|---|
| `FileSizeUnit.Kibibytes` | KiB | 1 024 B |
| `FileSizeUnit.Mebibytes` | MiB | 1 024 KiB |
| `FileSizeUnit.Gibibytes` | GiB | 1 024 MiB |
| `FileSizeUnit.Tebibytes` | TiB | 1 024 GiB |
| `FileSizeUnit.Pebibytes` | PiB | 1 024 TiB |
| `FileSizeUnit.Exbibytes` | EiB | 1 024 PiB |

## Usage

```csharp
using ValiFileSize.Core.Enums;

FileSizeUnit unit = FileSizeUnit.Gigabytes;
```

## Notes

- Traditional and IEC units use the same 1 024-base math; only the display suffix differs.
- `GetBestUnit` with `useIec: false` (default) returns traditional units.
- `GetBestUnit` with `useIec: true` returns IEC units.
