# GS1 Türkiye DPP Demo Sayfası — Codex Geliştirme Brifi

## Amaç

Bu projede GS1 Türkiye için Türkçe bir **Dijital Ürün Pasaportu Demo Sayfası** oluşturulacak.

Referans alınacak demo:

```text
https://dpp.eecc.de/01/05012345101156/10/defaultProduct/21/89666
```

Bu sayfa GS1 Almanya’nın, GS1 standartlarının Dijital Ürün Pasaportu içinde nasıl kullanılabileceğini gösterdiği bir örnektir. Biz de aynı mantıkta, Türkçe, GS1 Türkiye markasına uygun, demo amaçlı bir web sayfası oluşturacağız.

Sayfa iki şeyi aynı anda yapmalı:

1. Kullanıcıya gerçek bir DPP sayfası deneyimi vermeli.
2. DPP içindeki hangi alanların hangi GS1 standardı ile ilişkili olduğunu interaktif olarak göstermeli.

---

## Genel Yaklaşım

Referans sayfadaki bilgi mimarisi, kart yapısı, ürün pasaportu hissi ve standart gösterme mantığı korunacak; fakat sayfa GS1 Türkiye için Türkçeleştirilecek ve yeniden uygulanacak.

Referans sayfanın birebir kopyası yerine, aynı yapıyı ve deneyimi veren özgün bir GS1 Türkiye demo sayfası geliştirilecek. GS1 Almanya’ya ait logo, görsel, marka varlığı veya telifli metinler kullanılmayacak. Gerekirse geçici placeholder görseller kullanılacak.

---

## GS1 Türkiye Kurumsal Kimlik Stili

Sayfa görsel dili GS1 Türkiye kurumsal kimliğini yansıtmalı; sade, güvenilir, kurumsal ve sunum yapılabilir bir arayüz hedeflenmeli. Tasarımda gereksiz dekoratif efektlerden kaçınılmalı, DPP verileri ve GS1 standardı anlatımı net şekilde öne çıkarılmalı.

### Font

Kullanılacak ana font ailesi:

```text
Gotham Office
```

CSS tarafında font ailesi şu sırayla tanımlanmalı:

```css
font-family: "Gotham Office", "Gotham", Arial, sans-serif;
```

Gotham Office kullanıcının sisteminde veya kurumsal font paketinde mevcut değilse, arayüz okunabilir sans-serif fallback ile çalışmaya devam etmelidir.

### Ana Renkler

Kullanılacak GS1 ana renkleri:

```text
GS1 mavisi: #002C6C
GS1 turuncu: #F26334
GS1 koyu gri: #454545
GS1 gri: #888B8D
GS1 orta açık gri: #B1B3B3
GS1 açık gri: #F4F4F4
```

Renk kullanım ilkeleri:

* GS1 mavisi ana kurumsal renk olarak header, başlık vurguları, ana butonlar ve önemli kurumsal alanlarda kullanılmalı.
* GS1 turuncu aksan rengi olarak demo rozeti, önemli çağrı butonları, aktif durumlar ve `Tüm GS1 Standartlarını Göster` highlight modunda kullanılmalı.
* Koyu gri ana metin rengi olarak kullanılmalı.
* GS1 gri ikincil metinlerde, açıklamalarda ve meta bilgilerde kullanılmalı.
* Orta açık gri border ve ayırıcı çizgilerde kullanılmalı.
* Açık gri sayfa arka planı ve yumuşak kart alanlarında kullanılmalı.

### İkincil Renkler

Kullanılacak GS1 ikincil renkleri:

```text
GS1 eflatun: #AF96D4
GS1 Link (links only): #008DBD
GS1 Teal (Transport & logistics): #22BCB9
GS1 Forest (Recycling): #00AC4A
GS1 Raspberry (Retail): #F05587
GS1 Slate: #89AADB
GS1 Sky (Healthcare, identify): #00B6DE
GS1 Mist: #8DB9CA
GS1 Mint (government): #71B790
GS1 Grass (foodservice, share): #7AC143
GS1 Olive (technical industries): #9DBB68
```

Renk kullanım ilkeleri:

