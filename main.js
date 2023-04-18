var SpeechRecognition = window.webkitSpeechRecognition;
  
var escuta = new SpeechRecognition();

var caixaTexto = document.getElementById("caixaTexto"); 

function start(){
    caixaTexto.innerHTML = ""; 
    console.log(escuta)
    escuta.start();
} 
 
escuta.onresult = (e)=>{
    var conteudo = e.results[0][0].transcript;
    caixaTexto.innerHTML = conteudo;
    //verifica se a pessoa disse tire minha selfie
    if(conteudo =="tire minha selfie" || conteudo =="tira minha selfie"){
        console.log("tirando selfie... ");
        //chama a função falar
       falar();
    }
 
}


function falar(){

    var texto = "Tirando sua selfie em 5 segundos";
    var pronuncia = new SpeechSynthesisUtterance(texto);    

    var sintese = window.speechSynthesis;
    sintese.speak(pronuncia);
    Webcam.attach(camera);
    setTimeout(()=>{
        tirarFoto(); 
    },5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
function tirarFoto(){
    Webcam.snap((uri)=>{  
        document.getElementById("selfie1").src = uri;
        console.log(uri)
        document.getElementById("link").href = uri;
        link.click();
    });
}
function salvar(){


}