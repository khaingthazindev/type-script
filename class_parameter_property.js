var Container = /** @class */ (function () {
    function Container(data) {
        if (data === void 0) { data = 10; }
        this.data = data;
    }
    return Container;
}());
var con = new Container();
console.log('con.data: ', con.data);
