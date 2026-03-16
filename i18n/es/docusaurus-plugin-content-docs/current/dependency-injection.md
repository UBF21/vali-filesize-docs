---
id: dependency-injection
title: Inyección de Dependencias
sidebar_label: Inyección de Dependencias
---

# Inyección de Dependencias

Vali-FileSize incluye la interfaz `IValiFileSize` para que puedas registrarla en cualquier contenedor DI y mantener tu código desacoplado de la implementación concreta.

## Interfaz

```csharp
public interface IValiFileSize
{
    double Convert(double size, FileSizeUnit fromUnit, FileSizeUnit toUnit);
    string FormatSize(double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null);
    (double size, FileSizeUnit unit) GetBestUnit(double bytes, bool useIec = false);
    string FormatBestSize(double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false);
}
```

## Registro

### ASP.NET Core / Generic Host

```csharp
builder.Services.AddSingleton<IValiFileSize, ValiFileSize>();
```

`ValiFileSize` es stateless, por lo que singleton es el tiempo de vida recomendado.

### Manual / consola

```csharp
var services = new ServiceCollection();
services.AddSingleton<IValiFileSize, ValiFileSize>();
var provider = services.BuildServiceProvider();

var vfs = provider.GetRequiredService<IValiFileSize>();
```

## Uso en un servicio

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
