var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/((?:n )?atmospheric river)/gi, function(m) {
                var words = m.split(' ');
                var ret = '';
                var i = 0;
                if (words.length === 3) {
                    if (words[0].startsWith('A')) {
                        ret += 'A ';
                    } else {
                        ret += 'a ';
                    }
                    i++;
                }
                var atmospheric = words[i];
                i++;
                if (atmospheric.startsWith('A')) {
                    ret += 'Big '
                } else {
                    ret += 'big '
                }
                var river = words[i];
                i++;
                if (river.startsWith('R')) {
                    ret += 'Storm';
                } else {
                    ret += 'storm'
                }
                return ret;
            });

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}