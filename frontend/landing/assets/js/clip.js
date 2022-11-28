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
        title: "Eurodrmex noc na revoluciji"
    },
    "QoXY1yNuqRc": {
        title: "Eurodrmex noc na revoluciji"
    },
    "GKb7Jmct5V0": {
        title: "Eurodrmex noc na revoluciji"
    },
    "NH1eMnEnGQk": {
        title: "Eurodrmex noc na revoluciji"
    },
    "81zUtF8RkGc": {
        title: "Eurodrmex noc na revoluciji"
    },
    "V9neSKt_9Dw": {
        title: "Eurodrmex noc na revoluciji"
    },
    "tHG-UpFi3e8": {
        title: "Eurodrmex noc na revoluciji"
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