* GS1 Link rengi yalnızca bağlantılar ve GS1 Digital Link URI gibi link davranışı taşıyan alanlarda kullanılmalı.
* GS1 Teal tedarik zinciri, lojistik, taşıma veya veri akışı çağrışımı yapan küçük vurgularda kullanılabilir.
* GS1 Forest geri dönüşüm, sürdürülebilirlik ve recycling/EPCIS olaylarında kullanılmalı.
* GS1 eflatun destekleyici bilgi, açıklama veya ikincil görsel vurgu için sınırlı kullanılmalı.
* Passport kartlarının üst aksan çizgileri bu ikincil renklerle çeşitlendirilebilir; her kart farklı veri alanını temsil ettiği için renkler ayırt edici ama kurumsal ölçekte kullanılmalı.

### Highlight Modları İçin Renk Mantığı

* `Normal Görünüm`: Kurumsal gri/mavi bazlı sade görünüm.
* `Tüm GS1 Standartlarını Göster`: Tüm GS1 ilişkili alanlar GS1 turuncu aksanıyla vurgulanmalı.
* `Geri Dönüşüm` ve EPCIS recycling olayı GS1 Forest ile ayırt edilebilir olmalı.

### GS1 Brand Sayfası Görsel Referansı

Görsel stil için GS1 Global Brand sayfası referans alınmalı:

```text
https://mozone.gs1.org/1/brand/index.html
```

Bu referanstan alınacak ana yaklaşım:

* Sayfa zemini açık gri / beyaz kurumsal alanlar üzerinden kurulmalı.
* Başlıklar GS1 mavisi `#002C6C` olmalı.
* Body ve ana içerik metni GS1 koyu gri `#454545` olmalı.
* Link davranışı taşıyan metinler GS1 Link rengi `#008DBD` ile gösterilmeli.
* Kartlarda GS1 brand sayfasındaki modül yaklaşımına benzer, sade border ve gerektiğinde üst aksan çizgisi kullanılmalı.
* Turuncu `#F26334`, aktif durumlar ve GS1 highlight anlatımı için kontrollü aksan rengi olarak kullanılmalı.
* Tasarım genel olarak açık, kurumsal, okunaklı ve içerik odaklı olmalı; koyu dekoratif zeminlerden kaçınılmalı.

---

## Dil

Tüm kullanıcı arayüzü Türkçe olacak.

Örnek çeviriler:

* Digital Product Passport → Dijital Ürün Pasaportu
* Product Information → Ürün Bilgileri
* Manufacturer → Üretici
* Product Identifier → Ürün Tanımlayıcı
* Serial Number → Seri Numarası
* Batch / Lot → Parti / Lot
* Data Carrier → Veri Taşıyıcı
* Sustainability → Sürdürülebilirlik
* Materials → Malzemeler
* Repair → Onarım
* Recycling → Geri Dönüşüm
* Compliance → Uygunluk
* Supply Chain → Tedarik Zinciri
* GS1 Standards → GS1 Standartları

---

## Sayfa Yapısı

Sayfa tek bir web uygulaması olarak geliştirilecek. Tercihen sade HTML, CSS ve vanilla JavaScript kullanılabilir. Framework gerekiyorsa React de kullanılabilir, fakat proje basit ve taşınabilir kalmalı.

Önerilen dosya yapısı:

```text
/dpp-demo
  index.html
  styles.css
  app.js
  /assets
    product-placeholder.png
    gs1-turkiye-logo-placeholder.svg
  README.md
```

---

## Ana Sayfa Düzeni

Sayfa şu bölümlerden oluşmalı:

### 1. Üst Bar

Üstte GS1 Türkiye kimliği taşıyan bir header olacak.

İçerik:

* GS1 Türkiye logosu veya placeholder
* Başlık: `Dijital Ürün Pasaportu Demo`
* Alt açıklama: `GS1 standartlarıyla ürün kimliği, izlenebilirlik ve veri paylaşımı`
* Sağ tarafta isteğe bağlı küçük etiket: `Demo`

---

### 2. Ürün Özeti Alanı

Sayfanın üst kısmında ürün kartı olacak.

Örnek demo ürün:

```text
Ürün adı: Sürdürülebilir Pamuklu Tişört
Marka: Demo Marka
GTIN: 8698528500038
Seri No: 89666
Parti / Lot: LOT-2026-TR-001
Model: defaultProduct
Menşe ülke: Türkiye
Üretici: Demo Tekstil Sanayi A.Ş.
```

