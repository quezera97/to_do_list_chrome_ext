const textarea = document.querySelectorAll('.task-input');

textarea.forEach(element => {
    element.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            event.preventDefault();

            const start = this.selectionStart;
            const end = this.selectionEnd;
            this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
});