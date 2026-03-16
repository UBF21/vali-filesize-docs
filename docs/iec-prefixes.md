---
id: iec-prefixes
title: IEC Prefixes
sidebar_position: 6
---

# IEC Prefixes

Vali-FileSize supports the full **IEC 80000-13** binary prefix standard alongside traditional binary units.

## Background

Both traditional (KB, MB, GB…) and IEC (KiB, MiB, GiB…) units use a base of **1 024**. The difference is purely in the suffix:

| Traditional | IEC | Factor |
|---|---|---|
| KB | KiB | 1 024 B |
| MB | MiB | 1 024 KiB |
| GB | GiB | 1 024 MiB |
| TB | TiB | 1 024 GiB |
| PB | PiB | 1 024 TiB |
| EB | EiB | 1 024 PiB |

## Using IEC prefixes

Pass `useIec: true` to `GetBestUnit` and `FormatBestSize`:

```csharp
var vfs = new ValiFileSize();

// FormatBestSize
vfs.FormatBestSize(1_073_741_824, useIec: true);  // "1.00 GiB"
vfs.FormatBestSize(1_073_741_824);                 // "1.00 GB"

// GetBestUnit
var (size, unit) = vfs.GetBestUnit(1_073_741_824, useIec: true);
// size → 1.0, unit → FileSizeUnit.Gibibytes

// Extension methods
1_073_741_824.0.FormatBestSize(useIec: true);   // "1.00 GiB"
1_073_741_824L.GetBestUnit(useIec: true);        // (1.0, FileSizeUnit.Gibibytes)
```

## Explicit IEC units with Convert and FormatSize

You can also use IEC enum values directly:

```csharp
// Convert using IEC units
double mib = vfs.Convert(1, FileSizeUnit.Gibibytes, FileSizeUnit.Mebibytes); // 1024

// Format an IEC unit
vfs.FormatSize(1024, FileSizeUnit.Mebibytes); // "1024.00 MiB"
```
