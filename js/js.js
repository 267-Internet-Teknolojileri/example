//var arr = ["DUDU", "ÖMER", "ALİ", "VELİ"], nm = "";

//for (i = 0; i < arr.length; i++) {

//    nm += arr[i];

//    if (i!= arr.length -1) { //diznin son index değerini bulur
//        nm +='_';
//    }
//}
//alert(nm);

//for (i = 0; i < arr.length; i++) {
//    if (arr.length - 1 != i) {//diznin son index değerini bulur
//        nm += arr[i] + '_';
//    }
//    else {
//        nm += arr[i];
//    }

//}
//alert(nm);

//document.write("<h1>ana başlık</h1>");
//document.write("<h2>");
//document.write("alt başlık</h2>");




//var rows = prompt("Satır giriniz");//2
//var cols = prompt("Sütün değerini giriniz");//3
//document.write('<table border="5" style="width:100%;">');

//for (tr = 0; tr < rows; tr++){
    
//    document.write("<tr>");
//    for (td = 0; td < cols; td++) {
//        document.write("<td>" + (((tr * rows) + td) + 1) + "</td>");
//    }
//    document.write("</tr>");
//}

//document.write("</table>");

//var name = prompt("Adınızı giriniz."), numb = prompt("Adınızın ekrana kaç kere girileceğini giriniz");
//for (i = 0; i < numb; i++) {
//    document.write("<h1>" + name + "</h1>");
//}
//örnek2//
//var numb1 = prompt("Sayı 1 ");
//var numb2 = prompt("Sayı 2 ");
//var compare = numb1 * numb2;
////if (numb1 == numb2) { compare = numb1; }
//compare = (numb1 == numb2) ? numb1 : compare; //değişken = (koşul) ? [true] : [false];
//for (i = 0; i <= (100 / compare); i++) {//25
//    document.write((i * compare) + " ");
//}

//var numb1 = prompt("Sayı 1 ");
//var numb2 = prompt("Sayı 2 ");
   
//if (numb1 !== numb2) {
//    for (i = 1; i < (100 / (numb1 * numb2)); i++){
//        document.write((i * (numb1 * numb2)) + " ");
//    }
//}

//    else {
//        document.write((i * numb1) + " ");

//}

//var numb = prompt("sayı gir"), total = 0;
//for (i = 1; i < numb; i += 2) {
//    total +=  i;
//}
//document.write(total);

//String.prototype.replaceAll = function (stringToFind, stringToReplace) {
//    var temp = this;
//    try {
//        var index = temp.indexOf(stringToFind);
//        while (index != -1) {
//            temp = temp.replace(stringToFind, stringToReplace);
//            index = temp.indexOf(stringToFind);
//        }
//    } catch (err) { }
//    return temp;
//}


//ONLY using these >>//str.split, str.replace, for, if
//var names = ["id", "name", "text"];
//var values = ["3", "gözlük","mavi"];//values[0]=3
//var str = "ido'nin '{id}' kodlu {text} ürünü {detail} renkli yolda!";//Ali'nin 3 kodlu 'gözlük' ürünü yolda!
//var pars = str.split("");
//var output = "";
////0//Ali'nin 
////1//id} kodlu 
////2//name} ürünü yolda!
////alert(pars);
//var start = false, snap = "";
//for (i = 0; i < pars.length; i++) {
//    var char = pars[i];//A
//    if (char == "}") { start = false; snap += ","; }
//    if (start == true) {
//        snap += char;
//    }
//    if (char == "{") { start = true; }
//}
//snap = snap.slice(0, -1);
//var repchange = str;
//var snaps = snap.split(",");
//for (i = 0; i < snaps.length; i++) {
//    if ((snaps[i]) == (names[i])) {
//        repchange = repchange.replaceAll("{" + snaps[i] + "}", values[i]);
//    }
    
//}
////<a href="{href}"><img src='/{src}' class='img-responsive' title="{title}" /></a>
//document.write(repchange);//id,name,text,pay

//sonuna .tr varsa sil işlemi
//267.com.tr çıktı = 267.com
//var str = "...";//prompt("silinecek son karakterler");
//var strs = str.split("");
//var word = "267.com.1...";
//var words = word.split("");
//if (word.indexOf(str) != -1) {//içinde varsa
//    word = word.slice(0, 9);

//    //for (i = 0; i < strs.length; i++) {
//    //    if (words[(words.length - 1) - i] == strs[(strs.length - 1) - i]) {
//    //        word = word.slice(0, -1);
//    //    }
//    //}
//}
//document.write(word);





/*Klavyeden girilen yazıyı ekrana tersten yazdırın;/*/

//var name = prompt("Adınızı giriniz.");//dudu
//var str = name.split("");
//for (i = (str.length-1); i >= 0; i--) {
//    document.write(str[i]);