Bu alan görsel olarak güçlü olmalı. Sol tarafta ürün görseli, sağ tarafta temel ürün bilgileri olabilir.

GTIN, seri numarası, parti/lot ve üretici bilgileri özellikle highlight sistemine dahil edilecek.

---

### 3. DPP Erişim Bilgisi / GS1 Digital Link Alanı

Bu bölümde demo ürünün DPP’ye nasıl bağlandığı gösterilecek.

Gösterilecek örnek:

```text
GS1 Digital Link URI:
https://www.gs1tr.org/01/8698528500038/10/LOT-2026-TR-001/21/89666
```

Açıklama:

```text
Bu bağlantı, ürünün GS1 tanımlayıcıları kullanılarak dijital ürün pasaportuna bağlanmasını temsil eder.
```

Alanlar:

* GTIN — AI (01)
* Parti / Lot — AI (10)
* Seri Numarası — AI (21)

Bu alanların her biri ayrı ayrı işaretlenebilir olmalı.

---

### 4. DPP Bilgi Bölümleri

Sayfa kartlardan oluşan bölümlere ayrılmalı.

Önerilen bölümler:

#### Ürün Kimliği

Alanlar:

* GTIN
* Ürün adı
* Marka
* Model
* Seri numarası
* Parti / Lot
* Ürün kategorisi

#### Ekonomik Operatör Bilgileri

Alanlar:

* Üretici adı
* Üretici GLN
* İthalatçı / yetkili temsilci
* İletişim ülkesi
* Web sitesi

#### Üretim ve Tedarik Zinciri

Alanlar:

* Üretim tesisi
* Tesis GLN
* Üretim ülkesi
* Üretim tarihi
* Tedarikçi referansı

#### Malzeme Bilgileri

Alanlar:

* Ana malzeme
* Geri dönüştürülmüş içerik oranı
* Tehlikeli madde beyanı
* Boya / kimyasal işlem bilgisi

#### Sürdürülebilirlik Bilgileri

Alanlar:

* Karbon ayak izi
* Su tüketimi
* Enerji tüketimi
* Dayanıklılık bilgisi
* Çevresel uygunluk beyanı

#### Onarım ve Kullanım

Alanlar:

* Bakım talimatları
* Onarım talimatları
* Yedek parça bulunabilirliği
* Kullanım ömrü beklentisi

#### Geri Dönüşüm ve Bertaraf

Alanlar:

* Geri dönüşüm talimatı
* Ayrıştırma bilgisi
* Ambalaj geri dönüşüm bilgisi
* Bertaraf uyarıları

#### Uygunluk ve Belgeler

Alanlar:

* Uygunluk beyanı
* Sertifikalar
* Test raporları
* Yetkili kurum bağlantıları

---

## History / EPCIS Event Gösterimi

Referans DPP sayfasında ürün geçmişi altında olay bazlı bir yapı vardır. Özellikle `History > Recycling > Show EPCIS Event` akışında, kullanıcının bir geri dönüşüm olayına tıklayıp o olayın EPCIS JSON payload’unu görebildiği bir bölüm bulunur.

GS1 Türkiye demo sayfasında da benzer bir yapı uygulanmalı.

---

## History Bölümü

Sayfada ayrı bir `Geçmiş` veya `Ürün Geçmişi` bölümü bulunmalı.

Bu bölüm, ürünün yaşam döngüsündeki olayları kronolojik olarak göstermeli.

Örnek olaylar:

```text
Üretim
Kalite Kontrol
Sevkiyat
Satış
Onarım
Geri Dönüşüm
```

Her olay bir kart veya timeline item olarak gösterilebilir.

Örnek Türkçe timeline:

```text
Üretim
15 Ocak 2026, 09:30
Demo Üretim Tesisi, İstanbul

Sevkiyat
18 Ocak 2026, 14:10
Demo Lojistik Merkezi, Kocaeli

Onarım
12 Mayıs 2027, 11:45
Yetkili Servis Noktası, Ankara

Geri Dönüşüm
20 Eylül 2029, 16:20
Demo Geri Dönüşüm Tesisi, İzmir
```

---

## Recycling Olayı

`Geri Dönüşüm` olayı özellikle detaylandırılmalı.

Bu olay kartında şu bilgiler gösterilmeli:

