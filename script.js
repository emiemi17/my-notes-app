$(document).ready(function() {
    // adiciona nova nota
    $("#save").click(function() {
        let taskText = $("#new-note").val();
        if (taskText !== "") {
            $(".note-list").append("<li style='list-style: none; margin-top: 10px; margin-bottom: 7px'>" + taskText + " <button class='delete'>Remover</button></li>");
            $("#new-note").val(""); // limpa o textarea
        }
    });

    // remover nota
    $(".note-list").on("click", ".delete", function() {
        $(this).parent().remove();
    });

});
