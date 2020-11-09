# Alandan Cevre Bul

## Alandan Cevre Bul Etkinliği Tutorial @unplugged
![kareAlanı](https://raw.githubusercontent.com/umitugurlu/alandancevrereturn/master/kare.png)

## Değişkenlerimizi Tanımlayalım

Öncelikle ``kenar`` ve ``cevre`` değişkenlerimizi tanımlayalım. ``|| variables: set kenar to 0||`` ve 
``|| variables: set cevre to 0||``

```blocks 
let cevre = 0
let kenar = 0
```

## Alandan Kenar Hesaplama @fullscreen

Alan değerinden kenar bilgisini hesaplayabilmek için ``||functions: funtion alandanKenarBul||`` 
fonksiyonunu hazırlayalım.

```blocks
function alandanKenarBul (alan: number) {
   
}

```

## Fonksiyon Değişkenine Değer Atama

Kenar değeri hesaplandıktan sonra saklaması için ``||variables: kenar ||``değişkenine değerini atayalım.

``|| variables: set kenar to 0||``

#### ~ 

açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları 
açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları 
açıklamalar ipuçları açıklamalar ipuçları açıklamalar ipuçları 

```blocks 
function alandanKenarBul (alan: number) {
    kenar =0
    }

    ```
## ``||Math:square root||`` Bloğunu Kullanalım.

``||math:square root||`` bloğunu kullanarak ``||variables: alan||`` parametresinden gelen değerin 
karekökünü hesaplayalım.

```blocks

function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    }

    ```

## Sonuçları Gösterelim

    ``||basic:on start||`` bloğu içerisinde fonksiyon çağırarak sonuçları gösterelim.
    ``||basic: showNumber||`` kod bloğunu kullanacağız.

    ```block
    basic.showNumber(0)

    ```

## Fonksiyonları Çağıralım. @unplugged

Çevre sonucunu görebilmek için ``||functions:call Cevre Hesapla||`` kod bloğunu kullanarak 
 ``||functions:alandanKenarBul||`` fonksiyonundan gelen sonuç için çağıracağız.
 Projenin tamamlanmış halinde kod blokları aşağıdaki gibi olacaktır.

 ``|Download|`` butonuna tıklayarak Micro:Bit cihazınıza indirebilirsiniz.

 ```blocks 
 function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
let cevre = 0
let kenar = 0

kenar = 0
cevre = 0

basic.showNumber(CevreHesapla(alandanKenarBul(36)))
```