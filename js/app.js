var th = ['','min','milyon', 'milyard','trilyon'];
var h = ["yüz"];
var dg = ['Sıfır','Bir','Iki','Üç','Dörd','Beş','Altı','Yeddi','Səkkiz','Doqquz'];
 var tn = ['on','on bir','on iki','on üç', 'on dörd','on beş','on altı', 'on yeddi','on səkkiz','on doqquz'];
 var tw = ['on','iyirmi',
 'otuz',
 'qırx',
 'əlli', 
 'altmış',
 'yetmiş',
 'səksən',
 'doxsan'];




function change(num){

    num = String(num);
    if (Number(num == 0)){
        return dg[0]
    }
    else if (num <= 9 && num >=1){
        return dg[num]
    }
    else if (num >=10 && num <= 99){
        if (num % 10 == 0){
            return tw[(num / 10) - 1]
        }else{
            two = Math.floor(num / 10);
            remain = num - (two * 10)
            return tw[two - 1] + " " + dg[remain]
        }
    }else if (num >= 100 && num <= 999){
        if(num % 100 == 0){
            return dg[(num / 100)].concat(h)
        }else{
            main = dg[Math.floor(num / 100)] + " " + h;
            remain = tw[Math.floor((num - (Math.floor(num / 100) * 100)) / 10) - 1]
            last = dg[Math.floor((num - (Math.floor(num / 100) * 100)) % 10)]
            return main + " " + remain + " " + last;
        }
    }
    else if (num >= 1000 && num <= 9999){
        if(num % 1000 == 0){
            return dg[(num / 1000)] + " " + th[1]
        }else{
            let main = dg[Math.floor(num / 1000)] + " " + th[1];
            let first =  dg[Math.floor((num - (Math.floor(num / 1000) * 1000)) / 100)] + " " + h;

            let remain = tw[Number(String(num)[2]) - 1]
            let last = dg[Number(String(num)[num.length - 1])];
            return main + " " + first + " " + remain + " " + last
        }
    }
    else if (num >= 10000 && num <= 99999){
        if(num % 10000 == 0){
            return tw[(num / 10000) - 1] + " " + th[1] 
        }else{
            let main = tw[num[0] - 1] + " " + dg[num[num.length - 4]] + " " + th[1]
            let first =  dg[num[num.length - 3]] + " " + h;
            let middle = tw[num[num.length - 2] - 1];
            let last = dg[Number(String(num)[num.length - 1])];
            return main + " " + first + " " + middle + " " + last;
        }
    }
if (num.length > 5){
    document.querySelector("input").disabled = true;
}
}

