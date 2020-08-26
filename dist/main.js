// BAD PRACTICE - not proper MVC. Should be separated to files.

const add = function () {
    $.post('/todo', { text: $("#todo-input").val() }, function (todos) {
        render(todos)
        $("#todo-input").val("")
    })
}

$("#todos").on("click", ".fa-check-circle", function () {
    const id = $(this).closest("div").data().id
    console.log(this.complete);
    //this.complete = true
    $.ajax({
        method: "PUT",
        url: "/todo/" + id,
        success: todos => render(todos)
    })
})

$("#todos").on("click", ".fa-trash", function () {
    const id = $(this).closest(".todo").data().id
    $.ajax({
        method: "DELETE",
        url: "/todo/" + id,
        success: todos => render(todos)
    })
})

$.get('/todos', todos => render(todos))