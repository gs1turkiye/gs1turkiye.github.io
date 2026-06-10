# GS1 Türkiye DPP Demo Sayfası

Bu proje, GS1 standartlarının Dijital Ürün Pasaportu senaryosunda nasıl kullanılabileceğini göstermek için hazırlanmış vanilla HTML/CSS/JS demo arayüzüdür.

## Çalıştırma

Dosyayı doğrudan tarayıcıda açabilirsiniz:

```text
index.html
```

Yerel sunucu ile açmak için:

```bash
python3 -m http.server 4173
```

Ardından:

```text
http://127.0.0.1:4173/
```

## Özellikler

- Türkçe Dijital Ürün Pasaportu sayfası
- GS1 Digital Link URI ve Application Identifier gösterimi
- ESPR ve tüm GS1 alanları için highlight modları
- Ürün kimliği, ekonomik operatör, üretim, malzeme, sürdürülebilirlik, onarım, geri dönüşüm ve uygunluk kartları
- Ürün geçmişi timeline yapısı
- Geri dönüşüm olayı için EPCIS 2.0 benzeri JSON payload modalı

Not: Bu sayfa yasal uygunluk beyanı değildir. Demo amacıyla hazırlanmıştır.
