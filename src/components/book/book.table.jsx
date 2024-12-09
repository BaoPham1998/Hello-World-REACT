import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import BookInfo from "./book.info"
import { useState } from 'react';
import CreateBook from "./create.book"
import CreateBookUncontrolledComponent from './createBook(UncontrolledComponent)';
import BookUpdate from './book.update';

const BookTable = (props) => {

    const [openBookDrawer, setOpenBookDrawer] = useState(false)
    const [bookInfo, setBookInfo] = useState(null)
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [bookUpdateData, setBookUpdateData] = useState(null)

    const { booksData, totalBook, pageBookSize, currentBook, setPageBookSize,
        setCurrentBook, loadBookData, setTotalBook } = props;

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);




    const onClose = () => {
        setOpenBookDrawer(false);
        setBookInfo(null);
    };
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });



    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (currentBook * pageBookSize) - pageBookSize}</>

                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href="#" onClick={() => {
                            setBookInfo(record)
                            setOpenBookDrawer(true)
                        }}>{record._id}</a>
                    </>
                )
            }
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',

        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (_, record) => {
                return (
                    <span >
                        {VND.format(record.price)}
                    </span>
                )
            }

        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',

        },
        {
            title: 'Tác giả',
            dataIndex: 'author',

        },
        {
            title: 'Action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "30px" }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setBookUpdateData(record)
                            setIsUpdateModalOpen(true)
                        }}
                    />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),

        },
    ];
    const onChange = (event) => {
        if (event && event.current) {
            if (+currentBook !== event.current) {
                setCurrentBook(event.current)
            }
        }
        if (event && event.pageSize) {
            if (+pageBookSize !== event.pageSize) {
                setPageBookSize(event.pageSize)
            }
        }
        if (event && event.total) {
            if (+totalBook !== event.total) {
                setTotalBook(event.total)
            }
        }
    }

    return (
        <>
            {/* <CreateBook
                isCreateOpen={isCreateOpen}
                setIsCreateOpen={setIsCreateOpen}
                loadBookData={loadBookData}
            /> */}
            <CreateBookUncontrolledComponent
                isCreateOpen={isCreateOpen}
                setIsCreateOpen={setIsCreateOpen}
                loadBookData={loadBookData}
            />
            <Table
                dataSource={booksData}
                columns={columns}
                rowKey={"_id"}
                pagination={
                    {
                        current: currentBook,
                        pageSize: pageBookSize,
                        showSizeChanger: true,
                        total: totalBook,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}

                onChange={onChange}
            />
            <BookInfo
                openBookDrawer={openBookDrawer}
                setOpenBookDrawer={setOpenBookDrawer}
                onClose={onClose}
                bookInfo={bookInfo}
                setBookInfo={setBookInfo}
                VND={VND}
            />
            <BookUpdate
                loadBookData={loadBookData}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                isUpdateModalOpen={isUpdateModalOpen}
                bookUpdateData={bookUpdateData}
                setBookUpdateData={setBookUpdateData}
            />
        </>
    )
}

export default BookTable