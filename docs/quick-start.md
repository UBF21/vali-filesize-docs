---
id: quick-start
title: Quick Start
sidebar_position: 3
---

# Quick Start

## 1. Install the package

```bash
dotnet add package Vali-FileSize
```

## 2. Create an instance

```csharp
using ValiFileSize;
using ValiFileSize.Core.Enums;

var vfs = new ValiFileSize();
```

## 3. Format a file size automatically

```csharp
// Pass raw bytes — GetBestUnit picks the right unit
string result = vfs.FormatBestSize(1_500_000_000);
// → "1.40 GB"
```

## 4. Convert between units

```csharp
double kb = vfs.Convert(1.5, FileSizeUnit.Megabytes, FileSizeUnit.Kilobytes);
// → 1536
```

## 5. Format with a specific unit

```csharp
string formatted = vfs.FormatSize(1536, FileSizeUnit.Kilobytes, decimalPlaces: 1);
// → "1536.0 KB"
```

## 6. Use IEC prefixes

```csharp
string iec = vfs.FormatBestSize(1_500_000_000, useIec: true);
// → "1.40 GiB"
```

## 7. Extension methods (no instance needed)

```csharp
using ValiFileSize.Core.Extensions;

string s1 = 1_500_000_000.0.FormatBestSize();       // "1.40 GB"
string s2 = 1_500_000_000L.FormatBestSize();         // "1.40 GB"
string s3 = 2048.0.ToFormattedSize(FileSizeUnit.Kilobytes); // "2.00 KB"
```
