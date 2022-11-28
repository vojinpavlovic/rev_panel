const CLIPS = {
    "De9SKetPmVg": {
      title: "Želje se ispunjavaju"   
    },
    "bCIRpeso89A": {
        title: "Chame funny moments"
    },
    "OTQ3lDtHGBI": {
        title: "Proxon funny moments"
    }, 
    "p6j1NdHhOhM": {
        title: "EuroDrmex spasava gazdu"
    },
    "y0EBvHpoT0s": {
        title: "Nugata napao pet puta streamsniper"
    },
    "VOyk9fGTSRM": {
        title: "Eurodrmex jedna noc na Revolucija RPu"
    },
    "QoXY1yNuqRc": {
        title: "Povratak u proslost (1/6)"
    },
    "GKb7Jmct5V0": {
        title: "Povratak u proslost (2/6)"
    },
    "NH1eMnEnGQk": {
        title: "Povratak u proslost (3/6)"
    },
    "81zUtF8RkGc": {
        title: "Povratak u proslost (4/6)"
    },
    "V9neSKt_9Dw": {
        title: "Povratak u proslost (5/6)"
    },
    "tHG-UpFi3e8": {
        title: "Povratak u proslost (6/6)"
    }
}

const getThumbnail = (id) => id ? `https://img.youtube.com/vi/${id}/0.jpg` : console.log("getThumbnail >> ID is not provided");

const genHref = (id) => id ? `https://youtu.be/${id}`: console.log("getThumbnail >> ID is not provided");

const addClips = () => {
    for (const key in CLIPS) {
        const thumbnail = getThumbnail(key)
        const title = CLIPS[key].title ? CLIPS[key].title : "Nema naslova"
        const url = genHref(key)
        $("#clips_wrapper").append(`
            <div class="klip">
                <div class="overlay">
                    <a target="_blank" rel="noopener noreferrer" href="${url}">
                        <i class="fa fa-play"></i>
                    </a>
                </div>

                <img style="width:100%;" src="${thumbnail}">
                <p>${title}</p>
            </div>
        `);
    }
}

addClips()