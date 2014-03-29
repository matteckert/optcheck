module.exports = exports = function(args) {
    var ret = Object.create(optcheck);
    ret.opt = (typeof args == 'object') ? args : {};
    return ret;
};

var optcheck = {
    opt: {},
    
    requires: function() {
        var opt = this.opt;
        [].reduce.call(arguments, function(p, c) {
            return p.concat(c);
        }, []).forEach(function(r) {
            if (typeof opt[r] == 'undefined')
                throw new Error('Missing requirement: ' + r);
        });
        return this;
    },
    
    defaults: function(defs) {
        defs = (typeof defs == 'object') ? defs : {};
        var opt = this.opt;
        Object.keys(defs).forEach(function(d) {
            opt[d] = (typeof opt[d] == 'undefined') ? defs[d] : opt[d];
        });
        return this;
    }
};
