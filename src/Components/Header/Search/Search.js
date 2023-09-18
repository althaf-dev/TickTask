import React, { useContext, useRef } from 'react'
import { Appcontext } from '../../../Appcontext';
import "../Header.css"


function Search() {

    const { dispatchFilter, search, setSearch } = useContext(Appcontext);
     const searchInputRef = useRef(null);
    return (
        <div className="col-4 d-flex p-2  ">
            <div className="input-group search-input" tabIndex={1}>

                <span className='input-group-text bg-light border-0'
                    data-bs-toggle="tooltip"
                    title=" Search "
                    onClick={()=>searchInputRef.current.focus()}
                  
                > <i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text"
                    ref={searchInputRef}
                    className='form-control border-0'
                    placeholder='Search Tasks'
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        dispatchFilter({ type: "subsel", payload: { value: "search" } });
                        if (e.target.value)
                            dispatchFilter({ type: "set", payload: { value: e.target.value } })
                        else
                            dispatchFilter({ type: "set", payload: { value: "all" } })
                    }}

                />
                {search && <span className='input-group-text bg-light border-0 text-danger '><button
                    className='border-0 text-danger fw-bold bg-transparent'
                    data-bs-toggle="tooltip"
                    title="Exit search"
                    onClick={() => {
                        setSearch('');
                        dispatchFilter({ type: "set", payload: { value: "all" } })
                    }
                    }
                >

                    X </button></span>}



            </div>

        </div>
    )
}

export default Search
