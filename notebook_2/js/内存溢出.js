let click = document.querySelector("#click");
let content = document.querySelector("#content")
let arr = []

function closures() {
    let test = new Array(1000).fill('isboyjc')

    return function () {
        return test
    }
}

click.addEventListener("click", function () {
    arr.push(closures())
    arr.push(closures())

    content.innerHTML = arr.length
});
