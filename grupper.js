var innhold, jsObject



// window.onload = winInit;
// function winInit(){
//     document.getElementById('11').innerHTML = 'Music Disc 11 ,' + musicdisc11.artist
// }

  function lastInn(filnavn) { // test
    return fetch(filnavn).then((response) => response.text() );
    JSON.parse(fetch)
}




  class Sang{
    constructor(tittel,artist,bildefil,lydfil){
        this.tittel = tittel
        this.artist = artist
        this.bildefil = bildefil
        this.lydfil = lydfil
        
    }
    spillSang(){
      document.getElementById('testSang').src = this.lydfil
      document.getElementById('testBilde').src = this.bildefil
      document.getElementById('testTittel').innerHTML = this.tittel
      document.getElementById('testArtist').innerHTML = this.artist
      console.log(this.lydfil)
    }
  }

// async function rock(){
//   console.log('dfws')
//   innhold = await lastInn('rock.json')
//   console.log(innhold)
//   jsObject = JSON.parse(innhold)
//   console.log(jsObject.sanger[0].tittel, 'whattt')


// }
  // console.log(jsObject.sanger[0].tittel, 'ehehehhe')
  let musicdisc11 = new Sang(jsObject.sanger[0].tittel,'C418','./spillelister/spilleliste1/bilder/musicdisc11.png','./spillelister/spilleliste1/musicdisc11.mp3')
  let rickroll = new Sang('Never Gonna Give You Up','Rick Astley','./spillelister/spilleliste1/bilder/nevergonnagiveyouup.png','./spillelister/spilleliste1/nevergonnagiveyouup.mp3')
  let father = new Sang('Father','Sabaton','./spillelister/spilleliste1/bilder/father.png','./spillelister/spilleliste1/father.mp3')

// musicdisc11.spillSang()


  


  class Spilleliste{
    constructor(spillelisteJSON){
      this.spillelisteJSON = spillelisteJSON
    }

    // async lastInnFraJSON(){
    //   console.log('dfws')
    //   innhold = await lastInn('rock.json')
    //   console.log(innhold)
    //   jsObject = JSON.parse(innhold)
    //   console.log(jsObject.sanger[0].tittel, 'whattt')
    // }
    async lastInnFraJSON(){
      console.log('dfws')
      innhold = await lastInn('rock.json')
      console.log(innhold)
      jsObject = JSON.parse(innhold)
      console.log(jsObject.sanger[0].tittel, 'whattt')
      console.log(jsObject.sanger.length)

      let sangInfo = [];
      for (let i = 0; i < jsObject.sanger.length; i++) {
        
        let nySang = jsObject.sanger[i]
        // this.tittel = jsObject[i].tittel
        // this.artist = jsObject[i].artist
        // this.lydfil = jsObject[i].lydfil
        // this.bildefil = jsObject[i].bildefil
        sangInfo.push(nySang)
      }
      console.log(sangInfo)
      console.log(sangInfo[1].tittel)

      let avspiller = document.getElementById('testSang')
      avspiller.addEventListener('ended',function(){
        console.log('SPILLNESTEFUNKER')
      });
    }
    spillNeste(){
      console.log(sangInfo)
    }
    spillTilfeldig(){

    }
    startSangPåNytt(){

    }
    gjentaSang(){
      // if sang spilles, spill igjen
    }
    startSang(){
      // start valgt sang
    }
    pause(){
      // pauser valgt sang
    }
  }

  let rock = new Spilleliste('rock')

  function spillRock(){
    rock.lastInnFraJSON()
  }

  rock.lastInnFraJSON()
  
  

  // async function rock(){
  //   innhold = await lastInn('rock.json')
  //   console.log(innhold, 'hei')
  //   jsObject = JSON.parse(innhold)

  //   console.log('Spilleliste:',jsObject.navn)
  //   console.log(jsObject.sanger[0].tittel)
  // }
  
  // fetch