
import PalList from "./PalList"
import PalSearchBar from "./PalSearchBar"

const PalDex = ()=>{
    const PalInfo =[
    {
        id:1,
        PalName:"Anubis",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Anubis-1.webp",
        Desc:"Guardian of the Desert"
    },
    {
        id:2,
        PalName:"Astegon",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Astegon-1.webp",
        Desc:"Black Ankylosaur"
    },
    {
        id:3,
        PalName:"Blazemut",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Blazamut-1.webp",
        Desc:"Magma Kaiser"
    },
    {
        id:4,
        PalName:"Bushi",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Bushi-1.webp",
        Desc:"Brandish Blade"
    },
    {
        id:5,
        PalName:"Broncherry",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Broncherry-1.webp",
        Desc:"Overaffectionate"
    },
    {
        id:6,
        PalName:"Cattiva",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Cattiva-1.webp",
        Desc:"Cat Helper"
    },
    {
        id:7,
        PalName:"Chikipi",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Chikipi-1.webp",
        Desc:"Egg Layer"
    },
    {
        id:8,
        PalName:"Anubis",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Anubis-1.webp",
        Desc:"Guardian of the Desert"
    },
    {
        id:9,
        PalName:"Anubis",
        PalImg:"https://genshinlab.com/wp-content/uploads/2024/01/Anubis-1.webp",
        Desc:"Guardian of the Desert"
    }
]
    return(
        <>
        <PalSearchBar/>
        <PalList PalInfo={PalInfo}/>
        
        </>
    )
}

export default PalDex