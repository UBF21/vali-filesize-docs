---
id: dependency-injection
title: Dependency Injection
sidebar_position: 7
---

# Dependency Injection

Vali-FileSize ships with an `IValiFileSize` interface so you can register it in any DI container and keep your code decoupled from the concrete implementation.

## Interface

```csharp
public interface IValiFileSize
{
    double Convert(double size, FileSizeUnit fromUnit, FileSizeUnit toUnit);
    string FormatSize(double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null);
    (double size, FileSizeUnit unit) GetBestUnit(double bytes, bool useIec = false);
    string FormatBestSize(double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false);
}
```

## Registration

### ASP.NET Core / Generic Host

```csharp
builder.Services.AddSingleton<IValiFileSize, ValiFileSize>();
```

`ValiFileSize` is stateless, so singleton is the recommended lifetime.

### Manual / console

```csharp
var services = new ServiceCollection();
services.AddSingleton<IValiFileSize, ValiFileSize>();
var provider = services.BuildServiceProvider();

var vfs = provider.GetRequiredService<IValiFileSize>();
```

## Usage in a service

```csharp
public class FileReportService
{
    private readonly IValiFileSize _fileSize;

    public FileReportService(IValiFileSize fileSize)
    {
        _fileSize = fileSize;
    }

    public string GetReadableSize(long bytes)
        => _fileSize.FormatBestSize(bytes);
}
```
