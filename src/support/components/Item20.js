import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../themeStyle.css';
import SupportCheckBox from './SupportCheckBox.js';
import SupportRedCheckBox from './SupportRedCheckBox.js';
import TimeCounter from './TimeCounter.js';

const useAccordionStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

function Item20() {

    const accordionClasses = useAccordionStyles();

    return (

        <div className={accordionClasses.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={accordionClasses.heading}>1) Kapak Dosyası (Opsiyonel) | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Kapak dosyasının indirilmesi" /></li>
                        <ul>
                            <li>Turquality sisteminde ilgili <b>ARAMA</b> düğmesine basılır. Ardından <b>HARCAMA DOSYASI</b> düğmesine basılır. Açılan ekranda <b>HARCAMA DOSYA NO</b> seçilir ve <b>ARA</b> bölümüne “Harcama Dosya No” yazılarak ilgili harcama dosyasını numarasını içeren başvuru bulunur.</li>
                            <li>Bu başvuru satırına çift tıklanarak içine girilir. <b>KAPAĞI BASTIR</b> üzerinde sağ tık ile tıklanıp <b>YENİ SEKMEDE AÇ</b> seçeneği seçilir ve masaüstüne ilgil ibaşvuru için açılmış olan klasöre .pdf olarak kapak dosyası kaydedilir.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Kapak dosyasındaki bilgilerin kontrol edilmesi" /></li>
                        <ul>
                            <li>Tarihler tutuyor mu? (eğer uymuyorsa biz manuel olarak değiştiriyoruz)</li>
                            <li>Evrak giriş sayısı ile harcama dosya no tutuyor mu? (eğer uymuyorsa biz manuel olarak değiştiriyoruz)</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={accordionClasses.heading}>2) Ret Bildirimi İçin Kontroller | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Başvuru destek BAŞVURU SON TARİHİnden önce mi yapılmış?" /></li>
                        <ul>
                            <li>Ödeme belgesi tarihinden itibaren en geç 6 (altı) ay içerisinde; fuar katılım başvurularında ise desteğe konu faaliyetin sona erdiği tarihten itibaren 3 (üç) ay içerisinde. Firmanın 6 ay içinde başvuru yapması kapsamında dikkat edeceği tarihte <b>ÖDEME BELGESİ TARİHLERİ</b> kullanılıyor. Bu son tarihlerde aylık gidiliyor yani 180 gün hesabı değil. 6 ay sonraki aynı gün son işlem yapılacak gün.</li>
                            <li><img src={require('../images/exclamation_mark.png')} /><b>TİCARET MÜŞAVİRİNİN MÜNHAL OLMASI</b> durumunda özel bir durum oluştuğu için bu başvuru süresinde farklılık oluşabilir. Bu durumda destek başvurusu tarihi ilgili evrakların Ticaret Müşavirliği evraklarına girdiği tarih olarak kabul edilir. Bu nedenle Müşavirlikten veya Bakanlıktan kadronun münhalliğini ve hangi tarihlerde münhal olduğunun yazılı olarak öğrenilmesi gerekir.</li>
                        </ul>
                        <li>Karar, Genelge ve Ek-6'da belirtilen <b>ZORUNLU BELGELER</b> tam mı?</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Ödeme Belgesi</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Fatura, Sözleşme, Ödeme belgesi yurt dışında hazırlanmışsa Ticaret Müşavir onayı var mı?" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Ödeme belgesi/banka dekontunda banka imza/kaşesi var mı?" /></li>
                        <ul>
                            <li>Yurt dışı belgelerinde Ticaret Müşaviri onayı yeterli</li>
                        </ul>

                        <br></br>
                        <p>Not: Ret işlemi yapılmadan önce konuyla ilgili Şube Şefi'ne bilgi e-mail'i gönderilerek hangi harcamanın neden reddedileceğine dair bilgi verilerek ret işleminin uygun olup/olmadığı sorulur. Bazı özel kurullar ve güncel istisnalar olabildiğinden bazı durumlarda ret işlemi yapılmayabilir. Örnek: Sistemde 6 aylık başvuru süresi geçmiş olmasına rağmen Bakanlık tarafından pandemi sebebiyle başvuru süresinin yazılı talimatla uzatılmış olması sonucu bu harcamalar reddedilmeyebiliyor.</p>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography className={accordionClasses.heading}>3) Fatura Ekranı | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Fatura ve eklerinin indirilmesi" /></li>
                        <ul>
                            <li>Sistemde ilgili başvuru satırına çift tıklanınca açılan ekranda <b>FATURA DETAYLARI</b> tıklanır.</li>
                            <li>Alt kısımda EKLİ bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                            <li>Kira faturası <b>ZORUNLU BELGE DEĞİLDİR</b></li>
                        </ul>
                        <h4>Faturadaki Bilgilerin Kontrol Edilmesi</h4>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Fatura <b>E-FATURA</b> ise <b>XML</b> dosyası ekli mi? XML'deki bilgiler ile fatura uyumlu mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Fatura <b>BELGE NO</b> ile Invoice no tutuyor mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FATURA TARİHİ </b>tutuyor mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FİRMA UNVANI </b>tutuyor mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FATURA PARA BİRİMİ</b> tutuyor mu??</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>KDV TUTARI</b> yazılmış mı?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Faturanın <b>DÜZENLENDİĞİ ÜLKE</b> kontrol </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Fatura üzerinde <b>KAŞE ve İMZA</b> var mı?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Fatura <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse tercümesi ekli mi? </li>
                            <ul>
                                <li>Aylık/periyodik faturalarda eğer şablon ve açıklamalar aynı ise, sadece bir faturanın tercümesinin yaptırılması ve bunun sisteme eklenmesi yeterlidir. Eski tarihli de olsa bu tercüme uygun kabul ediliyor.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Kira ödemesini <b>SATIŞ HASILATI GİBİ DEĞİŞKEN BİR TUTAR</b> ya da değer üzerinden gerçekleştiren yararlanıcılar için, Kira dönemine ilişkin satış hasılatını veya kiranın belirlenmesine esas teşkil eden değeri tevsik etmek üzere faaliyette bulunulan ülkenin vergi idaresi veya sorumlu kamu kurumu ya da bağımsız denetim kuruluşunca onaylanmış belge</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Fatura <b>TEVKİFATLI</b> olarak mı hazırlanmış? Tevkifaylıysa başvurunun Ek-6 belgesinin 16. maddesine uygunluğu kontrol edilir.</li>
                            <ul>
                                <li>Bu tür faturalarda firma eğer tevkifatı ödememiş, sadece fatura ve ilgili KDV tutarını ödemişse, sanki tevkifat yokmuş gibi normal tek harcama ile işlemi ilerletebiliyoruz (Örnek: Çelebi'nin Itelligence Bilişim ödemeleri). Burada KDV oranı ilgili tevkifat oranınca yazılabiliyor (Örnek: %50 tevkifat için %9 KDV oranı).</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Firmanın yurtdışı firmaları ile organik bağının olduğu <b>ONAYLI</b> mı? Bu onayı Bakanlık veriyor. Biz sadece Bakanlık onayı var mı yok mu kontrol ediyoruz. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Yurt dışında yapılmış olan veya Yabancı firmalar ile yapılmış olan tüm fatura ve eklerinde <b>TİCARET MÜŞAVİRLİĞİ ONAY DAMGASI</b> olmalı.</li>
                            <ul>
                                <li>Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. Belgenin fotokopisi üzerinde işlem yapılması halinde, belgenin aslı görüldükten sonra onay işlemi yapılır.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Yurt içinde yerleşik bir firma <b>DÖVİZ CİNSİNDEN</b> fatura mı kesmiş?.</li>
                            <ul>
                                <li>2018 yılından sonra yürürlüğe giren mevzuat ile yurt içindeki firmalar belirli istisnalar dışında Türk Lirası ile fatura kesmek zorundalar. Bunlardan biri sağlanan hizmetin yurt dışı menşeli bir hizmet olması (Örnek : SAP). Eğer yerli bir firma döviz ile fatura kesiyorsa sağlanan danışmanlık hizmetinin <b>YURT DIŞI MENŞELİ</b> olduğunu belirten kaşeli-imzalı <b>TAAHHÜTNAME</b> sisteme eklenmiş olmalıdır.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FATURA NET TUTARI</b> ve <b>BRÜT TUTARI</b> tutuyor mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Onaylanan bir harcama belgesine, harcamanın rayiç tutarının, faturada belirtilen tutardan daha düşük bir tutar olduğunun belirtilmesi halinde harcama, rayice aykırı kabul edilir ve destek kapsamına değerlendirilmez. Örnek: 10.000 (on bin) ABD doları tutarındaki bir faturanın rayicinin 8.000 (sekiz bin) ABD doları olduğu belirtilerek Müşavir tarafından onaylanması halinde başvuru reddedilir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>HARCAMA GİRİŞİ EKRANINDA EKLİ KISMINDA</b> faturaya ilişkin belegeler bulunabiliyor. Bu kısmı kontrol et.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Faturanın onaylanması" /></li>
                        <ul>
                            <li>Her bilgi tutuyorsa üst kısımda yer alan <b>ONAY BEKLİYOR</b> ifadesi <b>ONAYLA</b>’ya çevrilir. Yine aşağıdaki kısımda yer alan her bir belge için <b>ONAYLA</b> seçeneği seçilir. Eğer eksik varsa bu kısımda herhangi birşey seçilmemesi öneriliyor. Belge hatalıysa reddediyor yapılabilir.</li>
                            <li>Alt kısımda <b>EKLİ</b> bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header">
                    <Typography className={accordionClasses.heading}>4) Sözleşme Ekranı | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Sözleşme ve eklerinin indirilmesi" /></li>
                        <ul>
                            <li>Sistemde ilgili başvuru satırına çift tıklanınca açılan ekranda <b>SÖZLEŞME DETAYLARI</b> tıklanır. </li>
                            <li>Alt kısımda <b>EKLİ</b> bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                        </ul>
                        <h4>Sözleşmedeki Bilgilerin Kontrol Edilmesi</h4>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>SÖZLEŞME BEYANLARI</b> bölümünden ilgili sözleşmeye bağlı kaç harcama başvurusu yapıldığı kontrol edilir. Eğer birden fazla harcama aynı sözleşmeye bağlı ise bunların sıra halinde kontrol edilip ortak olarak tek bir klasör ile çıkarılması gerekir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme <b>VERSİYON NUMARASI</b> kontrol edilir. </li>
                            <ul>
                                <li>Versiyon imzalanan bir sözleşmede yapılan her değişikliktir. Genelde yılda bir tutarlarda değişiklik oalcağı için versiyonlarda bu yılda bir değişir. Sözleşme ile ilgili verisyonları Arama > Sözleşme > Ana Sözleşme No alananı sözleşme ekranında bulunan "Ana Sözleşme No" yazılarak ulaşılabilir. Firmanın sözlşeme tarihi eski tarihli ise ve sözleşmede uzatım süresi ve yeni hizmet bedeli ile ilgili açıklayıcı bir ifade yoksa firmadan ek protokol veya açıklama yazısı talep edilir. Yani sözleşme/ek protokolün tarihlerinin ve tutarlarının hizmet alınan dönem tarihleri ile uyuşması gerekmektedir. </li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FİRMA UNVANLARI</b> kontrol edilir.</li>
                            <ul>
                                <li><img src={require('../images/exclamation_mark.png')} />Sözleşme, Fatura ve Ödeme belgesindeki firma unvanlarının birbirini tutması gerekir. Sözleşme, Fatura ve Ödeme belgesinin <b>AYNI GRUP ALTINDA</b>farklı tüzel kişiliğe sahip iştirakler adına olması durumunda bu iştiraklerin birbirleri ile bağını belirten bir yazının yararlanıcı tarafından ilgili iştiraklerden temin edilerek sisteme yüklenmesi gerekir.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DESTEK TÜRÜ</b> ve <b>ALT DESTEK TÜRÜ</b> tanımlı olması lazım sistemde. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Yurt dışında yapılmış olan veya Yabancı firmalar ile yapılmış olan sözleşme ile ilgili tüm belgelerde <b>TİCARET MÜŞAVİRLİĞİ ONAY DAMGASI</b> olmalı.</li>
                            <ul>
                                <li>Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. Belgenin fotokopisi üzerinde işlem yapılması halinde, belgenin aslı görüldükten sonra onay işlemi yapılır.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme tutarını yıllık olarak hesaplayıp (Ek-12 belgesinden ve Excel ÇalışmaTablosu’ndan yardım alınabilir) sistemde ilgili yere yazıyoruz.</li>
                            <ul>
                                <li>Eğer tutar hesaplanamayacak şekildeyse (Yani ne kadar hizmet alınacağı belli değil ise) firmanın sisteme girmiş olduğu tahmini sözleşme tutarını buraya yazabiliriz. Kiralanan şirket bilgisi,m2, adres, türü v.b. bilgiler Ek-12 belgesinden alınabiliyor.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme ekranındaki ekranında <b>UYGUN GÖRÜLEN BEDEL (Brüt) ve KDV DAHİL UYGUN GÖRÜLEN SÖZLEŞME (Brüt)</b> alanlarını biz dolduruyoruz. Firma diğer yerleri dolduruyor. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>ÖDEME PARA BİRİMİ</b> kontrol. Çok Önemli </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşmenin <b>ÖNEMLİ BÖLÜMLERİNİN</b> tercümesi </li>
                            <ul>
                                <li>Kira kontratı ile aylık/yıllık kira tutarı/kira oranı, birim adresi, kiralanan alanın metrekaresi gibi önemli bilgilerin yer aldığı bölümlerinin tercümesi. zorunlu belgelerden olan “sözleşme” kira sözleşmesini ifade etmektedir. Kiralanan birime ilişkin yapılan konsept mimari çalışma, kurulum/dekorasyon/teknik donanım, belediye giderleri, uygun mahal araştırması, hukuki danışmanlık giderleri ve komisyon harcamaları için sözleşme zorunlu belge hükmünde değildir.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin; Distribütör ile hizmet alınan taraf arasındaki sözleşme </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin; Distribütör ile <b>YARARLANICI veya HARCAMA YETKİSİ VERİLEN ŞİRKET</b> arasındaki sözleşme </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sisteme <b>EK-12 BELGESİ</b>ni biz ekliyoruz. Firma değil. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>EK-12 BELGESİNDEKİ MARKA İSİMLERİ</b> sistemdeki marka isimleri ile tutmak zorunda. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><img src={require('../images/exclamation_mark.png')} />Fatura tutarı ile sözleşmede yazılan hizmet tutarı arasında ilişki kurulabilmeli. Eğer bu ilişki kurulamıyorsa veya sözleşmedeki ifadeler karışıksa firma yetkilisinden ayrıntılı açıklama istenmeli.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><img src={require('../images/exclamation_mark.png')} />Sözleşmenin konusu harcama türüne ve alınan hizmet ile uyumlu mu? Eğer uyumluluk kurulamıyorsa firmadan açıklayıcı yazı istenebilir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><img src={require('../images/exclamation_mark.png')} />Sözleşmenin destek/alt destek türü ile Harcama Girişi Ekranındaki sözleşme destek/alt destek türü uyumlu mu?</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />İç yazı alanında şubeiçi hesaplama açıklama yazılıyor. </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>SÖZLEŞME İMZA, BAŞLANGIÇ ve BİTİŞ TARİHİ</b> kontrol.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme her iki tarafça <b>İMZALI ve KAŞELİ</b> olmalıdır</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Sözleşme <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse tercümesi ekli mi? (İngilizce ise de tercğme iste her durumda) </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Yurtiçi sözleşmelerde eğer damga vergisi yararlanıcı firma ödeyecekse <b>DAMGA VERGİSİ</b> ödenmiş mi diye kontrol ediyoruz? Sözleşmenin en alt kısmında "Damga Vergisi ödencektir" diye bir ifade varsa bu da uygundur. Ödenmemişse ödendiğine dair <b>ÖDEME DEKONTU</b>'nun sisteme yüklenmesi gerekir. Eğer damga vergisi karşı taraf ödüyorsa sorun yok.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>HARCAMA GİRİŞİ EKRANINDA EKLİ KISMINDA</b> sözleşmeye ilişkin belegeler bulunabiliyor. Bu kısmı kontrol et.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><img src={require('../images/exclamation_mark.png')} />Sözleşme kapsamında hizmet alan iştiraklerin listesi yer alıyorsa ve bu iştiraklerden bazıları Bakanlık tarafından <b>REDDEDİLMİŞ</b> ise toplam iştirak sayısı içinde onaylı iştirakler oranınca "Destek Tutarı" belirlenir.</li>
                            <ul>
                                <li>Eğer böyle bir durum tespit edersen bunu mutlaka not al. HArcama Girişi ekranında yanlış yapmaman çok önemli.</li>
                                <li>Eğer sözleşmede diğer iştiraklerden bahsetmiyorsa bu sözleşme kapsamında hizmeti sadece sözleşmeye taraf olan yararlanıcı veya harcama yetkisi verilen firma alıyor diye düşünülmelidir. Bu durumda ilave olarak hangi iştiraklerin hizmetlerden faydalandığına dair bir yazı talep edilmesine gerek yoktur.</li>
                            </ul>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Sözleşmesnin onaylanması" /></li>
                        <ul>
                            <li>Her şey uygunsa aşağıdaki belgeler <b>ONAYLI</b> yapılır. Sağ üst kısım <b>SÖZLEŞME STATÜSÜ</b> onaylı yapılır. Ve en üstte <b>KAYDET</b> düğmesine basılır.</li>
                            <li>Alt kısımda <b>EKLİ</b> bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header">
                    <Typography className={accordionClasses.heading}>5) Ödeme Belgesi Ekranı | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Ödeme belgesi ve eklerinin indirilmesi" /></li>
                        <ul>
                            <li>Sistemde ilgili başvuru satırına çift tıklanınca açılan ekranda <b>ÖDEME BELGESİ DETAYLARI</b> tıklanır. </li>
                            <li>Alt kısımda <b>EKLİ</b> bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                        </ul>
                        <h4>Ödeme Belgesindeki Bilgilerin Kontrol Edilmesi</h4>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Yurt dışında yapılmış olan ödeme belgesi ve tüm eklerinde <b>TİCARET MÜŞAVİRLİĞİNİN ONAY DAMGASI</b> olmalı </li>
                            <ul>
                                <li>Ödeme yapılan firma yurtdışında olsa bile eğer ödeme Türkiye’den bir banka ile yapılmışsa Ticaret Müşaviri onayı aranmıyor. Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. Belgenin fotokopisi üzerinde işlem yapılması halinde, belgenin aslı görüldükten sonra onay işlemi yapılır.</li>
                                <li>Cari hesap ekstresinde Ticaret Müşaviri onayı olması <b>ZORUNLU DEĞİLDİR.</b></li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DEKONT BEDELİ</b> kontrol edilir</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>ÖDEME TARİHİ</b> kontrol edilir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>ÖDEME PARA BİRİMİ</b> kontrol. Çok Önemli! </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>FİRMA UNVANLARI</b> kontrol edilir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Ödeme belgesinin <b>DÜZENLENDİĞİ ÜLKE</b> kontrol </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Ödeme belgesi banka tarafından <b>İMZALI ve KAŞELİ</b> olmalıdır</li>
                            <ul>
                                <li>Eğer yurt dışında hazırlanmış bir belge ise ve <u>Ticaret Müşaviri onayı varsa</u> banka imza ve kaşesinın olması <b>ZORUNLU DEĞİLDİR</b></li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Ödeme belgesi <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse tercümesi ekli mi? </li>
                            <ul>
                                <li>Aylık/periyodik ödeme belgelerinde eğer şablon ve açıklamalar aynı ise, sadece bir ödeme belgesinin tercümesinin yaptırılması ve bunun sisteme eklenmesi yeterlidir. Eski tarihli de olsa bu tercüme uygun kabul ediliyor.</li>
                            </ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><img src={require('../images/exclamation_mark.png')} />Fatura ile ödeme belgesindeki tutar tutmuyorsa firma tarafından <b> İMZALI CARİ HESAP EKSTRESİ</b> mutlaka ekli olmalıdır. Eğer yoksa eksik belge olarak talep edilir.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>KOMİSYON KARŞILIĞI KİRALANMASI</b> halinde detaylı ödeme belgesi</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin; Distribütör ile <b>HİZMET ALINAN TARAF</b> arasındaki ödeme belgesi (Mahsuplaşma belgesi, cari hesap dökümü, muhasebe kaydı veya ödeme yapıldığını gösteren ve ilgili ülkede muteber olan diğer belgeler) </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin; Distribütör ile <b>YARARLANICI veya HARCAMA YETKİSİ VERİLEN ŞİRKET</b> arasındaki ödeme belgesi </li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Ödeme dekontunda sıra no ya da referans no tanımlanabilir. (son 5-6 hane gibi)</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox /><b>HARCAMA GİRİŞİ EKRANINDA EKLİ KISMINDA</b> ödeme belgesine ilişkin belegeler bulunabiliyor. Bu kısmı kontrol et.</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox />Firmanın <b>TURQUALITY KAPSAMINA ALINDIĞI TARİH</b> dikkat edilmelidir. Özelikkle ilk defa harcaması olan firmalar için dikkat edilir. Faaliyet dönemi kapsam tarihinden sonra olması gerekiyor.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Ödeme belgesinin onaylanması" /></li>
                        <ul>
                            <li>Her şey uygunsa aşağıdaki belgeler onaylı yapılır. Sağ üst kısım <b>ÖDEME BELGESİ STATÜSÜ</b> onaylı yapılır. Ve en üstte <b>KAYDET</b> düğmesine basılır.</li>
                            <li>Alt kısımda EKLİ bölümünde yer alan her bir döküman masaüstüne ilgil başvuru için açılmış olan klasöre kaydedilir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header">
                    <Typography className={accordionClasses.heading}>6) Diğer Kontroller | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Firma ile İLİŞKİLİ KİŞİ bağı olmadığına dair yazı var mı?" /></li>
                        <ul>
                            <li>Yararlanıcıların Karar kapsamındaki desteklerden yararlanabilmesi için yararlanıcı veya harcama yetkisi verilen şirket ile faturayı düzenleyen taraf arasında <b>İLİŞKİLİ KİŞİ</b> bağının bulunmaması gerekir.</li>
                        </ul>

                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Ödeme BANKA ARACILIĞYLA mı yapılmış?" /></li>
                        <ul>
                            <li>Yararlanıcıların veya işbirliği kuruluşlarının Karar kapsamında destek ödemesinden yararlandırılabilmesi için ödemenin bankacılık sistemiyle yapılması gerekir. Uluslararası standartlarda bankacılık sisteminin yerleşmediği ülkelerde bankacılık sistemi dışında yapılan ödemelerin desteklenebilmesi için, ilgili Ticaret Müşavirliğinin/Ataşeliğinin/Bakanlık Temsilcisinin ödeme belgesinin o ülke şartlarında muteber olduğuna ilişkin onayı alınır.</li>
                        </ul>

                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Harcama belgeleri YARARLANICI veya HARCAMA YETKİSİ verilen firma adına mı?" /></li>
                        <ul>
                            <li>Yararlanıcıların, Kararın 10 ve 11 inci maddelerinde sayılan faaliyetlerine ilişkin giderlerinin destek ödemesinden yararlandırılabilmesi için; harcama belgelerinin destek kapsamındaki yararlanıcı veya harcama yetkisi verilen şirket adına düzenlenmiş olması gerekir.</li>
                        </ul>

                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Firma YARARLANICI veya ORGANİK BAĞLI harcama yetkisi verilen bir firma mı?" /></li>
                        <ul>
                            <li>Kapsama alınan yararlanıcıyla <b>ORGANİK BAĞI</b> bulunan şirketlere harcama yetkisi verilebilir.</li>
                            <li>Firmanın yurtdışı firmaları ile organik bağının Bakanlık tarafından onaylı olması gerekiyor. Sistemde <b>ARAMA - MARKA</b> seçenekleini seçip <b>MARKA İSMİ</b> yazılıp aratıldığında ilgili marka çıkıyor. Bu Markanın üstüne çift tıklandığında <b>MARKA EKRANI</b> açılıyor. Bu ekranda Ortaklık Kurulumu v.b. bilgiler yer alıyor. <b>ORTAKLIK KURULUMU</b>na basıldığında açılan “Ortaklık” ekranında hangi firmanın organik bağının olduğu hangisinin olmadığı görülüyor. Ortaklık statüsü <b>REDDEDİLDİ</b> olarak belirtilen firmaların destek başvuruları kabul edilmiyor.</li>
                            <li>Harcama yetkisi verilen şirketlerce yapılan harcamalara ilişkin olarak destek oranı hesaplanması yapılırken destek kapsamındaki yararlanıcının (varsa harcama yetkisi verilen diğer şirketlerin) <b>ORTAKLIK PAYI</b> dikkate alınır.</li>
                            <li>İncelemeci kuruluş, başvuruya konu harcamayı yapan yararlanıcının/harcama yetkisi verilen şirketin sistemde kayıtlı sermaye yapısının güncel durumu yansıttığına ilişkin destek kapsamına alınan yararlanıcıdan her yıl taahhüt alır.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Harcamaya konu firmanın MARKAsı destek kapsamında mı?" /></li>
                        <ul>
                            <li>Harcama yetkisi verilen şirketin sadece destek kapsamına alınan markaya ilişkin harcamaları destek kapsamında değerlendirilir</li>
                            <li>Destek ödemesi her halükarda destek kapsamında bulunan yararlanıcıya yapılır.</li>
                            <li>Başvuru yapılan Marka'nın Bakanlık tarafından onaylı olması gerekiyor. Firmanın yurtdışı firmaları ile organik bağının Bakanlık onayını Sistemde <b>ARAMA - MARKA</b> seçenekleini seçip <b>MARKA İSMİ</b> yazılıp aratıldığında ilgili marka çıkıyor.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="MARKA'YA YÖNELİK FAALİYETLERe ilişkin bilgi ve belgeler mevcut mu?" /></li>
                        <ul>
                            <li>Harcama yararlanıcı için harcama yetkisi verilen bir iştiraki tarafından yapıldıysa, <b>MARKA'YA YÖNELİK FAALİYETLER</b>ine ilişkin bilgi ve belgeler mevcut mu?</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Harcama yetkisi verilen firmanın FAALİYETLERİ MARKA'ya yönelik mi?" /></li>
                        <ul>
                            <li>Faaliyet ilgili markaya yönelik olmalıdır.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Fatura, Sözleşme, Ödeme belgesi İngilizce/Türkçe'den farklı bir dildeyse tercümesi ekli mi?" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Harcama yapılan HEDEF PAZAR uygun mudur?" /></li>
                        <ul>
                            <li>Hedef pazarlar kontrol edilir. Sistemden hedef pazar kontrol edilir. Marka’dan bakıyoruz onaylanan hedef pazarlara.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Firmanın DESTEK SÜRESİ tamamlanmış mıdır?" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Yıllık TOPLAM DESTEK VE DANIŞMANLIK LİMİTİ aşılmış mıdır?" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="KOMİSYON karşılığı kiralanması halinde detaylı FATURA VE ÖDEME BELGESİ" /></li>
                        <li class="sublabel_section">Deponun kullanılan <b>PALET MİKTARINA</b> göre kiralanması halinde:</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>SÖZLEŞME</b></li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />İlgili döneme ilişkin detaylı <b>FATURA</b> (depoda kullanılan palet miktarını gösteren)</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>ÖDEME BELGESİ</b></li>
                        </ul>
                        <li class="sublabel_section"><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin Distribütör ile <b>HİZMET ALINAN TARAF</b> arasındaki:</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>SÖZLEŞME</b></li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /> <b>FATURA</b> (varsa)</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>ÖDEME BELGESİ</b> (Mahsuplaşma belgesi, cari hesap dökümü, muhasebe kaydı veya ödeme yapıldığını gösteren ve ilgili ülkede muteber olan diğer belgeler)</li>
                        </ul>
                        <li class="sublabel_section"><b>DİSTRİBÜTÖR/BAYİ/TEMSİLCİ/ACENTE</b> aracılığıyla yapılan kiralama harcamalarına ilişkin Distribütör ile <b>YARARLANICI/HARCAMA YETKİSİ VERİLEN FİRMA</b> arasındaki:</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>SÖZLEŞME</b></li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /> <b>FATURA</b> (varsa)</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>ÖDEME BELGESİ</b></li>
                        </ul>
                        <li class="sublabel_section">Hukuki danışmanlık ve hizmet alım giderleri ile anılan birimlere ilişkin uygun mahal araştırmasına yönelik <b>DANIŞMANLIK ve BELEDİYE GİDERLERİNE</b> ilişkin:</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>DETAYLI FATURA</b></li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>ÖDEME BELGESİ</b></li>
                        </ul>
                        <li class="sublabel_section"><b>KURULUM/DEKORASYON/KONSEPT</b> mimari çalışma/teknik donanım harcamalarına ilişkin:</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>DETAYLI FATURA</b></li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>ÖDEME BELGESİ</b></li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Yurt dışı birime ilişkin FOTOĞRAFLAR" /></li>
                        <li class="sublabel_section">Yurt içinden temin edilen <b>KURULUM/DEKORASYON/TEKNİK DONANIM MALZEMESİ</b>nin yurt dışına bedelsiz olarak gönderilmesine ilişkin;</li>
                        <ul>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Bedelsiz gümrük beyannamesi veya iz bedeli üzerinden yurt dışına çıkışı tevsik eden belgeleri</li>
                            <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Miktar bazında detaylı olarak düzenlenmiş kurye, kargo faturaları vb. belgeler (Tedarikçi firmadan doğrudan temin edilen kurulum/dekorasyon/ teknik donanım malzemeleri için yurt dışına bedelsiz gönderim şartı aranmaz.)</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Yurt dışı birimlerinin kira desteğinden yararlanabilmesi için kiralanan yerin <b>KONUT OLARAK KULLANILMAMASI</b> gerekir.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Brüt kira kapsamında zorunlu vergiler dahil olmak üzere kiralanan birime ilişkin <b>ALAN KİRASI</b> desteklenir.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Destek kapsamındaki yararlanıcı veya harcama yetkisi verilen şirketin <b>KENDİ DİSTRİBÜTÖRÜ/BAYİ/TEMSİLCİ/ACENTESİNDEN</b> sağladığı kiralama hizmeti destek kapsamında değerlendirilmez.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Tüm <b>FATURA, SÖZLEŞME, ÖDEME BELGELERİ</b> (3. şahıslar arasında yapılanlar dahil) <b>TİCARET MÜŞAVİRLİĞİ ONAYLI</b> olmalıdır.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Kurulum/dekorasyon/teknik donanım desteği kapsamında <b>UYGULAMA USUL VE ESASLARINDA BELİRTİLEN GİDERLER</b> desteklenir. Yararlanıcıların veya harcama yetkisi verilen şirketin kendi birimlerine ilişkin kurulum/dekorasyon/teknik donanım giderlerinin desteklenebilmesi için öncelikle <b>KİRA GİDERLERİNİN DESTEK KAPSAMINDA OLMASI</b> gerekir.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel /><b>GASTRONOMİ SEKTÖRÜNDEKİ YARARLANICILARIN</b> veya harcama yetkisi verilen şirketlerin kurulum/dekorasyon/teknik donanım giderleri, tüm harcamalar için tek ve toplu başvuru yapıldığında ve harcamanın asgari %20’sinin Türkiye’den temin edildiği hususunun gümrük beyannamesiyle ispatlanması koşuluyla, her birim için bir defaya mahsus olmak üzere desteklenir.</li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel />Yurt içinden veya yurt dışından temin edilen kurulum/dekorasyon/teknik donanım malzemelerine ilişkin giderlerin desteklenebilmesi için destek kapsamındaki yararlanıcı veya harcama yetkisi verilen şirket adına faturalandırılması ve yurt içinden temin edilen malzemelerin yurtdışına <b>BEDELSİZ İHRACAT</b> ya da iz bedeli üzerinden gönderilmesi gerekmektedir. Tedarikçi firmadan doğrudan temin edilen kurulum/dekorasyon/teknik donanım malzemeleri için yurt dışına bedelsiz gönderim şartı aranmaz.</li>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header">
                    <Typography className={accordionClasses.heading}>7) Eksik Belge | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Eksik belge yazılması" /></li>
                        <ul>
                            <li>Destek başvurusunda ibrazı <b>ZORUNLU BELGELERDE</b> Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi onayı dahil eksiklik olması halinde incelemeci kuruluş söz konusu harcamaya yönelik eksik belge işlemi uygulamaz ve destek başvurusunu reddeder. Giriş esnasında yetkilendirilmiş kullanıcı tarafından maddi hata yapılması halinde destek başvurusu için eksik belge işlemi uygulanabilir.</li>
                            <li>Eğer tutarsızlıklar veya eksiklikler varsa bu durumda bu eksiklikler not alınır ve diğer tüm eksiklikler ile birlikte firmaya eksiklik bildirimi yapılır.</li>
                            <li>Firma tarafından eksik belge yüklenmesi istenilen ekranların <b>ONAY BEKLENİYOR</b> olarak bırakılması gerekir. "Onaylı" olan ekranlara firma belge yüklemesi yapamıyor.</li>
                            <li>Eksiklik bilgirimi için "Harcama Girişi Ekranı"nın sağ alt köşesindeki <b>DIŞ YAZI</b> bölümünde matbu yazı kullanılarak eksiklikler yazılır ve sağ üst köşedeki <b>İKON</b>'a basılarak <b>EKSİK BELGE</b> seçilir. <b>E-İMZA</b> kullanılarak bu işleme uygunluk verilir ve firmaya sistem üzerinden sksiklik gider.</li>
                            <li>Eksik belge bildirimi yapılacak harcamada, HArcama Giriş Ekranındaki <b>DESTEK TUTARI</b> bölümü boş bırakılmalıdır.</li>
                            <li>"Dış Yazı" kısmına yazılan mesajda <b>20.05.2020</b> tarihinden sonraki ödeme belgeleri için "2564 Sayılı Karar.."" ifadesi kullanılmalıdır. Bu tarihten öncekiler için ise "2015/9 Sayılı Karar.." </li>
                            <li>"Dış Yazı" kısmına yazılan mesajın altına <b>İSİM ve TARİH</b> eklenmelidir. Tarih eksik belge bildiriminin e-imza ile gönderildiği günün tarihi olmalıdır. </li>
                            <li>"Dış Yazı" kısmına yazılan mesaj <b>İKİ YANA YASLI</b> biçiminde olmalıdır. </li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header">
                    <Typography className={accordionClasses.heading}>8) Eksiklikten Dönen Belgelerin İncelemesi | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Eksiklikten Dönen Belgelerin İncelemesi" /></li>
                        <ul>
                            <li>İlk eksik belge bildirimi yapıldıktan sonra <b>3 AY İÇİNDE</b> firma tarafından eksikliklerin tamamlanarak sistem üzerinden Birliğe gönderilmesi gerekmektedir. Bu süre aşılırsa başvuru reddelir</li>
                            <li>Daha önce firmaya yazılan eksikliklerin istenilen şekilde tamamalanıp/tamamlanmadığı kontrol edilir. Eğer istenilen belge/bilgiler tamamlanmamışsa veya yeni eklenen belgelerde eksiklik varsa firmaya 2. eksik belge bildiriminde bulunulur.</li>
                            <li>Eksikliklerin istenilen şekilde tamamlanmış olması durumunda harcama için onay işlemi başlatılır.</li>
  
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header">
                    <Typography className={accordionClasses.heading}>ONAY İŞLEMİ ÖZET SÜREÇ: | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li>Fatura, Sözleşme, Ödeme, Harcama Girişi ekranlarındaki tüm uygun ekleri "onaylı", uygun olmayanları "reddedildi" hale getir</li>
                        <li>Hizmet alan "reddedilmiş iştirak var mı kontrol et. Varsa destek tutarını yazarken dikkate al.</li>
                        <li>Harcama Girişi ekranına destek tutarının yazılması</li>
                        <li>BI Publisher belgesinin çıkarılması</li>
                        <li>Hesap Takip Tablosunun hazırlanması</li>
                        <li>Genel Limitler Kontrol Tablosunun hazırlanması</li>
                        <li>Hakediş Tutar Tablosu hazırlanması</li>
                        <li>6 aylık destek başvuru süresi uzatımı kontrol et. Varsa Turquality Sekreterya'ya iletilmek üzere ortak klasördeki dosyaya ekle.</li>
                        <li>Ödeme belgesi tarihi 20.05.2020'den sonraki genel danışmanlık ve istihdam harcamaları için hedef pazar Türkiye olmalı. Değilse Turquality Sekreterya'ya bildir.</li>
                        <li>Ödeme belgesi, cari hesap ekstresi ve faturanın daha önceki harcamalar ile mükerrer olup/olmadığını kontrol et.</li>
                        <li>Belgeleri Home Ofis klasörüne kopyala ve Şube Şefi'ne bilgi e-mail'i gönder.</li>
                        <li>Şube Şefi'nden onay alırsan sistem üzerinden e-imza ile onayla ve Home Ofis klasöründe Şube Mdürü'nün klasörüne taşı</li>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9a-content"
                    id="panel9a-header">
                    <Typography className={accordionClasses.heading}>8) Harcama Giriş Ekranı | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Harcama Giriş Ekranı'na bilgi girilmesi" /></li>
                        <ul>
                            <li>Harcamanın incelemesi sırasında almış olduğun, özellikle destek tutarını etkileyecek, önemli notlar veya e-mail'ler varsa bunlar kontrol edilerek gerekli hususlar göz önüne alınır.</li>
                            <li>Bu ekranda <b>DESTEK TUTARI (TL)</b> alanı doldurulur. "Destek USD" kısmı ve diğer bilgileri sistem otomatik olarak hesaplıyor. Bu kısım firmaya verilecek desteğin %50 ve ortaklık payına bölünmemiş halidir. Yani ödenecek desteğin hesaplanacağı tutardır. Firmaya ödenecek tutar hemen yanında Ödeme Tutarı alanında otomatik çıkar. </li>
                            <li><img src={require('../images/exclamation_mark.png')} />Destek Tutarı (TL) alanına <b>FATURA TUTARI (TL) veya ÖDEME TUTARI (TL)'NDAN HANGİSİ DAHA KÜÇÜKSE</b> o yazılır.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Destek Tutarı (TL) alanına yazılacak olan tutar <b>ÖDEME BELGESİNDEKİ TUTARDAN BÜYÜK OLAMAZ</b></li>
                            <li><img src={require('../images/exclamation_mark.png')} />Eğer ödeme tutarının içinde ilgili fatura tutarının yanı sıra <b>DİĞER BAŞKA ÖDEMELER VARSA</b> bu durumda <b>FATURA TUTARI (TL)</b> Destek Tutarı (TL) bölümüne yazılır.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Bazı faturalarda Euro ve TL aynı anda yazıyor. Bu durumda <b>ÖDEME TUTARI İLE FATURA ÜZERİNDEKİ TL TUTARINDAN DÜŞÜK OLANI</b> Destek Tutarı (TL) alanına yazılır.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Firmanın aldığı hizmetin Bakanlık tarafından onaylanmamış olan bir iştariki tarafından alındığı anlaşılırsa (bu durum genelde sözleşmelerde yazıyor) firmanın hizmet alan <b>ONAYLI İŞTİRAKLERİ ORANINDA DESTEK TUTARI</b> yazılır. (Örnek: 5 firmanın 4'ü onaylı 1'i reddedilmişse destek tutarı 4/5 oranında yazılır ve açıklama kısmına bu durum belirtilir)</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Hedef pazarı Türkiye olan hizmetlerde ilgili destek tutarından Türkiye payının düşülmesi gerekiyor.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Türkçe yapılan reklam ve tanıtım harcamaları varsa bu kısmın destek tutarından düşülmesi gerekiyor.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Firma tarafından fatura tutarı üzerinden indirim alınmışsa veya credit note durumu varsa, bu durumda firmadan açıklayıcı bilgi alıp destek tutarının hesaplanacağı net ödeme tutarı hakkında bilgi alınması ve bu bilginin kontrolünün yapılması gerekiyor.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Faturada Genelge kapsamında desteklenmeyen kalemler varsa (Örnek: seyahat giderleri, elektrik ücretleri, finansal hizmetler v.b.) bunların düşülmesi gerekiyor.</li>
                            <li><b>EKLİ</b> bölümünde ek olup/olmadığı kontrol edilir.</li>
                            <li><b>AÇIKLAMA</b> kısmına ilgili harcama için açıklama yazılır. Örnek:Danışmanlıkta “Hedef Ülkeler desteklenmiştir” yazılıyor. Kısca neyin desteklendiği yazılıyor. Ödeme belgesindeki tutarın aynı olmaması gibi özel durumlarda buraya farklı bir açıklama yazılabilir.</li>
                            <li>Ödeme ve fatura tutarları farklı olan harcamalarda açıklama alanına "Fatura birkaç ödemeyle yapılmıştır. Ödeme tutarı desteklenmiştir" ifadesi yazılmalıdır.</li>
                            <li>Ödeme ve fatura tutarları farklı olan ve faturanın çeşitli sebeplerle eksik ödenmiş olduğu harcmalarda,  açıklama alanına "Fatura firma tarafından eksik ödendiğinden, ödeme tutarı desteklenmiştir." ifadesi yazılır.</li>
                            <li>En üst kısımda KAYDET düğmesine basılarak ekran kaydedilir.</li>
                            <li><img src={require('../images/exclamation_mark.png')} />Nihai <b>E-İMZA İLE ONAYLAMA</b> bu aşamada yapılmaz! En son aşamada Şube Şeflerinden uygunluk alındıktan sonra yapılır.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel10a-content"
                    id="panel10a-header">
                    <Typography className={accordionClasses.heading}>9) BI Publisher Belgesi | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="BI Publisher Belgesi hazırlanması" /></li>
                        <ul>
                            <li>BI Publisher ekranına sisteme giriş için kullandığımız aynı şifre ile giriş yapılıyor.</li>
                            <li>Üst kısımda yer alan <b>LINKLER</b> düğmesine basıp buradan BI <b>PUBLISHER</b> seçeneğini seçiyoruz.</li>
                            <li>Açılan pencereden Birlikler seçeneği seçilir sonra İnceleme Formları seçeneği seçilir ve Enter basılır. </li>
                            <li>Açılan ekranda <b>HESAP ID</b> bölümüne <b>HARCAMA NO</b> girilir sonra <b>DIŞA AKTAR</b> seçeneği seçilip masaüstünde ilgili harcama belgelerinin yer aldığı klasöre kopyalanır.</li>
                            <li>Publisdher'daki Destek Tutarı firmaya verilecek %50 oranındaki tutardır. Hesap Giriş ekranındaki Destek Tutarı ifadesi karıştırılmamlıdır.</li>
                            <li>Manual hazırladığımız tüm tablolarda (hakediş tablosu, danışmanlık limit kontrol tablosu, hesap takip tablosu) için Publisher belgesi kullanılır.</li>
                            <li>BI Publisher'da yazılan tarih ile sistemdeki tarih arasında fark varsa bu durumun düzeltilmesi için BI Publisher'ın içinde "Tercihler" bölümünde "Rapor Saat Dilimi" bölümünün "+3" olarak ayarlanması gerekir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel11a-content"
                    id="panel11a-header">
                    <Typography className={accordionClasses.heading}>10) Hesap Takip Tablosu | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Hesap Takip Tablosu hazırlanması" /></li>
                        <ul>
                            <li>Devamı gelen (aylık yapılan v.b.) harcamalarda hesap takip tablosu kullanılır. İlgli harcamalar en güncel tablonun en alt satırına eklenerek yazılır.</li>
                            <li>Eğer yeni bir hesap takip tablosu hazırlanıyorsa, daha önce hazırlanmış taslak tablo üzerinden gidilerek, yararlanıcı firma, yüklenici firma, sözleşme tutarı, sözleşme başlangıç-bitiş tarihleri v.b. bilgiler güncellenir. Bu tablonun şablonunun bozulmaması önemlidir.</li>
                            <li>Bu tabloya eklenecek bilgiler BI Publisher Belgesi'nden alınabilir.</li>
                            <li>Tablodaki "Durum bölümüne yeni incelenen harcmalar için "Onaya gönderildi" yazılmalı. Daha önce onaya gönderilen ve ödeme talimatı verilen harcmaların "Durum" bölümü de "Ödeme talimatı verildi" olarak güncellenmeli.</li>
                            <li>İlgili fatura tutarları, ödeme belgeleri ve tarihlerinin tutup tutmadığıın kontrolü ve ensonunda verilecek olan net - brüt destek tutarının hesaplanması için bizim tarafımızdan hazırlanan bir Excel tablosu kullanılır. Bu Excel tablosu hem masaüstünde ilgili harcamanın klasörüne hem de ortak klasörde ilgili klasöre kaydedilir. (Çelebi Macaristan harcamaları için ismi “Budapeste Airport” olarak kaydedilmiş). Daha önceyapılan harcamalar ve firma ilei ilgili bilgiler bu Excel tablosunda yer aldığı için işimizioldukça kolaylaştırıyor. O nedenle kontrollerde mutlaka bu Excel tablosundanyararlanıyoruz. En önemlisi bu tablonun dip rakamalarında <b>BRÜT DESTEK TUTARI</b>'nı hesaplıyoruz.</li>
                            <li>Faturalardaki alanlardan hangileri desteklenir hangileri desteklenmez onlar ayıklanıyor.Ana amaç net toplam desteklenecek metrekareye ulaşmak. Bu ayıklama işlemi içinTicaret Müşavirliğinden alınan <b>Ek-12 YERİNDE İNCELEME BELGESİ</b> yardımcı oluyor.</li>
                            <li><b>HARCAMA NO</b>, onun altında <b>BRÜT TOPLAM</b>, onun altında <b>EURO DEĞERİ</b> ve <b>TL DESTEK TUTARI</b> kontrol ediliyor. Brüt Toplam Tutar Euro kuru ile çarpılarak TL Destek Tutarı mı bulunuyor? Yoksa tam tersi TL destek Tutarı bulunup Euro kuru ordan mı çıkıyor? Euro/TL kuru nasıl bulunyor? TCMB fatura tarihi efektif alış kuru/çapraz kur. Euro/TL kuru faturada varsa onu kullan. Bulunan bu TL Destek Tutarı destek verilecek firmanın yurtdışındaki firmadaki ortaklık payı oranında bölünüyor ve bu sayede nihai <b>DESTEK TUTARI (TL)</b> elde ediliyor.</li>
                            <li>Eğer aynı sözleşmeye birden fazla harcama bağlı ise, "Hesap Takip Tablosu" bu harcamalar için tek ve ortak hazırlanır.</li>
                            <li>Birden çok harcama tabloya ekleneceği zaman sıralama önce fatura tarihine göre, eğer fatura tarihleri aynıysa ödeme belgesi tarihine göre (eski tarihler üstte olacak şekilde) yapılır. Bu sayede amirler tarafından kontrol işlemi daha rahat gerçekleştirilebilir.</li>
                            <li>Harcamanın ödeme belgesi tarihi <b>20.05.2020</b>'den sonra ise <b>GENEL KURUMSAL DANIŞMANLIKLAR ve İSTİHDAM</b> destek başvuruları için hedef pazarlar bölümünde Türkiye yazılması gerekiyor. Eğer danışmanlık sadece belirli bir ülkeye yönelik ise sadece ilgili ülkeler "Hedef Pazarlar" bölümüne yazılıyor. Eğer farklı bir ülke seçilmişse bu harcama için <b>ÜLKE DEĞİŞİKLİĞİ EXCEL TABLOSU</b> doldurularak TİM Turquality Sekerterya'ya e-mail ile gönderilir. Böyle bir durumun söz konusu olup olmadığı Harcama ekranında kontrol edilir. Eğer böyle bir durum varsa daha sonra TİM'e yazı gönderilmek üzere harcama numarası not alınır.</li>
                            <li>Mücbir sebeplerden dolayı Bakanlık/TİM onayı ile firmaların son başvuru sürelerinde uzatma yapılabiliyor. Pandemi sebebiyle başvuru süresi <b>11 MART 2020 - 30 Haziran 2020</b> arasında biten başvurular için süre <b>27 TEMMUZ 2020</b> tarihine kadar uzatılmıştı. Süre uzatımından yararlanan harcamalar onay işlemi yapıldıktan sonra <b>ORTAK KLASÖRDEKİ TABLO</b>'ya ekleniyor. Bu tablo her hafta cuma günü TİM Turquality Sekreterya'ya şubeden biri tarafından gönderiliyor. Böyle bir durumun söz konusu olup olmadığı Harcama ekranında kontrol edilir. Eğer böyle bir durum varsa daha sonra TİM'e yazı gönderilmek üzere harcama numarası not alınır. </li>
                        </ul>
                        <li><h4>Özel Hesaplamalar</h4></li>
                        <ul>
                            <li>Çelebi’nin faturaları çok uzun olduğu için desteklenecek tutarın hazırlanması için bu Excel tablosundan faydalanıyoruz. </li>
                            <li>Faturaların APPENDIX bölümlerindeki kalemler bu Excel tablosunda yer alıyor veya biz bunları yazıyoruz. (Örnek Appendix’te 0044 3 olarak yazılan kalem Excel tablosunda BUD-0044-01-3 olarak yazılmış). Faturanın içindeki kalemler ile bu Excel tablosu arasında bağlantı nedir? </li>
                            <li>Appendix’teki kalemlerden hepsi desteklenmiyor. Bazıları dstekleniyor. Bunlar Excel tablosunun en sağ tarafında yazılmış. Hangi kalemlerin desteklendiğine Ticaret Müşavirliği’nden gelen Ek-12 tablosundan yararlanıyoruz. Ya da ilgili mevzuattan.Yani firma tarafından yapılan toplam ödemenin tamamı desteklenmiyor. Desteklenmeyecek kısımlar ayıklanıyor.</li>
                            <li>Desteklenecek/desteklenmeyecke kalemler Excel tablosunda ayıklanıyor ve sadece desteklencek kalemlerin tutarları toplanıyor. Desteklenmeyecek kalemlere 0 yazılıyor. Excel tabosundaki tutarlar Appendix’teki Quantity ve Unit Price’in çarpımından oluşuyor.</li>
                            <li>Desteklenecek/desteklenmeyecke kalemler Excel tablosunda ayıklanıyor ve sadece desteklencek kalemlerin tutarları toplanıyor. Desteklenmeyecek kalemlere 0 yazılıyor. Excel tabosundaki tutarlar Appendix’teki Quantity ve Unit Price’in çarpımından oluşuyor.</li>
                            <li>Brüt Toplam Tutar Euro kuru ile çarpılarak TL Destek Tutarı mı bulunuyor? Yoksa tam tersi TL destek Tutarı bulunup Euro kuru ordan mı çıkıyor? Euro/TL kuru nasıl bulunyor? TCMB fatura tarihi efektif alış kuru/çapraz kur. Euro/TL kuru faturada varsa onu kullan.</li>
                            <li>Bulunan bu TL Destek Tutarı destek verilecek firmanın yurtdışındaki firmadaki ortaklık payı oranında bölünüyor ve bu sayede nihai TL Destek Tutarı elde ediliyor. NOT: Bu rakam desteklemeye konu toplam TL tutarıdır. Yani firmaya verilecek toplam destek tutarı değildir! Bu tutarın %50 oranında firmaya dstek verilecektir. O nedenle Hakediş Tablosu’nda bu tutarın %50’si ilgili alana yazılır. Hesap Giriş ekranında biz sadece Destek Tutarı (TL) kısmını dolduruyoruz. Bu kısım firmaya verilecek desteğin %50ve ortaklık payına bölünmemiş halidir. Yani ödenecek desteğin hesaplanacağı tutardır. Firmaya ödenecek tutar hemen yanında Ödeme Tutarı alanında otomaik çıkar.</li>
                            <li>Nihai TL destek tutarı üst kısımdaki ilk tabloda ilgili alanlara yazılıyor. Bu tablodaki Dolar kuru alanına sistemde destek tutarını giredikten sonra sistemde otomatik olarak hesaplanan Dolar kurunu xcel tablosundaki üst tabloda ilgili alana yazıyoruz.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel12a-content"
                    id="panel12a-header">
                    <Typography className={accordionClasses.heading}>11) Genel Limitler Kontol Tablosu | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Genel Limitler / Danışmanlık Limit Kontrol Tablosunun hazırlanması" /></li>
                        <ul>
                            <li>Her marka için Genel Limitler tablosu hazırlanıyor. Bu tabloda onaylanan her harcama için ilgili harcamaya ilişkin harcama no, harcama destek tutarı ve ilgili bilgieri yazıyoruz. Bu tablonun asıl amacı firmanın yıllık destek tutarının <b>20 MİLYON TL</b>’yi geçip geçmediğinin kontrol edilmesidir. 20 milyon TL’yi aşarsa artık o yıl için destek verilmiyor. </li>
                            <li>Bu tabloda harcamalar <b>ÖDEME BELGESİNDEKİ TARİH</b> baz alınarak ilgili yıla/döneme yazılır.</li>
                            <li>Eğer aynı sözleşmeye birden fazla harcama bağlı ise, "Danışmanlık Limit Kontol Tablosu" bu harcamalar için tek ve ortak hazırlanır ve kırmızı renkle göterilen güncel harcamalar bölümüne tüm harcamaların toplamı yazılır.</li>
                            <li>Ayda 2 defa Turquality Sekreterya'dan sistemdeki tüm verilere ilişkin güncel <b>EXCEL RAPORU</b> geliyor. Bu Excel raporunda gerekli filtrelemeleri yaparak o güne kadarki genel ve danışmanlık harcamaları tespit edilebilir. Bu tablo en doğru tablodur. Kendi verilerini bu tablo ile kontrol ederek Genel Limit Tablosunun sürekli güncel tutulması çok önemlidir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel13a-content"
                    id="panel13a-header">
                    <Typography className={accordionClasses.heading}>12) Hakediş Tutar Tablosu | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Hakediş Tutar Tablosu hazırlanması" /></li>
                        <ul>
                            <li>Bu tablo daha önce hazırlanmış olan tablo şablonu kullanılarak yararlanıcı firma unvanı, destek türü, Şube Şefi, Genel Sekreter YArdımcısı gibi alanlar güncellenerek hazırlanır. Tablonun formatının bozulmaması çok önemlidir.</li>
                            <li>Bu tablo BI Publisher belgesi (veya daha önce doldurulan hesap takip tablosu) kullanılarak doldurulur. Firmanın adı, harcama no’su, hakediş tutarı, hakediş USD değeri, dosya başvuru tarihi, destek türü, ne kadar destek hakkettiği gibi bilgiler yazılıyor.</li>
                            <li>Bu belge eskiden Genel Sekreterlik tarafından imzalanıyordu. Şimdi ise böyle bir işlem yapılmıyor.</li>
                            <li>Bu dosyanın adı "Verilen Destek Tutarı" + "Destek Türü" olarak yazılıyor (Örnek: 26.850 TL KİRA)</li>
                            <li>Harcama dosya no, Birlik başvuru no ve Evrak No aynı şeydir.</li>
                            <li>Hakediş Tablosunda "evrak tarih-sayısı" birden fazlaysa tablonun altında farklı olanları da yazmak lazım.</li>
                            <li>Eğer aynı sözleşmeye birden fazla harcama bağlı ise, "Hakediş Tablosu" bu harcamalar için tek ve ortak hazırlanır. </li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel14a-content"
                    id="panel14a-header">
                    <Typography className={accordionClasses.heading}>13) Home Ofis Klasörü | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="6 aylık başvuru süresi uzatımı hususunu kontrol et. Not al." /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Ödeme belgesi, cari hesap ekstresi ve faturanın öncekilerle mükerer olup/olmadığı kontrol" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Fatura, Sözleşme, Ödeme ve Harcama girişi ekranlarındaki tüm belgeleri onayla" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Home Ofis klaösürüne dosyaların eklenmesi" /></li>
                        <ul>
                            <li>Onaylanacak belgelerin Home Ofis klasörüne taşınmasından önce onaylanacak harcamalar için ödeme belgelerinin mükerrer olup/olmadığı kontrol edilir. Bazı faturalar tek bir ödeme belgesi ile toptan ödenmiş olabiliyor. Faturaların tutarları toplamı ile ödeme belgesi tutarı tutuyorsa bu durum normaldir. Ancak bazı durumlarda sehven farklı faturalar için aynı ödeme belgesi sisteme yüklenmiş ve bu faturaların toplam tutarı ödeme belgesi tutarından yüksek kalabiliyor (yani eksik ödeme yapılmış görünüyor). Böyle bir durum tespit edilirse onay işlemine devam edilmeden önce firmadan açıklama talep edilerek durum netleştirilmelidir.</li>
                            <li>BI Publisher, hakediş tablosu, hesap takip tablosu (devam harcmasıysa) limit kontrol tablosu bunlar Home Ofis içinde Şube Müdürü'nün İmzasına klasörüne eklenir (Vekalet verildiyse Şube Şefleri de olabilir). Örnek klasör ismi: MARKA İSMİ 1.475,00 TL</li>
                            <li>Ortak klasörde Home Ofis isimli klasör içine Şube Müdürü klasörü içinde personel isimleri var.  Burada kendi dosyamızı Şube Müdürü'nün imzalayacağı dosyalar içine kaydediyoruz. Klasörün ismine firma ismi yazıyoruz. Burada Şube Müdürü'nün Onaylacağı, Onaylı, Arşiv olmak üzere 3 klasör var. Burada kendi dosyamızı (masaüstünde kaydedilen tüm klasörü) Şube Müdürü'nün imzalayacağı dosyalar içine kaydediyoruz.</li>
                            <li>Daha sonra ilgili Şube Şefi'ne email ile bilgi verilir. Örnek: <br></br><br></br>
                    Konu: 25.762,00 TL Danışmanlık Harcaması Hk.<br></br><br></br>
                    ...... Bey/Hanım,<br></br><br></br>
                    25.762,00 TL Danışmanlık harcamasını ağda ilgili klasörünüze bıraktım.<br></br><br></br>
                    Bilgilerinize arz ederim.
                    </li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel15a-content"
                    id="panel15a-header">
                    <Typography className={accordionClasses.heading}>14) Harcamanın Onaylanması | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Şube şefinden onay için uygunluk alındı mı?" /></li>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Sistemden e-imza ile ONAYLAMA işlemini yap" /></li>
                        <ul>
                            <li>Şube Şefi'nden onay aldıktan sonra, Harcama giriş ekranında sağ üst kısımda yer alan ikona basılıp <b>ONAYLA</b> seçeneği seçilir. Bu işlem <b>E-İMZA</b> ile yapılır. Bu işlem yapıldıktan sonra dosya sistem üzerinden Şube Müdürü'ne gidiyor. Bu şekilde dosyaları hem sistem üzerinden hem de ortak klasöre eklemek suretiyle Şube Müdürü'ne iletiyoruz.</li>
                        </ul>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Home Ofis klasöründeki harcama dosyalarını Şube Müdürü'nün klasörüne taşı" /></li>
                        <ul>
                            <li>Şube Müdürü'ne ilgili klasörlerin kopyalandığına dair bilgi e-mail'i gönderilir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel16a-content"
                    id="panel16a-header">
                    <Typography className={accordionClasses.heading}>15) Turquality Sekreterya Yazı Yazılması | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="6 aylık başvurusu süresini aşan harcama için yazı yazılır" /></li>
                        <ul>
                            <li>Mücbir sebeplerden dolayı Bakanlık/TİM onayı ile firmaların son başvuru sürelerinde uzatma yapılabiliyor. Pandemi sebebiyle başvuru süresi <b>11 MART 2020 - 30 Haziran 2020</b> arasında biten başvurular için süre <b>27 TEMMUZ 2020</b> tarihine kadar uzatılmıştı. Süre uzatımından yararlanan harcamalar onay işlemi yapıldıktan sonra <b>ORTAK KLASÖRDEKİ TABLO</b>'ya ekleniyor. Bu tablo her hafta cuma günü TİM Turquality Sekreterya'ya şubeden biri tarafından gönderiliyor. </li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel17a-content"
                    id="panel17a-header">
                    <Typography className={accordionClasses.heading}>16) Tahakkuk Listesi | <TimeCounter /></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section"><SupportRedCheckBox /><SupportCheckBox customLabel="Tahakkuk Listesi hazırlanması" /><h4></h4></li>
                        <ul>
                            <li>2015/9 Hizmet turquality klasörü - Home Ofis - Tahakkuk klasörünün içine kaydediyoruz dosyayı. Her hafta cuma günü yapılıyor. </li>
                            <li>Tahakuk Klasörüne koyulacak <b>ONAYLI</b> harcmaların belgeleri: TALİST, hakediş, vergi brocçsuzluk - sgk borçsuzluk belgesi. Örnek klasör ismi: MARKA İSMİ 40.428,00 TL</li>
                            <li>Her harcamanın sarı renkli Tahakkuk Fişi tablosunu koyuyoruz. Vergi dairesi borcu yoktur (6183 sayılı kanunun 22. maddesinin A maddesi) ve SGK borcu yoktur yazısı (5510 saylı kanunun 90. Maddesinin 6. fıkrası) koyuyoruz. BI Publisher’den çektiğimiz tabloyu koyuyoruz bu klasöre</li>
                            <li>En son olarak Tahakkuk Listesi ekranına giriliyor (Talist). Buraya e-birlik üzerinden giriş yapılıyor. Buraya harcamamızı ekliyoruz EKLE seçeneği ile. Firmanın <b>VERGİ NO</b> yazılır. </li>
                            <li><b>SORGULA</b>’ya basılır ve otomatik bilgiler ekrana çıkar. Kapak’taki <b>TARİH</b> ve <b>BAŞVURU NO</b> yazılır ve EKLE denilir. </li>
                            <li><b>ÖDEME TUTARI</b> alanına ne kadar ödeme yapılacağı yazılır. SGK’ya veya vergi dairesine ödeme yapılacaksa ilgili alana yazılır. <b>ÜRÜN DESTEK TÜRÜNDE</b> ilgil destek türünü yazılır. </li>
                            <li><b>HEDEF ÜLKE</b> seçilir. Danışmanlıklarda Türkiye’den danışmanlık aldıysa veya faaliyet birden birden fazla ülkede gerçekleştiyse <b>ÜLKESİZ</b> seçiliyor. BI Publisher’dan alınan evrakta hedef ülkeler yazıyor.</li>
                            <li><b>ŞEHİR</b> seçilir. </li>
                            <li><b>SEKTÖR</b> seçilir. (Çeleib için 40)</li>
                            <li><b>SAĞ TIK - BASKI ÖN İZLEME - PDF’E ÇEVİR</b>. Masaüstüne kaydet ve dosya isimini TALİST yaz.</li>
                            <li><b>KAYDET</b> düğmeisne basılır sistemde???</li>
                            <li>Alınan TALİST çıktısına daha önce bahsedilen klasörlerin içine koyuyoruz (Home Ofis > Tahakkuk). Her bir harcama bloğu için bu işlem yapılır.</li>
                            <li><b>TAHAKKUK KARAR TAKİP TABLOSUNDA???</b> (Excel tablosu) alanında en son satıra harcamalara ilişkin bilgileri yazıyoruz. Kapaktaki başvuru tairhi, harcama no, dolar değeri, tl değer, destek türü, deste türü kodu (kira desteği 664), İncelemeyi yapanın baş harfleri yazılır.</li>
                            <li>TALİST listesindeki destek tutarı çok önemli. Niyahetinde her işlemi buradaki rakamı bulmak için yapıyoruz. Bakanlık desteği buradaki tutara göre veriyor.</li>
                            <li>Cuma günleri tüm bu tahakkuk listesi çıktı alınıp Bakanlığa kargo ile gönderiliyor? İşlem nasıl?</li>
                            <li>Vergi orcu yoktur yazıları internetten kontrol edilir. GİB sitesinden. Dilekçe ve vergi kimlik no'dan. SGK borcu yokltur yazısını barkod numarasından SGk istesinden bakıyoruz.</li>
                            <li>İstihdam ve danışmanlık harcamalarında hedef ülke Türkiye olmadığından tahakkuk listesinde ve Tahakkuk Excel tablosunda Ülkesiz seçilir. Sistemde (otomasyon) ise Almanya seçilir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


        </div>
    );

}

export default Item20;