function adicionarTarefa() {
    let inputTarefa = document.getElementById('nova-tarefa');
    let textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === '') {
        alert('A tarefa não pode ser em branco!');
        return;
    }

    let listaTarefas = document.getElementById('lista-tarefas');

    let li = document.createElement('li');
    li.classList.add('bg-gray-100', 'p-3', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'shadow');

    let inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.classList.add('checkar', 'mr-2');
    
    li.appendChild(inputCheckbox);

    let spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;
    
    li.appendChild(spanTexto);

    inputCheckbox.addEventListener('click', function() {
        spanTexto.classList.toggle('line-through');
        spanTexto.classList.toggle('text-gray-500');
    });

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('bg-red-500', 'text-white', 'p-2', 'rounded-lg', 'hover:bg-red-600', 'transition');
    botaoExcluir.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });

    li.appendChild(botaoExcluir);
    listaTarefas.appendChild(li);

    inputTarefa.value = '';
}
