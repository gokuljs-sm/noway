window._noway = {
    "createElem": function(obj){
        if(typeof(obj.element) !== "string"){
            if(window._noway.debug === true){
                console.error('TypeError: Element must be a string data type');
            }
            return 'Element must be a string data type';
        }

        if(typeof(obj.id) !== "undefined"){
            if(typeof(obj.id) !== "string"){
                if(window._noway.debug === true){
                    console.error('TypeError: Element id must be a string data type');
                }
                return 'Element id must be a string data type';
            }
        }

        if(typeof(obj.class) !== "undefined"){
            if(typeof(obj.class) !== "string" && (typeof(obj.class) !== "object" || obj.class === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element class must be a string data type');
                }
                return 'Element class must be a string data type';
            }
        }

        if(typeof(obj.attr) !== "undefined"){
            if(typeof(obj.attr) !== "object" || obj.attr === null){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object attributes property must be a object');
                }
                return 'Element attributes property must be a object';
            }
        }

        if(typeof(obj.text) !== "undefined"){
            if(typeof(obj.text) !== "string"){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object text property must be a string data type');
                }
                return 'Element object text property must be a string data type';
            }
        }

        if(typeof(obj.html) !== "undefined"){
            if(typeof(obj.html) !== "string"){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object html property must be a string data type');
                }
                return 'Element object html property must be a string data type';
            }
        }

        if(typeof(obj.append) !== "undefined"){
            if(typeof(obj.append) !== "string" && (typeof(obj.append) !== "object" || obj.append === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.element) === "string"){
            var a = __createElem(obj.element);

            if(typeof(obj.class) === "string"){
                __setAttr(a, 'class', obj.class);
            }

            if(typeof(obj.class) === "object"){
                if(obj.class !== null){
                    var classes = '';
                    for(var i = 0; i < obj.class.length; i++){
                        classes = i === 0 ? obj.class[i] : classes + ' ' + obj.class[i];
                    }
                    __setAttr(a, 'class', classes);
                }
            }

            if(typeof(obj.id) === "string"){
                __setAttr(a, 'id', obj.id);
            }

            if(typeof(obj.attr) === "object"){
                if(obj.attr !== null){
                    for(key in obj.attr){
                        __setAttr(a, key, obj.attr[key]);
                    }
                }
            }

            if(typeof(obj.text) === "string"){
                __append(a, __createText(obj.text));
            }

            if(typeof(obj.html) === "string"){
                a.innerHTML = obj.html;
            }

            if(typeof(obj.append) === "string" || (typeof(obj.append) === "object" && obj.append !== null)){
                if(typeof(obj.append) === "string"){
                    if(/^\#/.test(obj.append) === true){
                        if(document.getElementById(obj.append.replace(/^\#/, ''))){
                            __append(document.getElementById(obj.append.replace(/^\#/, '')), a);
                        }
                    }

                    if(/^\./.test(obj.append) === true){
                        if(document.querySelectorAll(obj.append)){
                            var cne = document.querySelectorAll(obj.append);
                            var b = a.outerHTML;
                            b.innerHTML = a.innerHTML;
                            for(var i = 0; i < cne.length; i++){
                                cne[i].innerHTML = b;
                            }
                        }
                    }
                }

                if(typeof(obj.append) === "object"){
                    __append(obj.append, a);
                }
            }

            return a;
        }
    },
    "text": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.text) !== "undefined"){
            if(typeof(obj.text) !== "string"){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object text property must be a string data type');
                }
                return 'Element object text property must be a string data type';
            }
        }
        
        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.text) === "string"){
                            __append(b, __createText(obj.text));
                        }
                        return b;
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.text) === "string"){
                                __append(cne[i], __createText(obj.text));
                            }
                        }
                        return cne;
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.text) === "string"){
                    __append(obj.element, __createText(obj.text));
                }
                return obj.element;
            }
        }
    },
    "html": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.html) !== "undefined"){
            if(typeof(obj.html) !== "string"){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object html property must be a string data type');
                }
                return 'Element object html property must be a string data type';
            }
        }

        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.html) === "string"){
                            b.innerHTML = obj.html;
                        }
                        return b;
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.html) === "string"){
                                cne[i].innerHTML = obj.html;
                            }
                        }
                        return cne;
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.html) === "string"){
                    obj.element.innerHTML = obj.html;
                }
                return obj.element;
            }
        }
    },
    "attr": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.attr) !== "undefined"){
            if(typeof(obj.attr) !== "object" || obj.attr === null){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object attributes property must be a object');
                }
                return 'Element attributes property must be a object';
            }
        }

        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.attr) === "object"){
                            if(obj.attr !== null){
                                for(key in obj.attr){
                                    __setAttr(b, key, obj.attr[key]);
                                }
                            }
                        }
                        return b;
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.attr) === "object"){
                                if(obj.attr !== null){
                                    for(key in obj.attr){
                                        __setAttr(cne[i], key, obj.attr[key]);
                                    }
                                }
                            }
                        }
                        return cne;
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.attr) === "object"){
                    if(obj.attr !== null){
                        for(key in obj.attr){
                            __setAttr(obj.element, key, obj.attr[key]);
                        }
                    }
                }
                return obj.element;
            }
        }
    },
    "addClass": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.class) !== "undefined"){
            if(typeof(obj.class) !== "string" && (typeof(obj.class) !== "object" || obj.class === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element class must be a string data type');
                }
                return 'Element class must be a string data type';
            }
        }

        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.class) === "string"){
                            var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                            __setAttr(b, 'class', classes + ' ' + obj.class);
                        }

                        if(typeof(obj.class) === "object"){
                            if(obj.class !== null){
                                var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                                for(var i = 0; i < obj.class.length; i++){
                                    classes += i === 0 ? (classes === "" ? obj.class[i] : ' ' + obj.class[i]) : ' ' + obj.class[i];
                                    __setAttr(b, 'class', classes);
                                }
                            }
                        }
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.class) === "string"){
                                var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                __setAttr(cne[i], 'class', classes + ' ' + obj.class);
                            }

                            if(typeof(obj.class) === "object"){
                                if(obj.class !== null){
                                    var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                    for(var j = 0; j < obj.class.length; j++){
                                        classes += j === 0 ? (classes === "" ? obj.class[j] : ' ' + obj.class[j]) : ' ' + obj.class[j];
                                        __setAttr(cne[i], 'class', classes);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.class) === "string"){
                    var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                    __setAttr(obj.element, 'class', classes + ' ' + obj.class);
                }

                if(typeof(obj.class) === "object"){
                    if(obj.class !== null){
                        var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                        for(var i = 0; i < obj.class.length; i++){
                            classes += i === 0 ? (classes === "" ? obj.class[i] : ' ' + obj.class[i]) : ' ' + obj.class[i];
                            __setAttr(obj.element, 'class', classes);
                        }
                    }
                }
            }
        }
    },
    "removeClass": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.class) !== "undefined"){
            if(typeof(obj.class) !== "string" && (typeof(obj.class) !== "object" || obj.class === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element class must be a string data type');
                }
                return 'Element class must be a string data type';
            }
        }

        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.class) === "string"){
                            var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                            var ca = classes.split(' ');
                            var new_class = '';
                            for(var i = 0; i < ca.length; i++){
                                if(obj.class !== ca[i]){
                                    new_class += i === 0 ? ca[i] : ' ' + ca[i];
                                }
                            }
                            __setAttr(b, 'class', new_class.replace(/^\s+|\s+$/gm,''));
                        }

                        if(typeof(obj.class) === "object"){
                            if(obj.class !== null){
                                var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                                var ca = classes.split(' ');
                                var new_class = '';
                                for(var i = 0; i < ca.length; i++){
                                    if(obj.class.indexOf(ca[i]) === -1){
                                        new_class += i === 0 ? ca[i] : ' ' + ca[i];
                                    }
                                }
                                __setAttr(b, 'class', new_class.replace(/^\s+|\s+$/gm,''));
                            }
                        }
                        return b;
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.class) === "string"){
                                var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                var ca = classes.split(' ');
                                var new_class = '';
                                for(var j = 0; j < ca.length; j++){
                                    if(obj.class !== ca[j]){
                                        new_class += j === 0 ? ca[j] : ' ' + ca[j];
                                    }
                                }
                                __setAttr(cne[i], 'class', new_class.replace(/^\s+|\s+$/gm,''));
                            }

                            if(typeof(obj.class) === "object"){
                                if(obj.class !== null){
                                    var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                    var ca = classes.split(' ');
                                    var new_class = '';
                                    for(var j = 0; j < ca.length; j++){
                                        if(obj.class.indexOf(ca[j]) === -1){
                                            new_class += j === 0 ? ca[j] : ' ' + ca[j];
                                        }
                                    }
                                    __setAttr(cne[i], 'class', new_class.replace(/^\s+|\s+$/gm,''));
                                }
                            }
                        }
                        return cne;
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.class) === "string"){
                    var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                    var ca = classes.split(' ');
                    var new_class = '';
                    for(var i = 0; i < ca.length; i++){
                        if(obj.class !== ca[i]){
                            new_class += i === 0 ? ca[i] : ' ' + ca[i];
                        }
                    }
                    __setAttr(obj.element, 'class', new_class.replace(/^\s+|\s+$/gm,''));
                }

                if(typeof(obj.class) === "object"){
                    if(obj.class !== null){
                        var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                        var ca = classes.split(' ');
                        var new_class = '';
                        for(var i = 0; i < ca.length; i++){
                            if(obj.class.indexOf(ca[i]) === -1){
                                new_class += i === 0 ? ca[i] : ' ' + ca[i];
                            }
                        }
                        __setAttr(obj.element, 'class', new_class.replace(/^\s+|\s+$/gm,''));
                    }
                }
                return obj.element;
            }
        }
    },
    "hasClass": function(obj){
        if(typeof(obj.element) !== "undefined"){
            if(typeof(obj.element) !== "string" && (typeof(obj.element) !== "object" || obj.element === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element object append property must be a string or HTMLElement object');
                }
                return 'Element object append property must be a string or HTMLElement object';
            }   
        }

        if(typeof(obj.class) !== "undefined"){
            if(typeof(obj.class) !== "string" && (typeof(obj.class) !== "object" || obj.class === null)){
                if(window._noway.debug === true){
                    console.error('TypeError: Element class must be a string data type');
                }
                return 'Element class must be a string data type';
            }
        }

        if(typeof(obj.element) === "string" || (typeof(obj.element) === "object" && typeof(obj.element) !== null)){
            if(typeof(obj.element) === "string"){
                if(/^\#/.test(obj.element) === true){
                    if(document.getElementById(obj.element.replace(/^\#/, ''))){
                        var b = document.getElementById(obj.element.replace(/^\#/, ''));
                        if(typeof(obj.class) === "string"){
                            var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                            var ca = classes.split(' ');
                            if(ca.indexOf(obj.class) >= 0){
                                return true;
                            }
                            return false;
                        }

                        if(typeof(obj.class) === "object"){
                            if(obj.class !== null){
                                var classes = __getAttr(b, 'class') === null ? "" : __getAttr(b, 'class');
                                var ca = classes.split(' ');
                                var tc = obj.class.length;
                                var c = 0;
                                for(var i = 0; i < ca.length; i++){
                                    if(obj.class.indexOf(ca[i]) >= 0){
                                        c++;
                                    }
                                }

                                if(tc === c){
                                    return true;
                                }
                                return false;
                            }
                        }
                    }
                }

                if(/^\./.test(obj.element) === true){
                    if(document.querySelectorAll(obj.element)){
                        var cne = document.querySelectorAll(obj.element);
                        var elem_len = cne.length;
                        var elem_has = 0;
                        for(var i = 0; i < cne.length; i++){
                            if(typeof(obj.class) === "string"){
                                var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                var ca = classes.split(' ');
                                if(ca.indexOf(obj.class) >= 0){
                                    elem_has++;
                                }
                            }

                            if(typeof(obj.class) === "object"){
                                if(obj.class !== null){
                                    var classes = __getAttr(cne[i], 'class') === null ? "" : __getAttr(cne[i], 'class');
                                    var ca = classes.split(' ');
                                    var tc = obj.class.length;
                                    var c = 0;
                                    for(var j = 0; j < ca.length; j++){
                                        if(obj.class.indexOf(ca[j]) >= 0){
                                            c++;
                                        }
                                    }

                                    if(tc === c){
                                        elem_has++;
                                    }
                                }
                            }
                        }

                        if(elem_len === elem_has){
                            return true;
                        }
                        return false;
                    }
                }
            }

            if(typeof(obj.element) === "object"){
                if(typeof(obj.class) === "string"){
                    var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                    var ca = classes.split(' ');
                    if(ca.indexOf(obj.class) >= 0){
                        return true;
                    }
                    return false;
                }

                if(typeof(obj.class) === "object"){
                    if(obj.class !== null){
                        var classes = __getAttr(obj.element, 'class') === null ? "" : __getAttr(obj.element, 'class');
                        var ca = classes.split(' ');
                        var tc = obj.class.length;
                        var c = 0;
                        for(var i = 0; i < ca.length; i++){
                            if(obj.class.indexOf(ca[i]) >= 0){
                                c++;
                            }
                        }

                        if(tc === c){
                            return true;
                        }
                        return false;
                    }
                }
            }
        }
    },
    "debug": true,
};


function __setClass(e, c){
    return e.setAttribute("class", c);
}

function __setAttr(e, f, n){
    return e.setAttribute(f, n);
}

function __getAttr(e, d){
    return e.getAttribute(d);
}

function __createElem(t){
    return document.createElement(t);
}

function __append(start, end){
    return start.appendChild(end);
}

function __createText(t){
    return document.createTextNode(t);
}

function __clear(primary){
    return primary.replace(/\\/g, '&#92;').replace(/[\b]/g, '\\b').replace(/[\f]/g, '\\f').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t').replace(/script/g, '').replace(/php/g, '').replace(/html/g, '').replace(/div/g, '').replace(/cookie/g, '').replace(/document/g, '').replace(/window/g, '').replace(/body/g, '').replace(/remove/g, '').replace(/replace/g, '').replace(/alert/g, '').replace(/\|/g, '').replace(/setAttribute/g, '').replace(/createElement/g, '').replace(/XMLHttpRequest/g, '').replace(/onreadystatechange/g, '').replace(/href/g, '').replace(/javascript/g, '').replace(/onload/g, '').replace(/click/g, '').replace(/keyup/g, '').replace(/keydown/g, '').replace(/keypress/g, '').replace(/resize/g, '');
}

function __clearText(primary){
    return primary.replace(/amp;/g, '').replace(/[\b]/g, '\\b').replace(/[\f]/g, '\\f').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t').replace(/|/g, '');
}