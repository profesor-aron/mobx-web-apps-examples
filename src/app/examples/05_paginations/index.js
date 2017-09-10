import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: props.config.currentPage,
      firstPage: this.props.config.minPage,
      lastPage: this.props.config.maxPage
    }
    this.calculateFirstAndLastPages = this.calculateFirstAndLastPages.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  componentWillMount () {
    this.calculateFirstAndLastPages()
  }

  calculateFirstAndLastPages () {

    const calculateFirstPage = (params) => {
      let firstPage = null
      let nbPagestoAddToRight = 0
      const maxNbPagesToLeft = this.props.config.maxNbPagesToLeft
       + params.nbPagestoAddToLeft
      const nbAvailablePagesToLeft = this.state.currentPage
       - this.props.config.minPage
      if (nbAvailablePagesToLeft > maxNbPagesToLeft) {
        firstPage = this.state.currentPage - maxNbPagesToLeft
      } else if (nbAvailablePagesToLeft === maxNbPagesToLeft) {
        firstPage = this.props.config.minPage
      } else {
        firstPage = this.props.config.minPage
        nbPagestoAddToRight = maxNbPagesToLeft - nbAvailablePagesToLeft
      }
      console.log(firstPage, nbPagestoAddToRight)
      return { firstPage, nbPagestoAddToRight }
    }

    const calculateLastPage = (params) => {
      let lastPage = null
      let nbPagestoAddToLeft = 0
      const maxNbPagesToRight = this.props.config.maxNbPagesToRight
       + params.nbPagestoAddToRight
      const nbAvailablePagesToRight = this.props.config.maxPage
       - this.state.currentPage
      if (nbAvailablePagesToRight > maxNbPagesToRight) {
        lastPage = this.state.currentPage + maxNbPagesToRight
      } else if (nbAvailablePagesToRight === maxNbPagesToRight) {
        lastPage = this.props.config.maxPage
      } else {
        lastPage = this.props.config.maxPage
        nbPagestoAddToLeft = maxNbPagesToRight - nbAvailablePagesToRight
      }
      console.log(lastPage, nbPagestoAddToLeft)
      return { lastPage, nbPagestoAddToLeft }
    }

    let paramsFirstPage = {
      nbPagestoAddToLeft: 0
    }
    let resultFirstPage = calculateFirstPage(paramsFirstPage)

    let nbPagestoAddToRight = 0
    if (resultFirstPage.nbPagestoAddToRight > 0) {
      nbPagestoAddToRight += resultFirstPage.nbPagestoAddToRight
    }
    const paramsLastPage = { nbPagestoAddToRight }
    const resultLastPage = calculateLastPage(paramsLastPage)

    let nbPagestoAddToLeft = 0
    if (resultLastPage.nbPagestoAddToLeft > 0) {
      nbPagestoAddToLeft += resultLastPage.nbPagestoAddToLeft
      paramsFirstPage = { nbPagestoAddToLeft }
      resultFirstPage = calculateFirstPage(paramsFirstPage)
    }

    this.setState({
      firstPage: resultFirstPage.firstPage,
      lastPage: resultLastPage.lastPage
    })
  }

  previousPage () {
    console.log('Previous')
    this.setState({currentPage: this.state.currentPage - 1}, function() {
      this.calculateFirstAndLastPages()
    })
  }

  nextPage () {
    console.log('Next')
    this.setState({currentPage: this.state.currentPage + 1}, function() {
      this.calculateFirstAndLastPages()
    })
  }

  render () {
    const { config } = this.props
    console.log(config)

    const first = this.state.firstPage
    const last = this.state.lastPage
    const current = this.state.currentPage
    const icons = []
    let item = null
    for (let index = first; index <= last; index++) {
      item = index
      if (index === current) {
        item = <b>{index}</b>
      }
      icons.push(<span key={index}>{item}</span>)
    }
    return (
      <div>
        <div>
          [FirstPage: {this.state.firstPage}]
          [LastPage: {this.state.lastPage}]
          [CurrentPage: {this.state.currentPage}]
          [MinPage: {this.props.config.minPage}]
          [MaxPage: {this.props.config.maxPage}]
        </div>
        <div>
          {icons}
        </div>
        {this.state.currentPage>this.props.config.minPage && <button onClick={()=>this.previousPage()}>Previous</button>}       
        {this.state.currentPage<this.props.config.maxPage && <button onClick={()=>this.nextPage()}>Next</button>}
      </div>
    )
  }
}

Pagination.propTypes = {
  config: PropTypes.object
}

const calculateMaxPage = (nbItems, nbItemsXPage) => {
  const quotient = Math.floor(nbItems / nbItemsXPage)
  const remainder = nbItems % nbItemsXPage
  const maxPage = (remainder === 0 ? quotient : (quotient + 1))
  return maxPage
}

const Paginations = () => {
  const configs = [
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(3, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(10, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(11, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(100, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(101, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(130, 10),
      currentPage: 1
    },
    {
      maxNbPagesToLeft: 5,
      maxNbPagesToRight: 4,
      minPage: 1,
      maxPage: calculateMaxPage(200, 10),
      currentPage: 1
    }
  ]
  return (
    <div>
      Paginations
      {
        configs.map((config, index) => <Pagination key={index} config={config} />)
      }      
    </div>
  )
}

export default Paginations
