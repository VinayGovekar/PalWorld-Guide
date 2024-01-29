const PalCard = ({pal,onShowPalInfo})=>{
    return(<>
         <div onClick={onShowPalInfo} className="p-6 border-solid border-2 hover:border-2 
         hover:border-black  bg-gray-200 rounded-xl 
         shadow-sm hover:shadow-2xl max-w-sm flex items-center space-x-4 h-40">
            <div>
                <img className="h-24 w-24" 
                src={pal.imageWiki} alt={pal.name}/>
            </div>
            <div>
                <div className="text-3xl font-bold ">
                    {pal.name}
                </div>
                <div className="text-m text-slate-500">
                {pal.aura.name}
                </div>
                <div className="text-m text-slate-500">
                --{pal.key}--
                </div>
            </div>
        </div>
    </>)
}

export default PalCard