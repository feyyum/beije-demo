# Beije

Beije Software Developer Internship için yapılan case çalışmasıdır. Expo kullanılarak React Native ile case'de belirtilen sayfanın klonu yapılmıştır.

Çalıştırmak için [Expo Installation](https://docs.expo.dev/get-started/installation/) sayfasındaki gereklilikler sağlanmış olmalıdır. Sonrasında ise `npx expo start` komutu ile proje dizininde çalıştırılabilir.

[![Preview Video](https://img.youtube.com/vi/A_chwOd5XsI/0.jpg)](https://www.youtube.com/watch?v=A_chwOd5XsI)

### Notlarım

Expo kullanmak her ne kadar demo projenin geliştirme ve test aşamasında çok fazla kolaylık sağlamış olsa da karşıma çeşitli sorunlar çıkardı. Bu sorunların üstüne gitmek proje teslimini geciktirecekti. Bazılarında yetenek çıkarımı yapılamıyor, bu nedenle atlamak için kendimi kolayca ikna ettim.

- İlk ve bence en göze çarpan problemimiz kullandığım slider komponenti -ürün miktarı seçmemizi sağlayan kaydırmalı basamaklı çubuk-. Bu komponent topluluk tarafından geliştiriliyor ve expo kullandığım için buna mahkum sayılırdım. Slider'dan değer seçip sonraki sayfada o değerin silinmesi için paketten çıkar dediğimde slider tekrar 0 -sıfır- noktasına geri gelmiyor. Ancak state başarıyla güncelleniyor. Bunun sebebi slider'da bir value değeri atayamıyor olmamız. Olası çözümlerinden biri sonraki sayfadan geri geldiğimizde komponentin yeniden render olmasını sağlamak. Ancak bu sefer de halihazırda elimizde bulunan state'ler slider'da gösterilmiyor. Bu senaryonun daha kötü olduğunu düşünerek ilk halinde bıraktım. RN-CLI kullanmış olsaydım kesinlikle farklı bir kütüphaneye geçiş yapardım.

- Bir diğer konu ise ürünleri kategorize ettiğimiz tab-view komponenti. Bu komponenti, 2.16 versiyonundan sonra ScrollView'da tab-view'ımızı yalnızca flex değeri vererek kullanabiliyoruz -güncel sürüm 3.5.1-. Bu da tam sayfa tab-view istemediğim ScrollView parent'lı komponentlerde tab sayfalarının yok olmasına sebep oluyor. Versiyon düşürmek istedim ancak reanimated gibi kütüphaneler sorun çıkardı. Bu nedenle statik bir yükseklik verdim. Bu da tab-view'ın altında iki ürün de olsa üç ürün de olsa butonun aynı yerde durmasına sebep oluyor.

- Son olarak yapmaktan pişman olduğum bir redux initial state yapısı kurdum. Bazı iterasyonlar çok zorlaştı, modülerlik bazı noktalarda bozuldu ve olası performans sorunları ihtimaline yol açtı. Ancak daha önce de bahsettiğim gibi teslim süresinin uzaması da benim için büyük bir baskı oluşturuyordu. Kaliteli kod ile zaman baskısı arasında gerekli önceliklendirmeyi yaparak dengeyi sağlamaya çalıştım. Ek olarak Chat-GPT ile olası performans sorunlarının çözümlerine erişmeye çalıştım.

Teşekkürler.

EDIT 10.03.22:
Tested on iPhone 14 - 14 Pro - 14 Plus - 14 Pro Max iOS 16.2
Tested on Google Pixel 6 Android API 31
