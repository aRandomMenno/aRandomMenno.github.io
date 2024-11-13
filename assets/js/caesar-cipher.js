document.addEventListener('DOMContentLoaded', function() {
    const encodeButton = document.getElementById('encode');
    const decodeButton = document.getElementById('decode');
    const bruteForceButton = document.getElementById('bruteforce');

    if (encodeButton) {
        encodeButton.addEventListener('click', function() {
            const text = document.getElementById('encode-text').value;
            const shift = parseInt(document.getElementById('encode-shift').value);
            const result = document.getElementById('encode-result');
            let text_result = '';

            if (isNaN(shift)) {
                alert('Shift must be a number');
                return;
            } 
            if (shift < 0) {
                alert('Shift must be a positive number, working on negative shift!');
                return;
            }
            if (shift > 26) {
                alert('Shift must be less than 26');
                return;
            }
            if (text === '') {
                alert('Text must not be empty');
                return;
            }

            for (let i = 0; i < text.length; i++) {
                let ascii = text.charCodeAt(i);
                if (ascii >= 65 && ascii <= 90) {
                    text_result += String.fromCharCode((ascii - 65 + shift) % 26 + 65);
                } else if (ascii >= 97 && ascii <= 122) {
                    text_result += String.fromCharCode((ascii - 97 + shift) % 26 + 97);
                } else {
                    text_result += text[i];
                }
            }
            result.textContent = text_result;
        });
    } else {
        console.error('Encode button not found');
    }

    if (decodeButton) {
        decodeButton.addEventListener('click', function() {
            const text = document.getElementById('decode-text').value;
            const shift = parseInt(document.getElementById('decode-shift').value);
            const result = document.getElementById('decode-result');
            let text_result = '';

            if (isNaN(shift)) {
                alert('Shift must be a number');
                return;
            } 
            if (shift < 0) {
                alert('Shift must be a positive number, to use "negative" shift, use decode with positives!');
                return;
            }
            if (shift > 26) {
                alert('Shift must be less than 27');
                return;
            }
            if (text === '') {
                alert('Text must not be empty');
                return;
            }

            for (let i = 0; i < text.length; i++) {
                let ascii = text.charCodeAt(i);
                if (ascii >= 65 && ascii <= 90) {
                    text_result += String.fromCharCode((ascii - 65 - shift + 26) % 26 + 65);
                } else if (ascii >= 97 && ascii <= 122) {
                    text_result += String.fromCharCode((ascii - 97 - shift + 26) % 26 + 97);
                } else {
                    text_result += text[i];
                }
            }
            result.textContent = text_result;
        });
    } else {
        console.error('Decode button not found');
    }

    if (bruteForceButton) {
        bruteForceButton.addEventListener('click', function() {
            const text = document.getElementById('bruteforce-text').value;
            const result = document.getElementById('bruteforce-result');
            let text_result = '';

            if (isNaN(shift)) {
                alert('Shift must be a number');
                return;
            } 
            if (shift < 0) {
                alert('Shift must be a positive number');
                return;
            }
            if (shift > 26) {
                alert('Shift must be less than 26');
                return;
            }
            if (text === '') {
                alert('Text must not be empty');
                return;
            }

            for (let shift = 1; shift < 27; shift++) {
                text_result += 'Shift ' + shift + ': ';
                for (let i = 0; i < text.length; i++) {
                    let ascii = text.charCodeAt(i);
                    if (ascii >= 65 && ascii <= 90) {
                        text_result += String.fromCharCode((ascii - 65 - shift + 26) % 26 + 65);
                    } else if (ascii >= 97 && ascii <= 122) {
                        text_result += String.fromCharCode((ascii - 97 - shift + 26) % 26 + 97);
                    } else {
                        text_result += text[i];
                    }
                }
                text_result += '<br>';
            }
            result.innerHTML = text_result;
        });
    } else {
        console.error('Bruteforce button not found');
    }
});