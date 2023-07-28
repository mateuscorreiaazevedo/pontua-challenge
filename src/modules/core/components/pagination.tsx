'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import PaginationComponent from 'react-js-pagination'

type Props = {
  currentPage: number
  totalItems: number
  handlePage: (pageNum: number) => void
  perPage?: number
}

const Pagination: React.FC<Props> = ({
  currentPage,
  handlePage,
  totalItems,
  perPage = 10
}) => {
  return (
    <PaginationComponent
      innerClass="flex justify-center border border-gray-100 rounded-md"
      itemClass="px-4 py-2"
      hideFirstLastPages
      nextPageText={
        <span className="flex items-center gap-2">
          Próximo <ArrowRight />
        </span>
      }
      prevPageText={
        <span className="flex items-center gap-2">
          <ArrowLeft /> Anterior
        </span>
      }
      activeClass="text-blue-600 font-bold"
      activePage={currentPage}
      totalItemsCount={totalItems}
      onChange={handlePage}
      itemsCountPerPage={perPage}
    />
  )
}

export default Pagination
