window.addEventListener("load", onLoadFunc);

let illenium = 0;
let mitis = 0;
let seven = 0;

function onLoadFunc() {
    document.getElementById("leftIll").addEventListener("click", goLeftIllenium)
    document.getElementById("rightIll").addEventListener("click", goRightIllenium) 

    document.getElementById("leftIll").tabIndex = 0;
    document.getElementById("rightIll").tabIndex = 0;
    document.getElementById("leftIll").addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            goLeftIllenium();
        }
    })
    document.getElementById("rightIll").addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            goRightIllenium();
        }
    }) 

    document.getElementById("leftMit").addEventListener("click", goLeftMit)
    document.getElementById("rightMit").addEventListener("click", goRightMit) 

    document.getElementById("leftMit").tabIndex = 0;
    document.getElementById("rightMit").tabIndex = 0;
    document.getElementById("leftMit").addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            goLeftMit();
        }
    }) 
    document.getElementById("rightMit").addEventListener("keypress",function(event) {
        if(event.key == "Enter") {
            goRightMit();
        }
    }) 

    document.getElementById("left7").addEventListener("click", goLeft7)
    document.getElementById("right7").addEventListener("click", goRight7) 

    document.getElementById("left7").tabIndex = 0;
    document.getElementById("right7").tabIndex = 0;
    document.getElementById("left7").addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            goLeft7();
        }
    }) 
    document.getElementById("right7").addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            goRight7();
        }
    }) 
}

function goLeftIllenium() {
    let numSongs = 4;
    var image = document.getElementById("songImgSrc")
    var title = document.getElementById("IlleniumTitle")
    var source = document.getElementById("songAudioSrc")
    var audio = document.getElementById("songAudio")

    illenium -= 1
    if(illenium < 0) {
        illenium = illenium + numSongs;
    }   

    if(illenium % numSongs == 1) {
        image.src = "images/Illenium/Awake_Illenium_album.jpg"
        title.textContent = "Feel Good"
        source.src = "audio/Illenium/Gryffin, Illenium - Feel Good ft. Daya (Lyrics).mp3"
    }
    else if (illenium % numSongs == 2) {
        image.src = "images/Illenium/firstTimeIlennim.jpg"
        title.textContent = "First Time"
        source.src = "audio/Illenium/ILLENIUM, iann dior - First Time (Lyrics).mp3"  
    }
    else if (illenium % numSongs == 3) {
        image.src = "images/Illenium/reverieIllenium.jpg"
        title.textContent = "Reverie"
        source.src = "audio/Illenium/Illenium - Reverie (Lyric Video) ft. King Deco.mp3"
    }
    else {
        image.src = "images/Illenium/Illenium_and_Jon_Bellion_-_Good_Things_Fall_Apart.png"
        title.textContent = "Good Things Fall Apart"
        source.src = "audio/Illenium/ILLENIUM, Jon Bellion - Good Things Fall Apart (Lyric Video).mp3"
    }

    audio.load();
    audio.play();
}

function goRightIllenium() {
    illenium += 1;

    let numSongs = 4;
    var image = document.getElementById("songImgSrc")
    var title = document.getElementById("IlleniumTitle")
    var source = document.getElementById("songAudioSrc")
    var audio = document.getElementById("songAudio")

    if(illenium % numSongs == 1) {
        image.src = "images/Illenium/Awake_Illenium_album.jpg"
        title.textContent = "Feel Good"
        source.src = "audio/Illenium/Gryffin, Illenium - Feel Good ft. Daya (Lyrics).mp3"
    }
    else if (illenium % numSongs == 2) {
        image.src = "images/Illenium/firstTimeIlennim.jpg"
        title.textContent = "First Time"
        source.src = "audio/Illenium/ILLENIUM, iann dior - First Time (Lyrics).mp3"
    }
    else if (illenium % numSongs == 3) {
        image.src = "images/Illenium/reverieIllenium.jpg"
        title.textContent = "Reverie"
        source.src = "audio/Illenium/Illenium - Reverie (Lyric Video) ft. King Deco.mp3" 
    }
    else {
        image.src = "images/Illenium/Illenium_and_Jon_Bellion_-_Good_Things_Fall_Apart.png"
        title.textContent = "Good Things Fall Apart"
        source.src = "audio/Illenium/ILLENIUM, Jon Bellion - Good Things Fall Apart (Lyric Video).mp3"
    }

    audio.load();
    audio.play();
}