//}
/*Klavyeden girilen mail adresi mi değil mi kontrol edilecek/*/
//var mail = "dudu.süral267.CO@M".toLowerCase();//prompt("mail adresinizi giriniz.");/*/dudu@267.com.tr*/
//var str = mail.split("");
//var chars = [".", "@", "_", "-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var alpha = "s,c,g,o,i,u,a,b,d,e,f,h,j,k,l,m,n,p,r,t,v,q,w,x,y,z";
//var alps = alpha.split(",");
//var tr = ["ş", "ç", "ğ", "ö", "ı", "ü"];
//var isOK = 0;
//if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
//    isOK = false;
//} else {
//    isOK = true;
//    //do more condinations
//    for (i = 0; i < chars.length; i++) {
//        if ((str[0] == chars[i]) || (str[str.length - 1] == chars[i])) { isOK = false; break;}
//        else {isOK = true;}
//    }
//    if (isOK) {
//        var total = 0;
//        for (i = 0; i < str.length; i++) {
//            if (str[i] == "@") {
//                total += 1; if (total <= 1) { isOK = true; } else { isOK = false; break; }
//            }
//        }
//    }
//    if (isOK) {
//        total = 0;
//        for (i = 0; i < str.length; i++) {
//            if (str[i] == ".") {
//                total += 1; if (total <= 2) { isOK = true; } else { isOK = false; break; }
//            }
//        }

//    }
//    for (i = 0; i < tr.length; i++) {
//            mail = mail.replace(tr[i], alps[i]);
        
//    }
//    var combineArray = (alpha + "," + chars.join(",")).split(",");
//    for (i = 0; i < str.length; i++) {//girilen mail harfi kadar dön
//        if (combineArray.indexOf(str[i]) == -1) {
//            mail = mail.replace(str[i], "");
//        }
//    }
//}
//if (isOK==true) {
//    document.write(mail + "" + " <i class='fa fa-check' style='color:green;'></i>");
//} else { document.write(mail + "" + " <i class='fa fa-times' style='color:red;'></i>"); }

//var name = "dudu";
//var w = prompt("harf");//u
//str = name.split("");
//var total = 0;
//for (i = 0; i < str.length; i++) {
//    if (str[i] == w) {
//        total += 1;
//    }
//}
//document.write(total);


//var numb = 3;
//var age = prompt("Yaşınızı giriniz.");
//if (numb > age) {
//    alert("Yaşınız daha büyük!!");
//}
//else if (numb == age) {
//    alert("Yaşınızı doğru girdiniz!!");
//}
//else if (numb < age) {
//    alert("Yaşınız daha küçük!!");
//}

//var note = prompt("Notunuzu giriniz.");
//if ((note >= 85) && (note <= 100)) {
//    alert("tebrikler AA aldınız.");
//}
//else if ((note <= 84) && (note >= 75)) {
//    alert("tebrikler BB aldınız.");
//}
//else if ((note <= 74) && (note >= 65)) {
//    alert("tebrikler CC aldınız.");
//}
//else if ((note <= 64) && (note >= 55)) {
//    alert("tebrikler DD aldınız.");
//}
//else if ((note <= 54) && (note >= 0)) {
//    alert("tebrikler FF aldınız.");
//}
//else {
//    alert("sayısal değer giriniz.");
//}

//var number = prompt("bir sayı giriniz.");
//if (number >= 0) {
//    alert("girilen sayı pozitiftir");
//}
//else {
//    alert("girilen sayı negatiftir.");
//}
////////////////////////////
//var day = prompt("Okullar hangi gün tatil");
//switch (day) {
//    case "pazartesi":
//        alert("Üzgünüm okulun ilk günü");
//        break;
//    case "salı":
//        alert("Üzgünüm okulun ikinci günü");
//        break;
//    case "çarşamba":
//        alert("Üzgünüm okulun üçüncü günü");
//        break;
//    case "perşembe":
//        alert("Üzgünüm okulun dördüncü günü");
//        break;
//    case "cuma":
//        alert("okulun son günü");
//        break;
//    case "cumartesi":
//        alert("Tebrikler tatil");
//        break;
//    case "pazar":
//        alert("Tebrikler, tatil");
//        break;
//    default:
//        alert("Haftanın günlerinden birini girmeliydiniz");
//}
///////////////////////////////
//var age = prompt("yaşınızı giriniz");
//switch (true) {
//    case (age > 18):
//        alert((age - 18) + " senedir ehliyetiniz var");
//        break;
//    case (age == 18):
//        alert("ehliyetinizi yeni aldınız");
//        break;
//    case ((age < 18) && (age >= 4)):
//        alert("ehliyet almanıza " + (18 - age) + " sene var.");
//        break;
//    case ((age >= 0) && (age < 4)):
//        alert("bilgisayar kullanamazsın");
//        break;
//    case (age < 0):
//        alert("yaş eksi değer alamaz");
//        break;
//    default:
//        alert("Lütfen sayısal değer giriniz.");
//        break;
//}
///////////////