```text
Olay tipi: Geri Dönüşüm
Tarih: 20 Eylül 2029, 16:20
Konum: Demo Geri Dönüşüm Tesisi
GLN: 8698528500045
İş adımı: recycling
Durum: recycled
İlgili ürün: 8698528500038 / LOT-2026-TR-001 / 89666
```

Bu kartta bir buton olmalı:

```text
EPCIS Olayını Göster
```

veya:

```text
Show EPCIS Event
```

Arayüz Türkçe olacağı için tercih edilen buton metni:

```text
EPCIS Olayını Göster
```

---

## EPCIS JSON Payload Modal / Açılır Panel

Kullanıcı `EPCIS Olayını Göster` butonuna bastığında bir modal, drawer veya açılır kod paneli açılmalı.

Panel başlığı:

```text
EPCIS Event Payload
```

Alt açıklama:

```text
Bu JSON payload, ürünün geri dönüşüm aşamasındaki izlenebilirlik olayını EPCIS 2.0 formatına benzer şekilde temsil eder.
```

Kod bloğu syntax-highlight edilmiş gibi görünmeli. En azından monospace font kullanılmalı.

Panelde `Kapat` butonu olmalı.

İsteğe bağlı olarak `JSON'u Kopyala` butonu eklenebilir.

---

## EPCIS Payload İçeriği

Demo için EPCIS 2.0 / JSON-LD mantığına benzeyen temsili bir payload kullanılmalı.

Payload gerçek bir EPCIS repository’ye gönderilmeyecek; demo ve eğitim amacıyla gösterilecek.

Örnek payload:

```json
{
  "@context": [
    "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld",
    {
      "gs1tr": "https://example.gs1tr.org/vocab/"
    }
  ],
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "creationDate": "2029-09-20T16:25:00+03:00",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2029-09-20T16:20:00+03:00",
        "eventTimeZoneOffset": "+03:00",
        "epcList": [
          "https://www.gs1tr.org/01/8698528500038/10/LOT-2026-TR-001/21/89666"
        ],
        "action": "OBSERVE",
        "bizStep": "recycling",
        "disposition": "recycled",
        "readPoint": {
          "id": "urn:epc:id:sgln:8698528.50004.0"
        },
        "bizLocation": {
          "id": "urn:epc:id:sgln:8698528.50004.5"
        },
        "sourceList": [
          {
            "type": "owning_party",
            "source": "urn:epc:id:sgln:8698528.50001.4"
          }
        ],
        "destinationList": [
          {
            "type": "owning_party",
            "destination": "urn:epc:id:sgln:8698528.50004.5"
          }
        ],
        "ilmd": {
          "gs1tr:recyclingProcess": "mechanical-recycling",
          "gs1tr:materialRecovered": "cotton-fiber",
          "gs1tr:recoveredMaterialPercentage": 82,
          "gs1tr:recyclingCertificate": "TR-DEMO-REC-2029-0001"
        }
      }
    ]
  }
}
```

---

## EPCIS Payload Alanlarının Açıklaması

Kod bloğunun altında kısa bir açıklama alanı bulunmalı.

Örnek açıklama:

```text
Bu olay, ürünün geri dönüşüm tesisinde gözlemlendiğini gösterir. EPCIS eventTime ile olay zamanını, epcList ile ilgili ürünü, bizStep ile iş adımını, disposition ile ürünün durumunu, readPoint ve bizLocation ile olayın gerçekleştiği yeri temsil eder.
```

Açıklanacak başlıca alanlar:

```text
eventTime: Olayın gerçekleştiği zaman
epcList: Olayla ilişkili ürün veya ürün instance bağlantısı
action: Olayın türü; örnekte OBSERVE
bizStep: İş süreci adımı; örnekte recycling
disposition: Ürünün olay sonrasındaki durumu; örnekte recycled
readPoint: Olayın okunduğu veya yakalandığı nokta
bizLocation: Olayın gerçekleştiği iş lokasyonu
sourceList: Ürünün geldiği kaynak taraf
destinationList: Ürünün yöneldiği hedef taraf
ilmd: Olayla ilişkili ek yaşam döngüsü veya malzeme verisi
```

---

## GS1 Highlight Layer ile EPCIS İlişkisi

EPCIS bölümü de highlight sistemine dahil edilmeli.

History ve Recycling kartlarında şu alanlar GS1 ile ilişkili olarak işaretlenmeli:

