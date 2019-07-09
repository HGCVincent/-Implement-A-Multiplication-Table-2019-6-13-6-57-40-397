function isValid(start,end){
    return start<=end && start>0 && end<1000;
}

function createMulplicationTable(start,end){
    if (!isValid(start,end)){
        return null;
    }
    else {
        var multiplicationTable = '';
        for (var i=start;i<=end;i++) {
            for (var j=start;j<=i;j++) {
                var re= i * j;
                multiplicationTable += j + "*" + i + "=" + re + " " + " ";
            }
            multiplicationTable += "\n" ;
        }
        return multiplicationTable;
    }
}

module.exports ={
    isValid,createMulplicationTable,
}