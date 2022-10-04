import smoothscroll from 'smoothscroll-polyfill'

const Pagination = ({pages, currentPage, changeCurrentPage}) => {

// Пагинация

const setPrevious = event => {
    if (currentPage == 0) return false
    changeCurrentPage(currentPage - 1)
}

const setNext = event => {
    if (currentPage == pages.length - 1) return false
    changeCurrentPage(currentPage + 1)
}

const handlePageClick = event => {

    if (event.target.innerText == '...') return false

    changeCurrentPage(+event.target.innerText - 1)

    smoothscroll.polyfill()
    window.scrollTo({top: 0, behavior: 'smooth'})
}



    return (
        <div className = "pagination-w">
            <a className="pagination-list-before" onClick={event => setPrevious(event)}>‹</a>
                <ul className="pagination-list">
                    {pages.map((item, index) => {
                        return (
                            <li key = {index} className = {index == currentPage ? 'selected' : ''}>
                                <a onClick={event => handlePageClick(event)}>{item}</a>
                            </li>
                        )
                    })}
                </ul>
            <a className="pagination-list-after" onClick={event => setNext(event)}>›</a>
        </div>
    )
}

export default Pagination