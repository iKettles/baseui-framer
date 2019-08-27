import * as System from "baseui/pagination"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Pagination"
import { withHOC } from "../withHOC"

const InnerPagination: React.SFC<any> = ({ currentPage, ...props }) => {
  const [page, setCurrentPage] = React.useState(currentPage)
  const onPageChanged = React.useCallback(({ nextPage }) => setCurrentPage(Math.min(Math.max(nextPage, 1), 20)), [])

  return <System.Pagination {...props} currentPage={page} onPageChange={onPageChanged} />
}

export const Pagination = withHOC(InnerPagination)

Pagination.defaultProps = {
  width: 400,
  height: 50,
}

addPropertyControls(Pagination, {
  numPages: merge(controls.numPages, {
    defaultValue: 5,
  }),
  currentPage: merge(controls.currentPage, {
    defaultValue: 1,
  }),
})
