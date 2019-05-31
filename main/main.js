module.exports = function main(inputs) {
    var dis = inputs["distance"];
    var time = inputs["parkTime"];
    var res = 0;
    if(dis<=2){
        res = 6+0.25*time;
    }
    else if(dis>2&&dis<=8){
        res = 0.8*(dis-2)+6+0.25*time;
    }
    else if(dis>8){
        res = 10.8+(dis-8)*1.2+0.25*time;
    }

    res = Math.round(res);
    return res;
};