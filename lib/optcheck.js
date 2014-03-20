module.exports = exports = function(args) {
    var ret = Object.create(optchk);
    ret.opt = (typeof args == 'object') ? args : {};
    return ret;
};

var optchk = {
    opt: {},
    
    requires: function(reqs) {
        reqs = (Array.isArray(reqs)) ? reqs : [];
        var opt = this.opt;
        reqs.forEach(function(r) {
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