* EPCIS Event
* GS1 Digital Link URI
* GTIN
* Lot
* Seri numarası
* GLN / SGLN
* bizLocation
* readPoint
* sourceList
* destinationList

Örnek HTML:

```html
<div 
  class="history-event dpp-field"
  data-gs1="true"
  data-standard="EPCIS"
>
  <div class="event-title">Geri Dönüşüm</div>
  <div class="event-date">20 Eylül 2029, 16:20</div>
  <button class="show-epcis-button" data-event-id="recycling-event">
    EPCIS Olayını Göster
  </button>
</div>
```

EPCIS payload içindeki önemli satırlar da görsel olarak açıklanabilir. Basit versiyonda tüm JSON kod bloğu tek bir GS1 alanı gibi highlight edilebilir.

Daha gelişmiş versiyonda JSON satırları ayrı ayrı highlight edilebilir:

```html
<span class="json-line" data-gs1="true" data-standard="EPCIS">"type": "ObjectEvent"</span>
<span class="json-line" data-gs1="true" data-standard="GS1 Digital Link">"epcList": [...]</span>
<span class="json-line" data-gs1="true" data-standard="GLN/SGLN">"bizLocation": {...}</span>
```

---

## JavaScript Davranışı

Aşağıdaki fonksiyonlar eklenmeli:

```js
function openEpcisModal(eventId) {
  const modal = document.querySelector("#epcis-modal");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
}

function closeEpcisModal() {
  const modal = document.querySelector("#epcis-modal");
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}
```

Buton bağlantısı:

```js
document.querySelectorAll(".show-epcis-button").forEach(button => {
  button.addEventListener("click", () => {
    openEpcisModal(button.dataset.eventId);
  });
});
```

Kopyalama butonu eklenirse:

```js
async function copyEpcisJson() {
  const json = document.querySelector("#epcis-json").innerText;
  await navigator.clipboard.writeText(json);
}
```

---

## Erişilebilirlik Gereksinimleri

* EPCIS modal açıldığında focus modal içine taşınmalı.
* ESC ile modal kapanmalı.
* Kapat butonu görünür olmalı.
* Kod bloğu yatay scroll desteklemeli.
* Mobilde JSON paneli ekran dışına taşmamalı.

---

## Kabul Kriterlerine Ek Maddeler

Mevcut kabul kriterlerine şunları ekle:

1. Sayfada `Ürün Geçmişi` veya `History` bölümü bulunmalı.
2. Geçmiş bölümünde en az bir `Geri Dönüşüm` olayı bulunmalı.
3. Geri dönüşüm olayında `EPCIS Olayını Göster` butonu bulunmalı.
4. Butona basıldığında EPCIS JSON payload modal/drawer/panel içinde gösterilmeli.
5. Payload, EPCIS 2.0 JSON-LD yapısına benzer `EPCISDocument`, `ObjectEvent`, `eventTime`, `epcList`, `bizStep`, `disposition`, `readPoint`, `bizLocation`, `sourceList`, `destinationList` alanlarını içermeli.
6. EPCIS alanı GS1 highlight layer’a dahil edilmeli.
7. `Tüm GS1 Standartlarını Göster` modu EPCIS olayını ve JSON payload alanını da highlight etmeli.
8. JSON payload kullanıcı tarafından okunabilir, kopyalanabilir ve sunumda gösterilebilir olmalı.
9. Bu payload’un demo amaçlı olduğu ve gerçek bir uygunluk beyanı olmadığı açıkça belirtilmeli.


## GS1 Standardı Etiketleme Sistemi

Sayfadaki bazı alanlar GS1 standartları ile ilişkilendirilecek.

Her işaretlenebilir alanın HTML tarafında metadata taşıması gerekiyor.

Örnek:

```html
<div 
  class="dpp-field"
  data-gs1="true"
  data-standard="GTIN"
  data-ai="01"
>
  <span class="field-label">GTIN</span>
  <span class="field-value">8698528500038</span>
</div>
```

Başka örnek:

```html
<div 
  class="dpp-field"
  data-gs1="true"
  data-standard="GLN"
>
  <span class="field-label">Üretici GLN</span>
  <span class="field-value">8698528500014</span>
</div>
```

---

## Highlight Layer

Sayfanın üstüne veya sağ tarafına interaktif bir kontrol katmanı eklenecek.

