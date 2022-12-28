import { Center, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'
const url = 'https://fakestoreapi.com/products'
const realData = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } },]
export const FirstExample = () => {
    const [products, setProducts] = useState([])
    const tableColumn = [
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Product Image',
            accessor: 'image'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },

    ]
    const columns = useMemo(() => tableColumn, [])
    const data = useMemo(() => products, [])
    const { getTableProps, getTableBodyProps, headerGroups, rows, repareRow } = useTable({
        columns: columns,
        data: data

    })


    if (products.length == 0) {
        (
            <Center>
                <Spinner></Spinner>
            </Center>
        )
    }

    console.log("product", products);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(url)
                setProducts(data)
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchProducts()

    }, [])
    return (
        <>
            <Heading>React table</Heading>
            <Table {...getTableProps()}>
                <Thead >
                {
                    headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderProps}>
                        {headerGroup.headers.map((column) => <Th {...column.getHeaderProps()}>
                            {column.render('Header')}

                        </Th>)}
                            

                        </Tr>
                    )
                    )
                }

            </Thead>
            <Tbody>
                <Tr>
                    <Td>

                    </Td>
                </Tr>

            </Tbody>

        </Table>
        </>

    )
}
