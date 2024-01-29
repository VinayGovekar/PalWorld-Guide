const PalSearchBar = ({OnSearchChange,SearchPokemon})=>{
    return(
        <>
        <div className="p-3 mx-auto flex place-content-center">
            <input className="w-1/2 h-10 border-solid border-2 border-black rounded-md m-auto text-slate-500 text-xl  p-6" type="text" value={SearchPokemon} 
            onChange={OnSearchChange} />
        </div>
        </>
    )
}

export default PalSearchBar