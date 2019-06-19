var images = document.querySelectorAll('.actors');
var leftframe = document.querySelector('#leftframe');
var rightframe = document.querySelector('#rightframe');
var videoUrl = document.querySelector('#videoUrl');
var videoIframe = document.querySelector('#videoIframe');
var popup = document.querySelector('#popup');
//TODO fix the link fo youtube with "embed"
var videosUrlList = [
  {
    'actors' : [
      'lombard',
      'rains'
    ],
    'url' : 'https://www.youtube.com/embed?v=wka_Pm2G2_s'
  },
  {
    'actors' : [
      'lombard',
      'dumont'
    ],
    'url' : 'https://www.youtube.com/embed?v=XL1HHPFSfNI'
  },
  {
    'actors' : [
      'lombard',
      'price'
    ],
    'url' : 'https://www.youtube.com/embed?v=3DcOra_0e_A'
  },
  {
    'actors' : [
      'lombard',
      'myrna'
    ],
    'url' : 'https://www.youtube.com/embed?v=3DcOra_0e_A'
  },
  {
    'actors' : [
      'lombard',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=uUFXmK3phGI'
  },
  {
    'actors' : [
      'lombard',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=3DcOra_0e_A'
  },
  {
    'actors' : [
      'lombard',
      'connor'
    ],
    'url' : '  https://www.youtube.com/embed?v=uxwSJA3LHWY'
  },
  {
    'actors' : [
      'rains',
      'dumont'
    ],
    'url' : 'https://www.youtube.com/embed?v=XxdGONyz50o'
  },
  {
    'actors' : [
      'rains',
      'price'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'rains',
      'connor'
    ],
    'url' : 'https://www.youtube.com/embed?v=uUFXmK3phGI'
  },
  {
    'actors' : [
      'rains',
      'myrna'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'rains',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=qm8lUvAdo-o'
  },
  {
    'actors' : [
      'rains',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=q06Y4Db-_6w'
  },
  {
    'actors' : [
      'dumont',
      'price'
    ],
    'url' : 'https://www.youtube.com/embed?v=Lub5XpWTkTs'
  },
  {
    'actors' : [
      'dumont',
      'connor'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'dumont',
      'myrna'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'dumont',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=fMssZBG-dz8'
  },
  {
    'actors' : [
      'dumont',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=Ye636UbyEPg'
  },
  {
    'actors' : [
      'price',
      'connor'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'price',
      'myrna'
    ],
    'url' : 'https://www.youtube.com/embed?v=V4VRXEvlE7A'
  },
  {
    'actors' : [
      'price',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=QubVj9f1GLA'
  },
  {
    'actors' : [
      'price',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=d0yNIYp-gPY'
  },
  {
    'actors' : [
      'connor',
      'myrna'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'connor',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=RWeP4OFfKnc'
  },
  {
    'actors' : [
      'connor',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=gw2-eH-S9VA'
  },
  {
    'actors' : [
      'myrna',
      'rogers'
    ],
    'url' : 'https://www.youtube.com/embed?v=YDORNE99CiM'
  },
  {
    'actors' : [
      'myrna',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=Bu0ui9cp0uw'
  },
  {
    'actors' : [
      'rogers',
      'douglas'
    ],
    'url' : 'https://www.youtube.com/embed?v=oHtgI9ueo4g'
  },
];


for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', clickActor);
}

function clickActor (event){
  let idActor = event.target.attributes['id'].nodeValue;
  assignActorToFrame(idActor);
}


function assignActorToFrame(idActor) {
  if (leftframe.attributes['data-idActor'].nodeValue == "") {
    setFrame(leftframe, idActor);
  } else if (rightframe.attributes['data-idActor'].nodeValue =="") {
    if (leftframe.attributes['data-idActor'].nodeValue != idActor) {
      setFrame (rightframe, idActor);
      videoUrl.classList.toggle("hide");
      videoUrl.addEventListener("click", togglePopup);
      // toggleVideoClass ();
      // setVideo()
      // togglePopup();
    }
  } else {
    resetFrames();
    resetVideo();
    assignActorToFrame(idActor);
  }
}


function setFrame(frame, idActor) {
  frame.attributes['data-idActor'].nodeValue = idActor;

  let actorDiv = document.querySelector('#' + idActor);
  let urlImageActor = actorDiv.attributes['src'].nodeValue;

  frame.attributes['src'].nodeValue = urlImageActor;
}

function resetFrames() {
  resetFrame(leftframe);
  resetFrame(rightframe);
  toggleVideoClass();
}

function resetFrame(frame) {
  frame.attributes['data-idActor'].nodeValue = "";
  frame.attributes['src'].nodeValue = "";
}

function setVideo() {
  var actor1 = leftframe.attributes['data-idActor'].nodeValue;
  var actor2 = rightframe.attributes['data-idActor'].nodeValue;
  var url = '';
  videosUrlList.forEach(function(element) {
      if (element['actors'].indexOf(actor1) != -1 &&
      element['actors'].indexOf(actor2) != -1) {
        url = element['url'];
          togglePopup();
      }
  });

}
// function toggleVideoClass() {
//   videoUrl.classList.toggle("hide");
//   // setVideo();
//   togglePopup();
// }

function togglePopup() {
  popup.classList.toggle("hide");
  videoUrl.addEventListener("click", togglePopup);

  console.log('hi');
}
function setIframe(url) {
  videoIframe.src = url;
  togglePopup();
}

function resetVideo() {
  videoUrl.attributes['href'].nodeValue = "";

}
