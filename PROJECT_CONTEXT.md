# GS1 Türkiye Personal Profile Cards — Project Context

Bu dosya, projeye VS Code / Codex ile devam ederken mevcut kararları, dosya yapısını ve kod mantığını hızlıca hatırlatmak için hazırlanmıştır.

## Projenin amacı

GS1 Türkiye görsel kimliğine uygun, GitHub Pages üzerinde çalışan statik bir kişisel profil / dijital business card sistemi kuruluyor.

Sistem tek bir HTML template kullanır. Birden fazla personel için ayrı repo veya ayrı HTML dosyası oluşturulmaz. Her personel için farklı profil kartı `?p=` URL parametresi ile açılır.

Örnek:

```text
https://kullaniciadi.github.io/gs1-profile-cards/?p=cem-saydam
https://kullaniciadi.github.io/gs1-profile-cards/?p=ayse-yilmaz
```

Daha sonra özellikle istenirse güzel URL desteği için `404.html` yönlendirmesi eklenebilir; mevcut ana kullanım bu değildir.

```text
https://kullaniciadi.github.io/gs1-profile-cards/cem-saydam
```

Bu link arka planda şuna yönlenir:

```text
https://kullaniciadi.github.io/gs1-profile-cards/?p=cem-saydam
```

## Önerilen repo yapısı

```text
gs1-profile-cards/
├── index.html
├── 404.html                    # Opsiyonel: temiz URL yönlendirmesi için
├── README.md                   # Genel proje açıklaması olabilir
├── PROJECT_CONTEXT.md          # Codex / VS Code için bu dosya
├── assets/
│   ├── gs1turkiyelogo.png
│   ├── cem-saydam.jpg
│   ├── ayse-yilmaz.jpg
│   └── ...
└── data/
    └── profiles.json
```

## Mevcut `index.html` durumu

`index.html` tek sayfalık statik HTML/CSS/JS dosyasıdır.

Canvas’taki dosyanın adı şu anda:

```text
gs1_profile_business_card.html
```

GitHub Pages için bu dosya repo kökünde şu adla durmalıdır:

```text
index.html
```

## Tasarım kararları

### Genel

- Sayfa statik çalışır.
- Backend yok.
- Build sistemi yok.
- Framework yok.
- GitHub Pages ile direkt yayınlanabilir.
- CSS ve JS şimdilik `index.html` içinde inline duruyor.
- Font olarak `"Gotham Office", "Gotham", Arial, Helvetica, sans-serif` kullanılıyor.
- Gotham Office dosyası ayrıca gömülmedi. Kullanıcının sisteminde yoksa fallback fontlara düşer.

### Renkler

```css
--gs1-blue: rgb(0, 44, 108);
--gs1-orange: rgb(242, 99, 52);
--gs1-light-gray: rgb(244, 244, 244);
```

Ek renkler:

```css
--gs1-text: #1b1f23;
--gs1-muted: #5f6f7e;
--gs1-border: #d9e2ec;
--white: #ffffff;
```

### Header

Header sade ve statik olmalı.

- Header sticky kalır.
- Header rengi: `rgb(0, 44, 108)`
- Solda GS1 Türkiye logosu bulunur.
- Logo tıklanınca `https://gs1tr.org/` adresi yeni sekmede açılır.
- Sağda sadece dil dropdown’ı vardır.
- Dropdown yanında “Language” veya “Dil” yazısı yoktur.
- Dropdown seçenekleri: `TR` ve `ENG`

Logo şu path ile çağrılıyor:

```html
<img
  src="assets/gs1turkiyelogo.png"
  alt="GS1 Türkiye"
  class="site-logo"
  onerror="this.onerror=null; this.src='gs1turkiyelogo.png';"
/>
```

Bu nedenle logo dosyası tercihen şu klasöre konmalı:

```text
assets/gs1turkiyelogo.png
```

Fallback olarak aynı dosya `index.html` ile aynı klasörde olursa da çalışır.

### Main

Main alanında:

1. Kare fotoğraf alanı
2. Fotoğrafın altında text kartı

Fotoğraf alanı pencere genişliğine göre büyür. Dar ekranda kenarlarda küçük padding kalacak şekilde pencere sınırlarına yaklaşır.

Fotoğraf frame CSS mantığı:

```css
.photo-frame {
  width: min(100%, calc(100vw - 32px));
  max-width: 520px;
  aspect-ratio: 1 / 1;
}
```

Mobilde:

```css
.photo-frame {
  width: min(100%, calc(100vw - 24px));
}
```

### Footer

Footer yoktur.

## Scroll / parallax davranışı

Header sticky kalır.

Fotoğraf alanı normal scroll’dan daha yavaş etkilenir. Mevcut oran 0.5x’tir.

Kod mantığı:

```js
const scrollY = window.scrollY || window.pageYOffset;
photoFrame.style.transform = `translateY(${scrollY * 0.5}px)`;
```

