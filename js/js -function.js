function sum(num1, num2) {
    var total = (num1 + num2);
    alert(total);
}
//sum(1,1);
function sname(name, lastname) {

    alert("merhaba"+ " " + name + " " + lastname);
}
//sname('dudu','karakoyun');

String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    var temp = this;
    try {
        var index = temp.indexOf(stringToFind);
        while (index != -1) {
            temp = temp.replace(stringToFind, stringToReplace);
            index = temp.indexOf(stringToFind);
        }
    } catch (err) { }
    return temp;
}
function ismail(mail) {
    mail = mail.toLowerCase();
    var str = mail.split("");
    var chars = [".", "@", "_", "-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alpha = "s,c,g,o,i,u,a,b,d,e,f,h,j,k,l,m,n,p,r,t,v,q,w,x,y,z";
    var alps = alpha.split(",");
    var tr = ["ş", "ç", "ğ", "ö", "ı", "ü"];
    var isOK = 0;
    if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
        isOK = false;
    } else {
        isOK = true;
        //do more condinations
        for (i = 0; i < chars.length; i++) {
            if ((str[0] == chars[i]) || (str[str.length - 1] == chars[i])) { isOK = false; break; }
            else { isOK = true; }
        }
        if (isOK) {
            var total = 0;
            for (i = 0; i < str.length; i++) {
                if (str[i] == "@") {
                    total += 1; if (total <= 1) { isOK = true; } else { isOK = false; break; }
                }
            }
        }
        if (isOK) {
            total = 0;
            for (i = 0; i < str.length; i++) {
                if (str[i] == ".") {
                    total += 1; if (total <= 2) { isOK = true; } else { isOK = false; break; }
                }
            }

        }
        for (i = 0; i < tr.length; i++) {
            mail = mail.replace(tr[i], alps[i]);

        }
        var combineArray = (alpha + "," + chars.join(",")).split(",");
        for (i = 0; i < str.length; i++) {//girilen mail harfi kadar dön
            if (combineArray.indexOf(str[i]) == -1) {
                mail = mail.replace(str[i], "");
            }
        }
    }
    return isOK;
}

//var mail = "zzo@267.com";
//if (ismail(mail)) {//if true
//    document.write(mail + "" + " <i class='fa fa-check' style='color:green;'></i>");
//} else { document.write(mail + "" + " <i class='fa fa-times' style='color:red;'></i>"); }

function calc(num1, num2, opetype="+") {// + - / *
    switch (opetype) {
        case "+":
            var total = num1 + num2;
            return (total);
            break;
        case "-":
            var total = num1 - num2;
            return (total);
            break;
        case "/":
            var total = num1 / num2;
            return (total);
            break;
        case "*":
            var total = num1 * num2;
            return (total);
            break;
    }
}
var opp = "var sum = calc(10, 5);";
eval(opp);
var minus = calc(10, 5, "-");

function calculator(a, b, type = "+") {
    if ("+-/*".indexOf(type) == -1) { type = "+"; }
    return eval(a + type + b);
}


//document.write(calculator(1, 3, "?"));

function addZero(date) {
    if (date.length < 2) {
        var newnum = "0" + date;
        document.write(newnum);
    }
    else {
        document.write(date);
    }
}
//addZero("50");

function extracter(str, first = "#", last = " ") {//ayıklayıcı
    str = str.split("");
    var start = false, snap = "";
    for (i = 0; i < str.length; i++) {
        var char = str[i];
        if (char == last) {
            start = false;
        }
        if (start == true) { snap += char; }
        if (char == first) {
            start = true; snap += ",";
        }

    }
    snap = snap.slice(1);
    return snap.split(",");
}

function tag () {
    var slogan = "Hatay'ın anavatana #katılışının yıl dönümünde #hatay #anavatan #atatürk ve silah arkadaşlarını rahmet ve minnetle anıyoruz.";
    var output = slogan;

    var snaps = extracter(slogan, "#", " ");
    for (i = 0; i < snaps.length; i++) {
        output = output.replace("#" + snaps[i], "<a href='#'>#" + snaps[i]+"</a>");
    }
    return output;
}

