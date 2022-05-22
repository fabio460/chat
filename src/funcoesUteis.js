export default function corAleatoria(){
    let cores = ['blue','red','green','#b8860b','orange','#800000','#800080','#ff00ff','#008080','#dc143c']
    return cores[Math.floor(Math.random() * 9)] 
}

export  function dataToHoras(data){
    let horaBruta =  data
    let horaArray = horaBruta.split("T")
    let horaTratada = horaArray[1].split(":")
    return horaTratada
}
export function horaTratada(data){
    let d = data.split("T")
    let t = d[1].split(":")
    let h = parseInt(t[0]) -3
    return <div>{h}:{t[1]}</div>
  }