Bu şu anlama gelir:

- Sayfa scroll olurken foto normal akışa göre daha yavaş hareket ediyormuş gibi görünür.
- Text kartı normal hızda yukarı gelir.
- Böylece text kartı fotoğrafın üstüne kayıyormuş gibi bir parallax hissi oluşur.
- Header `z-index: 20`, foto alanı `z-index: 1`, text kartı `z-index: 2` olduğu için foto header’ın altına girebilir, header üstte kalır.

Performans için scroll update `requestAnimationFrame` ile yapılır.

## Text kartı açılış animasyonu

Sayfa açıldığında text kartı scroll edilebilirliği hissettirmek için küçük bir yukarı kayma animasyonu yapar.

Mevcut animasyon:

```css
@keyframes profileCardIntro {
  0% {
    transform: translateY(28px);
  }
  65% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}
```

Kartta uygulanışı:

```css
animation: profileCardIntro 900ms cubic-bezier(0.22, 1, 0.36, 1) 350ms both;
```

Erişilebilirlik için `prefers-reduced-motion: reduce` açık olan cihazlarda animasyon kapatılır.

## Dil sistemi

Sayfa iki dil destekler:

- Türkçe
- İngilizce

Cihaz dili Türkçe ise default Türkçe açılır. Diğer tüm cihaz dillerinde default İngilizce açılır.

Mantık:

```js
const browserLanguage = navigator.language || navigator.userLanguage || "en";
return browserLanguage.toLowerCase().startsWith("tr") ? "tr" : "en";
```

Kullanıcı dropdown’dan dil seçerse seçim `localStorage` içinde saklanır:

```js
localStorage.setItem("profileLanguage", language);
```

Sonraki ziyaretlerde önce kayıtlı dil okunur.

## Personel verisi

Personel bilgileri `data/profiles.json` dosyasından okunur.

`index.html`, URL’deki `p` parametresini okur:

```js
function getProfileSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p") || "cem-saydam";
}
```

Parametre yoksa fallback olarak `cem-saydam` yüklenir.

Örnek URL:

```text
?p=cem-saydam
```

Bu slug, `profiles.json` içindeki key ile eşleşmelidir.

## `profiles.json` örneği

```json
{
  "cem-saydam": {
    "name": "Cem Saydam",
    "title_tr": "Proje Yöneticisi",
    "title_en": "Project Manager",
    "bio_tr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "bio_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "email": "lorem@example.com",
    "phone": "1234",
    "linkedin": "https://www.linkedin.com/in/...",
    "photo": "assets/cem-saydam.jpg"
  },
  "ayse-yilmaz": {
    "name": "Ayşe Yılmaz",
    "title_tr": "Uzman",
    "title_en": "Specialist",
    "bio_tr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "bio_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "email": "ayse@example.com",
    "phone": "+90 555 123 45 67",
    "linkedin": "https://www.linkedin.com/in/...",
    "photo": "assets/ayse-yilmaz.jpg"
  }
}
```

## Text kartındaki alanlar

Şu anda kartta şu alanlar var:

- Bio
- Görevi / Title
- Eposta / Email
- Telefon / Phone
- LinkedIn

HTML içinde LinkedIn satırı eklenmiştir:

```html
<div class="info-row">
  <div class="info-label" data-i18n="linkedinLabel">LinkedIn:</div>
  <div class="info-value"><a id="profileLinkedIn" href="#" target="_blank" rel="noopener">www...</a></div>
</div>
```

JS render tarafında:

```js
profileLinkedIn.textContent = profile.linkedin || "www...";
profileLinkedIn.href = profile.linkedin || "#";
```

## Fallback veri

`data/profiles.json` yüklenemezse sayfanın tamamen bozulmaması için `index.html` içinde `fallbackProfiles` bulunur.

Mevcut fallback:

```js
const fallbackProfiles = {
  "cem-saydam": {
    name: "Cem Saydam",
    title_tr: "Proje Yöneticisi",
    title_en: "Project Manager",
    bio_tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sem et nibh facilisis aliquet. Mauris non justo vitae arcu posuere gravida.",
    bio_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sem et nibh facilisis aliquet. Mauris non justo vitae arcu posuere gravida.",
    email: "lorem@example.com",
    phone: "1234",
    linkedin: "https://www.linkedin.com/",
    photo: ""
  }
};
```

## Eksik profil davranışı

URL’deki `p` parametresi `profiles.json` içinde bulunamazsa sayfa hata mesajı gösterir.

Türkçe:

```text
Bu profile ait veri bulunamadı. URL'deki p parametresini kontrol edin.
```

İngilizce:

```text
No data was found for this profile. Please check the p parameter in the URL.
```

## Opsiyonel `404.html`

Farklı profil kartları için ana URL formatı `?p=` parametresidir:

```text
https://kullaniciadi.github.io/gs1-profile-cards/?p=cem-saydam
```