Bu katman referans sayfanın üzerine ekstra anlatım/presentation layer gibi çalışmalı.

### Kontroller

İki durum olacak:

#### 1. Normal Görünüm

Hiçbir highlight aktif değil.

Buton:

```text
Normal Görünüm
```

#### 2. Tüm GS1 Standartlarını Göster

Bu modda sayfadaki GS1 ile ilişkili tüm alanlar highlight edilecek.

Buton:

```text
Tüm GS1 Standartlarını Göster
```

Bu alanlarda:

```html
data-gs1="true"
```

olmalı.

---

## Highlight Görsel Davranışı

Highlight sistemi net ve sunum yapılabilir olmalı.

Önerilen davranış:

* Normal modda alanlar sade görünür.
* Tüm GS1 modu aktifken `data-gs1="true"` olan tüm alanlar vurgulanır.
* Vurgulanan alanların yanında küçük bir rozet görünür.

Örnek rozetler:

```text
GS1
GTIN
GLN
Digital Link
AI (01)
AI (10)
AI (21)
```

---

## Bilgi Kutusu / Legend

Highlight butonlarının yanında kısa açıklama alanı olmalı.

Normal modda:

```text
Bu demo, bir ürünün Dijital Ürün Pasaportu içinde hangi verilerle temsil edilebileceğini gösterir.
```

Tüm GS1 modu aktifken:

```text
Bu görünüm, sayfadaki GS1 standartlarıyla ilişkilendirilebilecek tüm veri alanlarını gösterir.
```

---

## Sağ Panel / Açıklama Katmanı

Sağ tarafta sabit/floating ve açılıp kapanabilir bir panel olsun. Bu panel sayfada scroll yapılırken görünür kalmalı ve kullanıcı tarafından her an toggle edilebilmelidir.

Panel başlığı:

```text
GS1 Standartları Katmanı
```

İçerik:

```text
Bu katman, Dijital Ürün Pasaportu içindeki verilerin GS1 standartlarıyla nasıl ilişkilendirilebileceğini gösterir.
```

Panelde şu küçük liste bulunabilir:

```text
GTIN: Ürünü küresel olarak tanımlar.
GLN: Ekonomik operatörleri ve tesisleri tanımlar.
GS1 Digital Link: Fiziksel üründen dijital pasaporta standart bağlantı sağlar.
GS1 Application Identifiers: GTIN, lot ve seri numarası gibi verileri yapılandırır.
```

Panel davranışı:

* Panel desktop görünümde ekranın sağında floating/sabit konumda kalmalı.
* Panel için ayrı bir `GS1 Katmanı` toggle butonu bulunmalı.
* Toggle butonu panel açıkken ve kapalıyken erişilebilir olmalı.
* Panel açık/kapalı durumu `aria-expanded` ile belirtilmeli.
* Mobilde panel ekranı taşırmamalı; sağdan açılan drawer gibi davranabilir.
* Highlight mod butonları bu panelin içinde yer almalı.

---

## Demo Veri Seti

Aşağıdaki veriler kullanılabilir. Bunlar gerçek şirket ya da ürün verisi değildir; demo amaçlıdır.

```js
const product = {
  name: "Sürdürülebilir Pamuklu Tişört",
  brand: "Demo Marka",
  gtin: "8698528500038",
  serial: "89666",
  lot: "LOT-2026-TR-001",
  model: "defaultProduct",
  category: "Tekstil / Giyim",
  originCountry: "Türkiye",
  manufacturer: {
    name: "Demo Tekstil Sanayi A.Ş.",
    gln: "8698528500014",
    country: "Türkiye",
    website: "https://www.gs1tr.org"
  },
  facility: {
    name: "Demo Üretim Tesisi",
    gln: "8698528500021",
    country: "Türkiye"
  },
  digitalLink: "https://www.gs1tr.org/01/8698528500038/10/LOT-2026-TR-001/21/89666"
};
```

---

## Teknik Gereksinimler

### HTML

* Semantik HTML kullanılmalı.
* Her DPP alanı component veya tekrar kullanılabilir markup olarak düzenlenmeli.
* GS1 ilişkisi `data-gs1`, `data-standard` ve gerekiyorsa `data-ai` attribute’ları ile işaretlenmeli.

### CSS

