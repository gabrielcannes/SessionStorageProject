function logar() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    console.log = (email.value + senha.value);

    if (email.value == "admin@admin.com" && senha.value == "admin") {
        sessionStorage.setItem("acesso", true);
        alert("usuario autenticado");
        window.location.href = "index.html";
    } else {
        alert("usuario ou senha invalidos!");
    }
}