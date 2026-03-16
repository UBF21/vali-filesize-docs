---
id: introduction
title: Introduction
sidebar_position: 1
---

# Introduction

**Vali-FileSize** is a lightweight, zero-dependency .NET library for converting and formatting file sizes across all major units.

## Why Vali-FileSize?

Working with raw byte counts in real-world applications is tedious. Displaying `1572864000` to a user is meaningless — `1.46 GB` is not. Vali-FileSize handles this conversion cleanly with a minimal API that adapts to your formatting needs.

## Key capabilities

| Feature | Description |
|---|---|
| **Unit conversion** | Convert between any two units in a single call |
| **Smart formatting** | Human-readable strings with decimal precision control |
| **Auto unit detection** | `GetBestUnit` selects the most appropriate unit automatically |
| **IEC binary prefixes** | Full support for KiB, MiB, GiB, TiB, PiB, EiB |
| **Extension methods** | `double` and `long` extensions for minimal boilerplate |
| **Dependency injection** | `IValiFileSize` interface for clean DI registration |
| **Multi-framework** | netstandard2.0, netstandard2.1, net6.0, net7.0, net8.0, net9.0 |

## Supported units

### Traditional binary units
`Bytes` · `Kilobytes (KB)` · `Megabytes (MB)` · `Gigabytes (GB)` · `Terabytes (TB)` · `Petabytes (PB)` · `Exabytes (EB)`

### IEC binary units
`Kibibytes (KiB)` · `Mebibytes (MiB)` · `Gibibytes (GiB)` · `Tebibytes (TiB)` · `Pebibytes (PiB)` · `Exbibytes (EiB)`

All conversions use the binary base (1 unit = 1 024 of the previous).
