---
id: get-best-unit
title: GetBestUnit
sidebar_position: 3
---

# GetBestUnit

Selects the most appropriate unit for the given byte count and returns the converted value.

## Signature

```csharp
(double size, FileSizeUnit unit) GetBestUnit(double bytes, bool useIec = false)
```

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `bytes` | `double` | — | The size in bytes. Must be ≥ 0. |
| `useIec` | `bool` | `false` | When `true`, returns IEC units (KiB, MiB, …). |

## Returns

A tuple `(double size, FileSizeUnit unit)` with the converted value and the selected unit.

## Exceptions

| Exception | Condition |
|---|---|
| `ArgumentException` | `bytes` is negative. |

## Examples

```csharp
var vfs = new ValiFileSize();

var (size, unit) = vfs.GetBestUnit(1_500_000_000);
// size → 1.3969..., unit → FileSizeUnit.Gigabytes

// IEC
var (sizeIec, unitIec) = vfs.GetBestUnit(1_500_000_000, useIec: true);
// sizeIec → 1.3969..., unitIec → FileSizeUnit.Gibibytes

// Small value
var (sizeKb, unitKb) = vfs.GetBestUnit(2048);
// sizeKb → 2, unitKb → FileSizeUnit.Kilobytes
```

## Selection logic

The method picks the largest unit for which the converted value is ≥ 1. For values smaller than 1 KB, it returns `FileSizeUnit.Bytes`.
