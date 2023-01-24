$(document).ready(function(){

    remover = function(element){
        element.parentElement.remove();
    }

    $('#button').click(function(e){
        e.preventDefault();
        let tarefa  = $('#tarefa').val();
        if(tarefa == ''){
            alert('Digite uma Tarefa');
            return;
        };
        const newLine = $(`<div class="barra-conteudo">
                                <div>
                                    <span>${tarefa}</span>
                                </div>
                                <button  onclick="remover(this)">Tarefa feita</button> 
                            </div>`);
        $(newLine).appendTo('.conteudo');
        $('#tarefa').val('');
        
    });
});