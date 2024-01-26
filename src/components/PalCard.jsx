const PalCard = ({pal})=>{

    return(<>
         <div className="p-6 border-solid border-2 hover:border-2 hover:border-slate-500  bg-gray-200 rounded-xl shadow-sm hover:shadow-2xl max-w-sm flex items-center space-x-4">
            <div>
                <img className="h-24 w-24" 
                src={pal.PalImg} alt={pal.PalName}/>
            </div>
            <div>
                <div className="text-3xl font-bold ">
                    {pal.PalName}
                </div>
                <div className="text-m text-slate-500">
                {pal.Desc}
                </div>
                <div className="text-m text-slate-500">
                --{pal.id}--
                </div>
            </div>
        </div>
    </>)
}

export default PalCard