//document.write(tag());

var calc = {
    name: "Hesap Makinesi",
    id: 123456789,
    plus: function (x, y) {
        return (x + y);
    },
    minus: function (x, y) {
        return (x - y);
    },
    times: function (x, y) {
        return (x * y);
        
    },
    division: function (x, y) {
        return (x / y);
    }
}
//alert(calc.times(5, 7));

var replace = {
    those: function (str = "info@267.com.tr", findes = ["@", "."], replaces = ["?", "!"]) {//default value
        for (i = 0; i < findes.length; i++) {
            str = str.replaceAll(findes[i], replaces[i]);
        }
        return str;
    }

}

//document.write(replace.those());//info?267!com!tr

//var str = "{{name}}'de {{pay}} liram kaldı";
//var out = replace.those("{{name}}'de {{pay}} liram kaldı", ["{{", "}}", "'"], ["{", "}", " "]);
//document.write(out);


//<tr><td colspan="2"><b></td></tr></b><br>
var personals = [{
    name: "Dudu KARAKOYUN",
    username: "dudu",
    age: "29",
    class: "coder",
    year: 3,
    lang: "tr,en"
}, {
    name: "Çiğdem ER",
    username: "cigdem",
    age: "39",
    class: "pazarlama",
    year: 5,
    lang: "tr"
    }];

var products = [{
    id: 10,//products id
    name: "pencil",
    pay: "29"
}, {
    id: 9,
    name: "book",
    pay: "29"
}];

var orders = [{
    userid: 0,
    id: 9,//product id
    total: 5
}, {
    userid: 0,
    id: 10,
    total: 3
},
{
    userid: 0,
    id: 11,
    total: 1
}];



var newer = [{
    //name: value,
    name: "XXX XXXX",
    username: "xxx",
    age: "29",
    class: "coder",
    year: 3,
    lang: "tr,en"
}];

//alert(personals[0].age);

