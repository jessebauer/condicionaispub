const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

if (apelido) {
    console.log(apelido);
} else if (!apelido) {
    if (!sobrenome) {
        console.log(primeiroNome);
    } else {
        console.log(`${primeiroNome} ${sobrenome}`);
    }

}