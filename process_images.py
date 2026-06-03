# -*- coding: utf-8 -*-
"""
Process product images: white background, 1:1 square, 600x600 JPG
Smart crop: auto-detect product area, then center with small padding.
"""
from PIL import Image, ImageFilter
import os

SRC = r"c:\Users\user\Desktop\ecoshop\товары"
DST = r"c:\Users\user\Desktop\ecoshop\site\images\products"
SIZE = 600

os.makedirs(DST, exist_ok=True)

# Full mapping: product_id -> source filename
mapping = {
    1:  "Увлажняющий шампунь SHISEIDO TSUBAKI Premium.webp",
    2:  "Увлажняющий кондиционер SHISEIDO TSUBAKI Premium для  повреденных волос.webp",
    3:  "Восстанавливающий шампунь SHISEIDO TSUBAKI Premium.webp",
    4:  "Увлажняющий кондиционер SHISEIDO TSUBAKI Premium черный.webp",
    5:  "Восстанавливающий шампунь SHISEIDO TSUBAKI прозрачный.webp",
    6:  "Увлажняющий кондиционер SHISEIDO TSUBAKI Premium.avif",
    12: "LION Oct Шампунь против перхоти и зуда головы.jpg",
    13: "Шампунь против перхоти и зуда LION VARGAS MEDICAL.jpg",
    14: "FINO Premium Touch Шампунь восстанавливающий 550мл.jpg",
    15: "FINO Premium Touch Кондиционер восстанавливающий.webp",
    16: "FINO Premium Touch, Shiseido Питательная маска для.webp",
    17: "FINO hair oil , Shiseido Масло для волос 70 мл.avif",
    18: "FINO hair oil , Shiseido Масло сыворотка для волос 70 мл.jpeg",
    20: "& Honey Deep Moist Шампунь глубоко увлажняющее 400 мл.avif",
    21: "& Honey Deep Moist Кондиционер глубоко увлажняющее.jpg",
    22: "HONEY EX Deep Moist Hair Oil глубоко увлажняющее масло.jpg",
    23: "Honey Deep Moist Hair Oil Увлажняющее масло для волос.webp",
    24: "&Honey Pixie Увлажняющий шелковистый шампунь 440 мл.jpg",
    25: "&Honey Pixie Увлажняющий шелковистый кондиционер 440.avif",
    26: "&Honey Pixie Увлажняющий шелковистый масло для волос.jpg",
    27: "&honey Melty Moist Repair Series Увлажняющий.webp",
    28: "&honey Melty Moist Repair Series Увлажняющий.avif",
    29: "&honey Melty Moist Repair Hair Oil Увлажняющий.avif",
    30: "&Honey Color Control Repair Шампунь. Аромат ландыша и.webp",
    31: "&Honey Color Control Repair Кондиционер. Аромат.avif",
    32: "&Honey Color Control Repair Масло для волос. Аромат.webp",
    33: "&honey Milky Precious EX Восстанавливающий шампунь.webp",
    34: "&honey Milky Precious EX Восстанавливающий кондиционер.webp",
    35: "&honey Milky Precious EX Восстанавливающий масло для.jpg",
    36: "Salon Link Non Silicon Шампунь без силикона для волос с.jpg",
    37: "Salon Link Non Silicon Кондиционер без силикона для волос с.jpg",
    38: "Salon Link Экстра шампунь Восстановление и защита для волос.jpg",
    39: "Salon Link Экстра кондиционер Восстановление и защита для.jpg",
    40: "Salon Link Экстра шампунь-маска Восстановление и защита для волос с аминокислотами и протеинами шелка,.jpg",
    41: "Salon Link Кондиционер для восстановления поврежденных.webp",
    42: "Salon Link Увлажняющий шампунь Восстановление и защита.png",
    43: "Salon Link Увлажняющий кондиционер Восстановление и.jpg",
    45: "Salon Link Экстра увлажняющий кондиционер Восстановление и защита желтый.jpg",
    51: "Крем-гель для лица многоступенчатый 3а1 с гиалуроновой.jpg",
    53: "Дневной защитный гель для лица SPF50 Biore 70 мл КК24.jpg",
    54: "Дневной защитный крем для лица SPF50 SUNKILLER, 50.webp",
    55: "Увлажняющий отбеливающий крем V-LAB Moisture Cream.jpg",
    57: "KOSE COSMEPORT Grace One Антивозрастной крем для.jpg",
    59: "KOSE COSMEPORT Grace One Гель для лица с коллагеном.jpg",
    62: "Kracie Moistage Lift Essence Лосьон (Супер.webp",
    63: "Kracie Moistage Lift Essence Milk, суперувлажняющее,.webp",
    65: "Kracie Hadabisei Крем для кожи вокруг глаз от мелких.jpg",
    66: "Kracie Hadabisei Лечебный отбеливающий лосьон 170 мл.avif",
    68: "Kracie HADABISEI Turning Care Лечебная отбеливающая.jpg",
    69: "Ласьон от пигментации с витаминами С (тоник).jpg",
    70: "Антивозрастной ласьон для лица с гиалуроновой кислатой.jpeg",
    71: "Kose Clear Turn Vitamin C Маска осветляющая с витамином.webp",
    74: "Тканевая маска для лица против сухости кожи с экстрактом.jpg",
    75: "KOSE COSMEPORT Clear Turn Маска против морщин и.avif",
    78: "EXO LABO Маска с сывороткой гиалуроновой кислатой.jpg",
    79: "EXO LABO Маска с сывороткой против акне.jpg",
    80: "EXO LABO Маска с сывороткой 7шт (бежевый).jpg",
    81: "EXO LABO Маска с сывороткой с ретинолом 7шт.jpg",
    82: "Japan Gals POSH KOSH Укрепляющая маска для лица с.avif",
    83: "Japan Gals Posh Kosh Ceramide + NMF Маски для лица.webp",
    84: "APAN GALS Posh Kosh Увлажняющие маски для лица 4.jpg",
    85: "Japan Gals Posh Kosh Маски для лица антивозрастные.jpg",
    86: "Пенка для умывание увлажнение Biore.webp",
    87: "Пенка для умывание Экстра увлажнение Biore 130 мл.jpg",
    88: "Пенка для умывание кожи склонной к акне Biore 130 мл.webp",
    89: "Пенка скраб для лица цветочный Biore 130 мл.avif",
    91: "Senka Пенка для умывания с коллагеном роз.jpg",
    92: "Senka Увлажняющая пенка для лица Идеальное очищение.jpg",
    93: "Senka Увлажняющая пенка для лица Идеальное.jpg",
    94: "Увляжняющая пенка для умывания лица с нежным ароматом marshmallow.avif",
    95: "Пенка для умывание лица Для проблемной кожи Biore.avif",
    96: "Гидрофильное масло для снятие макияжа KAO Biore.jpg",
    97: "Увляжняющая пенка для умывания лица с нежным.jpg",
    98: "Мицелярная салфетка Biore для всех типов кожи 44шт.jpg",
    99: "Daiichi Funs Cycle Styly Пенка для умывания увлажняющая.jpg",
    100: "Мужская пенка для умывание и бритья с ароматом.webp",
    101: "Мужская пенка для умывание и бритья акне KAO Mens.webp",
    102: "Unlabel LAB VITAMIN C Очищающая пенка с витамином С.jpg",
    103: "LAB V Face WashОчищающее средство для лица 130 г.jpg",
    104: "Восстанавливающий сывороточный гель Lab V Repair 80 г.png",
    105: "Unlabel LAB Сыворотка с РЕТИНОЛОМ Retinol 100 MPa.jpg",
    106: "Сыворотка-эссенция LAB CM Ceramide Essence Serum 50.webp",
    107: "Сыворотка Unlabel V Essence с витамином С для.webp",
    108: "Сыворотка плаценты LAB PL 50 мл (синий).png",
    110: "KissMe FERM] Kiss Me Ferm Essence BB Cream UV [02].jpeg",
    126: "LION Дезодорант-антиперспирант Ban Gold Roll On.jpg",
    127: "LION Ban Sweat Block Premium Stick дезодорант зеленый.jpg",
    128: "Дезодорант роликовый Lion Ban Roll On мужской.jpg",
    129: "LION Ban Дезодорант-антиперспирант Длительная.jpg",
    130: "Fine Today Water in Lip.webp",
    131: "Shiseido Water lip UV Увлажняющий питательный бальзам.webp",
    132: "COW Brand Beauty Soap  Туалетное мыло с молоком.jpg",
    138: "Shiseido Крем для рук и ног с мочевиной.jpg",
    139: "Shiseido Крем для рук и ног с мочевиной 60 гр.jpg",
    140: "SHISEIDO Суперувлажняющий крем для рук на водной.jpg",
    141: "Крем для рук Kose Precious Garden 70г успокаивающий.png",
    142: "Гель для душа Mitsuei.webp",
    143: "Освежающий мужской гель для душа с цитрусовым.jpg",
    145: "Kracie Ma & Me Гель для душа (Латте).jpg",
    161: "LION Look Plus Моющее средство для быстрой очистки.jpg",
    162: "КАО Attack Antibacterial EX Высокоэффективный гель для.webp",
    163: "КАО Attack Antibacterial EX Высокоэффективный гель для зеленый.webp",
    164: "MITSUEI Стиральный порошок с кондиционером - аромат.webp",
    165: "Mitsuei White стиральный порошок отбеливающий.webp",
    167: "MITSUEI Super Wash стиральный порошок для.jpg",
    169: "Mitsue Стиральный порошок Herbal Three Fragrant 900 г.webp",
    172: "LION Soflan Aroma Rich Juliette Кондиционер для белья cо.jpg",
    173: "LION Soflan Aroma Rich Diana Кондиционер для белья c ароматом роз.jpg",
    175: "КAO Attack Wash Пятновыводитель для обработки ткани.jpg",
    176: "Гель для стирки Митсуей с кондиционером 2 л.jpg",
    177: "Kaneyo Средство для чистки кухни, удаляющее.jpg",
    178: "Чистящее средство Mitsuei с хлором для сантехники 500.jpg",
    179: "Средство для мытья посуды MITSUEI с ароматом лайма.jpg",
    180: "Средство для мытья посуды MITSUEI с ароматом апельсина.jpg",
    181: "Mitsuei Крем для очищения поверхностней без царапин с.webp",
    190: "Порошок чистящий с микрогранулами Kaneyo Cleanser.webp",
    191: "Kaneyo New Sassa Cleanser Чистящий порошок экспресс-.jpg",
    193: "Крем-очищение Kaneyo Soap Stenlight с ароматом.webp",
    194: "Крем-очищающее средство Kaneyo Soap Stenlight с.jpg",
    203: "LION White&White Отбеливающая зубная паста с кальцием и.jpg",
    # Toothbrushes (restored)
    204: "Zero Premium Care Rich Compact Normal Зубная щетка.webp",
    205: "Зубная щетка Ebisu Medifit Жесткая прямой срез ворса,.jpeg",
    206: "Зубная щётка EBISU x Tomica для детей 2-6 лет.webp",
    # Parchment
    283: "Пергамент для выпечки Nippon Paper, 3 м.jpg",
    279: "CRECIA Scottie Fine Бумажные кухонные полотенца.jpg",
    282: "Пергамент для выпечки Nippon Paper Crecia, стандартный,.jpg",
    285: "Ароматизатор A-19 Морская свежесть EIKOSHA EIKOSHA.jpg",
    286: "Ароматизатор меловой EIKOSHA - SQUASH  свежесть.webp",
    287: "Ароматизатор меловой EIKOSHA - AQUA SHOWER.jpg",
}


