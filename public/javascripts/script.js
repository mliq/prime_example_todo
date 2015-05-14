var $data;
$(document).ready(function(){
    $data = $('.js-data');
    getData();
});

function getData(){
    $.ajax({
        url: '/todos',
        method: 'get',
        data: {},
        dataType: 'json',
        success: function(response, textStatus, jqXHR){
            clearData();
            processData(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus,errorThrown);
        },
        complete: function(jqXHR, textStatus){
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    })
}

function clearData(){
    $data.empty();
}

function processData(data){

    for(var i = 0; i< data.length; i++){
        var todo = data[i];

        var id = todo._id;
        var name = todo.name || '';
        var completed = todo.completed || false;
        var note = todo.note || '';

        var section = $('<section/>')
            .attr('data-id', id);

        var ul = $('<ul/>')
            .appendTo(section);

        var liName = $('<li/>')
            .text('Name: ' + name)
            .appendTo(ul);

        var liScore = $('<li/>')
            .text('completed: ' + completed)
            .appendTo(ul);

        var liDate = $('<li/>')
            .text('Note: '+ note)
            .appendTo(ul);

        $data.append(section);
    }
}
