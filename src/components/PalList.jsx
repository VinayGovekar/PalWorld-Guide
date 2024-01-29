import PalCard from "./PalCard"
const PalList = ({PalInfo,showPalInfo,onShowPalInfo})=>{
    console.log(showPalInfo)
    if(showPalInfo){
        return(<>
        </>)
    }
    else{
        return(
            <>
            <div className="border-solid border-t-2 border-black p-6 m-4 grid grid-cols-4 gap-2">
                {PalInfo.map((pal, i) => (
                <div key={i}>
                    <PalCard pal={pal} onShowPalInfo={onShowPalInfo}/>
                </div>
                ))}
            </div>
            </>
        )
    }
   
}

export default PalList