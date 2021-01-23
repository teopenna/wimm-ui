import TransactionListItem from './TransactionListItem';

const transactions = [
  {
    date: '23 Gen 2021',
    amount: '23,40 €',
    description: 'Fruits and vegetables',
  },
  {
    date: '16 Gen 2021',
    amount: '35,10 €',
    description: 'Fish and foods',
  },
];

const TransactionList: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="card events-card">
          <header className="card-header">
            <p className="card-header-title is-size-5">Last Expenses</p>
            <a href="/" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-table">
            <div className="content">
              <table className="table is-fullwidth is-hoverable is-striped">
                <tbody>
                  {transactions.map((item) => (
                    <TransactionListItem transaction={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <footer className="card-footer">
            <a href="/" className="card-footer-item">
              View All
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default TransactionList;
