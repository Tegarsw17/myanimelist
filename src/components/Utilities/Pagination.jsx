import React from 'react'

function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  const handlePage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    // if (page > 1) {
    setPage((prevState) => prevState - 1)
    scrollTop()
    // }
  }
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className={`transition-all ${
          page == 1 ? '' : 'hover:text-color-accent'
        }`}
        disabled={page === 1}
      >
        prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handlePage}
        className={`transition-all ${
          page == lastPage ? '' : 'hover:text-color-accent'
        }`}
        disabled={page === lastPage}
      >
        next
      </button>
    </div>
  )
}

export default Pagination
