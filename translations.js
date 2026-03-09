// ChartMind — Professional Legal Translations
// Supports 14 languages with auto-locale detection

const LEGAL_TRANSLATIONS = {
    privacy: {
        tr: {
            title: 'Gizlilik Politikası',
            notice: '🇹🇷 Yasal olarak bağlayıcı olan İngilizce metindir. Bu Türkçe çeviri yalnızca kolaylık sağlamak amacıyla sunulmuştur.',
            content: `
<h2>1. Giriş</h2>
<p>Space AI Labs ("Şirket", "biz") ChartMind mobil uygulamasını ve ilgili hizmetleri ("Hizmet") işletmektedir. Bu Gizlilik Politikası, Hizmeti kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.</p>

<h2>2. Topladığımız Bilgiler</h2>
<p><strong>Hesap Bilgileri:</strong> Google veya Apple ile giriş yaptığınızda adınız, e-posta adresiniz ve profil fotoğrafınız toplanır. Şifrelerinizi toplamıyor veya saklamıyoruz.</p>
<p><strong>Grafik Görselleri:</strong> Yüklediğiniz grafik görselleri AI analizi için işlenir ve <strong>24 saat içinde kalıcı olarak silinir</strong>. Görsellerinizi AI model eğitimi veya reklam için kullanmıyoruz.</p>
<p><strong>Cihaz ve Kullanım Verileri:</strong> Cihaz bilgileri, uygulama sürümü, kullanım analitiği ve performans verileri otomatik olarak toplanır.</p>
<p><strong>Kamera Erişimi:</strong> Kamera erişimi yalnızca grafik yakalama için kullanılır ve tamamen isteğe bağlıdır. Yüz tanıma veya biyometrik analiz için asla kullanılmaz.</p>
<p><strong>Ödeme Bilgileri:</strong> Kredi kartı bilgilerinizi toplamıyor veya saklamıyoruz. Tüm ödemeler Apple, Google ve RevenueCat tarafından işlenir.</p>

<h2>3. Bilgilerinizi Nasıl Kullanıyoruz</h2>
<p>Bilgilerinizi yalnızca hizmet sunumu, AI analizi, hesap yönetimi, bildirimler, analitik, güvenlik ve yasal uyumluluk için kullanıyoruz. Bilgilerinizi davranışsal reklam, kredi puanlama veya üçüncü taraflara satış için <strong>kullanmıyoruz</strong>.</p>

<h2>4. Üçüncü Taraf Hizmetleri</h2>
<p>AI analizi için OpenAI, Anthropic ve Google AI; altyapı için AWS ve Firebase; abonelik yönetimi için RevenueCat ile çalışıyoruz. Kişisel bilgilerinizi hiçbir üçüncü tarafa pazarlama veya ticari amaçlarla <strong>satmıyoruz veya kiralamıyoruz</strong>.</p>

<h2>5. Veri Güvenliği</h2>
<p>TLS 1.2+ ile aktarımda şifreleme, AES-256 ile depolamada şifreleme, rol tabanlı erişim kontrolleri ve sürekli güvenlik izleme uyguluyoruz.</p>

<h2>6. Veri Saklama</h2>
<p>Grafik görselleri: 24 saat içinde silinir. Analiz sonuçları: siz silene kadar saklanır. Hesap verileri: hesap silinmesinden sonra 30 gün içinde temizlenir.</p>

<h2>7. Haklarınız (KVKK / GDPR)</h2>
<p>Erişim, düzeltme, silme, veri taşınabilirliği, işleme itirazı ve onay geri çekme haklarınız bulunmaktadır. Türkiye'de KVKK kapsamında korunmaktasınız. Talepleriniz için: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>

<h2>8. Çocukların Gizliliği</h2>
<p>ChartMind 18 yaşın altındaki bireylere yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz.</p>

<h2>9. İletişim</h2>
<p>Gizlilik soruları için: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        de: {
            title: 'Datenschutzrichtlinie',
            notice: '🇩🇪 Der englische Text ist rechtlich bindend. Diese deutsche Übersetzung dient ausschließlich Ihrer Bequemlichkeit.',
            content: `
<h2>1. Einleitung</h2>
<p>Space AI Labs betreibt die ChartMind-App und zugehörige Dienste. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Daten erheben, verwenden und schützen.</p>
<h2>2. Erhobene Daten</h2>
<p><strong>Kontodaten:</strong> Name, E-Mail und Profilbild über Google/Apple. <strong>Chart-Bilder:</strong> Werden für AI-Analyse verarbeitet und <strong>innerhalb von 24 Stunden dauerhaft gelöscht</strong>. <strong>Zahlungsdaten:</strong> Wir speichern keine Kreditkartendaten.</p>
<h2>3. Verwendung</h2>
<p>Ausschließlich für Servicebereitstellung, AI-Analyse, Kontoverwaltung und Sicherheit. <strong>Kein Verkauf</strong> Ihrer Daten an Dritte.</p>
<h2>4. Ihre Rechte (DSGVO)</h2>
<p>Auskunft, Berichtigung, Löschung, Datenübertragbarkeit, Widerspruch und Einwilligung-Widerruf. Kontakt: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        fr: {
            title: 'Politique de Confidentialité',
            notice: '🇫🇷 Le texte anglais fait foi. Cette traduction française est fournie uniquement pour votre commodité.',
            content: `
<h2>1. Introduction</h2>
<p>Space AI Labs exploite l'application ChartMind. Cette politique explique comment nous collectons, utilisons et protégeons vos données.</p>
<h2>2. Données Collectées</h2>
<p><strong>Compte :</strong> Nom, e-mail via Google/Apple. <strong>Images de graphiques :</strong> Traitées par IA et <strong>supprimées définitivement sous 24h</strong>. <strong>Paiements :</strong> Aucune donnée de carte bancaire stockée.</p>
<h2>3. Utilisation</h2>
<p>Uniquement pour le service, l'analyse IA, la gestion de compte et la sécurité. <strong>Aucune vente</strong> de vos données à des tiers.</p>
<h2>4. Vos Droits (RGPD)</h2>
<p>Accès, rectification, suppression, portabilité, opposition. Contact : <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        es: {
            title: 'Política de Privacidad',
            notice: '🇪🇸 El texto en inglés es legalmente vinculante. Esta traducción al español se proporciona únicamente para su comodidad.',
            content: `
<h2>1. Introducción</h2>
<p>Space AI Labs opera la aplicación ChartMind. Esta política explica cómo recopilamos, usamos y protegemos sus datos.</p>
<h2>2. Datos Recopilados</h2>
<p><strong>Cuenta:</strong> Nombre, correo electrónico vía Google/Apple. <strong>Imágenes de gráficos:</strong> Procesadas por IA y <strong>eliminadas permanentemente en 24 horas</strong>. <strong>Pagos:</strong> No almacenamos datos de tarjetas de crédito.</p>
<h2>3. Uso</h2>
<p>Solo para servicio, análisis IA, gestión de cuenta y seguridad. <strong>No vendemos</strong> sus datos a terceros.</p>
<h2>4. Sus Derechos (RGPD)</h2>
<p>Acceso, rectificación, supresión, portabilidad y oposición. Contacto: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        pt: {
            title: 'Política de Privacidade',
            notice: '🇧🇷 O texto em inglês é juridicamente vinculativo. Esta tradução é fornecida apenas para conveniência.',
            content: `
<h2>1. Introdução</h2>
<p>A Space AI Labs opera o aplicativo ChartMind. Esta política explica como coletamos, usamos e protegemos seus dados.</p>
<h2>2. Dados Coletados</h2>
<p><strong>Conta:</strong> Nome, e-mail via Google/Apple. <strong>Imagens de gráficos:</strong> Processadas por IA e <strong>excluídas permanentemente em 24 horas</strong>. <strong>Pagamentos:</strong> Não armazenamos dados de cartão de crédito.</p>
<h2>3. Seus Direitos (LGPD)</h2>
<p>Acesso, correção, exclusão, portabilidade e oposição conforme a LGPD. Contato: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        it: {
            title: 'Informativa sulla Privacy',
            notice: '🇮🇹 Il testo inglese è giuridicamente vincolante. Questa traduzione italiana è fornita solo per comodità.',
            content: `
<h2>1. Introduzione</h2>
<p>Space AI Labs gestisce l\'app ChartMind. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i vostri dati.</p>
<h2>2. Dati Raccolti</h2>
<p><strong>Account:</strong> Nome, email tramite Google/Apple. <strong>Immagini dei grafici:</strong> Elaborate dall\'IA e <strong>cancellate permanentemente entro 24 ore</strong>. <strong>Pagamenti:</strong> Non memorizziamo dati delle carte di credito.</p>
<h2>3. I Vostri Diritti (GDPR)</h2>
<p>Accesso, rettifica, cancellazione, portabilità e opposizione. Contatto: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        nl: {
            title: 'Privacybeleid',
            notice: '🇳🇱 De Engelse tekst is juridisch bindend. Deze Nederlandse vertaling is uitsluitend voor uw gemak.',
            content: `
<h2>1. Inleiding</h2>
<p>Space AI Labs beheert de ChartMind-app. Dit beleid legt uit hoe wij uw gegevens verzamelen, gebruiken en beschermen.</p>
<h2>2. Verzamelde Gegevens</h2>
<p><strong>Account:</strong> Naam, e-mail via Google/Apple. <strong>Grafiekafbeeldingen:</strong> Verwerkt door AI en <strong>permanent verwijderd binnen 24 uur</strong>. <strong>Betalingen:</strong> Wij slaan geen creditcardgegevens op.</p>
<h2>3. Uw Rechten (AVG)</h2>
<p>Inzage, correctie, verwijdering, overdraagbaarheid en bezwaar. Contact: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        da: {
            title: 'Privatlivspolitik',
            notice: '🇩🇰 Den engelske tekst er juridisk bindende. Denne danske oversættelse er kun til orientering.',
            content: `
<h2>1. Indledning</h2>
<p>Space AI Labs driver ChartMind-appen. Denne politik forklarer, hvordan vi indsamler, bruger og beskytter dine data.</p>
<h2>2. Indsamlede Data</h2>
<p><strong>Konto:</strong> Navn, e-mail via Google/Apple. <strong>Diagrambilleder:</strong> Behandlet af AI og <strong>permanent slettet inden for 24 timer</strong>. <strong>Betalinger:</strong> Vi gemmer ingen kreditkortoplysninger.</p>
<h2>3. Dine Rettigheder (GDPR)</h2>
<p>Indsigt, berigtigelse, sletning, dataportabilitet og indsigelse. Kontakt: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        sv: {
            title: 'Integritetspolicy',
            notice: '🇸🇪 Den engelska texten är juridiskt bindande. Denna svenska översättning tillhandahålls endast för bekvämlighet.',
            content: `
<h2>1. Inledning</h2>
<p>Space AI Labs driver ChartMind-appen. Denna policy förklarar hur vi samlar in, använder och skyddar dina uppgifter.</p>
<h2>2. Insamlade Uppgifter</h2>
<p><strong>Konto:</strong> Namn, e-post via Google/Apple. <strong>Diagrambilder:</strong> Behandlade av AI och <strong>permanent raderade inom 24 timmar</strong>. <strong>Betalningar:</strong> Vi lagrar inga kreditkortsuppgifter.</p>
<h2>3. Dina Rättigheter (GDPR)</h2>
<p>Tillgång, rättelse, radering, dataportabilitet och invändning. Kontakt: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        ja: {
            title: 'プライバシーポリシー',
            notice: '🇯🇵 法的拘束力を持つのは英語版です。この日本語訳は参考用です。',
            content: `
<h2>1. はじめに</h2>
<p>Space AI LabsはChartMindアプリを運営しています。このポリシーはお客様のデータの収集、使用、保護について説明します。</p>
<h2>2. 収集するデータ</h2>
<p><strong>アカウント：</strong>Google/Apple経由の氏名、メールアドレス。<strong>チャート画像：</strong>AI分析のために処理され、<strong>24時間以内に完全に削除</strong>されます。<strong>決済：</strong>クレジットカード情報は保存しません。</p>
<h2>3. お客様の権利（APPI）</h2>
<p>アクセス、訂正、削除、データポータビリティ。お問い合わせ: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        ko: {
            title: '개인정보 처리방침',
            notice: '🇰🇷 법적 구속력이 있는 것은 영문 버전입니다. 이 한국어 번역은 편의를 위해 제공됩니다.',
            content: `
<h2>1. 소개</h2>
<p>Space AI Labs는 ChartMind 앱을 운영합니다. 이 방침은 귀하의 데이터 수집, 사용 및 보호에 대해 설명합니다.</p>
<h2>2. 수집하는 데이터</h2>
<p><strong>계정:</strong> Google/Apple을 통한 이름, 이메일. <strong>차트 이미지:</strong> AI 분석을 위해 처리되며 <strong>24시간 이내에 영구 삭제</strong>됩니다. <strong>결제:</strong> 신용카드 정보를 저장하지 않습니다.</p>
<h2>3. 귀하의 권리 (PIPA)</h2>
<p>접근, 정정, 삭제, 데이터 이동성 및 이의 제기. 연락처: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        zh: {
            title: '隐私政策',
            notice: '🇨🇳 具有法律约束力的是英文版本。此中文翻译仅供参考。',
            content: `
<h2>1. 简介</h2>
<p>Space AI Labs运营ChartMind应用。本政策说明我们如何收集、使用和保护您的数据。</p>
<h2>2. 收集的数据</h2>
<p><strong>账户：</strong>通过Google/Apple获取的姓名和电子邮件。<strong>图表图像：</strong>经AI处理后<strong>在24小时内永久删除</strong>。<strong>付款：</strong>我们不存储信用卡信息。</p>
<h2>3. 您的权利</h2>
<p>访问、更正、删除、数据可移植性和反对权。联系方式: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        ar: {
            title: 'سياسة الخصوصية',
            notice: '🇸🇦 النص الإنجليزي هو الملزم قانونياً. هذه الترجمة العربية مقدمة للتسهيل فقط.',
            content: `
<h2>1. المقدمة</h2>
<p>تدير Space AI Labs تطبيق ChartMind. توضح هذه السياسة كيف نجمع بياناتك ونستخدمها ونحميها.</p>
<h2>2. البيانات المجمعة</h2>
<p><strong>الحساب:</strong> الاسم والبريد الإلكتروني عبر Google/Apple. <strong>صور المخططات:</strong> تتم معالجتها بالذكاء الاصطناعي و<strong>حذفها نهائياً خلال 24 ساعة</strong>. <strong>المدفوعات:</strong> لا نخزن بيانات بطاقات الائتمان.</p>
<h2>3. حقوقك</h2>
<p>الوصول والتصحيح والحذف ونقل البيانات والاعتراض. التواصل: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        },
        ru: {
            title: 'Политика Конфиденциальности',
            notice: '🇷🇺 Юридически обязательным является текст на английском языке. Этот русский перевод предоставлен исключительно для удобства.',
            content: `
<h2>1. Введение</h2>
<p>Space AI Labs управляет приложением ChartMind. Эта политика объясняет, как мы собираем, используем и защищаем ваши данные.</p>
<h2>2. Собираемые Данные</h2>
<p><strong>Аккаунт:</strong> Имя, email через Google/Apple. <strong>Изображения графиков:</strong> Обрабатываются ИИ и <strong>безвозвратно удаляются в течение 24 часов</strong>. <strong>Платежи:</strong> Мы не храним данные кредитных карт.</p>
<h2>3. Ваши Права (GDPR)</h2>
<p>Доступ, исправление, удаление, переносимость данных и возражение. Контакт: <a href="mailto:privacy@spaceailabs.ai">privacy@spaceailabs.ai</a></p>`
        }
    },

    terms: {
        tr: {
            title: 'Kullanım Şartları',
            notice: '🇹🇷 Yasal olarak bağlayıcı olan İngilizce metindir. Bu Türkçe çeviri yalnızca kolaylık sağlamak amacıyla sunulmuştur.',
            content: `
<h2>⚠️ ÖNEMLİ UYARI</h2>
<p>ChartMind, <strong>YALNIZCA eğitim ve bilgilendirme amaçlı</strong> AI destekli grafik analizi sunar. Hizmet, yatırım tavsiyesi, alım-satım sinyali veya finansal danışmanlık <strong>DEĞİLDİR</strong>. Tüm yatırım kararları tamamen sizin sorumluluğunuzdadır. <strong>Kaybetmeyi göze alamayacağınız parayı asla yatırmayın.</strong></p>

<h2>1. Şartların Kabulü</h2>
<p>Bu Kullanım Şartları, siz ve Space AI Labs arasında yasal olarak bağlayıcı bir sözleşmedir. Hizmeti kullanarak bu şartları kabul etmiş olursunuz.</p>

<h2>2. Finansal Tavsiye Değildir</h2>
<p>ChartMind herhangi bir yargı alanında kayıtlı broker, dealer, yatırım danışmanı veya finansal hizmet kuruluşu <strong>DEĞİLDİR</strong>. AI tarafından üretilen tüm analizler otomatik örüntü tanıma sonuçlarıdır ve finansal tavsiye olarak yorumlanmamalıdır. Geçmiş AI tahminleri gelecekteki sonuçları garanti etmez.</p>

<h2>3. Risk Kabulü</h2>
<p>Hizmeti kullanarak piyasa riski, AI doğruluk riski, veri riski, teknik risk ve düzenleyici riskleri kabul etmiş olursunuz. HİZMETİ TAMAMEN KENDİ RİSKİNİZLE KULLANIYORSUNUZ.</p>

<h2>4. Sorumluluk Sınırlaması</h2>
<p>YÜRÜRLÜKTE OLAN YASALARIN İZİN VERDİĞİ AZAMİ ÖLÇÜDE: Space AI Labs, kar kaybı, gelir kaybı, veri kaybı, alım-satım kayıpları veya yatırım kayıpları dahil olmak üzere hiçbir dolaylı, arızi, özel veya sonuçsal zarardan sorumlu tutulamaz. Toplam sorumluluğumuz, olaydan önceki 12 ayda ödediğiniz toplam tutarı veya 100 ABD Dolarını aşamaz.</p>

<h2>5. Garanti Reddi</h2>
<p>Hizmet "OLDUĞU GİBİ" ve "MEVCUT OLDUĞU ŞEKİLDE" sunulmaktadır. Satılabilirlik, belirli bir amaca uygunluk ve ihlal etmeme dahil tüm garantiler reddedilmektedir.</p>

<h2>6. Tazminat</h2>
<p>Hizmeti kullanmanızdan, bu Şartları ihlal etmenizden veya Hizmet aracılığıyla elde edilen bilgilere dayanarak verdiğiniz yatırım kararlarından kaynaklanan tüm taleplere karşı Space AI Labs'ı savunmayı, tazmin etmeyi ve zarar görmemesini sağlamayı kabul edersiniz.</p>

<h2>7. Abonelik ve Ödemeler</h2>
<p>Premium abonelikler Apple App Store veya Google Play Store üzerinden faturalandırılır. İptal etmediğiniz sürece otomatik olarak yenilenir. İadeler Apple veya Google politikalarına göre işlenir.</p>

<h2>8. Uyuşmazlık Çözümü</h2>
<p>Uyuşmazlıklar önce <a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a> üzerinden gayri resmi olarak çözümlenmeye çalışılacaktır. Çözüme ulaşılamazsa bağlayıcı tahkim uygulanır. AB tüketicileri kendi ülkelerinin mahkemelerine başvurabilir.</p>

<h2>9. Uygulanacak Hukuk</h2>
<p>Bu Şartlar Türkiye Cumhuriyeti yasalarına tabidir. AB tüketicileri için bu madde, kendi üye devletlerinin mahkemelerine başvurma haklarını kısıtlamaz.</p>

<h2>10. İletişim</h2>
<p>Hukuki sorular için: <a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        de: {
            title: 'Nutzungsbedingungen',
            notice: '🇩🇪 Der englische Text ist rechtlich bindend. Diese deutsche Übersetzung dient ausschließlich Ihrer Bequemlichkeit.',
            content: `
<h2>⚠️ WICHTIGER HINWEIS</h2>
<p>ChartMind bietet KI-gestützte Chartanalyse <strong>AUSSCHLIESSLICH zu Bildungs- und Informationszwecken</strong>. Der Dienst stellt <strong>KEINE</strong> Finanzberatung oder Handelsempfehlung dar.</p>
<h2>1. Keine Finanzberatung</h2>
<p>ChartMind ist kein registrierter Broker oder Finanzberater. Alle KI-Analysen sind automatische Mustererkennung und keine Anlageberatung. Vergangene Vorhersagen garantieren keine zukünftigen Ergebnisse.</p>
<h2>2. Haftungsbeschränkung</h2>
<p>Space AI Labs haftet in keinem Fall für indirekte, zufällige oder Folgeschäden, einschließlich Handels- oder Investitionsverluste. Unsere Gesamthaftung ist auf 100 USD begrenzt.</p>
<h2>3. Gewährleistungsausschluss</h2>
<p>Der Dienst wird "WIE BESEHEN" bereitgestellt, ohne jegliche Gewährleistung.</p>
<h2>4. EU-Verbraucherrechte</h2>
<p>Als EU-Verbraucher haben Sie gesetzliche Rechte, die durch diese Bedingungen nicht eingeschränkt werden. Kontakt: <a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        fr: {
            title: 'Conditions d\'Utilisation',
            notice: '🇫🇷 Le texte anglais fait foi. Cette traduction française est fournie uniquement pour votre commodité.',
            content: `
<h2>⚠️ AVIS IMPORTANT</h2>
<p>ChartMind fournit une analyse de graphiques par IA <strong>UNIQUEMENT à des fins éducatives et informatives</strong>. Le Service ne constitue <strong>PAS</strong> un conseil financier.</p>
<h2>1. Pas de Conseil Financier</h2>
<p>ChartMind n'est pas un courtier ou conseiller financier enregistré. Toutes les analyses IA sont de la reconnaissance automatique de motifs et ne constituent pas des conseils d'investissement.</p>
<h2>2. Limitation de Responsabilité</h2>
<p>Space AI Labs ne saurait être tenu responsable de dommages indirects, y compris les pertes de trading ou d'investissement. Notre responsabilité totale est limitée à 100 USD.</p>
<h2>3. Droits des Consommateurs UE</h2>
<p>En tant que consommateur UE, vos droits statutaires ne sont pas affectés. Contact : <a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        es: {
            title: 'Términos de Servicio',
            notice: '🇪🇸 El texto en inglés es legalmente vinculante. Esta traducción al español se proporciona únicamente para su comodidad.',
            content: `
<h2>⚠️ AVISO IMPORTANTE</h2>
<p>ChartMind proporciona análisis de gráficos con IA <strong>SOLO con fines educativos e informativos</strong>. El Servicio <strong>NO</strong> constituye asesoramiento financiero.</p>
<h2>1. Sin Asesoramiento Financiero</h2>
<p>ChartMind no es un corredor o asesor financiero registrado. Todos los análisis de IA son reconocimiento automático de patrones y no constituyen asesoramiento de inversión.</p>
<h2>2. Limitación de Responsabilidad</h2>
<p>Space AI Labs no será responsable de daños indirectos, incluidas pérdidas comerciales o de inversión. Nuestra responsabilidad total está limitada a 100 USD.</p>
<h2>3. Contacto</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        pt: {
            title: 'Termos de Serviço',
            notice: '🇧🇷 O texto em inglês é juridicamente vinculativo. Esta tradução é fornecida apenas para conveniência.',
            content: `
<h2>⚠️ AVISO IMPORTANTE</h2>
<p>O ChartMind fornece análise de gráficos por IA <strong>APENAS para fins educacionais e informativos</strong>. O Serviço <strong>NÃO</strong> constitui aconselhamento financeiro.</p>
<h2>1. Sem Aconselhamento Financeiro</h2>
<p>ChartMind não é um corretor ou consultor financeiro registrado. Todas as análises de IA são reconhecimento automático de padrões.</p>
<h2>2. Limitação de Responsabilidade</h2>
<p>A Space AI Labs não será responsável por danos indiretos, incluindo perdas comerciais ou de investimento. Nossa responsabilidade total é limitada a 100 USD.</p>
<h2>3. Seus Direitos (LGPD)</h2>
<p>Como consumidor brasileiro, seus direitos sob a LGPD são preservados. Contato: <a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        it: {
            title: 'Termini di Servizio',
            notice: '🇮🇹 Il testo inglese è giuridicamente vincolante. Questa traduzione italiana è fornita solo per comodità.',
            content: `
<h2>⚠️ AVVISO IMPORTANTE</h2>
<p>ChartMind fornisce analisi dei grafici basata sull\'IA <strong>SOLO a scopo educativo e informativo</strong>. Il Servizio <strong>NON</strong> costituisce consulenza finanziaria.</p>
<h2>1. Nessuna Consulenza Finanziaria</h2>
<p>ChartMind non è un broker o consulente finanziario registrato. Tutte le analisi IA sono riconoscimento automatico di pattern.</p>
<h2>2. Limitazione di Responsabilità</h2>
<p>Space AI Labs non sarà responsabile per danni indiretti, incluse perdite di trading o investimento. La nostra responsabilità totale è limitata a 100 USD.</p>
<h2>3. Contatto</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        nl: {
            title: 'Gebruiksvoorwaarden',
            notice: '🇳🇱 De Engelse tekst is juridisch bindend. Deze Nederlandse vertaling is uitsluitend voor uw gemak.',
            content: `
<h2>⚠️ BELANGRIJKE MEDEDELING</h2>
<p>ChartMind biedt AI-gestuurde grafiekanalyse <strong>UITSLUITEND voor educatieve en informatieve doeleinden</strong>. De Dienst vormt <strong>GEEN</strong> financieel advies.</p>
<h2>1. Geen Financieel Advies</h2>
<p>ChartMind is geen geregistreerde broker of financieel adviseur. Alle AI-analyses zijn automatische patroonherkenning.</p>
<h2>2. Beperking van Aansprakelijkheid</h2>
<p>Space AI Labs is niet aansprakelijk voor indirecte schade, inclusief handels- of beleggingsverliezen. Onze totale aansprakelijkheid is beperkt tot 100 USD.</p>
<h2>3. Contact</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        da: {
            title: 'Servicevilkår',
            notice: '🇩🇰 Den engelske tekst er juridisk bindende. Denne danske oversættelse er kun til orientering.',
            content: `
<h2>⚠️ VIGTIG MEDDELELSE</h2>
<p>ChartMind tilbyder AI-drevet diagramanalyse <strong>KUN til uddannelses- og informationsformål</strong>. Tjenesten udgør <strong>IKKE</strong> finansiel rådgivning.</p>
<h2>1. Ingen Finansiel Rådgivning</h2>
<p>ChartMind er ikke en registreret mægler eller finansiel rådgiver. Alle AI-analyser er automatisk mønstergenkendelse.</p>
<h2>2. Ansvarsbegrænsning</h2>
<p>Space AI Labs er ikke ansvarlig for indirekte skader, herunder handels- eller investeringstab. Vores samlede ansvar er begrænset til 100 USD.</p>
<h2>3. Kontakt</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        sv: {
            title: 'Användarvillkor',
            notice: '🇸🇪 Den engelska texten är juridiskt bindande. Denna svenska översättning tillhandahålls endast för bekvämlighet.',
            content: `
<h2>⚠️ VIKTIGT MEDDELANDE</h2>
<p>ChartMind erbjuder AI-driven diagramanalys <strong>ENBART i utbildnings- och informationssyfte</strong>. Tjänsten utgör <strong>INTE</strong> finansiell rådgivning.</p>
<h2>1. Ingen Finansiell Rådgivning</h2>
<p>ChartMind är inte en registrerad mäklare eller finansiell rådgivare.</p>
<h2>2. Ansvarsbegränsning</h2>
<p>Space AI Labs ansvarar inte för indirekta skador, inklusive handels- eller investeringsförluster. Vårt totala ansvar är begränsat till 100 USD.</p>
<h2>3. Kontakt</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        ja: {
            title: '利用規約',
            notice: '🇯🇵 法的拘束力を持つのは英語版です。この日本語訳は参考用です。',
            content: `
<h2>⚠️ 重要なお知らせ</h2>
<p>ChartMindはAIチャート分析を<strong>教育および情報提供目的のみ</strong>で提供しています。本サービスは金融アドバイスでは<strong>ありません</strong>。</p>
<h2>1. 金融アドバイスではありません</h2>
<p>ChartMindは登録ブローカーまたは金融アドバイザーではありません。すべてのAI分析は自動パターン認識です。</p>
<h2>2. 責任の制限</h2>
<p>Space AI Labsは、取引損失や投資損失を含む間接的な損害に対して責任を負いません。総責任額は100米ドルに制限されます。</p>
<h2>3. お問い合わせ</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        ko: {
            title: '이용약관',
            notice: '🇰🇷 법적 구속력이 있는 것은 영문 버전입니다. 이 한국어 번역은 편의를 위해 제공됩니다.',
            content: `
<h2>⚠️ 중요 공지</h2>
<p>ChartMind는 <strong>교육 및 정보 제공 목적으로만</strong> AI 차트 분석을 제공합니다. 본 서비스는 금융 조언이 <strong>아닙니다</strong>.</p>
<h2>1. 금융 조언이 아닙니다</h2>
<p>ChartMind는 등록된 브로커 또는 재정 고문이 아닙니다. 모든 AI 분석은 자동 패턴 인식입니다.</p>
<h2>2. 책임 제한</h2>
<p>Space AI Labs는 거래 손실이나 투자 손실을 포함한 간접적 손해에 대해 책임지지 않습니다. 총 책임액은 100 USD로 제한됩니다.</p>
<h2>3. 연락처</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        zh: {
            title: '服务条款',
            notice: '🇨🇳 具有法律约束力的是英文版本。此中文翻译仅供参考。',
            content: `
<h2>⚠️ 重要通知</h2>
<p>ChartMind提供AI图表分析<strong>仅用于教育和信息目的</strong>。本服务<strong>不</strong>构成财务建议。</p>
<h2>1. 非财务建议</h2>
<p>ChartMind不是注册经纪商或财务顾问。所有AI分析均为自动模式识别。</p>
<h2>2. 责任限制</h2>
<p>Space AI Labs不对间接损害承担责任，包括交易或投资损失。总责任限额为100美元。</p>
<h2>3. 联系方式</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        ar: {
            title: 'شروط الخدمة',
            notice: '🇸🇦 النص الإنجليزي هو الملزم قانونياً. هذه الترجمة العربية مقدمة للتسهيل فقط.',
            content: `
<h2>⚠️ إشعار هام</h2>
<p>يقدم ChartMind تحليل الرسوم البيانية بالذكاء الاصطناعي <strong>لأغراض تعليمية وإعلامية فقط</strong>. الخدمة <strong>لا</strong> تشكل نصيحة مالية.</p>
<h2>1. ليست نصيحة مالية</h2>
<p>ChartMind ليس وسيطاً أو مستشاراً مالياً مسجلاً. جميع تحليلات الذكاء الاصطناعي هي التعرف التلقائي على الأنماط.</p>
<h2>2. تحديد المسؤولية</h2>
<p>لن تكون Space AI Labs مسؤولة عن الأضرار غير المباشرة، بما في ذلك خسائر التداول أو الاستثمار. إجمالي مسؤوليتنا محدود بـ 100 دولار أمريكي.</p>
<h2>3. اتصل بنا</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        },
        ru: {
            title: 'Условия Использования',
            notice: '🇷🇺 Юридически обязательным является текст на английском языке. Этот русский перевод предоставлен исключительно для удобства.',
            content: `
<h2>⚠️ ВАЖНОЕ УВЕДОМЛЕНИЕ</h2>
<p>ChartMind предоставляет ИИ-анализ графиков <strong>ИСКЛЮЧИТЕЛЬНО в образовательных и информационных целях</strong>. Сервис <strong>НЕ</strong> является финансовой консультацией.</p>
<h2>1. Не Финансовая Консультация</h2>
<p>ChartMind не является зарегистрированным брокером или финансовым консультантом. Все ИИ-анализы являются автоматическим распознаванием паттернов.</p>
<h2>2. Ограничение Ответственности</h2>
<p>Space AI Labs не несёт ответственности за косвенный ущерб, включая торговые или инвестиционные убытки. Общая ответственность ограничена 100 долларами США.</p>
<h2>3. Контакт</h2>
<p><a href="mailto:legal@spaceailabs.ai">legal@spaceailabs.ai</a></p>`
        }
    }
};

// ═══════════════════════════════════════════════════
// LANGUAGE METADATA
// ═══════════════════════════════════════════════════
const LANG_META = {
    tr: { flag: '🇹🇷', name: 'Türkçe' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
    fr: { flag: '🇫🇷', name: 'Français' },
    es: { flag: '🇪🇸', name: 'Español' },
    pt: { flag: '🇧🇷', name: 'Português' },
    it: { flag: '🇮🇹', name: 'Italiano' },
    nl: { flag: '🇳🇱', name: 'Nederlands' },
    da: { flag: '🇩🇰', name: 'Dansk' },
    sv: { flag: '🇸🇪', name: 'Svenska' },
    ja: { flag: '🇯🇵', name: '日本語' },
    ko: { flag: '🇰🇷', name: '한국어' },
    zh: { flag: '🇨🇳', name: '中文' },
    ar: { flag: '🇸🇦', name: 'العربية', rtl: true },
    ru: { flag: '🇷🇺', name: 'Русский' }
};

// ═══════════════════════════════════════════════════
// LOCALE DETECTION
// ═══════════════════════════════════════════════════
function detectLocale() {
    // 1. Check URL parameter (?lang=tr)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && LANG_META[urlLang]) return urlLang;

    // 2. Check browser locale
    const browserLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
    if (LANG_META[browserLang]) return browserLang;

    // 3. Default: no translation (English only)
    return null;
}

// ═══════════════════════════════════════════════════
// RENDERING
// ═══════════════════════════════════════════════════
function renderLanguageSelector(legalType, activeLang) {
    const container = document.getElementById('language-selector');
    if (!container) return;

    let html = '<div class="lang-selector"><span class="lang-label">🌐 Translation:</span>';
    for (const [code, meta] of Object.entries(LANG_META)) {
        if (LEGAL_TRANSLATIONS[legalType] && LEGAL_TRANSLATIONS[legalType][code]) {
            const isActive = code === activeLang ? ' active' : '';
            html += `<a href="?lang=${code}" class="lang-btn${isActive}">${meta.flag} ${meta.name}</a>`;
        }
    }
    html += '</div>';
    container.innerHTML = html;
}

function renderTranslation(legalType, lang) {
    const container = document.getElementById('translated-content');
    if (!container || !lang) return;

    const translations = LEGAL_TRANSLATIONS[legalType];
    if (!translations || !translations[lang]) return;

    const t = translations[lang];
    const meta = LANG_META[lang];
    const dir = meta.rtl ? ' dir="rtl"' : '';

    container.innerHTML = `
    <div class="translation-block"${dir}>
      <div class="translation-notice">${t.notice}</div>
      <h1>${t.title}</h1>
      ${t.content}
    </div>
  `;
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const legalType = body.getAttribute('data-legal-type');
    if (!legalType) return;

    const locale = detectLocale();
    renderLanguageSelector(legalType, locale);
    renderTranslation(legalType, locale);
});