* Responsive tasarım yapılmalı.
* Mobilde kartlar tek sütuna düşmeli.
* Desktop’ta ürün özeti ve açıklama paneli yan yana olabilir.
* Highlight animasyonu hafif olmalı.
* Renkler GS1 Türkiye hissine uygun, sade ve kurumsal olmalı.
* Çok agresif neon renklerden kaçınılmalı.

### JavaScript

* İki görünüm durumu yönetilmeli:

```js
normal
allGs1
```

* Butonlara tıklanınca body’ye state class eklenebilir:

```js
document.body.dataset.highlightMode = "allGs1";
```

* Aktif buton görsel olarak belli olmalı.
* Legend açıklaması moda göre değişmeli.
* Highlight edilecek alanlar DOM attribute’larına göre seçilmeli.

Örnek mantık:

```js
function setHighlightMode(mode) {
  document.body.dataset.highlightMode = mode;

  document.querySelectorAll(".mode-button").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  updateLegend(mode);
}
```

CSS mantığı:

```css
body[data-highlight-mode="allGs1"] .dpp-field[data-gs1="true"] {
  outline: 2px solid #f26334;
  background: rgba(242, 99, 52, 0.08);
}
```

---

## UI İçerik Detayları

Sayfada şu demo açıklaması bulunmalı:

```text
Bu sayfa, GS1 standartlarının Dijital Ürün Pasaportu senaryosunda nasıl kullanılabileceğini göstermek amacıyla hazırlanmış bir demo arayüzdür. Buradaki ürün, şirket ve belge bilgileri temsili olarak oluşturulmuştur.
```

Alt kısımda küçük bir not:

```text
Not: Bu sayfa yasal uygunluk beyanı değildir. Demo amacıyla hazırlanmıştır.
```

---

## Erişilebilirlik

* Butonlar gerçek `<button>` elementi olmalı.
* Aktif mod `aria-pressed` ile belirtilmeli.
* Renk dışında border, ikon veya rozet ile de durum anlatılmalı.
* Kontrast yeterli olmalı.
* Mobilde butonlar rahat tıklanabilir olmalı.

---

## Kabul Kriterleri

Proje tamamlandığında şu kriterler sağlanmalı:

1. Sayfa tarayıcıda `index.html` ile açılabilmeli.
2. Sayfa tamamen Türkçe olmalı.
3. Referans DPP sayfasındaki mantığa benzer bir ürün pasaportu deneyimi vermeli.
4. Ürün bilgileri, üretici bilgileri, malzeme, sürdürülebilirlik, onarım, geri dönüşüm ve uygunluk bölümleri bulunmalı.
5. GS1 Digital Link URI açıkça gösterilmeli.
6. GTIN, lot ve seri numarası alanları GS1 Application Identifier mantığıyla gösterilmeli.
7. “Tüm GS1 Standartlarını Göster” butonu sayfadaki tüm GS1 ilişkili alanları highlight etmeli.
8. “Normal Görünüm” butonu highlight’ları kaldırmalı.
9. Aktif mod kullanıcı tarafından net şekilde anlaşılmalı.
10. Highlight edilen alanlarda rozetler görünmeli.
11. Sayfa mobil ve desktop’ta düzgün çalışmalı.
12. Kod okunabilir, sade ve yorumlanabilir olmalı.
13. Gerçek GS1 Almanya varlıkları veya metinleri birebir kopyalanmamalı; GS1 Türkiye demo arayüzü olarak yeniden oluşturulmalı.

---

## Ek İyileştirme Önerileri

Zaman kalırsa şunlar eklenebilir:

* QR kod placeholder alanı
* “Bu alan neden önemli?” tooltip’leri
* Her GS1 standardı için kısa açıklama popover’ı
* Sağ panelde tıklanan alanın detayını gösterme
* Demo ürünün tekstil, batarya veya elektronik olarak değiştirilebildiği küçük bir selector
* Sunum modu için daha büyük fontlu görünüm
* Ekran görüntüsü almaya uygun temiz layout

---

## İlk Uygulama Önceliği

Önce sade ama çalışan bir versiyon üret:

1. `index.html`
2. `styles.css`
3. `app.js`

Ardından tasarımı iyileştir.

İlk hedef, görsel olarak iyi duran ve highlight layer’ı sorunsuz çalışan bir GS1 Türkiye DPP demo sayfasıdır.
