import { useEffect, useState } from 'react'
import { getBook } from '../services/api.services';
import BookTable from '../components/book/book.table';


const BookPage = () => {
    const [booksData, setBooksData] = useState([]);
    const [currentBook, setCurrentBook] = useState(1)
    const [pageBookSize, setPageBookSize] = useState(10)
    const [totalBook, setTotalBook] = useState(0)


    const loadBookData = async () => {
        const res = await getBook(currentBook, pageBookSize)
        if (res.data) {
            setBooksData(res.data.result)
            setCurrentBook(res.data.meta.current)
            setPageBookSize(res.data.meta.pageSize)
            setTotalBook(res.data.meta.total)
        }
    }
    useEffect(() => {
        loadBookData();
    }, [currentBook, pageBookSize])



    return (
        <div style={{ padding: "20px" }}>
            <BookTable
                booksData={booksData}
                totalBook={totalBook}
                pageBookSize={pageBookSize}
                currentBook={currentBook}
                setPageBookSize={setPageBookSize}
                setCurrentBook={setCurrentBook}
                loadBookData={loadBookData}
            />
        </div>
    )
}

export default BookPage