var persons = {
    data: null,
    username: function (i) { return this.data[i]["username"]; },
    doTable: function () {
        var ps = this.data;
        if (ps) {
            document.write('<table class="table table-striped table-bordered table-hover">');
            var turn = 0, len = Object.keys(ps).length;
            for (var i in ps) {//2 kere döner
                var line = "<tr><td colspan='2'><hr /></td></tr>"
                for (var person in ps[i]) {//4 kere döner
                    var val = ps[i][person];//ps[0]["name"];
                    if (person == "name") {
                        document.write('<tr><td colspan="2"><b>' + val + '</b></td></tr>');
                    }
                    else {
                        document.write('<tr><td>' + person + ' : </td><td>' + val + '</td></tr>');
                    }
                }
                ///////////////////////////////////////////orders codes
                var userid = turn;
                if (persons.isOrder(userid)) {
                    document.write("<tr><td>Siparişler</td><td><ul class='list-group'>");
                    var gtotal = 0;
                    for (var o in orders) {
                        if (userid == orders[o]["userid"]) { //personals in id find
                            for (var p in products) {
                                if (products[p]["id"] == orders[o]["id"]) {
                                    var total = calculator(products[p]["pay"], orders[o]["total"], "*");
                                    document.write('<li class="list-group-item"><span class="badge">' + total + ' ₺</span>' + products[p]["name"] + ' (' + orders[o]["total"] + ') Fiyatı:' + products[p]["pay"] + ' </li>');
                                    gtotal += total;
                                }
                            }

                        }
                    }
                    document.write('<li class="list-group-item list-group-item-success"><span class="badge">' + gtotal + ' ₺</span> Genel Toplam </li>');
                    document.write("</ul></td></tr>");
                }
                ///////////////////////////////////////////orders codes
                if (len - 1 > turn) { document.write(line); }
                turn += 1;
            }
            document.write("</table>");
        }
    },
    isOrder: function (userid) {//order find userid
        var result = false;
        for (var o in orders) {
            if (userid==orders[o]["userid"]) {
                result = true;
            }
        }
        return result;
    },
    remove: function (username) {
        for (var i in this.data) {
            if (username == this.username(i)) {
                delete this.data[i];
            }
        }
        return this.data;
    },
    user: function (username) {
        this.del = function () {
            alert("ss");
            return false;
        }
        var user;
        for (var i in this.data) {
            if (username == this.username(i)) {
                user = this.data[i];//object
            }
        }
        return user;
    },
    update: function (username, find, newValue) {//boolean
        try {
            for (var i in this.data) {
                if (this.username(i) == username) {//finded username!
                    this.data[i][find] = newValue;//set new value to user in item
                }
            }
        } catch (err) { alert(err); return false; }//catch errors so alert message and return boolean FALSE!
        return true;//its all okey return boolean TRUE
    },
    create: function (name, defaultValue = "", username) {
        if (username) {
            persons.update(username, name, defaultValue);
            //for (var i in this.data) {
            //    if (this.data[i]["username"]==username) {
            //        this.data[i][name] = defaultValue;
            //    }
            //}
        } else {
            for (var i in this.data) {
                this.data[i][name] = defaultValue;
            }
        }
    },
    creators: function (username, values) {
        if (username) {
            for (var i in this.data) {
                if (this.username(i) == username) {
                    for (var val in values) {
                        var obj = values[val];//object { level: "starter" }
                        for (var name in obj) {//level
                            //var name =Object.keys(obj).toString();//level
                            var addValue = obj[name];//starter
                            persons.create(name, addValue, username);
                        }
                    }
                }
            }
        }
    },
    add:  {
        product: function (name, pay) {
            //var newId = Object.keys(products).length;
            var newId = 0, max = 0;

            for (var i in products) {
                var id = products[i]["id"];
                if (id > max) {
                    max = id;
                }
            }
            newId = max + 1;
            var product = [{
                id: newId,
                name: name,
                pay: pay
            }];

            Array.prototype.push.apply(products, product);
            return products;
        },
           person: function (newPerson) {
               Array.prototype.push.apply(persons.data, newPerson);
               return persons.data;
        }
    },
    buy: function (username, id, total) {
        for (var b in personals) {
            if (personals[b]["username"] == username) {
                var order = [{
                    userid: b,
                    id: id,
                    total: total
                }];
                Array.prototype.push.apply(orders, order);
            }
        }
        return orders;
    },
    outbuy: function (username, productId) {//orders["userid"],products["id"]
        for (var b in personals) {
            if (personals[b]["username"] == username) {
                for (var o in orders) {
                    if (orders[o]["userid"] == b) {
                        if (productId==orders[o]["id"]) {
                            delete orders[o];
                        }
                    }
                }
            }
        }
        return orders;
    },
    orderUpdate: function (id, find, newValue) {
        for (var o in products) {
            if (products[o]["id"] == id) {
                products[o][find] = newValue;
            }
        }
        return products;
    }
}
persons.data = personals;


persons.create("gender", "kadın");
persons.update("cigdem", "gender", "unknown");
persons.orderUpdate(9, "pay", 65);
persons.create("level", "beginner", "dudu");
persons.creators("cigdem", [{ level: "starter" }, { child: "1" }, { card: "driver license" }]);
persons.add.product("notebook", "35");
persons.add.person(newer);
persons.buy("dudu", 9, 4);//dudu, 9 idli üründen 5 adet satın aldı. EKLE
//persons.outbuy("dudu", 9);
//var output = persons.update("dudu", "age", 30); //persons.data[0]["age"] = 30;
//if (output) { alert("güncelleme başarılı"); } else { alert("hata! güncellenemedi!"); }
//persons.remove("cigdem");
//var dudu = persons.user("xxx"); alert(dudu["name"].first);
persons.doTable();