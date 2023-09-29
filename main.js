const form = document.getElementById('forms');
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');

    let linhas= ' ';

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '<tr>';

        linhas += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;   
        
        inputNomeContato.value = '';
        inputNumeroContato.value = '';

    }); 