Bu format kullanıldığında `404.html` dosyası gerekmez.

İleride temiz URL istenirse:

```text
https://kullaniciadi.github.io/gs1-profile-cards/cem-saydam
```

GitHub Pages bu route’u fiziksel klasör olarak arar. Bulamayınca `404.html` çalışır. `404.html` slug’ı alıp `?p=` formatına yönlendirebilir.

Repo adı `gs1-profile-cards` ise örnek `404.html`:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yönlendiriliyor | GS1 Türkiye</title>
</head>
<body>
  <script>
    const repoName = "gs1-profile-cards";

    const pathParts = window.location.pathname
      .split("/")
      .filter(Boolean);

    const repoIndex = pathParts.indexOf(repoName);
    const slug = repoIndex >= 0 ? pathParts[repoIndex + 1] : pathParts[0];

    if (slug) {
      window.location.replace(`/${repoName}/?p=${encodeURIComponent(slug)}`);
    } else {
      window.location.replace(`/${repoName}/`);
    }
  </script>

  <p>Yönlendiriliyor...</p>
</body>
</html>
```

Repo adı değişirse bu satır güncellenmelidir:

```js
const repoName = "gs1-profile-cards";
```

## GitHub Pages kurulumu

1. GitHub’da tek repo oluştur.
2. Dosyaları repo köküne yükle.
3. `index.html` repo kökünde olmalı.
4. `assets/` ve `data/` klasörleri repo kökünde olmalı.
5. GitHub repo içinde:
   - Settings
   - Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
6. Save.
7. Birkaç dakika sonra site yayınlanır.

## Yeni personel ekleme adımları

1. Personel fotoğrafını `assets/` içine ekle.
2. Dosya adında Türkçe karakter, boşluk ve özel karakter kullanma.
   - İyi: `cem-saydam.jpg`
   - Kötü: `Cem Saydam Fotoğraf.jpg`
3. `data/profiles.json` içine yeni kayıt ekle.
4. Slug key oluştur:
   - `ad-soyad`
   - küçük harf
   - boşluk yerine tire
   - Türkçe karakterleri sadeleştir
5. QR / link için şu formatı kullan:

```text
https://kullaniciadi.github.io/gs1-profile-cards/?p=ad-soyad
```

## Dikkat edilecek noktalar

- `profiles.json` geçerli JSON olmalı. Sonda fazladan virgül bırakma.
- GitHub Pages case-sensitive davranır. Dosya adı büyük/küçük harf farkına dikkat et.
- Foto path’i JSON içinde doğru yazılmalı.
- Eğer localde `file://` ile açılırsa `fetch("data/profiles.json")` bazı tarayıcılarda çalışmayabilir. Test için VS Code Live Server veya basit local server kullan.
- Basit local test komutu:

```bash
python3 -m http.server 8000
```

Sonra tarayıcıda aç:

```text
http://localhost:8000/?p=cem-saydam
```

## Gelecekte yapılabilecek iyileştirmeler

- CSS’i `assets/styles.css` dosyasına ayırmak.
- JS’i `assets/app.js` dosyasına ayırmak.
- Profil kartına vCard indirme butonu eklemek.
- QR kod üretim sayfası eklemek.
- LinkedIn satırını boşsa gizlemek.
- Telefon / eposta / LinkedIn alanlarını ikonlarla göstermek.
- Admin olmayan kullanıcılar için basit Google Sheets → JSON üretim akışı kurmak.
- `profiles.json` yerine CSV veya Google Sheet kaynaklı otomatik export kullanmak.
- İstenirse opsiyonel temiz URL desteği için `404.html` routing’i aktif etmek.

## Codex için görev özeti

Bu projede çalışırken mevcut davranışı koru:

- Tek repo, çok personel mantığı korunmalı.
- Her personel verisi `data/profiles.json` içinden gelmeli.
- `index.html` URL’deki `?p=` parametresine göre doğru profili yüklemeli.
- Header sticky kalmalı.
- Footer eklenmemeli.
- Header solda GS1 Türkiye logosu, sağda TR/ENG dropdown içermeli.
- Dil otomatik cihaz dilinden seçilmeli; Türkçe olmayan cihazlarda İngilizce default olmalı.
- Kullanıcı dil seçimi `localStorage` ile hatırlanmalı.
- Foto alanı kare ve responsive kalmalı.
- Foto alanının parallax etkisi korunmalı; mevcut oran 0.5x.
- Text kartı fotoğrafın üstüne kayıyor hissi vermeli.
- Text kartı açılışta küçük yukarı hareket animasyonu yapmalı.
- `prefers-reduced-motion` desteği korunmalı.
- Renkler GS1 kararlarına uygun kalmalı:
  - Mavi: `rgb(0, 44, 108)`
  - Turuncu: `rgb(242, 99, 52)`
  - Açık gri: `rgb(244, 244, 244)`