function goLeftMit() {
    let numSongs = 4;
    var image = document.getElementById("mitImgSrc")
    var title = document.getElementById("MitisTitle")
    var source = document.getElementById("mitAudioSrc")
    var audio = document.getElementById("mitAudio")

    mitis -= 1
    if(mitis < 0) {
        mitis = mitis + numSongs;
    }   

    if(mitis % numSongs == 1) {
        image.src = "images/MitiS/frameworks.jpg"
        title.textContent = "Frameworks"
        source.src = "audio/mitis/MiTiS - Frameworks.mp3"
    }
    else if (mitis % numSongs == 2) {
        image.src = "images/mitis/bymysid.jpg"
        title.textContent = "By My Side"
        source.src = "audio/mitis/MitiS - By My Side (feat. Tedy).mp3"  
    }
    else if (mitis % numSongs == 3) {
        image.src = "images/mitis/whenIsay.jpg"
        title.textContent = "When I Say You're Mine"
        source.src = "audio/mitis/MitiS - When I Say You're Mine (Lryics) ft. Luma & Notelle.mp3"
    }
    else {
        image.src = "images/mitis/Wait.jpg"
        title.textContent = "Wait"
        source.src = "audio/mitis/MitiS & Crystal Skies - Wait (Lyrics) feat. Monika Santucci.mp3"
    }

    audio.load();
    audio.play();
}

function goRightMit() {
    let numSongs = 4;
    var image = document.getElementById("mitImgSrc")
    var title = document.getElementById("MitisTitle")
    var source = document.getElementById("mitAudioSrc")
    var audio = document.getElementById("mitAudio")

    mitis += 1

    if(mitis % numSongs == 1) {
        image.src = "images/MitiS/frameworks.jpg"
        title.textContent = "Frameworks"
        source.src = "audio/Mitis/MiTiS - Frameworks.mp3"
    }
    else if (mitis % numSongs == 2) {
        image.src = "images/MitiS/bymysid.jpg"
        title.textContent = "By My Side"
        source.src = "audio/Mitis/MitiS - By My Side (feat. Tedy).mp3"  
    }
    else if (mitis % numSongs == 3) {
        image.src = "images/MitiS/whenIsay.jpg"
        title.textContent = "When I Say You're Mine"
        source.src = "audio/Mitis/MitiS - When I Say You're Mine (Lryics) ft. Luma & Notelle.mp3"
    }
    else {
        image.src = "images/MitiS/Wait.jpg"
        title.textContent = "Wait"
        source.src = "audio/Mitis/MitiS & Crystal Skies - Wait (Lyrics) feat. Monika Santucci.mp3"
    }

    audio.load();
    audio.play();
}

function goLeft7() {
    let numSongs = 4;
    var image = document.getElementById("sevenImgSrc")
    var title = document.getElementById("7lionTitle")
    var source = document.getElementById("7AudioSrc")
    var audio = document.getElementById("7Audio")

    seven -= 1
    if(seven < 0) {
        seven = seven + numSongs;
    }   

    if(seven % numSongs == 1) {
        image.src = "images/SevenLions/rushOverMe.jpg"
        title.textContent = "Rush Over Me"
        source.src = "audio/SevenLions/Seven Lions x Illenium x Said The Sky - Rush Over Me Feat HALIENE (FULL LYRICS).mp3"
    }
    else if (seven % numSongs == 2) {
        image.src = "images/SevenLions/returning.jpg"
        title.textContent = "Returning To You"
        source.src = "audio/SevenLions/Seven Lions & Andrew Bayer - Returning To You [Official Lyric Video]  Ophelia Records.mp3"  
    }
    else if (seven % numSongs == 3) {
        image.src = "images/SevenLions/break.jpg"
        title.textContent = "Break The Silence"
        source.src = "audio/SevenLions/Seven Lions & MitiS - Break The Silence (Lyrics) feat. RBBTS.mp3"
    }
    else {
        image.src = "images/SevenLions/FirstTime.jpg"
        title.textContent = "First Time"
        source.src = "audio/SevenLions/[LYRICS] Seven Lions, SLANDER & Dabin - First Time (feat. Dylan Matthew).mp3"
    }

    audio.load();
    audio.play();
}

function goRight7() {
    let numSongs = 4;
    var image = document.getElementById("sevenImgSrc")
    var title = document.getElementById("7lionTitle")
    var source = document.getElementById("7AudioSrc")
    var audio = document.getElementById("7Audio")

    seven += 1

    if(seven % numSongs == 1) {
        image.src = "images/SevenLions/rushOverMe.jpg"
        title.textContent = "Rush Over Me"
        source.src = "audio/SevenLions/Seven Lions x Illenium x Said The Sky - Rush Over Me Feat HALIENE (FULL LYRICS).mp3"
    }
    else if (seven % numSongs == 2) {
        image.src = "images/SevenLions/returning.jpg"
        title.textContent = "Returning To You"
        source.src = "audio/SevenLions/Seven Lions & Andrew Bayer - Returning To You [Official Lyric Video]  Ophelia Records.mp3"  
    }
    else if (seven % numSongs == 3) {
        image.src = "images/SevenLions/break.jpg"
        title.textContent = "Break The Silence"
        source.src = "audio/SevenLions/Seven Lions & MitiS - Break The Silence (Lyrics) feat. RBBTS.mp3"
    }
    else {
        image.src = "images/SevenLions/FirstTime.jpg"
        title.textContent = "First Time"
        source.src = "audio/SevenLions/[LYRICS] Seven Lions, SLANDER & Dabin - First Time (feat. Dylan Matthew).mp3"
    }

    audio.load();
    audio.play();
}