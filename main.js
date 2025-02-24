 tampilkanGambar();

 var counter =1;
 var start = "";
 var end ="";
 var totalWaktu="";
 var topscore = localStorage.getItem("topScore");


function tampilkanGambar(){
    var top = Math.random()* 400;
    var left = Math.random()* 400;
    start = new Date().getTime();

    document.getElementById("aris").src="aris.png";
    document.getElementById("aris").style.width="70px";
    document.getElementById("aris").style.height="70px";
    document.getElementById("aris").style.borderRadius="50%";
    document.getElementById("aris").style.top =top+"px";
    document.getElementById("aris").style.left =left+"px";
    document.getElementById("aris").style.position="relative";
    document.getElementById("aris").style.display="block";

   
}

document.getElementById("aris").onclick =function(){
    document.getElementById("aris").style.width="120px";
    document.getElementById("aris").style.height="120px";
    document.getElementById("aris").src="bom.png";

    setTimeout(sembunyikanGambar,500);
   


    if (counter<10){
        setTimeout(tampilkanGambar,500);
        counter++;
    }else{
        alert("Game Selesai");
        end = new Date().getTime();
        totalWaktu = (end-start)/100;
        document.getElementById("totalWaktu").innerHTML = totalWaktu+ " s";
        setTopscore();
    }

    function sembunyikanGambar(){
        document.getElementById("aris").style.display="none";
        document.getElementById("aris");
    }

    //set top score
    function setTopscore() {
        let topScore = localStorage.getItem("topScore"); // Ambil ulang dari localStorage
        if (topScore === null || totalWaktu < parseFloat(topScore)) {
            localStorage.setItem("topScore", totalWaktu);
            document.getElementById("topScore").innerHTML = totalWaktu + " s";
        } else {
            document.getElementById("topScore").innerHTML = topScore + " s";
        }
    }
    

}

