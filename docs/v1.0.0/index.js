const div = document.createElement('div');
div.innerHTML = 'This will be appended';

setTimeout(() => document.body.appendChild(div), 1000);
