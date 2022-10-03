const Pagination = ({pages, currentPage, changeCurrentPage}) => {

// Пагинация

const setPrevious = event => {
    if (currentPage == 0) return false
    changeCurrentPage(currentPage - 1)
}

const setNext = event => {
    if (currentPage == pagesList.length - 1) return false
    changeCurrentPage(currentPage + 1)
}

    return (
        <div className = "pagination-w">
            <a className="pagination-list-before" onClick={event => setPrevious(event)}>‹</a>
                <ul className="pagination-list">
                    {pages.map((item, index) => {
                        return (
                            <li key = {index} className = {index == currentPage ? 'selected' : ''}>
                                <a onClick={event => changeCurrentPage(+event.target.innerText - 1)}>{item}</a>
                            </li>
                        )
                    })}
                </ul>
            <a className="pagination-list-after" onClick={event => setNext(event)}>›</a>
        </div>
    )
}

export default Pagination