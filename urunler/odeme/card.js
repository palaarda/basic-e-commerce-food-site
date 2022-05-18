
function siparisStart()
{
    var isimDogrulama, kartDogrulama, cvcDogrulama, checkboxDogrulama;

    isimDogrulama = document.getElementById("isim").value;
    kartDogrulama = document.getElementById("card-number").value;
    cvcDogrulama = document.getElementById("cvc-number").value;
    checkboxDogrulama = document.getElementById("checkbox2").checked;;

    if (isimDogrulama==false || kartDogrulama==false || cvcDogrulama==false || checkboxDogrulama==false)
    {
        alert("Lütfen Eksik Alanları Doldurun.");
    }
    else
    {
        document.getElementById("siparis").style.display="block"
    }
}


