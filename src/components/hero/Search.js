import React from 'react'

const Search = () => {
  return (
    <form className='search'>
                    <div>
                        <input type='text' value={input} placeholder=' Enter the medicine..' />
                    </div>
                    <div className='radio'>
                        <button type='submit'><AiOutlineSearch className='icon' /></button>
                    </div>
    </form>
  )
}

export default Search