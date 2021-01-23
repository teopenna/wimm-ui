interface Transaction {
  date: string;
  amount: string;
  description: string;
}

interface TransactionListItemProps {
  transaction: Transaction;
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {
  const { date, amount, description } = transaction;

  return (
    <tr>
      <td width="10%">{date}</td>
      <td>
        <span className="has-text-danger-dark is-size-5 mr-1">{amount}</span>
        <span>{description}</span>
      </td>
      <td className="level-right">
        <a className="button is-small is-primary mr-1" href="/">
          Edit
        </a>
        <a className="button is-small is-danger" href="/">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default TransactionListItem;
