import React from 'react';
import ReactDOM from 'react-dom';
import '../themeStyle.css';


function Item00() {

    return (
        <div>
            <h4>Günlük Normal Rutin:</h4>
            <ol>
                <li>Günlük sabahtan yeni başvuru varsa ret durumunu kontrol et. Ret varsa ret yap. Ret yoksa tam incelemeye <u>başlama</u>.</li>
                <li>Günlük eksikten gelen başvuru varsa onların kontrol ve onayına öncelik ver. Çünkü Eray Bey'e gönderdiğinde ve ilave eksiklik çıkarsa 3 aylık sürenin sona ermesi sebebiyle hak mahrumiyeti oluşabilir. Bu nedenle eksikten gelenlerin bir an önce Eray Bey'e iletilmesi gerekiyor.</li>
                <li>Eksikten dönenler tamamlandıktan sonra yeni gelmiş olan ve ret kontrolü yapılmış olan başvuruları incele</li>
                <li>Özellikle onay işlemlerinde destek tutarının hesaplanmasında çok acele etme ve dikkatli ol. Verdiğin her destek tutarının bir açıklaması olsun. </li>
            </ol>

            <h4>Dikkat edilecek kritik noktalar:</h4>
            <ol>
                <li>Ret olması gereken harcamaların tespiti ve reddedilmesi gerekyor. Bu kısmın atlanmaması çok önemli. Özel durumlar haricinde genel olarak harcamaların ret sebepleri aşağıdaki gibidir:</li>
                <ul>
                    <li>Ödeme belgesi tarihinden itibaren başvuru tarihi 6 aylık (fuarlar için 3 ay) süreyi geçen harcamalar </li>
                    <li>Eksik belge bildirimi tarihi üzerinden 3 ay geçen ve geri dönüş yapılmayan harcamalar</li>
                    <li>Zorunlu belgesi eksik olan harcamalar</li>
                    <li>Zorunlu belgesinde ıslak imza/kaşe eksik olan harcamalar</li>
                    <li>Ticaret Müşavirliği onayı zorunlu olan ama eksik olan harcamalar </li>
                </ul>
                <li>Ret olacak bir harcama varsa bir an önce tespitinin yapılması ve ret yapılması çok önemli. Çünkü firma 6 aylık süre içinde ret sebebi eksiklikleri tamamlayıp tekrar başvuru yapabilir. Eğer 6 aylık süre bitiminden sonra ret yapılırsa bu durumda hak mahrumiyeti oluşabilir.</li>
                <li>Eksik bildiriminden geri dönen harcamaların bir an önce kontrolünün yapılarak yeniden eksik belge bildirimi yapılması veya Eray Bey'e onay için gönderilmesi çok önemli. Çünkü yeniden eksik belge tespiti yapılırsa ve 3 aylık süre geçmişse sistem üzerinden değişiklik yapılamadığı için hak mahrumiyeti oluşabilir.</li>
                <li>Onaylanacak harcamalarda destek tutarının doğru tespit edilmesi çok önemli. Destek tutarının tespitinde sapmaya neden olabilecek konular: </li>
                <ul>
                    <li>Bakanlık tarafından reddedilmiş bir firma varsa ve alınan hizmetten bu firma da yararlanıyorsa mutlaka bu firmanın payının destek tutarından düşülmesi gerekiyor. </li>
                    <li>Hedef pazarı Türkiye olan hizmetlerde ilgili destek tutarından Türkiye payının düşülmesi gerekiyor.</li>
                    <li>Türkçe yapılan reklam ve tanıtım harcamaları varsa bu kısmın destek tutarından düşülmesi gerekiyor.</li>
                    <li>Firma tarafından fatura tutarı üzerinden indirim alınmışsa veya credit note durumu varsa, bu durumda firmadan açıklayıcı bilgi alıp destek tutarının hesaplanacağı net ödeme tutarı hakkında bilgi alınması ve bu bilginin kontrolünün yapılması gerekiyor.</li>
                    <li>Faturada Genelge kapsamında desteklenmeyen kalemler varsa (Örnek: seyahat giderleri, elektrik ücretleri, finansal hizmetler v.b.) bunların düşülmesi gerekiyor.</li>
                </ul>
                <li>Fatura, sözleşme ve ödeme belgesindeki firma unvanlarının birbiriyle tutması, ya da ilave belgeler ile aralarındaki ilişkinin kurulabilmesi gerekir. Ödeme belgesinde alıcı firma unvanı, ödeme tutarı ve banka/Müşavirlik imza/kaşenin bulunması ile ödemenin yapıldığının tespiti çok önemli.</li>
            </ol>
        </div>
    );
}

export default Item00;