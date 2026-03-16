---
id: units-reference
title: Referencia de Unidades
sidebar_label: Referencia de Unidades
---

# Referencia de Unidades

Todas las unidades disponibles en el enum `FileSizeUnit`.

## Unidades binarias tradicionales

| Valor del enum | Sufijo | Factor |
|---|---|---|
| `FileSizeUnit.Bytes` | B | 1 byte |
| `FileSizeUnit.Kilobytes` | KB | 1 024 B |
| `FileSizeUnit.Megabytes` | MB | 1 024 KB |
| `FileSizeUnit.Gigabytes` | GB | 1 024 MB |
| `FileSizeUnit.Terabytes` | TB | 1 024 GB |
| `FileSizeUnit.Petabytes` | PB | 1 024 TB |
| `FileSizeUnit.Exabytes` | EB | 1 024 PB |

## Unidades binarias IEC

| Valor del enum | Sufijo | Factor |
|---|---|---|
| `FileSizeUnit.Kibibytes` | KiB | 1 024 B |
| `FileSizeUnit.Mebibytes` | MiB | 1 024 KiB |
| `FileSizeUnit.Gibibytes` | GiB | 1 024 MiB |
| `FileSizeUnit.Tebibytes` | TiB | 1 024 GiB |
| `FileSizeUnit.Pebibytes` | PiB | 1 024 TiB |
| `FileSizeUnit.Exbibytes` | EiB | 1 024 PiB |

## Uso

```csharp
using ValiFileSize.Core.Enums;

FileSizeUnit unit = FileSizeUnit.Gigabytes;
```

## Notas

- Las unidades tradicionales e IEC usan la misma base de 1 024; solo difiere el sufijo de visualización.
- `GetBestUnit` con `useIec: false` (por defecto) retorna unidades tradicionales.
- `GetBestUnit` con `useIec: true` retorna unidades IEC.
