---
id: quick-start
title: Inicio Rápido
sidebar_label: Inicio Rápido
---

# Inicio Rápido

## 1. Instala el paquete

```bash
dotnet add package Vali-FileSize
```

## 2. Crea una instancia

```csharp
using ValiFileSize;
using ValiFileSize.Core.Enums;

var vfs = new ValiFileSize();
```

## 3. Formatea un tamaño automáticamente

```csharp
// Pasa bytes crudos — GetBestUnit elige la unidad correcta
string result = vfs.FormatBestSize(1_500_000_000);
// → "1.40 GB"
```

## 4. Convierte entre unidades

```csharp
double kb = vfs.Convert(1.5, FileSizeUnit.Megabytes, FileSizeUnit.Kilobytes);
// → 1536
```

## 5. Formatea con una unidad específica

```csharp
string formatted = vfs.FormatSize(1536, FileSizeUnit.Kilobytes, decimalPlaces: 1);
// → "1536.0 KB"
```

## 6. Usa prefijos IEC

```csharp
string iec = vfs.FormatBestSize(1_500_000_000, useIec: true);
// → "1.40 GiB"
```

## 7. Métodos de extensión (sin instancia)

```csharp
using ValiFileSize.Core.Extensions;

string s1 = 1_500_000_000.0.FormatBestSize();       // "1.40 GB"
string s2 = 1_500_000_000L.FormatBestSize();         // "1.40 GB"
string s3 = 2048.0.ToFormattedSize(FileSizeUnit.Kilobytes); // "2.00 KB"
```
