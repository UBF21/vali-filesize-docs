---
id: iec-prefixes
title: Prefijos IEC
sidebar_label: Prefijos IEC
---

# Prefijos IEC

Vali-FileSize soporta el estándar completo de prefijos binarios **IEC 80000-13** junto a las unidades binarias tradicionales.

## Contexto

Tanto las unidades tradicionales (KB, MB, GB…) como las IEC (KiB, MiB, GiB…) usan base **1 024**. La diferencia es únicamente el sufijo:

| Tradicional | IEC | Factor |
|---|---|---|
| KB | KiB | 1 024 B |
| MB | MiB | 1 024 KiB |
| GB | GiB | 1 024 MiB |
| TB | TiB | 1 024 GiB |
| PB | PiB | 1 024 TiB |
| EB | EiB | 1 024 PiB |

## Uso de prefijos IEC

Pasa `useIec: true` a `GetBestUnit` y `FormatBestSize`:

```csharp
var vfs = new ValiFileSize();

// FormatBestSize
vfs.FormatBestSize(1_073_741_824, useIec: true);  // "1.00 GiB"
vfs.FormatBestSize(1_073_741_824);                 // "1.00 GB"

// GetBestUnit
var (size, unit) = vfs.GetBestUnit(1_073_741_824, useIec: true);
// size → 1.0, unit → FileSizeUnit.Gibibytes

// Métodos de extensión
1_073_741_824.0.FormatBestSize(useIec: true);   // "1.00 GiB"
1_073_741_824L.GetBestUnit(useIec: true);        // (1.0, FileSizeUnit.Gibibytes)
```

## Unidades IEC explícitas con Convert y FormatSize

También puedes usar los valores del enum IEC directamente:

```csharp
// Convertir usando unidades IEC
double mib = vfs.Convert(1, FileSizeUnit.Gibibytes, FileSizeUnit.Mebibytes); // 1024

// Formatear una unidad IEC
vfs.FormatSize(1024, FileSizeUnit.Mebibytes); // "1024.00 MiB"
```
