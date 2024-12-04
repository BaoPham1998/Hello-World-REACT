import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';

const BookTable = (props) => {

    const { booksData, totalBook, pageBookSize, currentBook, setPageBookSize,
        setCurrentBook, loadBookData, setTotalBook, } = props;
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
                    <a href="#">{record._id}</a>
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
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div >
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
    )
}

export default BookTable