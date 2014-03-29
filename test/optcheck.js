var optcheck = require('../lib/optcheck');
require('should');

describe('optcheck', function() {
    var options; 
    
    beforeEach(function() {
        options = {a: '1', b: '2', c: '3'};
    });
    
    it('returns the same object if nothing is done', function() {
        optcheck(options);
        options.should.eql({a: '1', b: '2', c: '3'});
    });
    
    it('overwrites defaults when property is present', function() {
        optcheck(options).defaults({a: '7'});
        options.should.have.property('a', '1');
    });
    
    it('adds defaults when property is not present', function() {
        optcheck(options).defaults({d: '4'});
        options.should.have.property('d', '4');
    });
    
    it('enforces requirements by throwing an error', function() {
        optcheck(options).requires.bind(null, ['d']).should.throw(/d/);
    });
    
    it('does nothing if requirements are met', function() {
        optcheck(options).requires(['a']).should.eql(optcheck(options));
        options.should.eql({a: '1', b: '2', c: '3'});
    });

    it('allows multiple requirement arguments', function() {
        optcheck(options).requires.bind(null, 'a', 'b', 'd').should.throw(/d/);
    });
    
    it('readme', function() {
        var args = {async: false, type: 'json'};
        optcheck(args)
            .defaults({
                async: true,
                url: 'http://localhost'
            })
            .requires('type', 'url');
        args.should.eql({async: false, type: 'json', url: 'http://localhost'});
    });
});