def smart_crop_to_content(img_rgba, threshold=240, margin_ratio=0.04):
    """
    Detect non-white bounding box and return cropped image.
    Falls back to full image if nothing found.
    """
    import numpy as np
    arr = np.array(img_rgba)
    # Mask: pixels that are NOT near-white (R,G,B all >= threshold)
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]
    is_content = (alpha > 10) & ~((rgb[:,:,0] >= threshold) & (rgb[:,:,1] >= threshold) & (rgb[:,:,2] >= threshold))
    rows = np.any(is_content, axis=1)
    cols = np.any(is_content, axis=0)
    if not rows.any():
        return img_rgba  # nothing found, return as-is
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    h, w = arr.shape[:2]
    margin = int(max(w, h) * margin_ratio)
    rmin = max(0, rmin - margin)
    rmax = min(h - 1, rmax + margin)
    cmin = max(0, cmin - margin)
    cmax = min(w - 1, cmax + margin)
    return img_rgba.crop((cmin, rmin, cmax + 1, rmax + 1))


def make_square_white(src_path, dst_path, size=600):
    img = Image.open(src_path)
    img = img.convert("RGBA")
    # Smart crop: remove surrounding whitespace, keep product
    img = smart_crop_to_content(img)
    # Place on white square with small padding
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    pad = int(size * 0.06)  # 6% padding on each side
    inner = size - pad * 2
    img.thumbnail((inner, inner), Image.LANCZOS)
    x = (size - img.width) // 2
    y = (size - img.height) // 2
    canvas.paste(img, (x, y), img)
    canvas.convert("RGB").save(dst_path, "JPEG", quality=90, optimize=True)


try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False

if not HAS_NUMPY:
    print("numpy not found, using fallback (no smart crop)")

ok = fail = 0
for pid, fname in sorted(mapping.items()):
    # Handle both variants of the toothbrush filename
    src = os.path.join(SRC, fname)
    # Try alternate dash variant for toothbrush
    if not os.path.exists(src):
        alt = fname.replace("–", "-").replace("—", "-")
        src_alt = os.path.join(SRC, alt)
        if os.path.exists(src_alt):
            src = src_alt
    dst = os.path.join(DST, f"p{pid}.jpg")
    if os.path.exists(src):
        try:
            make_square_white(src, dst)
            ok += 1
        except Exception as e:
            fail += 1
            print(f"ERR p{pid}: {e}")
    else:
        fail += 1
        print(f"MISS p{pid}: {fname}")

print(f"\nDone: {ok} OK, {fail} failed/missing")
