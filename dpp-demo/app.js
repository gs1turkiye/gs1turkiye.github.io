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

const epcisPayload = {
  "@context": [
    "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld",
    {
      gs1tr: "https://example.gs1tr.org/vocab/"
    }
  ],
  type: "EPCISDocument",
  schemaVersion: "2.0",
  creationDate: "2029-09-20T16:25:00+03:00",
  epcisBody: {
    eventList: [
      {
        type: "ObjectEvent",
        eventTime: "2029-09-20T16:20:00+03:00",
        eventTimeZoneOffset: "+03:00",
        epcList: [
          product.digitalLink
        ],
        action: "OBSERVE",
        bizStep: "recycling",
        disposition: "recycled",
        readPoint: {
          id: "urn:epc:id:sgln:8698528.50004.0"
        },
        bizLocation: {
          id: "urn:epc:id:sgln:8698528.50004.5"
        },
        sourceList: [
          {
            type: "owning_party",
            source: "urn:epc:id:sgln:8698528.50001.4"
          }
        ],
        destinationList: [
          {
            type: "owning_party",
            destination: "urn:epc:id:sgln:8698528.50004.5"
          }
        ],
        ilmd: {
          "gs1tr:recyclingProcess": "mechanical-recycling",
          "gs1tr:materialRecovered": "cotton-fiber",
          "gs1tr:recoveredMaterialPercentage": 82,
          "gs1tr:recyclingCertificate": "TR-DEMO-REC-2029-0001"
        }
      }
    ]
  }
};

const legendText = {
  normal: "Bu demo, bir ürünün Dijital Ürün Pasaportu içinde hangi verilerle temsil edilebileceğini gösterir.",
  allGs1: "Bu görünüm, sayfadaki GS1 standartlarıyla ilişkilendirilebilecek tüm veri alanlarını gösterir."
};

const modal = document.querySelector("#epcis-modal");
const epcisJson = document.querySelector("#epcis-json");
const toast = document.querySelector("#toast");
const standardsPanel = document.querySelector("#standards-panel");
const standardsToggle = document.querySelector("#standards-toggle");
let lastFocusedElement = null;

function setHighlightMode(mode) {
  document.body.dataset.highlightMode = mode;
  document.querySelector("#legend-text").textContent = legendText[mode];

  document.querySelectorAll(".mode-button").forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function drawQr() {
  const canvas = document.querySelector("#qr-canvas");
  const context = canvas.getContext("2d");
  const cells = 29;
  const cellSize = canvas.width / cells;
  let hash = 0;

  for (const character of product.digitalLink) {
    hash = (hash * 33 + character.charCodeAt(0)) >>> 0;
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#172322";

  function finder(x, y) {
    context.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
    context.fillStyle = "#ffffff";
    context.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    context.fillStyle = "#172322";
    context.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  }

  finder(1, 1);
  finder(21, 1);
  finder(1, 21);

  for (let y = 0; y < cells; y += 1) {
    for (let x = 0; x < cells; x += 1) {
      const inFinder = (x < 9 && y < 9) || (x > 19 && y < 9) || (x < 9 && y > 19);
      const shouldFill = (hash + x * 19 + y * 31 + x * y) % 5 < 2;

      if (!inFinder && shouldFill) {
        context.fillRect(Math.round(x * cellSize), Math.round(y * cellSize), Math.ceil(cellSize), Math.ceil(cellSize));
      }
    }
  }
}

function openEpcisModal(eventId) {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  modal.dataset.eventId = eventId;
  document.body.style.overflow = "hidden";
  document.querySelector(".close-modal").focus();
}

function closeEpcisModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

async function copyEpcisJson() {
  const json = epcisJson.innerText;

  try {
    await navigator.clipboard.writeText(json);
    showToast("EPCIS JSON payload kopyalandı.");
  } catch {
    showToast("Kopyalama desteklenmiyor; kod bloğu seçilebilir durumda.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function toggleStandardsPanel() {
  const willOpen = standardsPanel.classList.contains("is-collapsed");
  standardsPanel.classList.toggle("is-collapsed", !willOpen);
  standardsToggle.setAttribute("aria-expanded", String(willOpen));
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => setHighlightMode(button.dataset.mode));
});

standardsToggle.addEventListener("click", toggleStandardsPanel);

document.querySelectorAll(".show-epcis-button").forEach((button) => {
  button.addEventListener("click", () => openEpcisModal(button.dataset.eventId));
});

document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", closeEpcisModal);
});

document.querySelector("#copy-epcis").addEventListener("click", copyEpcisJson);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeEpcisModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeEpcisModal();
  }
});

epcisJson.textContent = JSON.stringify(epcisPayload, null, 2);
drawQr();
