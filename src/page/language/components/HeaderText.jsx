import React from "react";

function HeaderText({ lang }) {
  return (
    <div
      className={`lang-headerText ${lang} p-5 rounded-sm flex flex-col gap-4 w-full`}
    >
      <h1 className="font-bold text-3xl">
        {lang == "html" && html.header}
        {lang == "css" && css.header}
        {lang == "javascript" && javascript.header}
        {lang == "php" && php.header}
        {lang == "mysql" && mysql.header}
        {lang == "laravel" && laravel.header}
        {lang == "python" && python.header}
        {lang == "git" && git.header}
      </h1>
      <p className="font-medium opacity-80">
        {lang == "html" && html.text}
        {lang == "css" && css.text}
        {lang == "javascript" && javascript.text}
        {lang == "php" && php.text}
        {lang == "mysql" && mysql.text}
        {lang == "laravel" && laravel.text}
        {lang == "python" && python.text}
        {lang == "git" && git.text}
      </p>
    </div>
  );
}

const html = {
  header: "HTML Dersleri",
  text: "Hiper Metin İşaretleme Dili yani HTML, web sayfasındaki yazıları belli başlı HTML etiketleri ile işaretleyerek tarayıcıların bu metinleri anlamlandırmasına yardımcı olur. Ayrıca bu sayede CSS ve Javascript ile sayfanın görseli ve dinamikliği oluşturulur.",
};
const css = {
  header: "CSS Dersleri",
  text: "Basamaklı Stil Şablonları yani CSS, web sayfasının görünümünü ayarlamak için kullanılır. Belli başlı özellikleri ile web sayfasında hangi etiketin nasıl görüneceğini belirleyebilir ve bu sayfa gibi harika web sayfaları oluşturabilirsiniz.",
};
const javascript = {
  header: "Javascript Dersleri",
  text: "Javascript, şu an dünyanın en popüler programlama dilidir. Öğrenmesi kolay, eğlenceli ve uzun bir süreçtir. Bu kategori altında size temelden başlayarak ileri seviyeye kadar Javascript dersleri hazırlamış olacağız.",
};
const php = {
  header: "PHP Dersleri",
  text: "JPersonel Home Page yani PHP, web sayfalarınızı dinamik hale getirmenizi sağlayacak bir yazılım dilidir. Bu sayede web sayfalarınızı PHP'de geliştirdiğiniz bir yönetim paneli ile dinamik hale getirerek yönetimini kolaylaştırabilirsiniz.",
};
const mysql = {
  header: "MySQL Dersleri",
  text: "Veritabanı yönetim sistemlerinden birisi olan MySQL, veritabanı işlemleriniz kolaylaştırmak için kullanabileceğiniz bir RDMS sistemidir.",
};
const laravel = {
  header: "Laravel Dersleri",
  text: "Laravel 7.x sürümüyle ilgili videolu ve yazılı eğitimleri bu bölüm altında bulabilirsiniz. Dersler her gün güncellenmektedir ve yeni sürümüne uygun haliyle sizlere sunulmaktadır.",
};
const python = {
  header: "Python Dersleri",
  text: "Güncel python dersleri yakında başlayacaktır.",
};
const git = {
  header: "Git Dersleri",
  text: "Git, büyükten küçüğe her türlü projelerde kullanılan ücretsiz ve açık kaynaklı bir dağıtık versiyon kontrol sistemidir.",
};

export default HeaderText;
