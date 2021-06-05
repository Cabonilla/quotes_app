import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max',
    text: 'I enjoy React!'
  },
  {
    id: 'q2',
    author: 'Mox',
    text: 'I do not enjoy React.'
  },
  {
    id: 'q3',
    author: 'Mix',
    text: 'I medium enjoy React?'
  },
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/> 
}

export default AllQuotes