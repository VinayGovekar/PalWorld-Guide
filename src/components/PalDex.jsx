
import PalList from "./PalList"
import PalSearchBar from "./PalSearchBar"
import PalInformation from "../data/pals.json"
import { useState } from "react"
const PalDex = ()=>{
    const [PalInfo,setPalInformation] = useState(PalInformation)
    const [searchPokemon,setSearchPokemon] = useState("")
    const [showPalInfo,setShowPalInfo] = useState(false)

    const onSearchChange = (event)=>{
        var newFilterValue = event.target.value
        if(newFilterValue!==""){
            setSearchPokemon(newFilterValue)
            var filteredPokemon = PalInfo
                                    .filter(pal=>
                                    pal.name.toLowerCase().includes(newFilterValue.toLowerCase()))
            setPalInformation(filteredPokemon)
        }
        else{
            setPalInformation(PalInformation)
            setSearchPokemon("")
        }
    }

    const onShowPalInfo=()=>{
        setShowPalInfo(true)
        console.log(showPalInfo)
    }
    
    return(
        <>
        <PalSearchBar SearchPokemon={searchPokemon} OnSearchChange={onSearchChange}/>
        <PalList PalInfo={PalInfo} showPalInfo={showPalInfo} onShowPalInfo = {onShowPalInfo}/>
        </>
    )
}

export default PalDex