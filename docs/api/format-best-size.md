---
id: format-best-size
title: FormatBestSize
sidebar_position: 4
---

# FormatBestSize

Converts bytes to the most appropriate unit and returns a formatted string in a single call. Equivalent to calling `GetBestUnit` followed by `FormatSize`.

## Signature

```csharp
string FormatBestSize(double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
```

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `bytes` | `double` | — | The size in bytes. Must be ≥ 0. |
| `decimalPlaces` | `int` | `2` | Number of decimal places. Must be ≥ 0. |
| `culture` | `CultureInfo?` | `null` | Culture for number formatting. |
| `useIec` | `bool` | `false` | When `true`, uses IEC suffixes (KiB, MiB, …). |

## Returns

A formatted string such as `"1.40 GB"`.

## Examples

```csharp
var vfs = new ValiFileSize();

vfs.FormatBestSize(1_500_000_000);
// → "1.40 GB"

vfs.FormatBestSize(1_500_000_000, decimalPlaces: 3);
// → "1.397 GB"

vfs.FormatBestSize(1_500_000_000, useIec: true);
// → "1.40 GiB"

vfs.FormatBestSize(512);
// → "512.00 B"

vfs.FormatBestSize(2048);
// → "2.00 KB"
```
