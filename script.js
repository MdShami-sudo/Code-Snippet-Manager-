document.getElementById('add-snippet').addEventListener('click', () => {
    const codeInput = document.getElementById('code-input').value;
    const languageSelect = document.getElementById('language-select').value;
    
    if (codeInput.trim() === '') {
        alert('Please enter some code.');
        return;
    }

    const snippetList = document.getElementById('snippet-list');

    const snippetContainer = document.createElement('div');
    snippetContainer.className = 'snippet';

    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.className = `language-${languageSelect}`;
    codeElement.textContent = codeInput;

    preElement.appendChild(codeElement);
    snippetContainer.appendChild(preElement);
    snippetList.appendChild(snippetContainer);

    Prism.highlightElement(codeElement);
    
    document.getElementById('code-input').value = '';
});
