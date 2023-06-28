function Reproducir(){
    var audio=document.getElementById('mi-audio');
    audio.play();
}
function Pausar(){
    var audio=document.getElementById('mi-audio');
    audio.pause();
}
function CrearAudioDinamicamente(){
    var audio=document.getElement('audio');
    audio.src="ringtones-the-avengers.mp3";
    audio.addEventListener('ended',function(){
        setTimeout(function() {audio.play();},500);
     },false);
     audio.play();
}
function VerOtrasPropiedades(){
    var audio=document.getElementById('mi-audio');
    
    var tiempo= audio.currenTime;
    var duracion=audio.duration;
    var estadored=audio.networkState;
    var estado=audio.readyState;

    alert ("tiempo actual de reproduccion ="+tiempo);
    alert("Duracion total del audio="+duracion);
    alert("Estado de red= "+estadored);
    alert("Estado de carga="+estado);
}