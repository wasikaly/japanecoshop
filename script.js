// ========== PRODUCT DATA ==========
const products = [
  // HAIR CARE
  { id:1, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Увлажняющий шампунь Premium Moist&Repair для поврежденных волос с маслом камелии 490 мл (красный)', barcode:'4550516485236', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:2, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Увлажняющий кондиционер Premium Moist&Repair для поврежденных волос с маслом камелии 490 мл', barcode:'4550516485250', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:3, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Восстанавливающий шампунь Premium EX (чёрный) 490 мл', barcode:'4550516485830', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:4, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Увлажняющий кондиционер Premium EX для интенсивного восстановления с маслом камелии 490 мл (чёрный)', barcode:'4550516485977', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:5, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Восстанавливающий шампунь PREMIUM VOLUME REPAIR с маслом камелии 490 мл (прозрачный)', barcode:'4550516485410', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:6, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Увлажняющий кондиционер Premium Repair для поврежденных волос с маслом камелии 490 мл (прозрачный)', barcode:'4550516485632', priceUsd:8.50, priceKzt:4335, retailUsd:11, retailKzt:5610, inStock:true },
  { id:7, cat:'hair', brand:'LION Soft in 1', name:'Увлажняющий шампунь-кондиционер с цветочно-фруктовым ароматом 530 мл (розовый)', barcode:'4903301169598', priceUsd:7.60, priceKzt:3876, retailUsd:9.30, retailKzt:4743 },
  { id:8, cat:'hair', brand:'LION Soft in 1', name:'Смягчающий шампунь-кондиционер с фруктово-цитрусовым ароматом 530 мл (синий)', barcode:'4903301169536', priceUsd:7.60, priceKzt:3876, retailUsd:9.30, retailKzt:4743 },
  { id:9, cat:'hair', brand:'LION Soft in 1', name:'Шампунь-кондиционер против перхоти с цитрусово-цветочным ароматом 530 мл (зелёный)', barcode:'4903301169642', priceUsd:7.60, priceKzt:3876, retailUsd:9.30, retailKzt:4743 },
  { id:10, cat:'hair', brand:'Cow Brand Mutenka', name:'Шампунь-кондиционер для волос на основе природных компонентов 500 мл', barcode:'4901525007221', priceUsd:8.00, priceKzt:4080, retailUsd:10.20, retailKzt:5202 },
  { id:11, cat:'hair', brand:'Cow Brand Mutenka', name:'Шампунь для волос "увлажнение" с натуральными ингредиентами 500 мл', barcode:'4901525007245', priceUsd:8.00, priceKzt:4080, retailUsd:10.20, retailKzt:5202 },
  { id:12, cat:'hair', brand:'LION "Oct"', name:'Шампунь против перхоти и зуда головы с цветочным ароматом', barcode:'4903301437239', priceUsd:5.00, priceKzt:2550, retailUsd:6, retailKzt:3060, inStock:true },
  { id:13, cat:'hair', brand:'LION VARGAS', name:'Шампунь против перхоти и зуда MEDICAL SHAMPOO 200 мл', barcode:'4903301279600', priceUsd:6.50, priceKzt:3315, retailUsd:8, retailKzt:4080, inStock:true },
  { id:14, cat:'hair', brand:'FINO Premium Touch', name:'Шампунь восстанавливающий 550 мл', barcode:'4550516475961', priceUsd:9.50, priceKzt:4845, retailUsd:12.5, retailKzt:6375, inStock:true },
  { id:15, cat:'hair', brand:'FINO Premium Touch', name:'Кондиционер восстанавливающий 550 мл', barcode:'4550516476074', priceUsd:9.50, priceKzt:4845, retailUsd:12.5, retailKzt:6375, inStock:true },
  { id:16, cat:'hair', brand:'FINO Premium Touch', name:'Питательная маска для волос (Shiseido)', barcode:'4550516493583', priceUsd:8.20, priceKzt:4182, retailUsd:10.2, retailKzt:5202, inStock:true },
  { id:17, cat:'hair', brand:'FINO hair oil', name:'Масло для волос 70 мл (Shiseido)', barcode:'4901872471997', priceUsd:9.50, priceKzt:4845, retailUsd:12, retailKzt:6120, inStock:true },
  { id:18, cat:'hair', brand:'FINO hair oil', name:'Масло сыворотка для волос 70 мл (Shiseido)', barcode:'4550516483836', priceUsd:9.50, priceKzt:4845, retailUsd:12, retailKzt:6120, inStock:true },
  { id:19, cat:'hair', brand:'SHISEIDO TSUBAKI', name:'Premium Repair Восстанавливающая экспресс маска для поврежденных волос с маслом камелии 180 гр', barcode:'4550516491190', priceUsd:9.50, priceKzt:4845, retailUsd:12.5, retailKzt:6375 },
  { id:20, cat:'hair', brand:'&Honey Deep Moist', name:'Шампунь глубоко увлажняющий 400 мл', barcode:'4589546890758', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:21, cat:'hair', brand:'&Honey Deep Moist', name:'Кондиционер глубоко увлажняющий 400 мл', barcode:'4589546890765', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:22, cat:'hair', brand:'HONEY EX Deep Moist', name:'Hair Oil глубоко увлажняющее масло усиленного действия 100 мл', barcode:'4589546891519', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:23, cat:'hair', brand:'Honey Deep Moist', name:'Hair Oil Увлажняющее масло для волос 100 мл', barcode:'4589546890796', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:24, cat:'hair', brand:'&Honey Pixie', name:'Увлажняющий шелковистый шампунь 440 мл', barcode:'4589546896019', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:25, cat:'hair', brand:'&Honey Pixie', name:'Увлажняющий шелковистый кондиционер 440 мл', barcode:'4589546896026', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:26, cat:'hair', brand:'&Honey Pixie', name:'Увлажняющий шелковистый масло для волос 100 мл', barcode:'4589546896064', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:27, cat:'hair', brand:'&honey Melty Moist', name:'Увлажняющий восстанавливающий шампунь 440 мл', barcode:'4589546892226', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:28, cat:'hair', brand:'&honey Melty Moist', name:'Увлажняющий восстанавливающий кондиционер 440 мл', barcode:'4589546892233', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:29, cat:'hair', brand:'&honey Melty Moist', name:'Repair Hair Oil Увлажняющий восстанавливающий 100 мл', barcode:'4589546892271', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:30, cat:'hair', brand:'&Honey Color Control', name:'Repair Шампунь, аромат ландыша и меда 440 мл', barcode:'4589546896767', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:31, cat:'hair', brand:'&Honey Color Control', name:'Repair Кондиционер, аромат ландыша и меда 440 мл', barcode:'4589546896774', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:32, cat:'hair', brand:'&Honey Color Control', name:'Repair Масло для волос, аромат ландыша и меда 440 мл', barcode:'4589546896804', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:33, cat:'hair', brand:'&honey Milky Precious EX', name:'Восстанавливающий шампунь 500 мл', barcode:'4589546897122', priceUsd:17.00, priceKzt:8670, retailUsd:22, retailKzt:11220, inStock:true },
  { id:34, cat:'hair', brand:'&honey Milky Precious EX', name:'Восстанавливающий кондиционер 500 мл', barcode:'4589546897139', priceUsd:17.00, priceKzt:8670, retailUsd:22, retailKzt:11220, inStock:true },
  { id:35, cat:'hair', brand:'&honey Milky Precious EX', name:'Восстанавливающее масло для волос 500 мл', barcode:'4589546897184', priceUsd:16.00, priceKzt:8160, retailUsd:21, retailKzt:10710, inStock:true },
  { id:36, cat:'hair', brand:'Salon Link', name:'"Non Silicon" Шампунь без силикона с аминокислотами 1000 мл', barcode:'4513574016101', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:37, cat:'hair', brand:'Salon Link', name:'"Non Silicon" Кондиционер без силикона с аминокислотами 1000 мл', barcode:'4513574016118', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:38, cat:'hair', brand:'Salon Link', name:'Экстра шампунь "Восстановление и защита" с аминокислотами и протеинами шелка 1000 мл', barcode:'4513574014152', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:39, cat:'hair', brand:'Salon Link', name:'Экстра кондиционер "Восстановление и защита" с аминокислотами и протеинами шелка 1000 мл', barcode:'4513574014169', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:40, cat:'hair', brand:'Salon Link', name:'Шампунь для восстановления поврежденных волос с аминокислотами и экстрактом камелии 1000 мл', barcode:'4513574036635', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814 },
  { id:41, cat:'hair', brand:'Salon Link', name:'Кондиционер для восстановления поврежденных волос с аминокислотами и экстрактом камелии 1000 мл', barcode:'4513574036642', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:42, cat:'hair', brand:'Salon Link', name:'Увлажняющий шампунь "Восстановление и защита" с 16 аминокислотами и протеинами шелка 1000 мл', barcode:'4513574033740', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:43, cat:'hair', brand:'Salon Link', name:'Увлажняющий кондиционер "Восстановление и защита" с 16 аминокислотами и протеинами шелка 1000 мл', barcode:'4513574033757', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },
  { id:44, cat:'hair', brand:'Salon Link', name:'Экстра увлажняющий шампунь "Восстановление и защита" с аминокислотами и экстрактом Османтуса 1000 мл', barcode:'4513574038332', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814 },
  { id:45, cat:'hair', brand:'Salon Link', name:'Экстра увлажняющий кондиционер "Восстановление и защита" с аминокислотами и экстрактом Османтуса 1000 мл', barcode:'4513574038349', priceUsd:9.00, priceKzt:4590, retailUsd:11.40, retailKzt:5814, inStock:true },

  // FACE CARE
  { id:50, cat:'face', brand:'Biore', name:'Экстра увлажняющий крем-гель 3в1 с гиалуроновой кислотой, аминокислотами и коллагеном 180 мл', barcode:'4901301287663', priceUsd:9.30, priceKzt:4743, retailUsd:12.60, retailKzt:6426 },
  { id:51, cat:'face', brand:'Biore', name:'Крем-гель для лица многоступенчатый 3в1 с гиалуроновой кислотой, аминокислотами и коллагеном 180 мл (синий)', barcode:'4901301287656', priceUsd:9.30, priceKzt:4743, retailUsd:12.60, retailKzt:6426, inStock:true },
  { id:52, cat:'face', brand:'Biore', name:'Дневной защитный крем для лица SPF50 70 мл', barcode:'4901301413246', priceUsd:8.50, priceKzt:4335, retailUsd:13.20, retailKzt:6732 },
  { id:53, cat:'face', brand:'Biore', name:'Дневной защитный гель для лица SPF50 70 мл', barcode:'4901301413253', priceUsd:8.50, priceKzt:4335, retailUsd:13.20, retailKzt:6732, inStock:true },
  { id:54, cat:'face', brand:'SUNKILLER', name:'Дневной защитный крем для лица SPF50, 50 мл', barcode:'4901433072403', priceUsd:7.80, priceKzt:3978, retailUsd:11.70, retailKzt:5967, inStock:true },
  { id:55, cat:'face', brand:'V-LAB', name:'Увлажняющий отбеливающий крем "Moisture Cream" 100 гр', barcode:'4971710384796', priceUsd:10.30, priceKzt:5253, retailUsd:13.40, retailKzt:6834, inStock:true },
  { id:56, cat:'face', brand:'KOSE Grace One', name:'Увлажняющая эссенция с лифтинг эффектом против морщин 5в1', barcode:'4971710398113', priceUsd:21.50, priceKzt:10965, retailUsd:26.20, retailKzt:13362 },
  { id:57, cat:'face', brand:'KOSE Grace One', name:'Антивозрастной крем с витамином С, 3в1 после 50 лет 100 гр (белый)', barcode:'4971710383096', priceUsd:12.90, priceKzt:6579, retailUsd:16.80, retailKzt:8568, inStock:true },
  { id:58, cat:'face', brand:'KOSE Grace One', name:'Антивозрастной крем с коллагеном, 3в1 после 50 лет (красный)', barcode:'4971710382488', priceUsd:12.90, priceKzt:6579, retailUsd:16.80, retailKzt:8568 },
  { id:59, cat:'face', brand:'KOSE Grace One', name:'Гель для лица с коллагеном "Восстановление и увлажнение" SPF50+ 100 гр (синий)', barcode:'4971710386967', priceUsd:14.50, priceKzt:7395, retailUsd:18.80, retailKzt:9588, inStock:true },
  { id:60, cat:'face', brand:'KOSE Q10 Viital Age', name:'Увлажняющий антивозрастной крем с коэнзимом Q10 и морским коллагеном 40 гр', barcode:'4971710308921', priceUsd:17.00, priceKzt:8670, retailUsd:21.70, retailKzt:11067 },
  { id:61, cat:'face', brand:'Kracie Moistage', name:'Увлажняющий крем для лица против морщин 100 гр', barcode:'4901417645470', priceUsd:7.20, priceKzt:3672, retailUsd:9.50, retailKzt:4845 },
  { id:62, cat:'face', brand:'Kracie Moistage', name:'Lift Essence Лосьон Супер Увлажняющий 210 мл', barcode:'4901417645449', priceUsd:6.60, priceKzt:3366, retailUsd:8.70, retailKzt:4437, inStock:true },
  { id:63, cat:'face', brand:'Kracie Moistage', name:'Lift Essence Milk суперувлажняющее молочный лосьон 160 мл', barcode:'4901417645463', priceUsd:6.80, priceKzt:3468, retailUsd:9.20, retailKzt:4692, inStock:true },
  { id:64, cat:'face', brand:'Kracie Moistage', name:'W Cold Увлажняющий охлаждающий крем 270 гр', barcode:'4901417645487', priceUsd:8.00, priceKzt:4080, retailUsd:10.40, retailKzt:5304 },
  { id:65, cat:'face', brand:'Kracie Hadabisei', name:'Крем для кожи вокруг глаз от мелких морщин с ретинолом 15 гр', barcode:'4901417628534', priceUsd:11.30, priceKzt:5763, retailUsd:14.60, retailKzt:7446, inStock:true },
  { id:66, cat:'face', brand:'Kracie Hadabisei', name:'Лечебный отбеливающий лосьон 170 мл', barcode:'4901417621580', priceUsd:1.30, priceKzt:663, retailUsd:13.70, retailKzt:6987, inStock:true },
  { id:67, cat:'face', brand:'Kracie - Hadabisei', name:'Лечебная сыворотка против морщин 30 мл', barcode:'4901417622594', priceUsd:11.40, priceKzt:5814, retailUsd:14.90, retailKzt:7599 },
  { id:68, cat:'face', brand:'Kracie HADABISEI', name:'Turning Care Лечебная отбеливающая сыворотка 30 мл', barcode:'4901417622440', priceUsd:11.40, priceKzt:5814, retailUsd:14.90, retailKzt:7599, inStock:true },
  { id:69, cat:'face', brand:'Ласьон Asahi', name:'Ласьон от пигментации с витаминами С (тоник)', barcode:'4987241169665', priceUsd:9.10, priceKzt:4641, retailUsd:12.60, retailKzt:6426, inStock:true },
  { id:70, cat:'face', brand:'Антивозрастной Лосьон', name:'Антивозрастной лосьон для лица с гиалуроновой кислотой', barcode:'4987241171255', priceUsd:9.10, priceKzt:4641, retailUsd:12.60, retailKzt:6426, inStock:true },
  { id:71, cat:'face', brand:'Kose Clear Turn', name:'Vitamin C Маска осветляющая с витамином С 30 шт', barcode:'4971710319361', priceUsd:9.30, priceKzt:4743, retailUsd:12.60, retailKzt:6426, inStock:true },
  { id:72, cat:'face', brand:'KOSE Clear Turn', name:'Маски для лица с гиалуроновой кислотой 30 шт', barcode:'4971710319385', priceUsd:9.30, priceKzt:4743, retailUsd:12.60, retailKzt:6426 },
  { id:73, cat:'face', brand:'KOSE Clear Turn', name:'Маски для лица с коллагеном 30 шт', barcode:'4971710319378', priceUsd:9.30, priceKzt:4743, retailUsd:12.60, retailKzt:6426 },
  { id:74, cat:'face', brand:'KOSE Clear Turn', name:'Тканевая маска против сухости с экстрактом японского риса 40 шт', barcode:'4971710390612', priceUsd:13.10, priceKzt:6681, retailUsd:17.10, retailKzt:8721, inStock:true },
  { id:75, cat:'face', brand:'KOSE Clear Turn', name:'Маска против морщин с коллагеном, ретинолом и гиалуроновой кислотой 50 шт', barcode:'49717110382884', priceUsd:13.10, priceKzt:6681, retailUsd:17.10, retailKzt:8721 },
  { id:76, cat:'face', brand:'KOSE Clear Turn EX', name:'Увлажняющая маска против морщин с коэнзимом Q10, коллагеном и гиалуроновой кислотой 40 шт', barcode:'4971710387926', priceUsd:13.10, priceKzt:6681, retailUsd:17.10, retailKzt:8721 },
  { id:77, cat:'face', brand:'KOSE Clear Turn', name:'Маска против морщин и пигментных пятен с коллагеном и транексамовой кислотой 50 шт', barcode:'4971710383850', priceUsd:13.10, priceKzt:6681, retailUsd:17.10, retailKzt:8721, inStock:true },
  { id:78, cat:'face', brand:'EXO LABO', name:'Маска с сывороткой гиалуроновой кислотой (синий)', barcode:'4513915018153', priceUsd:6.00, priceKzt:3060, retailUsd:8.00, retailKzt:4080, inStock:true },
  { id:79, cat:'face', brand:'EXO LABO', name:'Маска с сывороткой против акне (зелёный)', barcode:'4513915018337', priceUsd:6.00, priceKzt:3060, retailUsd:8.00, retailKzt:4080, inStock:true },
  { id:80, cat:'face', brand:'EXO LABO', name:'Маска с сывороткой 7 шт (бежевый)', barcode:'4513915018146', priceUsd:6.00, priceKzt:3060, retailUsd:8.00, retailKzt:4080, inStock:true },
  { id:81, cat:'face', brand:'EXO LABO', name:'Маска с сывороткой с ретинолом 7 шт', barcode:'4513915018344', priceUsd:6.00, priceKzt:3060, retailUsd:8.00, retailKzt:4080, inStock:true },
  { id:82, cat:'face', brand:'Japan Gals POSH KOSH', name:'Укрепляющая маска для лица с тройным витамином С 30 шт', barcode:'4513915018108', priceUsd:8.00, priceKzt:4080, retailUsd:10.00, retailKzt:5100, inStock:true },
  { id:83, cat:'face', brand:'Japan Gals Posh Kosh', name:'Ceramide + NMF Маски питательные 3 вида церамидов 30 шт', barcode:'4513915018092', priceUsd:8.00, priceKzt:4080, retailUsd:10.00, retailKzt:5100, inStock:true },
  { id:84, cat:'face', brand:'JAPAN GALS Posh Kosh', name:'Увлажняющие маски 4 вида гиалуроновой кислоты + протеогликан 30 шт', barcode:'4513915018078', priceUsd:8.00, priceKzt:4080, retailUsd:10.00, retailKzt:5100, inStock:true },
  { id:85, cat:'face', brand:'Japan Gals Posh Kosh', name:'Маски антивозрастные Ниацинамид + Ретинол 30 шт', barcode:'4513915018085', priceUsd:8.00, priceKzt:4080, retailUsd:10.00, retailKzt:5100, inStock:true },
  { id:86, cat:'face', brand:'Biore', name:'Пенка для умывания увлажнение 130 мл', barcode:'4901301259660', priceUsd:4.50, priceKzt:2295, retailUsd:5.6, retailKzt:2856, inStock:true },
  { id:87, cat:'face', brand:'Biore', name:'Пенка для умывания Экстра увлажнение 130 мл', barcode:'4901301259677', priceUsd:4.50, priceKzt:2295, retailUsd:5.6, retailKzt:2856, inStock:true },
  { id:88, cat:'face', brand:'Biore', name:'Пенка для умывания кожи склонной к акне 130 мл', barcode:'4901301265678', priceUsd:4.50, priceKzt:2295, retailUsd:5.6, retailKzt:2856, inStock:true },
  { id:89, cat:'face', brand:'Biore', name:'Пенка скраб для лица цветочный 130 мл', barcode:'4901301259684', priceUsd:4.50, priceKzt:2295, retailUsd:5.6, retailKzt:2856, inStock:true },
  { id:90, cat:'face', brand:'Senka', name:'Пенка для умывания с белой глиной 120 гр', barcode:'4550516474636', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978 },
  { id:91, cat:'face', brand:'Senka', name:'Пенка для умывания с коллагеном роз 120 гр', barcode:'4550516474582', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978, inStock:true },
  { id:92, cat:'face', brand:'Senka', name:'Увлажняющая пенка для лица "Идеальное очищение" 120 гр', barcode:'4550516474568', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978, inStock:true },
  { id:93, cat:'face', brand:'Senka', name:'Пенка для проблемной кожи "Идеальное очищение" 120 гр', barcode:'4550516474902', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978, inStock:true },
  { id:94, cat:'face', brand:'Biore Marshmallow Whip', name:'Увлажняющая пенка для умывания с нежным ароматом 150 мл (розовый)', barcode:'4901301250162', priceUsd:5.30, priceKzt:2703, retailUsd:6.7, retailKzt:3417, inStock:true },
  { id:95, cat:'face', brand:'Biore Marshmallow Whip', name:'Пенка для умывания "Для проблемной кожи" Medicated 150 мл (зелёный)', barcode:'4901301275080', priceUsd:5.30, priceKzt:2703, retailUsd:6.7, retailKzt:3417, inStock:true },
  { id:96, cat:'face', brand:'Biore', name:'Гидрофильное масло для снятия макияжа (для всех типов кожи) 230 мл', barcode:'4901301761385', priceUsd:12.00, priceKzt:6120, retailUsd:15, retailKzt:7650, inStock:true },
  { id:97, cat:'face', brand:'Biore', name:'Увлажняющая сыворотка для умывания и снятия макияжа 230 мл', barcode:'4901301263049', priceUsd:12.00, priceKzt:6120, retailUsd:15, retailKzt:7650 },
  { id:98, cat:'face', brand:'Biore', name:'Мицелярная салфетка для всех типов кожи 44 шт', barcode:'4901301280442', priceUsd:9.10, priceKzt:4641, retailUsd:12.60, retailKzt:6426, inStock:true },
  { id:99, cat:'face', brand:'Daiichi Funs', name:'Cycle Styly Пенка для умывания увлажняющая 250 мл', barcode:'4902050558981', priceUsd:7.50, priceKzt:3825, retailUsd:9.70, retailKzt:4947, inStock:true },
  { id:100, cat:'face', brand:'KAO Mens Biore', name:'Мужская пенка для умывания и бритья с ароматом цитрусовых 150 мл', barcode:'4901301258489', priceUsd:4.50, priceKzt:2295, retailUsd:6.20, retailKzt:3162, inStock:true },
  { id:101, cat:'face', brand:'KAO Mens Biore', name:'Мужская пенка для умывания и бритья акне 150 мл', barcode:'4901301277800', priceUsd:4.50, priceKzt:2295, retailUsd:6.20, retailKzt:3162, inStock:true },
  { id:102, cat:'face', brand:'Unlabel LAB', name:'VITAMIN C Очищающая пенка с витамином С для лица', barcode:'4573350881934', priceUsd:9.30, priceKzt:4743, retailUsd:12.10, retailKzt:6171, inStock:true },
  { id:103, cat:'face', brand:'LAB V', name:'Face Wash Очищающее средство для лица 130 г', barcode:'4573350881873', priceUsd:9.30, priceKzt:4743, retailUsd:12.10, retailKzt:6171, inStock:true },
  { id:104, cat:'face', brand:'Lab V Repair', name:'Восстанавливающий сывороточный гель 80 г', barcode:'4573350882085', priceUsd:20.50, priceKzt:10455, retailUsd:26.70, retailKzt:13617, inStock:true },
  { id:105, cat:'face', brand:'Unlabel LAB', name:'Сыворотка с РЕТИНОЛОМ Retinol 100 MPa Essence 50 мл (красный)', barcode:'4573350881163', priceUsd:18.30, priceKzt:9333, retailUsd:24.00, retailKzt:12240, inStock:true },
  { id:106, cat:'face', brand:'LAB CM', name:'Ceramide Essence Serum Сыворотка-эссенция 50 мл (зелёный)', barcode:'4573350881170', priceUsd:18.30, priceKzt:9333, retailUsd:24.00, retailKzt:12240, inStock:true },
  { id:107, cat:'face', brand:'Unlabel V Essence', name:'Сыворотка с витамином С для интенсивного увлажнения и очищения пор 50 мл', barcode:'4573350881040', priceUsd:18.30, priceKzt:9333, retailUsd:24.00, retailKzt:12240, inStock:true },
  { id:108, cat:'face', brand:'LAB PL', name:'Сыворотка плаценты 50 мл (синий)', barcode:'4573350881033', priceUsd:18.30, priceKzt:9333, retailUsd:24.00, retailKzt:12240, inStock:true },
  { id:109, cat:'face', brand:'KissMe Ferme', name:'Essence BB Cream UV 01 Light Skin Tone SPF45 PA+++ тональность 01, 30 г', barcode:'4901433170819', priceUsd:9.70, priceKzt:4947, retailUsd:13.00, retailKzt:6630 },
  { id:110, cat:'face', brand:'KissMe Ferme', name:'Essence BB Cream UV тональность 02 натуральный цвет кожи 30 г', barcode:'4901433170826', priceUsd:9.70, priceKzt:4947, retailUsd:13.00, retailKzt:6630, inStock:true },

  // BODY CARE
  { id:120, cat:'body', brand:'COW Brand Bath & Body', name:'Увлажняющий Гель для душа с цитрусовым ароматом 500 мл (зелёный)', barcode:'4901525011686', priceUsd:5.50, priceKzt:2805, retailUsd:7.20, retailKzt:3672 },
  { id:121, cat:'body', brand:'COW Brand Bath & Body', name:'Увлажняющий Гель для душа с цветочным ароматом 500 мл (синий)', barcode:'4901525011648', priceUsd:5.50, priceKzt:2805, retailUsd:7.20, retailKzt:3672 },
  { id:122, cat:'body', brand:'COW Brand Bath & Body', name:'Увлажняющий гель для душа с цветочным ароматом 500 мл (розовый)', barcode:'4901525011662', priceUsd:5.50, priceKzt:2805, retailUsd:7.20, retailKzt:3672 },
  { id:123, cat:'body', brand:'Biore U', name:'Экстра увлажняющий гель для душа для сухой кожи 480 мл (розовый)', barcode:'4901301336330', priceUsd:5.70, priceKzt:2907, retailUsd:7.50, retailKzt:3825 },
  { id:124, cat:'body', brand:'KAO Biore U', name:'Гель для душа с цветочным ароматом 480 мл (голубой)', barcode:'4901301336323', priceUsd:5.70, priceKzt:2907, retailUsd:7.50, retailKzt:3825 },
  { id:125, cat:'body', brand:'Biore', name:'Гель для душа "Персиковый соблазн" 480 мл (оранжевый)', barcode:'4901301336446', priceUsd:5.70, priceKzt:2907, retailUsd:7.50, retailKzt:3825 },
  { id:126, cat:'body', brand:'LION Ban Gold Roll On', name:'Дезодорант-антиперспирант Премиум нано ионный стойкий, аромат мыла 40 мл (розовый)', barcode:'4903301300335', priceUsd:6.00, priceKzt:3060, retailUsd:7.5, retailKzt:3825, inStock:true },
  { id:127, cat:'body', brand:'LION Ban Sweat Block', name:'Дезодорант-антиперспирант ионный блокирующий потоотделение (без запаха) (зелёный)', barcode:'4903301331575', priceUsd:6.00, priceKzt:3060, retailUsd:7.5, retailKzt:3825, inStock:true },
  { id:128, cat:'body', brand:'LION Ban Roll On', name:'Дезодорант роликовый мужской цитрусовый', barcode:'4903301533696', priceUsd:5.00, priceKzt:2550, retailUsd:6.2, retailKzt:3162, inStock:true },
  { id:129, cat:'body', brand:'LION "Ban"', name:'Дезодорант-антиперспирант "Длительная защита" с лёгким цветочным ароматом (красный)', barcode:'4903301188711', priceUsd:4.00, priceKzt:2040, retailUsd:5, retailKzt:2550, inStock:true },
  { id:130, cat:'body', brand:'Fine Today', name:'Увлажняющая гигиеническая губная помада с витамином Е и гиалуроновой кислотой Water in Lip 3.5 г (розовый)', barcode:'4901872471416', priceUsd:3.70, priceKzt:1887, retailUsd:5.20, retailKzt:2652, inStock:true },
  { id:131, cat:'body', brand:'Shiseido Water lip UV', name:'Увлажняющий питательный бальзам для губ с гиалуроновой кислотой 3.5 гр (синий)', barcode:'4901872471409', priceUsd:3.70, priceKzt:1887, retailUsd:5.20, retailKzt:2652, inStock:true },
  { id:132, cat:'body', brand:'COW Brand Beauty Soap', name:'Туалетное мыло с молоком, аромат жасмина (синий)', barcode:'4901525010634', priceUsd:1.10, priceKzt:561, retailUsd:1.40, retailKzt:714, inStock:true },
  { id:133, cat:'body', brand:'COW Brand Beauty Soap', name:'Молочное увлажняющее мыло со скваланом (красный)', barcode:'490125010900', priceUsd:1.10, priceKzt:561, retailUsd:1.40, retailKzt:714 },
  { id:134, cat:'body', brand:'Детское мыло', name:'Гипоаллергенное мыло без запаха с экстрактом листьев персика', barcode:'4901329260587', priceUsd:1.20, priceKzt:612, retailUsd:1.50, retailKzt:765 },
  { id:135, cat:'body', brand:'Kaneyo Laundry Soap', name:'Универсальное хозяйственное мыло Ookaku 150 г', barcode:'4901329240442', priceUsd:1.30, priceKzt:663, retailUsd:1.60, retailKzt:816 },
  { id:136, cat:'body', brand:'Kaneyo Rose Laundry Soap', name:'Хозяйственное ароматизирующее мыло 135 г', barcode:'4901329240411', priceUsd:1.30, priceKzt:663, retailUsd:1.60, retailKzt:816 },
  { id:137, cat:'body', brand:'Kaneyo', name:'Антибактериальное и дезодорирующее мыло на растительной основе 190 г', barcode:'4901329240428', priceUsd:1.50, priceKzt:765, retailUsd:2.00, retailKzt:1020 },
  { id:138, cat:'body', brand:'Shiseido', name:'Крем для рук и ног с мочевиной "Заживляющий и смягчающий уход" 100 гр', barcode:'4901872864195', priceUsd:5.60, priceKzt:2856, retailUsd:7.1, retailKzt:3621, inStock:true },
  { id:139, cat:'body', brand:'Shiseido', name:'Крем для рук и ног с мочевиной "Заживляющий и смягчающий уход" 60 гр', barcode:'4901872883172', priceUsd:4.00, priceKzt:2040, retailUsd:5.2, retailKzt:2652, inStock:true },
  { id:140, cat:'body', brand:'SHISEIDO', name:'Суперувлажняющий крем для рук на водной основе (красный)', barcode:'49325263', priceUsd:5.60, priceKzt:2856, retailUsd:7.1, retailKzt:3621, inStock:true },
  { id:141, cat:'body', brand:'Kose Precious Garden', name:'Крем для рук 70 г успокаивающий цветочный релакс', barcode:'4971710390322', priceUsd:2.70, priceKzt:1377, retailUsd:3.60, retailKzt:1836, inStock:true },
  { id:142, cat:'body', brand:'Mitsuei', name:'Гель для душа (женский)', barcode:'4978951300325', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060, inStock:true },
  { id:143, cat:'body', brand:'Mitsuei', name:'Освежающий мужской гель для душа с цитрусовым ароматом', barcode:'4978951300295', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060, inStock:true },
  { id:144, cat:'body', brand:'Mitsuei', name:'Увлажняющий гель для душа с аргановым маслом, гиалуроновой кислотой и коллагеном, аромат жасмина', barcode:'4978951300318', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060 },
  { id:145, cat:'body', brand:'Kracie Ma & Me', name:'Гель для душа (Латте)', barcode:'4901417120335', priceUsd:6.00, priceKzt:3060, retailUsd:8.00, retailKzt:4080, inStock:true },
  { id:146, cat:'body', brand:'Mitsuei', name:'Пенное антисептическое мыло для рук с ароматом персика 350 мл', barcode:'4978951400049', priceUsd:3.80, priceKzt:1938, retailUsd:5.00, retailKzt:2550 },

  // LAUNDRY & HOUSEHOLD
  { id:160, cat:'laundry', brand:'LION TOP', name:'Стиральный порошок без фосфатов 3.2 кг', barcode:'4903301292067', priceUsd:21.00, priceKzt:10710, retailUsd:24.00, retailKzt:12240 },
  { id:161, cat:'laundry', brand:'LION "Look Plus"', name:'Моющее средство для быстрой очистки ванны без губки с ароматом цитрусов', barcode:'4903301256380', priceUsd:5.10, priceKzt:2601, retailUsd:5.70, retailKzt:2907, inStock:true },
  { id:162, cat:'laundry', brand:'KAO "Attack" Antibacterial EX', name:'Высокоэффективный гель для стирки с антибактериальным эффектом 750 мл (синий)', barcode:'4901301434258', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978, inStock:true },
  { id:163, cat:'laundry', brand:'KAO "Attack" Antibacterial EX', name:'Гель для стирки с антибактериальным эффектом, аромат зелени (для сушки в помещении) 720 мл', barcode:'4901301434340', priceUsd:6.00, priceKzt:3060, retailUsd:7.80, retailKzt:3978, inStock:true },
  { id:164, cat:'laundry', brand:'MITSUEI', name:'Стиральный порошок с кондиционером, аромат розы 800 гр', barcode:'4978951060991', priceUsd:3.50, priceKzt:1785, retailUsd:4.5, retailKzt:2295, inStock:false },
  { id:165, cat:'laundry', brand:'Mitsuei White', name:'Стиральный порошок отбеливающий с цветочным ароматом 800 гр', barcode:'4978951061004', priceUsd:3.50, priceKzt:1785, retailUsd:4.5, retailKzt:2295, inStock:true },
  { id:166, cat:'laundry', brand:'Mitsuei Herbal Three', name:'Стиральный порошок концентрированный 1 кг', barcode:'4978951060786', priceUsd:4.70, priceKzt:2397, retailUsd:6, retailKzt:3060 },
  { id:167, cat:'laundry', brand:'MITSUEI Super Wash', name:'Стиральный порошок для профессионального пользования', barcode:'4978951061011', priceUsd:4.00, priceKzt:2040, retailUsd:5, retailKzt:2550, inStock:true },
  { id:168, cat:'laundry', brand:'Mitsuei Herbal Three', name:'Стиральный порошок концентрированный 900 г', barcode:'4978951061233', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060 },
  { id:169, cat:'laundry', brand:'Mitsuei Herbal Three Fragrant', name:'Стиральный порошок 900 г', barcode:'4978951061240', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060, inStock:true },
  { id:170, cat:'laundry', brand:'LION "Soflan" Aroma Rich Catherine', name:'Кондиционер для белья с ароматом цветочного букета (розовый)', barcode:'4903301353058', priceUsd:4.40, priceKzt:2244, retailUsd:5.70, retailKzt:2907 },
  { id:171, cat:'laundry', brand:'LION "Soflan" Aroma Rich Sarah', name:'Кондиционер для белья с цветочным ароматом (голубой)', barcode:'4903301353126', priceUsd:4.40, priceKzt:2244, retailUsd:5.70, retailKzt:2907 },
  { id:172, cat:'laundry', brand:'LION "Soflan" Aroma Rich Juliette', name:'Кондиционер для белья со сладким цветочным ароматом (чёрный)', barcode:'4903301353041', priceUsd:4.40, priceKzt:2244, retailUsd:5.70, retailKzt:2907, inStock:true },
  { id:173, cat:'laundry', brand:'LION "Soflan" Aroma Rich Diana', name:'Кондиционер для белья с ароматом роз (бежевый)', barcode:'4903301353119', priceUsd:4.40, priceKzt:2244, retailUsd:5.70, retailKzt:2907, inStock:true },
  { id:174, cat:'laundry', brand:'LION "Soflan" Aroma Rich Ellie', name:'Кондиционер для белья с богатым ароматом натуральных масел (зелёный)', barcode:'4903301353140', priceUsd:4.40, priceKzt:2244, retailUsd:5.70, retailKzt:2907 },
  { id:175, cat:'laundry', brand:'KAO "Attack Wash"', name:'Пятновыводитель для обработки ткани перед стиркой', barcode:'4901301408556', priceUsd:4.60, priceKzt:2346, retailUsd:6.00, retailKzt:3060, inStock:true },
  { id:176, cat:'laundry', brand:'Mitsuei', name:'Гель для стирки с кондиционером 2 л', barcode:'4978951061141', priceUsd:8.50, priceKzt:4335, retailUsd:10.5, retailKzt:5355, inStock:true },
  { id:177, cat:'laundry', brand:'Kaneyo', name:'Средство для чистки кухни, удаляющее стойкие пригоревшие пятна', barcode:'4901329210872', priceUsd:2.50, priceKzt:1275, retailUsd:3.20, retailKzt:1632, inStock:true },
  { id:178, cat:'laundry', brand:'Mitsuei', name:'Чистящее средство с хлором для сантехники 500 мл (синий)', barcode:'4978951030574', priceUsd:2.30, priceKzt:1173, retailUsd:3.00, retailKzt:1530, inStock:true },
  { id:179, cat:'laundry', brand:'MITSUEI', name:'Средство для мытья посуды с ароматом лайма 600 мл', barcode:'4978951040771', priceUsd:2.00, priceKzt:1020, retailUsd:2.80, retailKzt:1428, inStock:true },
  { id:180, cat:'laundry', brand:'MITSUEI', name:'Средство для мытья посуды с ароматом апельсина 600 мл', barcode:'4978951040788', priceUsd:2.00, priceKzt:1020, retailUsd:3, retailKzt:1530, inStock:true },
  { id:181, cat:'laundry', brand:'Mitsuei', name:'Крем для очищения поверхностей без царапин с ароматом Апельсина 400 гр', barcode:'4978951040825', priceUsd:1.90, priceKzt:969, retailUsd:3, retailKzt:1530, inStock:true },
  { id:182, cat:'laundry', brand:'Mitsuei', name:'Чистящее средство для кухни', barcode:'4978951040054', priceUsd:2.90, priceKzt:1479, retailUsd:3.70, retailKzt:1887 },
  { id:183, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды лимон 670 мл', barcode:'4987176118806', priceUsd:3.90, priceKzt:1989, retailUsd:3.90, retailKzt:1989 },
  { id:184, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды апельсин 325 мл', barcode:'4987176118202', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:185, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды лимон 325 мл', barcode:'4987176118370', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:186, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды мята 325 мл', barcode:'4987176118165', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:187, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды зелёный чай 325 мл', barcode:'4987176118318', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:188, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды грейпфрут 325 мл', barcode:'4987176118301', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:189, cat:'laundry', brand:'Joy', name:'Средство для мытья посуды стерилизующий, интенсивная уборка 325 мл', barcode:'49871761182664', priceUsd:2.90, priceKzt:1479, retailUsd:3.80, retailKzt:1938 },
  { id:190, cat:'laundry', brand:'Kaneyo Cleanser', name:'Порошок чистящий с микрогранулами традиционный 400 г (Красный)', barcode:'490129110059', priceUsd:1.80, priceKzt:918, retailUsd:2.30, retailKzt:1173, inStock:true },
  { id:191, cat:'laundry', brand:'Kaneyo New Sassa Cleanser', name:'Чистящий порошок экспресс-действия с микрогранулами 400 гр (жёлтый)', barcode:'4901329110066', priceUsd:1.80, priceKzt:918, retailUsd:2.30, retailKzt:1173, inStock:true },
  { id:192, cat:'laundry', brand:'Kaneyo', name:'Порошок чистящий с отбеливающим эффектом Super Awatachi Cleanser 400 г (зелёный)', barcode:'4901329110073', priceUsd:2.30, priceKzt:1173, retailUsd:3.00, retailKzt:1530 },
  { id:193, cat:'laundry', brand:'Kaneyo Soap Stenlight', name:'Крем-очищение с ароматом апельсина 400 г (жёлтый)', barcode:'4901329210926', priceUsd:1.90, priceKzt:969, retailUsd:2.40, retailKzt:1224, inStock:true },
  { id:194, cat:'laundry', brand:'Kaneyo Soap Stenlight', name:'Крем-очищающее средство с ароматом мяты 400 г (зелёный)', barcode:'4901329210919', priceUsd:1.90, priceKzt:969, retailUsd:2.40, retailKzt:1224, inStock:true },
  { id:195, cat:'laundry', brand:'Kaneyo Soap', name:'Чистящее средство для керамических туалетов 400 г (чёрный)', barcode:'4901329210865', priceUsd:2.90, priceKzt:1479, retailUsd:3.90, retailKzt:1989 },

  // DENTAL
  { id:200, cat:'dental', brand:'KAO Clear Clean', name:'Лечебно-профилактическая зубная паста с микрогранулами, мятный вкус 120 гр (синий)', barcode:'4901301386205', priceUsd:2.00, priceKzt:1020, retailUsd:3, retailKzt:1530 },
  { id:201, cat:'dental', brand:'KAO Clear Clean', name:'Зубная паста экстра освежающий мятный вкус 120 гр (зелёный)', barcode:'4901301386182', priceUsd:2.00, priceKzt:1020, retailUsd:3, retailKzt:1530 },
  { id:202, cat:'dental', brand:'KAO Clear Clean', name:'Зубная паста свежий цитрусовый вкус 120 гр (жёлтый)', barcode:'4901301386199', priceUsd:2.00, priceKzt:1020, retailUsd:3, retailKzt:1530 },
  { id:203, cat:'dental', brand:'LION "White&White"', name:'Отбеливающая зубная паста с кальцием и фтором', barcode:'4903301186403', priceUsd:1.60, priceKzt:816, retailUsd:2.2, retailKzt:1122, inStock:true },
  { id:204, cat:'dental', brand:'Zero Premium Care', name:'Rich Compact Normal Зубная щётка (нормальная щетина)', barcode:'4901221804711', priceUsd:2.20, priceKzt:1120, retailUsd:2.90, retailKzt:1480, inStock:true },
  { id:205, cat:'dental', brand:'Ebisu Medifit', name:'Зубная щётка жёсткая, прямой срез ворса, зона очищения дальних зубов', barcode:'4901221818909', priceUsd:1.80, priceKzt:920, retailUsd:2.30, retailKzt:1170, inStock:true },
  { id:206, cat:'dental', brand:'EBISU x Tomica', name:'Зубная щётка для детей 2-6 лет', barcode:'4901221070109', priceUsd:1.40, priceKzt:710, retailUsd:1.90, retailKzt:970, inStock:true },

  // VITAMINS & SUPPLEMENTS
  { id:220, cat:'vitamins', brand:'Unimat Riken', name:'Детские жевательные таблетки с кальцием и витамином D, вкус шоколада 45 таб', barcode:'4903361461175', priceUsd:4.60, priceKzt:2346, retailUsd:9.00, retailKzt:4590 },
  { id:221, cat:'vitamins', brand:'Unimat Riken', name:'Рыбий жир с витаминами детские жевательные со вкусом клубники', barcode:'4903361440934', priceUsd:7.00, priceKzt:3570, retailUsd:11.00, retailKzt:5610 },
  { id:222, cat:'vitamins', brand:'Unimat Riken Eye Pure Drop', name:'Gummy Детские витамины для укрепления зрения на 20 дней', barcode:'4903361441221', priceUsd:7.00, priceKzt:3570, retailUsd:11.00, retailKzt:5610 },
  { id:223, cat:'vitamins', brand:'Unimat Riken', name:'Детские жевательные витамины IQ для умственной активности, вкус апельсина', barcode:'4903361441085', priceUsd:4.60, priceKzt:2346, retailUsd:9.00, retailKzt:4590 },
  { id:224, cat:'vitamins', brand:'Unimat Riken', name:'Детский комплекс с протеином, кальцием и витамином D, 90 шт', barcode:'4903361440958', priceUsd:7.00, priceKzt:3570, retailUsd:11.00, retailKzt:5610 },
  { id:225, cat:'vitamins', brand:'Unimat Riken Children\'s', name:'Витамин D, витамин C и молочнокислые бактерии KT-11, вкус винограда', barcode:'4903361441078', priceUsd:4.60, priceKzt:2346, retailUsd:9.00, retailKzt:4590 },
  { id:226, cat:'vitamins', brand:'Unimat Riken Child', name:'DHA + Vitamin D Drop Gummy жевательные конфеты', barcode:'4903361441207', priceUsd:7.00, priceKzt:3570, retailUsd:11.00, retailKzt:5610 },
  { id:227, cat:'vitamins', brand:'NOBINOBI', name:'Spirulina', barcode:'4903361681573', priceUsd:12.80, priceKzt:6528, retailUsd:16.50, retailKzt:8415 },
  { id:228, cat:'vitamins', brand:'UNIMAT RIKEN', name:'Конфеты Vitamin ACD для детей, вкус персика и винограда, 8 шт', barcode:'4903361440873', priceUsd:3.00, priceKzt:1530, retailUsd:4.00, retailKzt:2040 },
  { id:229, cat:'vitamins', brand:'Unimat Riken', name:'IQ конфеты с DHA детские для повышения интеллекта 10 шт', barcode:'4903361440804', priceUsd:3.00, priceKzt:1530, retailUsd:4.00, retailKzt:2040 },
  { id:230, cat:'vitamins', brand:'Unimat Riken', name:'Конфеты с кальцием и молочнокислыми бактериями для детей 10 шт', barcode:'4903361440828', priceUsd:3.00, priceKzt:1530, retailUsd:4.00, retailKzt:2040 },
  { id:231, cat:'vitamins', brand:'Supplement ZOO', name:'For Snacks Витамин Д', barcode:'4903361673028', priceUsd:9.00, priceKzt:4590, retailUsd:14.00, retailKzt:7140 },
  { id:232, cat:'vitamins', brand:'Unimat ZOO', name:'Железо и фолиевая кислота жевательные таблетки 150 шт', barcode:'4903361680446', priceUsd:9.00, priceKzt:4590, retailUsd:14.00, retailKzt:7140 },
  { id:233, cat:'vitamins', brand:'Unimat ZOO', name:'Мультивитамин таблетки 150 шт', barcode:'4903361680460', priceUsd:9.00, priceKzt:4590, retailUsd:14.00, retailKzt:7140 },
  { id:234, cat:'vitamins', brand:'Unimat ZOO', name:'Витамин С таблетки 150 шт', barcode:'4903361680453', priceUsd:9.00, priceKzt:4590, retailUsd:14.00, retailKzt:7140 },
  { id:235, cat:'vitamins', brand:'Unimat Riken', name:'Витаминные капсулы с Омега 3 DHA+EPA Omega-3 1000', barcode:'4903361671734', priceUsd:12.00, priceKzt:6120, retailUsd:17.00, retailKzt:8670 },
  { id:236, cat:'vitamins', brand:'Kaneka Supplement', name:'Восстановленный коэнзим Q10 в пакетиках 30 таблеток x 2', barcode:'4903361681368', priceUsd:10.50, priceKzt:5355, retailUsd:16.00, retailKzt:8160 },
  { id:237, cat:'vitamins', brand:'YUWA', name:'Аодзиру с молочнокислыми бактериями и ферментами, фруктовый вкус №20 (зелёный)', barcode:'4960867005494', priceUsd:8.50, priceKzt:4335, retailUsd:11.00, retailKzt:5610 },
  { id:238, cat:'vitamins', brand:'YUWA', name:'Аодзиру с железом и фолиевой кислотой, вкус винограда №20 (фиолетовый)', barcode:'4960867005791', priceUsd:8.50, priceKzt:4335, retailUsd:11.00, retailKzt:5610 },
  { id:239, cat:'vitamins', brand:'YUWA', name:'Фруктовый Аодзиру с молочнокислыми бактериями и ферментами', barcode:'4960867005555', priceUsd:17.00, priceKzt:8670, retailUsd:23.00, retailKzt:11730 },
  { id:240, cat:'vitamins', brand:'Earth Placenta C Jelly', name:'Коллаген питьевой в форме желе со вкусом лесных ягод 310 г', barcode:'4901080661418', priceUsd:13, priceKzt:6630, retailUsd:17, retailKzt:8670 },
  { id:241, cat:'vitamins', brand:'Earth Jelly', name:'Гиалуроновая кислота и коллаген желе', barcode:'4901080662613', priceUsd:13, priceKzt:6630, retailUsd:17, retailKzt:8670 },
  { id:242, cat:'vitamins', brand:'Sante Fx Neo Santen', name:'Капли для глаз с таурином — снятие раздражения и усталости глаз 12 мл', barcode:'4987084410443', priceUsd:5.70, priceKzt:2907 },
  { id:243, cat:'vitamins', brand:'Sante Fx V+', name:'Капли для глаз с витамином В6, таурином и 7 активными компонентами 12 мл', barcode:'4987084315106', priceUsd:5.70, priceKzt:2907 },
  { id:244, cat:'vitamins', brand:'Rohto VITA 40 COOL', name:'Капли для глаз с аминокислотами и витаминами Е, В6, охлаждающий эффект', barcode:'4987241100538', priceUsd:3.00, priceKzt:1530 },
  { id:245, cat:'vitamins', brand:'Rohto VITA 40', name:'Капли для глаз с аминокислотами и витаминами Е, В6, 12 мл', barcode:'4987241100521', priceUsd:3.00, priceKzt:1530 },
  { id:246, cat:'vitamins', brand:'Orihiro', name:'Мультивитамины и минералы, вкус манго жевательные таблетки 1000 мг 180 шт', barcode:'4971493106660', priceUsd:11.50, priceKzt:5865, retailUsd:17.00, retailKzt:8670 },
  { id:247, cat:'vitamins', brand:'Orihiro', name:'Кальций+Витамин D, вкус йогурта жевательные таблетки 1000 мг 180 шт', barcode:'4971493104031', priceUsd:11.50, priceKzt:5865, retailUsd:17.00, retailKzt:8670 },
  { id:248, cat:'vitamins', brand:'Orihiro', name:'Витамин D Плюс таблетки 300 мг 120 шт', barcode:'4571157259130', priceUsd:8.00, priceKzt:4080, retailUsd:11.00, retailKzt:5610 },
  { id:249, cat:'vitamins', brand:'ORIHIRO', name:'Железо жевательные таблетки со вкусом ягод', barcode:'4571157256658', priceUsd:5.70, priceKzt:2907, retailUsd:8.00, retailKzt:4080 },
  { id:250, cat:'vitamins', brand:'DHC', name:'Кальций и магний 180 капсул на 60 дней', barcode:'4511413405222', priceUsd:9.00, priceKzt:4590, retailUsd:12.60, retailKzt:6426 },
  { id:251, cat:'vitamins', brand:'Спирулина', name:'Спирулина 2200 шт', barcode:'4937224925658', priceUsd:29.00, priceKzt:14790, retailUsd:37.00, retailKzt:18870 },
  { id:252, cat:'vitamins', brand:'Kobayashi Calcium Mg', name:'Кальций и магний на 60 дней', barcode:'4987072012994', priceUsd:7.50, priceKzt:3825, retailUsd:11.00, retailKzt:5610 },
  { id:253, cat:'vitamins', brand:'DHC', name:'Витамин D3, 60 таблеток на 60 дней', barcode:'4511413407363', priceUsd:5.70, priceKzt:2907, retailUsd:8.00, retailKzt:4080 },
  { id:254, cat:'vitamins', brand:'DHC', name:'Витаминная смесь группы B, 120 таблеток для снятия усталости и улучшения метаболизма', barcode:'4511413404164', priceUsd:5.70, priceKzt:2907, retailUsd:8.00, retailKzt:4080 },
  { id:255, cat:'vitamins', brand:'Japan Gals Аодзиру', name:'Зелёный сок с молочнокислыми бактериями 24 пакетика', barcode:'4560121432280', priceUsd:6.30, priceKzt:3213, retailUsd:9.00, retailKzt:4590 },
  { id:256, cat:'vitamins', brand:'Japan Gals Аодзиру', name:'Зелёный сок из цельных фруктов 3 г, 24 пакетика', barcode:'4560121431979', priceUsd:6.30, priceKzt:3213, retailUsd:9.00, retailKzt:4590 },
  { id:257, cat:'vitamins', brand:'Блокатор вирусов', name:'Блокатор вирусов', barcode:'4562441906434', priceUsd:6.30, priceKzt:3213, retailUsd:9.00, retailKzt:4590 },

  // OTHER
  { id:270, cat:'other', brand:'Nippon Paper Crecia Scottie', name:'Бумажные салфетки Tissue Flower Box, 250 листов', barcode:'4901750413316', priceUsd:2.00, priceKzt:1020, retailUsd:2.70, retailKzt:1377 },
  { id:271, cat:'other', brand:'Crecia Scottie Tissue', name:'Бумажные салфетки 100 листов', barcode:'4901750377113', priceUsd:1.50, priceKzt:765, retailUsd:1.90, retailKzt:969 },
  { id:272, cat:'other', brand:'Nippon Crecia Kleenex Snoopy', name:'Бумажные салфетки 160 листов', barcode:'4901750460532', priceUsd:2.30, priceKzt:1173, retailUsd:3.00, retailKzt:1530 },
  { id:273, cat:'other', brand:'Nippon Paper Crecia Kleenex', name:'Lotion Pocket Snoopy Салфетки 20 листов', barcode:'4901750470043', priceUsd:1.80, priceKzt:918, retailUsd:2.30, retailKzt:1173 },
  { id:274, cat:'other', brand:'Nippon Paper Crecia Scotty Fine', name:'Тряпки для уборки кухни 3 листа', barcode:'4901750025274', priceUsd:1.30, priceKzt:663, retailUsd:1.80, retailKzt:918 },
  { id:275, cat:'other', brand:'Asahi Kasei Home Products', name:'Губка для кухни жёлтая', barcode:'4901670106541', priceUsd:1.40, priceKzt:714, retailUsd:1.80, retailKzt:918 },
  { id:276, cat:'other', brand:'Asahi Kasei Home Products', name:'Губка для кухни красная', barcode:'4901670106558', priceUsd:1.40, priceKzt:714, retailUsd:1.80, retailKzt:918 },
  { id:277, cat:'other', brand:'Asahi Kasei Home Products', name:'Губка для кухни розовая', barcode:'4901670115031', priceUsd:1.40, priceKzt:714, retailUsd:1.80, retailKzt:918 },
  { id:278, cat:'other', brand:'Asahi Kasei Zubizubasa', name:'Губка для глубокой очистки', barcode:'4901670106107', priceUsd:2.30, priceKzt:1173, retailUsd:3.00, retailKzt:1530 },
  { id:279, cat:'other', brand:'CRECIA "Scottie Fine"', name:'Бумажные кухонные полотенца (многоразовые)', barcode:'4901750353544', priceUsd:5.20, priceKzt:2652, retailUsd:6.70, retailKzt:3417, inStock:true },
  { id:280, cat:'other', brand:'Nippon Paper Crecia Scotty Fine', name:'Бумажные полотенца многоразовые с принтом 60 шт x 1 рулон', barcode:'4901750353605', priceUsd:5.70, priceKzt:2907, retailUsd:7.50, retailKzt:3825 },
  { id:281, cat:'other', brand:'Nippon Paper Crecia Scotty Fine', name:'Бумажные полотенца многоразовые прочные 47 шт', barcode:'4901750353155', priceUsd:5.70, priceKzt:2907, retailUsd:7.50, retailKzt:3825 },
  { id:282, cat:'other', brand:'Nippon Paper Crecia', name:'Пергамент для выпечки стандартный 10 метров', barcode:'4901750025380', priceUsd:3.10, priceKzt:1581, retailUsd:4.00, retailKzt:2040, inStock:true },
  { id:283, cat:'other', brand:'Nippon Paper', name:'Пергамент для выпечки 3 м', barcode:'4901750025373', priceUsd:1.50, priceKzt:765, retailUsd:2.00, retailKzt:1020, inStock:true },
  { id:284, cat:'other', brand:'EIKOSHA Spirit Refill', name:'Ароматизатор на торпедо Samurai Man (Самурай) меловой 40 г, A-37', barcode:'4970301590370', priceUsd:6.00, priceKzt:3060, retailUsd:8, retailKzt:4080 },
  { id:285, cat:'other', brand:'EIKOSHA', name:'Ароматизатор A-19 Морская свежесть', barcode:'4970301590196', priceUsd:6.00, priceKzt:3060, retailUsd:8, retailKzt:4080, inStock:true },
  { id:286, cat:'other', brand:'EIKOSHA', name:'Ароматизатор меловой SQUASH / свежесть', barcode:'4970301590103', priceUsd:6.00, priceKzt:3060, retailUsd:8, retailKzt:4080, inStock:true },
  { id:287, cat:'other', brand:'EIKOSHA', name:'Ароматизатор меловой AQUA SHOWER / аква', barcode:'4970301590318', priceUsd:6.00, priceKzt:3060, retailUsd:8, retailKzt:4080, inStock:true },
];

// ========== PRODUCT IMAGES ==========
const productImages = {
  1:'products/p1.jpg',2:'products/p2.jpg',3:'products/p3.jpg',4:'products/p4.jpg',
  5:'products/p5.jpg',6:'products/p6.jpg',12:'products/p12.jpg',13:'products/p13.jpg',
  14:'products/p14.jpg',15:'products/p15.jpg',16:'products/p16.jpg',17:'products/p17.jpg',
  18:'products/p18.jpg',20:'products/p20.jpg',21:'products/p21.jpg',22:'products/p22.jpg',
  23:'products/p23.jpg',24:'products/p24.jpg',25:'products/p25.jpg',26:'products/p26.jpg',
  27:'products/p27.jpg',28:'products/p28.jpg',29:'products/p29.jpg',30:'products/p30.jpg',
  31:'products/p31.jpg',32:'products/p32.jpg',33:'products/p33.jpg',34:'products/p34.jpg',
  35:'products/p35.jpg',36:'products/p36.jpg',37:'products/p37.jpg',38:'products/p38.jpg',
  39:'products/p39.jpg',40:'products/p40.jpg',41:'products/p41.jpg',42:'products/p42.jpg',
  43:'products/p43.jpg',45:'products/p45.jpg',51:'products/p51.jpg',53:'products/p53.jpg',
  54:'products/p54.jpg',55:'products/p55.jpg',57:'products/p57.jpg',59:'products/p59.jpg',
  62:'products/p62.jpg',63:'products/p63.jpg',65:'products/p65.jpg',66:'products/p66.jpg',
  68:'products/p68.jpg',69:'products/p69.jpg',70:'products/p70.jpg',71:'products/p71.jpg',
  74:'products/p74.jpg',75:'products/p75.jpg',78:'products/p78.jpg',79:'products/p79.jpg',
  80:'products/p80.jpg',81:'products/p81.jpg',82:'products/p82.jpg',83:'products/p83.jpg',
  84:'products/p84.jpg',85:'products/p85.jpg',86:'products/p86.jpg',87:'products/p87.jpg',
  88:'products/p88.jpg',89:'products/p89.jpg',91:'products/p91.jpg',92:'products/p92.jpg',
  93:'products/p93.jpg',94:'products/p94.jpg',95:'products/p95.jpg',96:'products/p96.jpg',
  97:'products/p97.jpg',98:'products/p98.jpg',99:'products/p99.jpg',100:'products/p100.jpg',
  101:'products/p101.jpg',102:'products/p102.jpg',103:'products/p103.jpg',104:'products/p104.jpg',
  105:'products/p105.jpg',106:'products/p106.jpg',107:'products/p107.jpg',108:'products/p108.jpg',
  110:'products/p110.jpg',126:'products/p126.jpg',127:'products/p127.jpg',128:'products/p128.jpg',
  129:'products/p129.jpg',130:'products/p130.jpg',131:'products/p131.jpg',132:'products/p132.jpg',
  138:'products/p138.jpg',139:'products/p139.jpg',140:'products/p140.jpg',141:'products/p141.jpg',
  142:'products/p142.jpg',143:'products/p143.jpg',145:'products/p145.jpg',161:'products/p161.jpg',
  162:'products/p162.jpg',163:'products/p163.jpg',164:'products/p164.jpg',165:'products/p165.jpg',
  167:'products/p167.jpg',169:'products/p169.jpg',172:'products/p172.jpg',173:'products/p173.jpg',
  175:'products/p175.jpg',176:'products/p176.jpg',177:'products/p177.jpg',178:'products/p178.jpg',
  179:'products/p179.jpg',180:'products/p180.jpg',181:'products/p181.jpg',190:'products/p190.jpg',
  191:'products/p191.jpg',193:'products/p193.jpg',194:'products/p194.jpg',203:'products/p203.jpg',
  77:'products/p77.jpg',
  204:'products/p204.jpg',205:'products/p205.jpg',206:'products/p206.jpg',
  279:'products/p279.jpg',282:'products/p282.jpg',283:'products/p283.jpg',
  285:'products/p285.jpg',286:'products/p286.jpg',287:'products/p287.jpg',
};

// Round all KZT prices to nearest 10
products.forEach(p => {
  if (p.priceKzt) p.priceKzt = Math.round(p.priceKzt / 10) * 10;
  if (p.retailKzt) p.retailKzt = Math.round(p.retailKzt / 10) * 10;
});

// ========== CATEGORY CONFIG ==========
const catConfig = {
  hair:    { icon:'💇', label:'Волосы',     cls:'cat-hair' },
  face:    { icon:'✨', label:'Лицо',       cls:'cat-face' },
  body:    { icon:'🧴', label:'Тело',       cls:'cat-body' },
  laundry: { icon:'🧺', label:'Хозяйство', cls:'cat-laundry' },
  dental:  { icon:'🦷', label:'Зубы',       cls:'cat-dental' },
  vitamins:{ icon:'💊', label:'Витамины',   cls:'cat-vitamins' },
  other:   { icon:'🏠', label:'Прочее',     cls:'cat-other' },
};

// ========== STATE ==========
let currentCat = 'all';
let searchQuery = '';
let cart = {}; // { productId: quantity }

// ========== CART FUNCTIONS ==========
function getRetailPrice(p) {
  return p.retailKzt || Math.round((p.retailUsd || p.priceUsd) * 510);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartBadge();
  renderProducts();
}

function removeFromCart(id) {
  delete cart[id];
  updateCartBadge();
  renderCart();
  renderProducts();
}

function updateCartQty(id, qty) {
  if (qty <= 0) { removeFromCart(id); return; }
  cart[id] = qty;
  updateCartBadge();
  renderCart();
  renderProducts();
}

function updateCartBadge() {
  const total = Object.values(cart).reduce((a, b) => a + b, 0);
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    renderCart();
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const orderBtn = document.getElementById('cartOrderBtn');
  const items = Object.entries(cart);

  if (items.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Корзина пуста</p>
        <span class="cart-empty-sub">Добавьте товары из каталога</span>
      </div>`;
    document.getElementById('cartTotal').textContent = '0 ₸';
    if (orderBtn) orderBtn.disabled = true;
    return;
  }

  const waIconSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.875L.057 23.476a.5.5 0 0 0 .608.62l5.701-1.493A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.005-1.37l-.358-.214-3.724.975.994-3.625-.234-.373A9.776 9.776 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>`;

  body.innerHTML = items.map(([id, qty]) => {
    const p = products.find(x => x.id === +id);
    if (!p) return '';
    const price = getRetailPrice(p);
    const lineTotal = price * qty;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${price.toLocaleString('ru-RU')} ₸ × ${qty} = <strong>${lineTotal.toLocaleString('ru-RU')} ₸</strong></div>
        </div>
        <div class="cart-item-controls">
          <div class="cart-qty-row">
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, ${qty - 1})">−</button>
            <span class="cart-qty-val">${qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty(${p.id}, ${qty + 1})">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeFromCart(${p.id})" title="Удалить">✕</button>
        </div>
      </div>`;
  }).join('');

  const totalKzt = items.reduce((sum, [id, qty]) => {
    const p = products.find(x => x.id === +id);
    return sum + (p ? getRetailPrice(p) * qty : 0);
  }, 0);
  document.getElementById('cartTotal').textContent = totalKzt.toLocaleString('ru-RU') + ' ₸';
  if (orderBtn) orderBtn.disabled = false;
}

function orderCart() {
  const items = Object.entries(cart);
  if (items.length === 0) return;
  const lines = items.map(([id, qty], i) => {
    const p = products.find(x => x.id === +id);
    if (!p) return '';
    return `${i + 1}. ${p.brand} — ${p.name}${qty > 1 ? ` (${qty} шт.)` : ''}`;
  }).filter(Boolean);
  const msg = encodeURIComponent(`Здравствуйте! Хочу заказать:\n${lines.join('\n')}\n\nПожалуйста, подтвердите наличие и стоимость.`);
  window.open(`https://wa.me/77778223071?text=${msg}`, '_blank');
}

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let filtered = products.filter(p => {
    if (!p.inStock) return false;
    const matchCat = currentCat === 'all' || p.cat === currentCat;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">🔍 Товары не найдены. Попробуйте изменить запрос.</div>';
    return;
  }

  const waIconSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.875L.057 23.476a.5.5 0 0 0 .608.62l5.701-1.493A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.005-1.37l-.358-.214-3.724.975.994-3.625-.234-.373A9.776 9.776 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>`;

  const cartBagSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="15" height="15"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;

  grid.innerHTML = filtered.map((p, i) => {
    const cfg = catConfig[p.cat] || catConfig.other;
    const delay = (i % 8) * 50;
    const mainPrice = p.retailKzt
      ? p.retailKzt.toLocaleString('ru-RU') + ' ₸'
      : (p.retailUsd ? p.retailUsd + ' $' : p.priceUsd + ' $');
    const inCart = cart[p.id] || 0;
    const cartLabel = inCart ? `🛒 В корзине (${inCart})` : `🛒 В корзину`;
    const imgSrc = productImages[p.id];
    const imgHtml = imgSrc
      ? `<img src="images/${imgSrc}" alt="${p.brand}" class="product-img" loading="lazy" />`
      : `<div class="product-img-placeholder">${cfg.icon}</div>`;
    return `
      <div class="product-card card-${p.cat}" style="animation-delay:${delay}ms" onclick="openModal(${p.id})">
        <div class="product-img-wrap">
          ${imgHtml}
          <span class="product-cat-chip">${cfg.icon}</span>
        </div>
        <div class="product-card-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-price-retail">${mainPrice}</div>
          <button class="product-cart-btn ${inCart ? 'in-cart' : ''}" onclick="event.stopPropagation(); addToCart(${p.id})">
            ${cartLabel}
          </button>
          <button class="product-order" onclick="event.stopPropagation(); orderProduct('${escHtml(p.brand + ' ' + p.name)}')">
            ${waIconSvg}
            Заказать
          </button>
        </div>
      </div>`;
  }).join('');
}

function escHtml(s) { return s.replace(/['"]/g, ''); }

// ========== MODAL ==========
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const cfg = catConfig[p.cat] || catConfig.other;
  const retailPrice = p.retailKzt
    ? p.retailKzt.toLocaleString('ru-RU') + ' ₸'
    : (p.retailUsd ? p.retailUsd + ' $' : p.priceUsd + ' $');
  const inCart = cart[p.id] || 0;
  const waMsg = encodeURIComponent(`Здравствуйте! Хочу заказать: ${p.brand} ${p.name}`);
  const waIconSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.541 5.875L.057 23.476a.5.5 0 0 0 .608.62l5.701-1.493A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.005-1.37l-.358-.214-3.724.975.994-3.625-.234-.373A9.776 9.776 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>`;

  const mImgSrc = productImages[p.id];
  const mImgHtml = mImgSrc
    ? `<img src="images/${mImgSrc}" alt="${p.brand}" class="modal-product-img" />`
    : `<div class="modal-product-img-placeholder">${cfg.icon}</div>`;
  document.getElementById('modalContent').innerHTML = `
    ${mImgHtml}
    <div class="modal-brand">${p.brand}</div>
    <div class="modal-name">${p.name}</div>
    <div class="modal-barcode">Штрих-код: ${p.barcode}</div>
    <div class="modal-price-single">
      <span class="modal-price-label">Цена</span>
      <span class="modal-price-value">${retailPrice}</span>
    </div>
    <div class="modal-actions">
      <button class="modal-cart-btn ${inCart ? 'in-cart' : ''}" id="modalCartBtn" onclick="modalAddToCart(${p.id})">
        🛒 ${inCart ? `В корзине (${inCart} шт.)` : 'Добавить в корзину'}
      </button>
      <a href="https://wa.me/77778223071?text=${waMsg}" target="_blank" class="modal-order">
        ${waIconSvg} Заказать сейчас
      </a>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function modalAddToCart(id) {
  addToCart(id);
  const btn = document.getElementById('modalCartBtn');
  if (btn) {
    const qty = cart[id] || 0;
    btn.textContent = `🛒 В корзине (${qty} шт.)`;
    btn.classList.add('in-cart');
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function orderProduct(name) {
  const waMsg = encodeURIComponent(`Здравствуйте! Хочу заказать: ${name}`);
  window.open(`https://wa.me/77778223071?text=${waMsg}`, '_blank');
}

function filterCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  renderProducts();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// ========== SAKURA PETALS ==========
function createPetals() {
  const container = document.getElementById('sakuraContainer');
  const count = 18;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 10;
    const delay = Math.random() * 12;
    const size = 8 + Math.random() * 8;
    petal.style.cssText = `left:${left}%;width:${size}px;height:${size}px;animation-duration:${duration}s;animation-delay:${delay}s;opacity:${0.4 + Math.random() * 0.4}`;
    container.appendChild(petal);
  }
}

// ========== SCROLL PROGRESS ==========
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
  }, { passive: true });
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(ease * target);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter[data-target]').forEach(el => obs.observe(el));
}

// ========== 3D CARD TILT ==========
function initCardTilt() {
  let lastCard = null;
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.product-card');
    if (lastCard && lastCard !== card) { lastCard.style.transform = ''; lastCard = null; }
    if (!card) return;
    lastCard = card;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * 5;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * -5;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
  }, { passive: true });
  document.addEventListener('mouseleave', () => {
    if (lastCard) { lastCard.style.transform = ''; lastCard = null; }
  });
}

// ========== AOS ==========
function initAOS() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('aos-animate'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
}

// ========== HEADER SCROLL ==========
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ========== BURGER MENU ==========
function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => { nav.classList.remove('open'); burger.classList.remove('open'); });
  });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  createPetals();
  renderProducts();
  initScrollProgress();
  initCounters();
  initCardTilt();
  initAOS();
  initHeader();
  initBurger();
  initSmoothScroll();

  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => filterCat(btn.dataset.cat));
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
