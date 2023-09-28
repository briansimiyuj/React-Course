const SearchItem = () =>{

    return(

        <form className="searchForm" onSubmit={e => e.preventDefault()}>

            <label htmlFor="search">Search</label>

            <input 
                type="text" 
                role="searchbox"
                id="search" 
                placeholder="Search Items"
            />

        </form>

    )

}

export default SearchItem