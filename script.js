//reverse string with reg expressions
function bigfn() {
    String.prototype.reverse = function reverse() {

        var self = this;
        var revStr = '';
        for (var i = this.length - 1; i > -1; revStr += self[i--]) {
            return revStr;
        }
    }

    var word = document.getElementsByTagName('input')[0].value;
    var arr = word.split('');
    document.write(arr.reverse().toString().replace(/,/g,''));
}
