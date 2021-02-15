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

function Item30() {

    const accordionClasses = useAccordionStyles();

    return (

        <div className={accordionClasses.root}>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={accordionClasses.heading}>1) Ret Bildirimi İçin Kontroller</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Başvuru destek BAŞVURU SON TARİHİnden önce mi yapılmış?" /></li>
                        <ul>
                            <li>Ödeme belgesi tarihinden itibaren en geç 6 (altı) ay içerisinde sistem üzerinden resmi olarak Birliğe harcama için destek başvurusu yapılmalıdır. Bu 6 aylık sürenin başlangıç tarihi olarak <b>ÖDEME BELGESİ VALÖR TARİHİ (EĞER VALÖR TARİHİ YOKSA İŞLEM TARİHİ)</b> kullanılır. Bu tarihten itibaren 6 ay içinde başvuru yapılmalıdır. Burada dikkat edilecek husus, son başvuru yapılabilecek tarihin ödeme tarihinden itibaren 180 gün değil, 6 ay sonraki aynı gün olmasıdır. (Örnek 01.04.2020 tarihli bir ödeme belgesi için son başvuru tarihi 01.10.2020'dir)</li>
                            <li><b>TİCARET MÜŞAVİRİNİN MÜNHAL OLMASI</b> durumunda özel bir durum oluştuğu için bu başvuru süresinde farklılık oluşabilir. Bu durumda destek başvurusu tarihi ilgili evrakların Ticaret Müşavirliği evrak kaydına girdiği tarih olarak kabul edilir.</li>
                        </ul>
                        <li>Karar, Genelge ve Ek-6'da belirtilen <b>ZORUNLU BELGELERİN</b> sistemi imza ve kaşeli olarak yüklenmiş olması gerekmektedir.</li>
                        <ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura/Maaş Bordosu</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme Belgesi</li>
                        </ul>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Fatura/Bordro, Sözleşme, Ödeme belgesi yurt dışında hazırlanmışsa Ticaret Müşavir onayı olması gerekir" /></li>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Ödeme belgesi/banka dekontunda banka imza/kaşesi olması gerekir" /></li>
                        <ul>
                            <li>Eğer ödeme belgesi yurt dışında hazırlanmışsa, belge üzerinde yetkili Ticaret Müşavirliği tarafından "Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması yeterlidir. Bu durumda banka imza-kaşesi aranmaz.</li>
                        </ul>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Yararlanıcının/harcama yetkisi verilen şirketin ortakları/yöneticilerinin istihdamı desteklenmez." /></li>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Aynı anda EN FAZLA 5 PERSONEL istihdamı desteklenir." /></li>
                    </ol>
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography className={accordionClasses.heading}>2) Fatura</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <ul>
                            <li class="checkbox_section_c"><SupportCheckBox /><b>FATURA/BORDRONUN AYI</b> ile fatura ekranındaki "Belge Tarihinin" tutması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura ekranına yazılan <b>FİRMA UNVANI</b> ve <b>PERSONEL İSMİ</b>nin ekli belgelerde yer alan firma unvanı ve personel ismi ile birebir tutması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura ekranına yazılmış <b>PARA BİRİMİ</b>nin fatura/bordrodaki para birimi ile tutması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura ekranında <b>KDV TUTARI 0</b> yazılmalıdır. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli Fatura/Bordro üzerinde <b>KAŞE ve İMZA</b> olması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura ekranında yazılmış Fatura/Bordronun <b>DÜZENLENDİĞİ ÜLKE</b> ile ekli fatura/bordonun düzenlendiği ülkenin tutması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli Fatura/Bordro <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse yeminli Türkçe/İngilizce tercümesinin sisteme eklenmesi gerekir.</li>
                            <ul>
                                <li>Aylık/periyodik faturalarda eğer şablon ve açıklamalar aynı ise, sadece bir faturanın tercümesinin yaptırılması ve bunun sisteme eklenmesi yeterlidir. Ancak bu durumda faturalarda yer alan tüm açıklama ve bilgilerin birebir tutması gerekmektedir. Eğer birebir tutmadığı tespit edilirse yeminli Türkçe/İngilizce tercümesi sisteme eklenmelidir.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Faturanın kesildiği firmanın yararlanıcı firma veya Bakanlık tarafından harcama yetkisi verilen (yararlanıcı firma ile organik bağı olan) bir firma olması gerekmektedir. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Yurt dışında yapılmış olan veya Yabancı firmalar ile yapılmış olan tüm fatura ve eklerinin ilgili ülkede görevli <b>TİCARET MÜŞAVİRLİĞİ TARAFINDAN ONAYLANMASI</b> gerekmektedir.</li>
                            <ul>
                                <li>Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. Belgenin fotokopisi üzerinde işlem yapılması halinde, belgenin aslı görüldükten sonra onay işlemi yapılır.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />2018 yılından sonra yürürlüğe giren mevzuat ile yurt içindeki firmalar belirli istisnalar dışında Türk Lirası ile fatura kesmek zorundadır. Yurt içinde yerleşik bir firmanın <b>DÖVİZ CİNSİNDEN</b> fatura kesmesi durumunda varsa bu istisnai durumuna ilişkin belgelerin sisteme yüklenmesi gerekmektedir.</li>
                            <ul>
                                <li> Bu istisnalardan biri sağlanan hizmetin yurt dışı menşeli bir hizmet olmasıdır. Eğer yerli bir firma döviz ile fatura kesiyorsa sağlanan hizmetin <b>YURT DIŞI MENŞELİ</b> olduğunu belirten kaşeli-imzalı <b>TAAHHÜTNAME</b> sisteme eklenmiş olmalıdır.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli <b>FATURA/BORDRO BRÜT ÜCRET TUTARI</b>nın sisteme girilen tutar ile tutması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli fatura/bordroya ilişkin farklı özel bir durum söz konusu ise bu duruma dair "Açıklama" alanına ayrıntılı olarak bilgi yazılması gerekmektedir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header">
                    <Typography className={accordionClasses.heading}>3) Sözleşme</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında yazılmış <b>VERSİYON NUMARASI</b>'nın sisteme ekli sözleşmenin verisyonu ile uyumlu olması gerekmektedir. </li>
                            <ul>
                                <li>Sözleşme bitiş tarihinden sonra yeni bir sözleşme veya ek protokol yapıldğında, daha önce sözleşme ile belirlenen fiyatlarda ek protokol ile değişiklik yapıldığı v.b. durumlarda versiyon numaraları arttırılmalıdır. </li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme/ek protokolün tarihlerinin ve tutarlarının hizmet alınan dönem tarihleri ile uyuşması gerekmektedir. Sözlşeme bitiş tarih hizmet alınan dönemden eski ise ve sözleşmede uzatım süresi ve yeni hizmet bedeli ile ilgili açıklayıcı bir ifade yoksa, bu durumda hizmet alınan tarihi kapsayan ek protokolün veya konuya ilişkin açıklama yazısının sisteme eklenmesi gerekmektedir. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranına yazılmış sözleşme taraflarına ait <b>FİRMA UNVANI</b> ve <b>PERSONEL İSMİ</b> ekli sözleşmede yer alan firma unvanı ve personel ismi ile birebir uyumlu olması gerekir.</li>
                            <ul>
                                <li>Sözleşme, Fatura ve Ödeme belgesindeki firma unvanlarının birbirini tutması gerekir. Sözleşme, Fatura ve Ödeme belgesinin <b>AYNI GRUP ALTINDA</b>farklı tüzel kişiliğe sahip iştirakler adına olması durumunda bu iştiraklerin tam unvanları ile birbirleri ile bağını belirten ilgili yüklenici firmadan alınmış olan imzalı/kaşeli bir yazının sisteme yüklenmesi gerekir.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında seçilmiş olan <b>DESTEK TÜRÜ</b> ve <b>ALT DESTEK TÜRÜ</b> alanlarının sisteme eklenmiş olan sözleşmede verilen hizmet ve faturada/bordroda belirtilen hizmet ile uyumlu olması gerekmektedir. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında seçilmiş olan <b>DESTEK TÜRÜ</b> ve <b>ALT DESTEK TÜRÜ</b> alanlarının Harcama Girişi ekranında seçilen Destek Türü ve Alt Destek Türü ile uyumlu olması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Yurt dışında yapılmış olan veya Yabancı firmalar ile yapılmış olan sözleşme ile ilgili tüm belgelerde <b>TİCARET MÜŞAVİRLİĞİ ONAYI</b> olmalıdır.</li>
                            <ul>
                                <li> Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. Belgenin fotokopisi üzerinde işlem yapılması halinde, belgenin aslı görüldükten sonra onay işlemi yapılır.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında yer alan Sözleşme Tutarı/Kira Bedeli alanına sözleşmede belirtilen toplam tutar yazılmalıdır. Eğer sözleşme toplam tutarı çeşitli sebepler ile net olarak hesaplanamıyor tahmini olarak yazılıyorsa, sözleşme toplam tutarının nasıl elde edildiğine ilişkin yapılan bu hesaplamaya dair ayrıntılı bilginin "Açıklama" alanına yazılması gerekmektedir. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında yazılmış <b>ÖDEME PARA BİRİMİ</b> ekli sözleşmedeki para birimi ile uyumlu olmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Fatura/Bordro tutarı ile sözleşmede belirtilen hizmet bedelleri arasında birebir ilişki kurulabilmelidir. Eğer bu ilişki doğrudan kurulamıyorsa veya sözleşmedeki ifadeler karışıksa "Açıklama" alanına ayrıntılı bilgi yazılarak fatura tutarındaki kalemler ile sözleşmede belirtilen kalemler arasındaki bağlantıya dair bilgi yazılmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Sözleşme ekranında yazılmış olan <b>SÖZLEŞME YÜRÜRLÜĞE GİRME, BAŞLANGIÇ ve BİTİŞ TARİHİ</b> ekli sözleşmede yazılı ilgili tarihler ile birebir tutmalıdır. Eğer sözleşme bitiş tarihi ekli sözleşmede belirtilmemişse ve sözleşme süresine ilişkin bir bilgi yer almıyorsa, ilgili sözleşmenin bitiş süresine ilişkin "Açıklama" bölümünde bilgi yazılmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli sözleşmenin tüm taraflarca <b>İMZALI ve KAŞELİ</b> olması gerekmektedir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli sözleşme <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse yeminli Türkçe/İngilizce tercümesinin sisteme eklenmesi gerekmektedir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Yurtiçi sözleşmelerde eğer <b>DAMGA VERGİSİNİ</b> yararlanıcı firma ödeyecekse, damga vergisinin ödenmiş olduğuna dair bilginin sözleşmeye eklenmesi veya ödemenin yapıldığına dair ödeme belgesinin sisteme yüklenmesi gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Personelin ilgili bölümlerden (yabancı ülkelerde bu bölümlerde eşdeğer bölümlerden) <b>ÖNLİSANS, LİSANS, YÜKSEK LİSANS veya DOKTORA</b> derecelerini aldığına dair onaylı belgeler, ya da kendi <b>MESLEK ÖRGÜTLERİNE</b> girebilmek için yeterli koşullara sahip bulunduğuna dair yararlanıcı tarafından ilgili kurum/kuruluşlardan alınmış onaylı belgelerin ekli olması gererkir.</li>
                            <ul>
                                <li>Resmi internet sitelerinden ulaşılan veya barkodlu/karekodlu belgeler için ayrıca düzenleyen kurum onayı aranmaz.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Personelin <b>UNVAN ve GÖREV TANIMINA</b> ilişkin açıklama yazılarının ekli olması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Son 2 aya ait <b>SGK PRİM ve HİZMET BELGELERİ</b> ekli olması gerekir. Yurt dışında istihdam edilen personel için bu mahiyettki belgelerin ekli olması gerekir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli sözleşmeye ilişkin farklı özel bir durum söz konusu ise bu duruma dair "Açıklama" alanına ayrıntılı olarak bilgi yazılması gerekmektedir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header">
                    <Typography className={accordionClasses.heading}>4) Ödeme Belgesi Ekranı </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Yurt dışında hazırlanmış olan Ödeme belgesi ve eklerinde <b>TİCARET MÜŞAVİRLİĞİNİN ONAY DAMGASI</b> olmalıdır.</li>
                            <ul>
                                <li>Ticaret Müşavirliği/Ataşeliği/Bakanlık Temsilcisi tarafından onaylanması uygun görülen belgelerin üzerine “Döviz Kazandırıcı Hizmet Sektörleri Markalaşma Destekleri Hakkında Karar çerçevesinde onaylanmıştır” şerhinin düşülmesi, imzalanması, isim, soyadı ve tarih yazılması gerekir. Birden fazla sayfayı içeren belgelerde söz konusu şerhin kaç sayfayı kapsadığı belirtilerek sadece ilk ya da son sayfada yer alması ve diğer sayfalara ise Ticaret Müşavirinin/Ataşesinin/Bakanlık Temsilcisinin parafının bulunması yeterlidir. </li>
                                <li>Cari hesap ekstresinde Ticaret Müşavirliği onayı olması zorunlu değildir.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Personel hesabına <b>NET MAAŞ</b> yatmış olduğu ödeme belgesinden anlaşılabiliyor olması gerekir. (IBAN no v.b. bilgilerden)</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış <b>DEKONT BEDELİ</b> ekli ödeme belgesinde yer alan dekont bedeli ile birebir tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış <b>ÖDEME TARİHİ</b> ekli ödeme belgesindeki valör tarihi ile (eğer valör tarihi yoksa işlem tarihi)birebir tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış <b>ÖDEME PARA BİRİMİ</b> ekli ödeme belgesinde yer alan para birimi ile tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış ödemeyi yapan ve ödemeyi teslim alan <b>FİRMA UNVANLARI</b> ekli ödeme belgesinde yer alan firma unvanları ile birebir tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış ödemenin <b>DÜZENLENDİĞİ ÜLKE</b> ile ödeme belgesinin düzenlenmiş olduğu ülke tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli ödeme belgesi banka tarafından <b>İMZALI ve KAŞELİ</b> olmalıdır.</li>
                            <ul>
                                <li>Eğer yurt dışında hazırlanmış bir belge ise ve <u>Ticaret Müşavirliği onayı varsa</u> banka imza ve kaşesinın olması zorunlu değildir.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli ödeme belgesi <b>İNGİLİZCE/TÜRKÇE</b>'den farklı bir dildeyse yeminli Türkçe/İngilizce tercümesinin sisteme eklenmesi gerekmektedir.</li>
                            <ul>
                                <li>Aylık/periyodik ödeme belgelerinde eğer şablon ve açıklamalar birebir aynı ise, sadece bir ödeme belgesinin yeminli tercümesinin yaptırılması ve bunun sisteme eklenmesi yeterlidir. Ancak açıklamalar ve şablon birebir tutmuyorsa mutlaka ilgili belgenin yeminli tercümesinin sisteme eklenmesi gerekmektedir.</li>
                            </ul>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli Fatura ile ekli ödeme belgesindeki tutar birebir tutmuyorsa, ilgili ödemeyi gösteren yararlanıcı firma tarafından <b> İMZALI CARİ HESAP EKSTRESİ</b> mutlaka sisteme eklenmelidir.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli ödeme belgesindeki tutar ile ekli fatura tutarı arasındaki bağlantı doğrudan kurulamıyorsa (karışık bir ödeme ise), ödeme belgesindeki tutar ile fatura tutarı arasındaki ilişkiyi açıklayıcı ayrıntılı bilginin "Açıklama" alanına yazılması gerekmektedir. </li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ödeme ekranında yazılmış <b>ÖDEME BELGESİ NO</b> ekli ödeme belgesinde yazan ödeme belgesi no (sıra no, referans no v.b.) ile tutmalıdır.</li>
                            <li class="checkbox_section_c"><SupportCheckBox />Ekli ödeme belgesine ilişkin farklı özel bir durum söz konusu ise bu duruma dair "Açıklama" alanına ayrıntılı olarak bilgi yazılması gerekmektedir.</li>
                        </ul>
                    </ol>

                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header">
                    <Typography className={accordionClasses.heading}>5) Diğer Dikkat Edilen Hususlar</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <ol>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Ödemenin BANKACILIK sistemi ile yapılması gerekir (Genelgede belirtilen istisnalar hariç)" /></li>
                        <ul>
                            <li>Yararlanıcıların veya işbirliği kuruluşlarının Karar kapsamında destek ödemesinden yararlandırılabilmesi için ödemenin bankacılık sistemiyle yapılması gerekir. Uluslararası standartlarda bankacılık sisteminin yerleşmediği ülkelerde bankacılık sistemi dışında yapılan ödemelerin desteklenebilmesi için, ilgili Ticaret Müşavirliğinin/Ataşeliğinin/Bakanlık Temsilcisinin ödeme belgesinin o ülke şartlarında muteber olduğuna ilişkin onayı alınır.</li>
                        </ul>

                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Harcama belgelerinin YARARLANICI veya HARCAMA YETKİSİ verilen firma adına olması gerekir" /></li>
                        <ul>
                            <li>Yararlanıcıların, Kararın 10 ve 11 inci maddelerinde sayılan faaliyetlerine ilişkin giderlerinin destek ödemesinden yararlandırılabilmesi için; harcama belgelerinin destek kapsamındaki yararlanıcı veya harcama yetkisi verilen şirket adına düzenlenmiş olması gerekir.</li>
                        </ul>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Harcamaya konu firmanın MARKAsının destek kapsamında olması gerekir" /></li>
                        <ul>
                            <li>Harcama yetkisi verilen şirketin sadece destek kapsamına alınan markaya ilişkin harcamaları destek kapsamında değerlendirilir.</li>
                        </ul>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Harcama yetkisi verilen firmanın FAALİYETLERİNİN MARKA'ya yönelik olması gerekir." /></li>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Harcama konusu HEDEF PAZARIN Harcama Ekranında seçilen hedef pazarlar ile uyumlu olması gerekir" /></li>
                        <li class="checkbox_section_c"><SupportCheckBox customLabel="Harcama konusu HEDEF PAZARIN Marka kapsamında onaylanan hedef pazarlar arasında olması gerekir" /></li>
                    </ol>

                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default Item30;